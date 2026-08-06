"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function VerifyPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const t = setTimeout(() => setResendTimer((s) => s - 1), 1000);
      return () => clearTimeout(t);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleChange = (idx: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < 5) inputRefs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const next = [...otp];
    pasted.split("").forEach((ch, i) => { next[i] = ch; });
    setOtp(next);
    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const handleVerify = async () => {
    const code = otp.join("");
    if (code.length < 6) return;
    setIsVerifying(true);
    // TODO: call Supabase OTP verify
    await new Promise((r) => setTimeout(r, 1500));
    setIsVerifying(false);
  };

  const handleResend = () => {
    setResendTimer(60);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 rounded-full bg-primary-gold/5 blur-[100px]" />
      </div>

      <div className="w-full max-w-sm relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary-gold/10 border border-primary-gold/30 mb-4 text-3xl">
            📱
          </div>
          <h1 className="font-heading text-3xl font-bold text-white">Verify Your Number</h1>
          <p className="text-foreground/60 mt-2 text-sm">
            We sent a 6-digit code to{" "}
            <span className="text-white font-medium">+254 7XX XXX XXX</span>
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8">
          {/* OTP inputs */}
          <div className="flex justify-center gap-2 mb-6" onPaste={handlePaste}>
            {otp.map((digit, i) => (
              <input
                key={i}
                id={`otp-input-${i}`}
                ref={(el) => { inputRefs.current[i] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className={`h-12 w-11 rounded-lg border text-center text-lg font-bold text-white bg-background transition-all focus:outline-none focus:ring-2 focus:ring-primary-gold/50 ${
                  digit ? "border-primary-gold/60" : "border-border"
                }`}
              />
            ))}
          </div>

          {/* Security notice */}
          <div className="rounded-lg border border-border bg-background/40 p-3 mb-5 flex items-start gap-2">
            <span className="text-primary-gold shrink-0 text-sm">🛡️</span>
            <p className="text-xs text-foreground/50">
              This OTP is valid for <strong className="text-foreground/70">10 minutes</strong>. Never share it with anyone. KMA staff will never ask for your OTP.
            </p>
          </div>

          <button
            id="verify-otp-btn"
            onClick={handleVerify}
            disabled={otp.join("").length < 6 || isVerifying}
            className="w-full rounded-md bg-primary-gold text-black font-semibold h-11 text-sm hover:bg-primary-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isVerifying ? "Verifying..." : "Verify & Continue"}
          </button>

          <div className="text-center mt-5">
            {canResend ? (
              <button
                id="resend-otp-btn"
                onClick={handleResend}
                className="text-primary-gold text-sm hover:underline"
              >
                Resend OTP
              </button>
            ) : (
              <p className="text-foreground/40 text-sm">
                Resend in <span className="text-foreground/70 font-medium">{resendTimer}s</span>
              </p>
            )}
          </div>
        </div>

        <p className="text-center text-foreground/50 text-sm mt-6">
          Wrong number?{" "}
          <Link href="/register" className="text-primary-gold hover:underline">
            Go back
          </Link>
        </p>
      </div>
    </div>
  );
}
