import type { Metadata } from "next";
import Link from "next/link";
import { WayfinderIllustration } from "@/components/shared/WayfinderIllustration";
import { CornerClusters } from "@/components/layout/CornerClusters";

export const metadata: Metadata = { title: "Tickets" };

const tiers = [
  { name: "Standard", price: 1500 },
  { name: "VIP",      price: 5000 },
  { name: "Platinum", price: 12000 },
];

export default function TicketsPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-void-black">
      <WayfinderIllustration />
      <CornerClusters />
      <div className="absolute inset-0 bg-void-black/65 z-[5]" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
        <p className="font-ciutadella text-[13px] font-light tracking-normal text-bone-white/40 uppercase mb-4">
          Eldoret Sports Club · Sept 20
        </p>
        <h1
          className="font-enreal font-light text-bone-white text-center uppercase tracking-cinematic mb-10"
          style={{ fontSize: "clamp(28px, 5vw, 56px)" }}
        >
          Get Your Ticket
        </h1>

        {/* Ticket tiers — horizontal hairline rows */}
        <div className="w-full max-w-md border-t border-bone-white/10">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-5 border-b border-bone-white/10"
            >
              <div>
                <p className="font-enreal font-light text-[16px] text-bone-white tracking-cinematic uppercase">
                  {tier.name}
                </p>
                <p className="font-ciutadella font-light text-[13px] text-bone-white/40 mt-0.5 tracking-normal">
                  KES {tier.price.toLocaleString()} / person
                </p>
              </div>
              <a
                href={`#buy-${tier.name.toLowerCase()}`}
                className="inline-flex items-center gap-2 bg-bone-white text-void-black font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] hover:opacity-80 transition-opacity"
              >
                → buy
              </a>
            </div>
          ))}
        </div>

        <p className="font-ciutadella font-light text-[13px] text-bone-white/25 mt-8 tracking-normal text-center">
          Payment via M-Pesa STK Push
        </p>

        <div className="mt-8">
          <Link href="/" className="inline-flex items-center justify-center bg-charcoal text-bone-white font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] border border-ash hover:opacity-80 transition-opacity">
            back
          </Link>
        </div>
      </div>
    </div>
  );
}
