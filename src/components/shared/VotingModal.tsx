"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface VotingModalProps {
  nominee: { id: number; name: string; genre: string; category: string };
  onClose: () => void;
}

type Step = "confirm" | "otp" | "success" | "error";

export function VotingModal({ nominee, onClose }: VotingModalProps) {
  const [step, setStep] = useState<Step>("confirm");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleRequestOtp = async () => {
    if (!phone) { setError("Enter your phone number"); return; }
    setError("");
    try {
      const res = await fetch("/api/votes/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send OTP");
      setStep("otp");
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleSubmitVote = async () => {
    if (!otp) { setError("Enter the OTP"); return; }
    setError("");
    try {
      const res = await fetch("/api/votes/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp, nomineeId: nominee.id, category: nominee.category }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit vote");
      setStep("success");
    } catch (e: any) {
      setError(e.message);
      setStep("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-void-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal — Wayfinder: no radius, charcoal bg, ash border */}
      <div className="relative w-full max-w-sm bg-charcoal border border-ash/30 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-bone-white/10">
          <p className="font-ciutadella font-light text-[13px] text-bone-white/40 tracking-normal uppercase">Cast Vote</p>
          <button onClick={onClose} className="text-bone-white/40 hover:text-bone-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-5 py-6">
          {step === "confirm" && (
            <div className="space-y-5">
              <div>
                <h2 className="font-enreal font-light text-[20px] text-bone-white tracking-cinematic">{nominee.name}</h2>
                <p className="font-ciutadella font-light text-[13px] text-bone-white/35 tracking-normal mt-0.5">{nominee.genre}</p>
              </div>
              <div>
                <label className="block font-ciutadella font-light text-[13px] text-bone-white/40 tracking-normal mb-2">
                  Phone number for OTP verification
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="2547XXXXXXXX"
                  className="w-full bg-void-black border border-bone-white/15 px-3 py-2.5 text-bone-white font-enreal font-light text-[14px] tracking-cinematic placeholder:text-bone-white/20 focus:outline-none focus:border-bone-white/40 transition-colors"
                />
              </div>
              {error && <p className="font-ciutadella font-light text-[13px] text-red-400/80 tracking-normal">{error}</p>}
              <button
                onClick={handleRequestOtp}
                className="w-full bg-bone-white text-void-black font-enreal font-light text-[13px] tracking-normal py-[10px] hover:opacity-80 transition-opacity"
              >
                → send verification code
              </button>
            </div>
          )}

          {step === "otp" && (
            <div className="space-y-5">
              <div>
                <h2 className="font-enreal font-light text-[18px] text-bone-white tracking-cinematic">Enter Code</h2>
                <p className="font-ciutadella font-light text-[13px] text-bone-white/35 tracking-normal mt-0.5">
                  We sent a 6-digit code to {phone}
                </p>
              </div>
              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="— — — — — —"
                className="w-full bg-void-black border border-bone-white/15 px-3 py-2.5 text-bone-white font-enreal font-light text-[20px] tracking-[0.4em] text-center placeholder:text-bone-white/10 focus:outline-none focus:border-bone-white/40 transition-colors"
              />
              {error && <p className="font-ciutadella font-light text-[13px] text-red-400/80 tracking-normal">{error}</p>}
              <button
                onClick={handleSubmitVote}
                className="w-full bg-bone-white text-void-black font-enreal font-light text-[13px] tracking-normal py-[10px] hover:opacity-80 transition-opacity"
              >
                → confirm vote
              </button>
            </div>
          )}

          {step === "success" && (
            <div className="py-4 text-center space-y-3">
              <p className="font-enreal font-light text-[22px] text-bone-white tracking-cinematic">Vote Cast</p>
              <p className="font-ciutadella font-light text-[13px] text-bone-white/40 tracking-normal">
                Your vote for <span className="text-bone-white">{nominee.name}</span> has been recorded.
              </p>
              <button onClick={onClose} className="mt-4 inline-flex items-center justify-center bg-charcoal text-bone-white font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] border border-ash/40 hover:opacity-80 transition-opacity">
                close
              </button>
            </div>
          )}

          {step === "error" && (
            <div className="py-4 text-center space-y-3">
              <p className="font-enreal font-light text-[18px] text-bone-white tracking-cinematic">Something went wrong</p>
              <p className="font-ciutadella font-light text-[13px] text-red-400/70 tracking-normal">{error}</p>
              <button onClick={() => setStep("confirm")} className="mt-4 inline-flex items-center gap-2 bg-bone-white text-void-black font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] hover:opacity-80 transition-opacity">
                → try again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
