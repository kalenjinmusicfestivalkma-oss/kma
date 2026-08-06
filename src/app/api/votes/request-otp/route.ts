import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { headers } from "next/headers";

// Rate limiting store (in-memory; for production use Redis/Upstash)
const rateLimitStore = new Map<string, { count: number; firstRequest: number }>();

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 3;

function checkRateLimit(identifier: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  if (!entry || now - entry.firstRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(identifier, { count: 1, firstRequest: now });
    return { allowed: true };
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((RATE_LIMIT_WINDOW_MS - (now - entry.firstRequest)) / 1000);
    return { allowed: false, retryAfter };
  }

  entry.count += 1;
  return { allowed: true };
}

function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nomineeId, category } = body;

    if (!nomineeId || !category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Get client IP for rate limiting
    const headersList = await headers();
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headersList.get("x-real-ip") ||
      "unknown";

    // Rate limit by IP
    const ipLimit = checkRateLimit(`ip:${ip}`);
    if (!ipLimit.allowed) {
      return NextResponse.json(
        { error: `Too many OTP requests. Please wait ${ipLimit.retryAfter}s before trying again.` },
        { status: 429 }
      );
    }

    // Get authenticated user
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: "You must be logged in to vote. Please register or sign in first." },
        { status: 401 }
      );
    }

    // Rate limit by user
    const userLimit = checkRateLimit(`user:${user.id}:${category}`);
    if (!userLimit.allowed) {
      return NextResponse.json(
        { error: `Too many OTP requests for this category. Wait ${userLimit.retryAfter}s.` },
        { status: 429 }
      );
    }

    // Check if user already voted in this category
    const { data: existingVote } = await supabase
      .from("votes")
      .select("id")
      .eq("user_id", user.id)
      .eq("category", category)
      .single();

    if (existingVote) {
      return NextResponse.json(
        { error: "You have already voted in this category. Each person can vote once per category." },
        { status: 409 }
      );
    }

    // Generate OTP and store with expiry
    const otp = generateOtp();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    const { error: otpError } = await supabase.from("otp_tokens").upsert({
      user_id:     user.id,
      category,
      nominee_id:  nomineeId,
      token:       otp,
      expires_at:  expiresAt.toISOString(),
      used:        false,
    });

    if (otpError) {
      console.error("OTP store error:", otpError);
      return NextResponse.json({ error: "Failed to generate OTP. Please try again." }, { status: 500 });
    }

    // TODO: Send OTP via Africa's Talking / Safaricom SMS API
    // await sendSms(user.phone, `Your KMA vote verification code is: ${otp}. Valid for 10 minutes. Do not share.`);

    // In development, log OTP (remove in production!)
    if (process.env.NODE_ENV === "development") {
      console.log(`[DEV] OTP for user ${user.id}, category ${category}: ${otp}`);
    }

    return NextResponse.json(
      { success: true, message: "OTP sent to your registered phone number." },
      { status: 200 }
    );
  } catch (err) {
    console.error("OTP request error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
