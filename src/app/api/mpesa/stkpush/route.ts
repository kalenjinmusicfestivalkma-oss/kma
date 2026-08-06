import { NextRequest, NextResponse } from "next/server";

// Standard Safaricom Daraja API credentials
// In production, these should be in .env and strictly kept secret
const MPESA_CONSUMER_KEY = process.env.MPESA_CONSUMER_KEY || "your_consumer_key";
const MPESA_CONSUMER_SECRET = process.env.MPESA_CONSUMER_SECRET || "your_consumer_secret";
const MPESA_SHORTCODE = process.env.MPESA_SHORTCODE || "174379";
const MPESA_PASSKEY = process.env.MPESA_PASSKEY || "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";
const MPESA_CALLBACK_URL = process.env.MPESA_CALLBACK_URL || "https://kma.example.com/api/mpesa/callback";

// Helper to get OAuth token from Daraja
async function getMpesaToken() {
  const credentials = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString("base64");
  
  const response = await fetch("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
    method: "GET",
    headers: {
      Authorization: `Basic ${credentials}`,
    },
    // Don't cache this request in Next.js 14/15
    cache: "no-store",
  });
  
  if (!response.ok) {
    throw new Error("Failed to get M-Pesa access token");
  }
  
  const data = await response.json();
  return data.access_token;
}

export async function POST(req: NextRequest) {
  try {
    const { phone, amount, ticketTier, buyerName } = await req.json();

    if (!phone || !amount || !ticketTier) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Format phone to 2547XXXXXXXX
    let formattedPhone = phone.replace(/\D/g, "");
    if (formattedPhone.startsWith("0")) {
      formattedPhone = "254" + formattedPhone.slice(1);
    } else if (formattedPhone.startsWith("7") || formattedPhone.startsWith("1")) {
      formattedPhone = "254" + formattedPhone;
    }

    const token = await getMpesaToken();

    // Generate password
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, "").slice(0, -3);
    const password = Buffer.from(`${MPESA_SHORTCODE}${MPESA_PASSKEY}${timestamp}`).toString("base64");

    const payload = {
      BusinessShortCode: MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: Math.ceil(Number(amount)), // Must be integer
      PartyA: formattedPhone,
      PartyB: MPESA_SHORTCODE,
      PhoneNumber: formattedPhone,
      CallBackURL: MPESA_CALLBACK_URL,
      AccountReference: `KMA2026-${ticketTier}`,
      TransactionDesc: `Payment for ${ticketTier} Ticket at KMA 2026`,
    };

    // Initiate STK Push
    const response = await fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.ResponseCode === "0") {
      // Transaction initiated successfully
      // Here you would typically store `data.CheckoutRequestID` in the DB 
      // alongside the `buyerName` and `ticketTier` to reconcile later
      return NextResponse.json({
        success: true,
        message: "STK push initiated. Please check your phone to enter your PIN.",
        checkoutRequestId: data.CheckoutRequestID,
      });
    } else {
      console.error("STK Push error from Daraja:", data);
      return NextResponse.json({ error: "Failed to initiate payment." }, { status: 500 });
    }
  } catch (error) {
    console.error("M-Pesa API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
