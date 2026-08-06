"use client";

import Link from "next/link";
import { WayfinderIllustration } from "@/components/shared/WayfinderIllustration";
import { CornerClusters } from "@/components/layout/CornerClusters";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-void-black">
      {/* Layer 0: Full-bleed animated illustration */}
      <WayfinderIllustration />

      {/* Layer 1: Corner utility clusters */}
      <CornerClusters />

      {/* Layer 2: Center title composition */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
        
        {/* Edition badge */}
        <p className="font-ciutadella text-[13px] font-light tracking-normal text-bone-white/50 mb-8 uppercase">
          3rd Edition — 2026
        </p>

        {/* Main display title */}
        <h1
          className="font-enreal font-light text-bone-white text-center leading-[1.1] tracking-cinematic uppercase"
          style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
        >
          Kalenjin<br />Music Awards
        </h1>

        {/* Subtitle — Ciutadella-Medium, tight line-height */}
        <p
          className="font-ciutadella font-light text-[14px] text-bone-white/60 text-center mt-6 leading-[1.0] tracking-normal"
        >
          Celebrating excellence in Kalenjin music and culture<br />
          Eldoret Sports Club · September 20, 2026
        </p>

        {/* Button stack — 30px gap, center aligned, no container */}
        <div className="flex flex-col items-center mt-12 gap-[30px]">
          
          {/* Primary: Start / Nominees */}
          <Link
            href="/nominees"
            className="inline-flex items-center gap-2 bg-bone-white text-void-black font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] hover:opacity-80 transition-opacity"
          >
            <ArrowRight className="w-3.5 h-3.5" />
            start voting
          </Link>

          {/* Secondary: Info */}
          <Link
            href="/about"
            className="inline-flex items-center justify-center bg-charcoal text-bone-white font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] border border-ash hover:opacity-80 transition-opacity"
          >
            info
          </Link>
        </div>
      </div>
    </div>
  );
}
