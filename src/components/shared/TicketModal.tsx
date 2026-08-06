"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface TicketModalProps {
  tierName: string;
  tierPrice: number;
  onClose: () => void;
}

type Step = "details" | "processing" | "success" | "error";

export function TicketModal({ tierName, tierPrice, onClose }: TicketModalProps) {
  const [step, setStep] = useState<Step>("details");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [qty, setQty] = useState(1);
  const [error, setError] = useState("");

  const totalAmount = tierPrice * qty;

  const handlePay = async () => {
    if (!phone || !name) {
      setError("Please fill in all details");
      return;
    }

    setStep("processing");
    setError("");

    try {
      const res = await fetch("/api/mpesa/stkpush", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          phone, 
          amount: totalAmount, 
          ticketTier: tierName, 
          buyerName: name 
        }),
      });
      
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || "Payment failed");
      
      setStep("success");
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
      setStep("error");
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
          <h2 className="font-heading text-lg font-bold text-white">Buy {tierName} Ticket</h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-md text-foreground/50 hover:text-white hover:bg-surface-hover transition-all"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6">
          {step === "details" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-background/50 p-3 rounded-lg border border-border">
                <span className="text-foreground/70 text-sm">Price per ticket:</span>
                <span className="text-primary-gold font-bold">KES {tierPrice.toLocaleString()}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-foreground/70 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:ring-2 focus:ring-primary-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground/70 mb-1">Quantity</label>
                  <select
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:ring-2 focus:ring-primary-gold/50"
                  >
                    {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/70 mb-1">M-Pesa Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="2547XXXXXXXX"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:ring-2 focus:ring-primary-gold/50"
                />
                <p className="text-[10px] text-foreground/40 mt-1">Enter the Safaricom number you will use to pay.</p>
              </div>

              <div className="pt-4 mt-2 border-t border-border flex justify-between items-center">
                <span className="text-sm text-foreground/70">Total Amount:</span>
                <span className="text-xl font-bold text-white">KES {totalAmount.toLocaleString()}</span>
              </div>

              {error && <p className="text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded-md px-2 py-1.5">{error}</p>}
              
              <Button className="w-full" onClick={handlePay}>Pay via M-Pesa</Button>
            </div>
          )}

          {step === "processing" && (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 border-4 border-border border-t-primary-gold rounded-full animate-spin mx-auto"></div>
              <p className="text-white font-medium">Initiating M-Pesa STK Push...</p>
              <p className="text-xs text-foreground/50">Please do not close this window.</p>
            </div>
          )}

          {step === "success" && (
            <div className="text-center py-6 space-y-4">
              <div className="text-5xl mb-2">📱</div>
              <p className="font-heading text-white font-bold text-lg">Check your phone!</p>
              <p className="text-foreground/60 text-sm leading-relaxed">
                We've sent an M-Pesa payment prompt to your phone. Enter your PIN to complete the purchase of KES {totalAmount.toLocaleString()}.
              </p>
              <Button onClick={onClose} variant="outline" className="w-full mt-2">Close</Button>
            </div>
          )}

          {step === "error" && (
            <div className="text-center py-6 space-y-4">
              <div className="text-5xl mb-2">❌</div>
              <p className="text-red-400 font-semibold">{error}</p>
              <Button onClick={() => setStep("details")} className="w-full">Try Again</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
