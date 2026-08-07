"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface Nominee {
  id: number;
  name: string;
  genre: string;
  category: string;
}

interface VotingModalProps {
  nominee: Nominee;
  categoryName: string;
  onClose: () => void;
}

type Step = "confirm" | "otp" | "success" | "error";

export function VotingModal({ nominee, categoryName, onClose }: VotingModalProps) {
  const [step, setStep] = useState<Step>("confirm");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRequestOtp = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("/api/votes/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nomineeId: nominee.id, category: nominee.category }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send OTP");
      setStep("otp");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitVote = async () => {
    if (otp.length < 6) return;
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("/api/votes/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nomineeId: nominee.id, category: nominee.category, otp }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Vote submission failed");
      setStep("success");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStep("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-surface shadow-2xl shadow-black/50 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border">
          <h2 className="font-heading text-lg font-bold text-foreground">
            {step === "success" ? "🎉 Vote Cast!" : step === "error" ? "Vote Failed" : "Cast Your Vote"}
          </h2>
          <button
            id="voting-modal-close"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-md text-foreground/50 hover:text-foreground hover:bg-surface-hover transition-all"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6">
          {/* Nominee info */}
          {step !== "success" && (
            <div className="flex items-center gap-3 mb-6 rounded-xl border border-border bg-background/50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-gold/10 border border-primary-gold/20">
                <span className="text-primary-gold font-bold text-sm">
                  {nominee.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">{nominee.name}</p>
                <p className="text-foreground/50 text-xs mt-0.5">{categoryName}</p>
              </div>
            </div>
          )}

          {/* Step: Confirm */}
          {step === "confirm" && (
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-background/40 p-3 text-xs text-foreground/50 space-y-1">
                <p>🛡️ <strong className="text-foreground/70">Anti-fraud Protection:</strong> One vote per phone number per category.</p>
                <p>📱 An OTP will be sent to your registered phone to verify your vote.</p>
              </div>
              {error && <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">{error}</p>}
              <Button className="w-full" onClick={handleRequestOtp} disabled={isLoading}>
                {isLoading ? "Sending OTP..." : "Send OTP to Verify"}
              </Button>
              <p className="text-center text-xs text-foreground/40">
                Not registered?{" "}
                <Link href="/register" className="text-primary-gold hover:underline" onClick={onClose}>
                  Create account first
                </Link>
              </p>
            </div>
          )}

          {/* Step: OTP */}
          {step === "otp" && (
            <div className="space-y-4">
              <p className="text-foreground/60 text-sm">
                Enter the 6-digit OTP sent to your registered phone number. Valid for 10 minutes.
              </p>
              <input
                id="vote-otp-input"
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="Enter 6-digit code"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-center text-xl font-bold text-foreground tracking-widest placeholder:text-foreground/20 placeholder:text-base placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition"
              />
              {error && <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">{error}</p>}
              <Button
                id="submit-vote-btn"
                className="w-full"
                onClick={handleSubmitVote}
                disabled={otp.length < 6 || isLoading}
              >
                {isLoading ? "Submitting Vote..." : "Submit Vote"}
              </Button>
              <button onClick={() => setStep("confirm")} className="w-full text-center text-xs text-foreground/40 hover:text-foreground/70 transition-colors">
                ← Back
              </button>
            </div>
          )}

          {/* Step: Success */}
          {step === "success" && (
            <div className="text-center py-4 space-y-4">
              <div className="text-5xl mb-2">🏆</div>
              <p className="font-heading text-foreground font-semibold">You voted for <span className="text-primary-gold">{nominee.name}</span>!</p>
              <p className="text-foreground/50 text-sm">Your vote has been verified and recorded. Thank you for participating!</p>
              <div className="rounded-lg border border-kalenjin-green/30 bg-kalenjin-green/10 px-4 py-3 text-sm text-kalenjin-green/80">
                ✓ Vote confirmed • Anti-fraud check passed
              </div>
              <Button onClick={onClose} variant="outline" className="w-full">Close</Button>
            </div>
          )}

          {/* Step: Error */}
          {step === "error" && (
            <div className="text-center py-4 space-y-4">
              <div className="text-5xl mb-2">❌</div>
              <p className="text-red-400 font-semibold">{error}</p>
              <Button onClick={() => { setStep("confirm"); setError(""); }} className="w-full">Try Again</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
