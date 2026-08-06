import type { Metadata } from "next";
import Link from "next/link";
import { WayfinderIllustration } from "@/components/shared/WayfinderIllustration";
import { CornerClusters } from "@/components/layout/CornerClusters";
import { AWARD_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = { title: "Categories" };

export default function CategoriesPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-void-black">
      <WayfinderIllustration />
      <CornerClusters />

      {/* Dark overlay for readability over category list */}
      <div className="absolute inset-0 bg-void-black/60 z-[5]" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 py-12">
        {/* Title */}
        <p className="font-ciutadella text-[13px] font-light tracking-normal text-bone-white/40 uppercase mb-4">
          3rd Edition — 2026
        </p>
        <h1 className="font-enreal font-light text-bone-white text-center uppercase tracking-cinematic mb-8"
          style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
          Award Categories
        </h1>

        {/* Scrollable category list */}
        <div className="w-full max-w-2xl max-h-[55vh] overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border-t border-bone-white/10">
            {AWARD_CATEGORIES.map((cat, i) => (
              <Link
                key={cat.id}
                href={`/nominees?category=${cat.id}`}
                className="flex items-baseline gap-4 px-0 py-3 border-b border-bone-white/10 hover:bg-bone-white/5 transition-colors group"
              >
                <span className="font-ciutadella text-[13px] font-light text-bone-white/30 tracking-normal w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-enreal font-light text-[14px] text-bone-white/80 tracking-cinematic group-hover:text-bone-white transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-[30px] mt-8">
          <Link href="/nominees" className="inline-flex items-center gap-2 bg-bone-white text-void-black font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] hover:opacity-80 transition-opacity">
            → vote now
          </Link>
          <Link href="/" className="inline-flex items-center justify-center bg-charcoal text-bone-white font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] border border-ash hover:opacity-80 transition-opacity">
            back
          </Link>
        </div>
      </div>
    </div>
  );
}
