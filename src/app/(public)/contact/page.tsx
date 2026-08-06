import type { Metadata } from "next";
import Link from "next/link";
import { WayfinderIllustration } from "@/components/shared/WayfinderIllustration";
import { CornerClusters } from "@/components/layout/CornerClusters";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-void-black">
      <WayfinderIllustration />
      <CornerClusters />
      <div className="absolute inset-0 bg-void-black/70 z-[5]" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <p className="font-ciutadella text-[13px] font-light tracking-normal text-bone-white/40 uppercase mb-4">Reach Us</p>
        <h1 className="font-enreal font-light text-bone-white text-center uppercase tracking-cinematic mb-10"
          style={{ fontSize: "clamp(28px, 5vw, 56px)" }}>
          Contact
        </h1>

        <div className="w-full max-w-sm border-t border-bone-white/10">
          {[
            { label: "Email",    value: "info@kalenjinmusicawards.co.ke" },
            { label: "Phone",    value: "+254 700 000 000" },
            { label: "Location", value: "Eldoret, Rift Valley, Kenya" },
            { label: "Socials",  value: "@KMAofficial" },
          ].map((item) => (
            <div key={item.label} className="flex items-baseline justify-between py-4 border-b border-bone-white/10">
              <span className="font-ciutadella font-light text-[13px] text-bone-white/35 tracking-normal">{item.label}</span>
              <span className="font-enreal font-light text-[14px] text-bone-white tracking-cinematic text-right">{item.value}</span>
            </div>
          ))}
        </div>

        <p className="font-ciutadella font-light text-[13px] text-bone-white/25 tracking-normal mt-8">
          For group ticket bookings of 10+, email us directly.
        </p>

        <div className="flex items-center gap-[30px] mt-8">
          <a href="mailto:info@kalenjinmusicawards.co.ke"
            className="inline-flex items-center gap-2 bg-bone-white text-void-black font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] hover:opacity-80 transition-opacity">
            → send email
          </a>
          <Link href="/" className="inline-flex items-center justify-center bg-charcoal text-bone-white font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] border border-ash hover:opacity-80 transition-opacity">
            back
          </Link>
        </div>
      </div>
    </div>
  );
}
