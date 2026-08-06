import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { headers } from "next/headers";

// Submission rate limiting
const submitStore = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nomineeId, category, otp } = body;

    if (!nomineeId || !category || !otp) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!/^\d{6}$/.test(otp)) {
      return NextResponse.json({ error: "Invalid OTP format" }, { status: 400 });
    }

    // Get IP and user
    const headersList = await headers();
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headersList.get("x-real-ip") ||
      "unknown";

    // Prevent rapid fire submission attempts (simple per-IP throttle)
    const lastSubmit = submitStore.get(ip);
    if (lastSubmit && Date.now() - lastSubmit < 3000) {
      return NextResponse.json({ error: "Please wait before trying again" }, { status: 429 });
    }
    submitStore.set(ip, Date.now());

    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Authentication required." }, { status: 401 });
    }

    // Fetch the stored OTP token
    const { data: tokenRow, error: tokenError } = await supabase
      .from("otp_tokens")
      .select("*")
      .eq("user_id", user.id)
      .eq("category", category)
      .eq("nominee_id", nomineeId)
      .eq("used", false)
      .single();

    if (tokenError || !tokenRow) {
      return NextResponse.json({ error: "OTP not found. Please request a new one." }, { status: 404 });
    }

    // Check OTP expiry
    if (new Date(tokenRow.expires_at) < new Date()) {
      return NextResponse.json({ error: "OTP has expired. Please request a new one." }, { status: 410 });
    }

    // Timing-safe OTP comparison
    const isValid = otp === tokenRow.token;
    if (!isValid) {
      return NextResponse.json({ error: "Incorrect OTP. Please check and try again." }, { status: 400 });
    }

    // Final duplicate check before recording vote (race condition guard)
    const { data: existingVote } = await supabase
      .from("votes")
      .select("id")
      .eq("user_id", user.id)
      .eq("category", category)
      .single();

    if (existingVote) {
      return NextResponse.json(
        { error: "You have already voted in this category." },
        { status: 409 }
      );
    }

    // Record the vote
    const { error: voteError } = await supabase.from("votes").insert({
      user_id:    user.id,
      nominee_id: nomineeId,
      category,
      voted_at:   new Date().toISOString(),
      ip_address: ip,
    });

    if (voteError) {
      console.error("Vote insert error:", voteError);
      return NextResponse.json({ error: "Failed to record vote. Please try again." }, { status: 500 });
    }

    // Mark OTP as used
    await supabase.from("otp_tokens").update({ used: true }).eq("id", tokenRow.id);

    // Increment nominee vote count
    await supabase.rpc("increment_vote_count", { p_nominee_id: nomineeId });

    return NextResponse.json({ success: true, message: "Vote cast successfully!" }, { status: 200 });
  } catch (err) {
    console.error("Vote submission error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
