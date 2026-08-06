import type { Metadata } from "next";
import Link from "next/link";
import { WayfinderIllustration } from "@/components/shared/WayfinderIllustration";
import { CornerClusters } from "@/components/layout/CornerClusters";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-void-black">
      <WayfinderIllustration />
      <CornerClusters />
      <div className="absolute inset-0 bg-void-black/70 z-[5]" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 max-w-2xl mx-auto text-center">
        <p className="font-ciutadella text-[13px] font-light tracking-normal text-bone-white/40 uppercase mb-5">
          Who We Are
        </p>
        <h1
          className="font-enreal font-light text-bone-white text-center uppercase tracking-cinematic mb-8"
          style={{ fontSize: "clamp(28px, 5vw, 56px)" }}
        >
          About KMA
        </h1>

        <p className="font-enreal font-light text-[16px] text-bone-white/60 leading-[1.75] tracking-cinematic mb-4 max-w-lg">
          The Kalenjin Music Awards (KMA) is the premier platform celebrating
          excellence in Kalenjin music and culture.
        </p>
        <p className="font-ciutadella font-light text-[14px] text-bone-white/40 leading-[1.75] tracking-normal max-w-lg">
          Now in its 3rd Edition, KMA honours artists across gospel, secular,
          upcoming talent, and beyond — from the North Rift to the South Rift,
          from the diaspora to the digital stage.
        </p>

        {/* Stats row */}
        <div className="flex items-start justify-center gap-12 mt-10 border-t border-bone-white/10 pt-8">
          {[
            { v: "39",    l: "Categories" },
            { v: "2026",  l: "3rd Edition" },
            { v: "Sept 20", l: "Gala Night" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col items-center">
              <span className="font-enreal font-light text-[28px] text-bone-white tracking-cinematic">{s.v}</span>
              <span className="font-ciutadella font-light text-[13px] text-bone-white/35 tracking-normal mt-1">{s.l}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-[30px] mt-10">
          <Link href="/nominees" className="inline-flex items-center gap-2 bg-bone-white text-void-black font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] hover:opacity-80 transition-opacity">
            → start voting
          </Link>
          <Link href="/" className="inline-flex items-center justify-center bg-charcoal text-bone-white font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] border border-ash hover:opacity-80 transition-opacity">
            back
          </Link>
        </div>
      </div>
    </div>
  );
}
