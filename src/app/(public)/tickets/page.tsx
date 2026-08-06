"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { EVENT_DATE, EVENT_VENUE } from "@/lib/constants";
import { TicketModal } from "@/components/shared/TicketModal";

const ticketTiers = [
  {
    id:       "standard",
    name:     "Standard",
    price:    1500,
    color:    "border-border",
    tag:      null,
    features: [
      "General Admission seating",
      "Event program booklet",
      "Access to all award ceremonies",
      "Live performance access",
    ],
  },
  {
    id:       "vip",
    name:     "VIP",
    price:    5000,
    color:    "border-primary-gold",
    tag:      "Most Popular",
    features: [
      "Priority reserved seating",
      "Complimentary welcome drink",
      "Exclusive VIP lounge access",
      "Meet & Greet with select artists",
      "Commemorative gift pack",
      "Professional event photos",
    ],
  },
  {
    id:       "platinum",
    name:     "Platinum",
    price:    12000,
    color:    "border-cyan-500",
    tag:      "Premium",
    features: [
      "Front-row reserved seating",
      "Full dinner & open bar",
      "Exclusive backstage access",
      "Private artist meet & greet",
      "Personal concierge service",
      "Commemorative platinum package",
      "Early access & red carpet entry",
    ],
  },
];

export default function TicketsPage() {
  const [selectedTier, setSelectedTier] = useState<{ name: string; price: number } | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 px-4 md:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-gold/5 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <span className="text-primary-gold text-sm font-semibold uppercase tracking-widest">Join The Night</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mt-4 mb-4 text-white">
            Get Your <span className="text-primary-gold">Tickets</span>
          </h1>
          <p className="text-foreground/60 text-lg mb-6">
            Be part of the biggest night in Kalenjin music. Secure your spot before tickets sell out.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2 text-sm text-foreground/70">
            📅 {EVENT_DATE} &nbsp;·&nbsp; 📍 {EVENT_VENUE}
          </div>
        </div>
      </section>

      {/* Ticket Tiers */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {ticketTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-2xl border-2 ${tier.color} bg-surface p-8 flex flex-col transition-all hover:shadow-lg`}
              >
                {tier.tag && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold ${
                    tier.name === "VIP" ? "bg-primary-gold text-black" : "bg-cyan-500 text-black"
                  }`}>
                    {tier.tag}
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="font-heading text-xl font-bold text-white">{tier.name}</h2>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-foreground/50 text-sm">KES</span>
                    <span className="font-heading text-4xl font-bold text-white">{tier.price.toLocaleString()}</span>
                    <span className="text-foreground/50 text-sm">/ person</span>
                  </div>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/70">
                      <span className="text-primary-gold mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={tier.name === "VIP" ? "default" : "outline"}
                  onClick={() => setSelectedTier({ name: tier.name, price: tier.price })}
                >
                  Buy {tier.name} Ticket
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M-Pesa Notice */}
      <section className="py-12 px-4 md:px-6 bg-surface/50">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="text-foreground/50 text-sm mb-2">💳 Secure payment powered by M-Pesa STK Push</p>
          <p className="text-foreground/40 text-xs">Tickets are non-refundable. For group bookings of 10+, contact us for special rates.</p>
          <div className="mt-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/contact">Contact for Group Bookings</Link>
            </Button>
          </div>
        </div>
      </section>

      {selectedTier && (
        <TicketModal
          tierName={selectedTier.name}
          tierPrice={selectedTier.price}
          onClose={() => setSelectedTier(null)}
        />
      )}
    </div>
  );
}
