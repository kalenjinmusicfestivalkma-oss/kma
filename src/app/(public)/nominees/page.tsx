"use client";

import { useState } from "react";
import Link from "next/link";
import { WayfinderIllustration } from "@/components/shared/WayfinderIllustration";
import { CornerClusters } from "@/components/layout/CornerClusters";
import { AWARD_CATEGORIES, SAMPLE_NOMINEES } from "@/lib/constants";
import { VotingModal } from "@/components/shared/VotingModal";

export default function NomineesPage() {
  const [activeCategory, setActiveCategory] = useState(AWARD_CATEGORIES[0].id);
  const [selectedNominee, setSelectedNominee] = useState<typeof SAMPLE_NOMINEES[0] | null>(null);

  const cat = AWARD_CATEGORIES.find((c) => c.id === activeCategory);
  const nominees = SAMPLE_NOMINEES.filter((n) => n.category === activeCategory);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-void-black">
      <WayfinderIllustration />
      <CornerClusters />
      <div className="absolute inset-0 bg-void-black/65 z-[5]" />

      <div className="absolute inset-0 z-10 flex h-full">

        {/* Left: Category list */}
        <aside className="hidden md:flex flex-col w-[260px] shrink-0 border-r border-bone-white/10 pt-20 pb-8 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          <p className="font-ciutadella text-[11px] font-light text-bone-white/30 uppercase tracking-normal px-6 mb-4">Categories</p>
          {AWARD_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`w-full text-left px-6 py-2.5 font-enreal font-light text-[13px] tracking-cinematic transition-colors ${
                c.id === activeCategory
                  ? "text-bone-white border-l-2 border-bone-white bg-bone-white/5"
                  : "text-bone-white/40 hover:text-bone-white/70 border-l-2 border-transparent"
              }`}
            >
              {c.name}
            </button>
          ))}
        </aside>

        {/* Right: Nominee display */}
        <div className="flex-1 flex flex-col items-center justify-center px-8">
          {/* Category title */}
          <p className="font-ciutadella text-[13px] font-light tracking-normal text-bone-white/40 uppercase mb-3">
            Nominees
          </p>
          <h1
            className="font-enreal font-light text-bone-white text-center uppercase tracking-cinematic mb-10"
            style={{ fontSize: "clamp(22px, 3vw, 40px)" }}
          >
            {cat?.name}
          </h1>

          {nominees.length > 0 ? (
            <div className="flex flex-col w-full max-w-md gap-px border-t border-bone-white/10">
              {nominees.map((nominee) => (
                <button
                  key={nominee.id}
                  onClick={() => setSelectedNominee(nominee)}
                  className="flex items-center justify-between py-4 border-b border-bone-white/10 hover:bg-bone-white/5 transition-colors group text-left"
                >
                  <div>
                    <p className="font-enreal font-light text-[16px] text-bone-white tracking-cinematic group-hover:opacity-80">
                      {nominee.name}
                    </p>
                    <p className="font-ciutadella font-light text-[13px] text-bone-white/40 mt-0.5 tracking-normal">
                      {nominee.genre}
                    </p>
                  </div>
                  <span className="font-ciutadella font-light text-[11px] text-bone-white/30 tracking-normal mr-2">
                    {nominee.votes.toLocaleString()} votes
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="font-enreal font-light text-bone-white/30 text-[14px] tracking-cinematic uppercase mb-6">
                Nominations open soon
              </p>
              <p className="font-ciutadella font-light text-[13px] text-bone-white/20 tracking-normal">
                Nominees for this category will be listed here
              </p>
            </div>
          )}

          <div className="mt-10">
            <Link href="/" className="inline-flex items-center justify-center bg-charcoal text-bone-white font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] border border-ash hover:opacity-80 transition-opacity">
              back
            </Link>
          </div>
        </div>
      </div>

      {selectedNominee && (
        <VotingModal
          nominee={selectedNominee}
          onClose={() => setSelectedNominee(null)}
        />
      )}
    </div>
  );
}
