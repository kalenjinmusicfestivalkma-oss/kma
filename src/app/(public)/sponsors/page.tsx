import type { Metadata } from "next";
import Link from "next/link";
import { WayfinderIllustration } from "@/components/shared/WayfinderIllustration";
import { CornerClusters } from "@/components/layout/CornerClusters";

export const metadata: Metadata = { title: "Sponsors" };

const sponsors = [
  { name: "Safaricom",           tier: "Platinum" },
  { name: "KCB Bank",           tier: "Gold" },
  { name: "Nation Media Group", tier: "Gold" },
  { name: "East Africa Breweries", tier: "Silver" },
];

export default function SponsorsPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-void-black">
      <WayfinderIllustration />
      <CornerClusters />
      <div className="absolute inset-0 bg-void-black/70 z-[5]" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <p className="font-ciutadella text-[13px] font-light tracking-normal text-bone-white/40 uppercase mb-4">Partners</p>
        <h1 className="font-enreal font-light text-bone-white text-center uppercase tracking-cinematic mb-10"
          style={{ fontSize: "clamp(28px, 5vw, 56px)" }}>
          Our Sponsors
        </h1>

        <div className="w-full max-w-sm border-t border-bone-white/10">
          {sponsors.map((s, i) => (
            <div key={i} className="flex items-center justify-between py-4 border-b border-bone-white/10">
              <span className="font-enreal font-light text-[16px] text-bone-white tracking-cinematic">{s.name}</span>
              <span className="font-ciutadella font-light text-[12px] text-bone-white/35 tracking-normal uppercase">{s.tier}</span>
            </div>
          ))}
        </div>

        <p className="font-ciutadella font-light text-[13px] text-bone-white/25 tracking-normal mt-8">
          Interested in sponsoring? Contact us at info@kalenjinmusicawards.co.ke
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
