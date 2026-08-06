import type { Metadata } from "next";
import Link from "next/link";
import { WayfinderIllustration } from "@/components/shared/WayfinderIllustration";
import { CornerClusters } from "@/components/layout/CornerClusters";

export const metadata: Metadata = { title: "News" };

const articles = [
  { slug: "nominations-open",     title: "Nominations Are Now Open",                  date: "Aug 1, 2026",  category: "Nominations" },
  { slug: "safaricom-sponsor",     title: "Safaricom Confirmed as Platinum Sponsor",   date: "Jul 22, 2026", category: "Partnerships" },
  { slug: "venue-announced",       title: "Event Venue: Eldoret Sports Club",          date: "Jul 15, 2026", category: "Event" },
  { slug: "2025-highlights",       title: "KMA 2025 — A Night to Remember",            date: "Dec 5, 2025",  category: "Recap" },
];

export default function NewsPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-void-black">
      <WayfinderIllustration />
      <CornerClusters />
      <div className="absolute inset-0 bg-void-black/70 z-[5]" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
        <p className="font-ciutadella text-[13px] font-light tracking-normal text-bone-white/40 uppercase mb-4">Dispatch</p>
        <h1 className="font-enreal font-light text-bone-white text-center uppercase tracking-cinematic mb-10"
          style={{ fontSize: "clamp(28px, 5vw, 56px)" }}>
          Latest News
        </h1>

        <div className="w-full max-w-xl border-t border-bone-white/10">
          {articles.map((a, i) => (
            <div key={i} className="flex items-start justify-between gap-6 py-5 border-b border-bone-white/10 group cursor-pointer hover:bg-bone-white/5 transition-colors">
              <div className="flex-1">
                <p className="font-enreal font-light text-[16px] text-bone-white tracking-cinematic group-hover:opacity-80 transition-opacity">
                  {a.title}
                </p>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="font-ciutadella font-light text-[12px] text-bone-white/30 tracking-normal">{a.date}</span>
                  <span className="w-1 h-1 rounded-full bg-bone-white/20" />
                  <span className="font-ciutadella font-light text-[12px] text-bone-white/30 tracking-normal">{a.category}</span>
                </div>
              </div>
              <span className="font-enreal text-[16px] text-bone-white/20 mt-1 group-hover:text-bone-white/50 transition-colors">→</span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/" className="inline-flex items-center justify-center bg-charcoal text-bone-white font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] border border-ash hover:opacity-80 transition-opacity">
            back
          </Link>
        </div>
      </div>
    </div>
  );
}
