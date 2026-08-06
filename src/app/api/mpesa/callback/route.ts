import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // Check if it's an STK callback
    const callbackData = data?.Body?.stkCallback;
    
    if (!callbackData) {
      return NextResponse.json({ error: "Invalid callback payload" }, { status: 400 });
    }

    const { ResultCode, ResultDesc, CheckoutRequestID, CallbackMetadata } = callbackData;

    console.log(`[M-Pesa Callback] CheckoutID: ${CheckoutRequestID} | Code: ${ResultCode} | Desc: ${ResultDesc}`);

    if (ResultCode === 0 && CallbackMetadata) {
      // Payment was successful
      const items = CallbackMetadata.Item || [];
      
      let amount = 0;
      let receiptNumber = "";
      let phoneNumber = "";
      
      items.forEach((item: any) => {
        if (item.Name === "Amount") amount = item.Value;
        if (item.Name === "MpesaReceiptNumber") receiptNumber = item.Value;
        if (item.Name === "PhoneNumber") phoneNumber = item.Value;
      });

      console.log(`Successful Payment of ${amount} from ${phoneNumber}. Receipt: ${receiptNumber}`);

      // In a real app, update the database to mark the ticket as paid using CheckoutRequestID
      const supabase = await createClient();
      await supabase.from("tickets")
        .update({ status: "paid" })
        .eq("checkout_request_id", CheckoutRequestID);
        
    } else {
      // Payment failed or was cancelled by user
      const supabase = await createClient();
      await supabase.from("tickets")
        .update({ status: "failed" })
        .eq("checkout_request_id", CheckoutRequestID);
    }

    // Always return success to Safaricom Daraja API
    return NextResponse.json({ ResultCode: 0, ResultDesc: "Accepted" });
  } catch (error) {
    console.error("M-Pesa Callback Error:", error);
    // Still return 200 so Daraja stops retrying
    return NextResponse.json({ ResultCode: 1, ResultDesc: "Internal Error, but received" });
  }
}
