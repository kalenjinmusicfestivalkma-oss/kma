import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sponsors | Kalenjin Music Awards 2026",
  description: "Meet the sponsors who make the Kalenjin Music Awards possible. Partner with us to support Kalenjin music and culture.",
};

const sponsorPackages = [
  {
    tier:   "Platinum",
    price:  "KES 500,000",
    color:  "border-cyan-400",
    badge:  "bg-cyan-400 text-black",
    perks: [
      "Headline sponsor branding on all materials",
      "Logo on stage backdrop & main screen",
      "10 VIP tickets to the ceremony",
      "30-second commercial slot during broadcast",
      "Social media feature campaign (4 weeks)",
      "Dedicated press release mention",
    ],
  },
  {
    tier:   "Gold",
    price:  "KES 250,000",
    color:  "border-primary-gold",
    badge:  "bg-primary-gold text-black",
    perks: [
      "Prominent branding on event materials",
      "Logo on side screens & programmes",
      "6 VIP tickets to the ceremony",
      "Social media feature campaign (2 weeks)",
      "Brand mention in press releases",
    ],
  },
  {
    tier:   "Silver",
    price:  "KES 100,000",
    color:  "border-foreground/30",
    badge:  "bg-foreground/20 text-white",
    perks: [
      "Logo on event programme",
      "4 Standard tickets to the ceremony",
      "Social media mention",
      "Brand mention at ceremony",
    ],
  },
  {
    tier:   "Bronze",
    price:  "KES 50,000",
    color:  "border-amber-700",
    badge:  "bg-amber-700 text-white",
    perks: [
      "Logo on event programme",
      "2 Standard tickets to the ceremony",
      "Social media mention",
    ],
  },
];

const currentSponsors = [
  { name: "Safaricom",              tier: "Platinum" },
  { name: "KCB Bank",              tier: "Gold"     },
  { name: "Nation Media Group",    tier: "Gold"     },
  { name: "East Africa Breweries", tier: "Silver"   },
  { name: "Equity Bank",           tier: "Silver"   },
  { name: "Kenya Airways",         tier: "Bronze"   },
];

export default function SponsorsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 px-4 md:px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <span className="text-primary-gold text-sm font-semibold uppercase tracking-widest">Our Partners</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mt-4 mb-4 text-white">
            Sponsors & <span className="text-primary-gold">Partners</span>
          </h1>
          <p className="text-foreground/60 text-lg">
            The Kalenjin Music Awards is made possible by the generous support of our sponsors.
            Join them to reach thousands of passionate music fans.
          </p>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-12 px-4 md:px-6 bg-surface/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-white text-center mb-8">2026 Sponsors</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {currentSponsors.map((s) => (
              <div
                key={s.name}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface px-8 py-5 hover:border-primary-gold/30 transition-colors"
              >
                <span className="font-heading font-bold text-white text-lg">{s.name}</span>
                <span className={`text-xs font-semibold ${
                  s.tier === "Platinum" ? "text-cyan-400"
                  : s.tier === "Gold"   ? "text-primary-gold"
                  : s.tier === "Silver" ? "text-foreground/60"
                  : "text-amber-600"
                }`}>
                  {s.tier} Sponsor
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-primary-gold text-sm font-semibold uppercase tracking-widest">Partner With Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 text-white">Sponsorship Packages</h2>
            <p className="text-foreground/60 mt-3 max-w-xl mx-auto">
              Align your brand with Kalenjin culture and reach an engaged, passionate audience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sponsorPackages.map((pkg) => (
              <div key={pkg.tier} className={`rounded-2xl border-2 ${pkg.color} bg-surface p-7`}>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-heading text-xl font-bold text-white">{pkg.tier} Package</h3>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${pkg.badge}`}>{pkg.price}</span>
                </div>
                <ul className="space-y-2.5">
                  {pkg.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-foreground/70">
                      <span className="text-primary-gold shrink-0 mt-0.5">✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-foreground/60 mb-4">Interested in a custom sponsorship package?</p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Our Partnerships Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
