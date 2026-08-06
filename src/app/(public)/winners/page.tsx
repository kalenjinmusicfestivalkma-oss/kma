import type { Metadata } from "next";
import Link from "next/link";
import { WayfinderIllustration } from "@/components/shared/WayfinderIllustration";
import { CornerClusters } from "@/components/layout/CornerClusters";

export const metadata: Metadata = { title: "Winners" };

const winners = [
  { year: "2025", category: "Best Overall Artiste - Secular", name: "Jua Cali Kiprotich" },
  { year: "2025", category: "Best Overall Artiste - Gospel",  name: "Solomon Sang" },
  { year: "2025", category: "Best Female Secular",            name: "Linet Chebet" },
  { year: "2025", category: "Gospel Song of the Year",        name: "Faith Koech" },
  { year: "2024", category: "Best Overall Artiste - Secular", name: "Emmanuel Lagat" },
  { year: "2024", category: "Best Male Gospel",               name: "Kibet Birgen" },
];

export default function WinnersPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-void-black">
      <WayfinderIllustration />
      <CornerClusters />
      <div className="absolute inset-0 bg-void-black/68 z-[5]" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
        <p className="font-ciutadella text-[13px] font-light tracking-normal text-bone-white/40 uppercase mb-4">Hall of Fame</p>
        <h1 className="font-enreal font-light text-bone-white text-center uppercase tracking-cinematic mb-10"
          style={{ fontSize: "clamp(28px, 5vw, 56px)" }}>
          Past Winners
        </h1>

        <div className="w-full max-w-xl border-t border-bone-white/10 max-h-[50vh] overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          {winners.map((w, i) => (
            <div key={i} className="flex items-center gap-6 py-4 border-b border-bone-white/10">
              <span className="font-ciutadella font-light text-[13px] text-bone-white/30 tracking-normal w-10 shrink-0">{w.year}</span>
              <div className="flex-1 min-w-0">
                <p className="font-enreal font-light text-[15px] text-bone-white tracking-cinematic truncate">{w.name}</p>
                <p className="font-ciutadella font-light text-[12px] text-bone-white/35 tracking-normal truncate mt-0.5">{w.category}</p>
              </div>
              <span className="font-ciutadella font-light text-[13px] text-bone-white/20 tracking-normal shrink-0">✦</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-[30px] mt-8">
          <Link href="/nominees" className="inline-flex items-center gap-2 bg-bone-white text-void-black font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] hover:opacity-80 transition-opacity">
            → vote 2026
          </Link>
          <Link href="/" className="inline-flex items-center justify-center bg-charcoal text-bone-white font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] border border-ash hover:opacity-80 transition-opacity">
            back
          </Link>
        </div>
      </div>
    </div>
  );
}
