import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Past Winners | Kalenjin Music Awards 2026",
  description: "Discover the past winners of the Kalenjin Music Awards — a legacy of musical excellence.",
};

const pastWinners = [
  {
    year: 2025,
    winners: [
      { category: "Artist of the Year",   name: "Solomon Sang",     genre: "Gospel" },
      { category: "Best Male Artist",      name: "Kibet Birgen",     genre: "Traditional Fusion" },
      { category: "Best Female Artist",    name: "Chebet Alai",      genre: "Gospel / Kalenjin" },
      { category: "Song of the Year",      name: "Chebet Alai",      genre: "\"Amani\" — Chebet Alai" },
    ],
  },
  {
    year: 2024,
    winners: [
      { category: "Artist of the Year",   name: "Linet Chebet",     genre: "Afropop" },
      { category: "Best Male Artist",      name: "Emmanuel Lagat",   genre: "Reggae / Afrobeat" },
      { category: "Best Female Artist",    name: "Mercy Cherono",    genre: "Kalenjin Pop" },
      { category: "Song of the Year",      name: "Emmanuel Lagat",   genre: "\"Rift Valley\" — Emmanuel Lagat" },
    ],
  },
];

export default function WinnersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 px-4 md:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-gold/5 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <span className="text-primary-gold text-sm font-semibold uppercase tracking-widest">Hall of Fame</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mt-4 mb-4 text-foreground">
            Past <span className="text-primary-gold">Winners</span>
          </h1>
          <p className="text-foreground/60 text-lg">
            Celebrating the artists who have defined Kalenjin music over the years.
          </p>
        </div>
      </section>

      {/* Winners by year */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl space-y-16">
          {pastWinners.map(({ year, winners }) => (
            <div key={year}>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-gold/10 border border-primary-gold/30">
                  <Trophy className="h-6 w-6 text-primary-gold" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground">KMA {year}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {winners.map((w) => (
                  <div key={w.category} className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 hover:border-primary-gold/30 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-gold/10">
                      <span className="text-primary-gold text-lg">🏆</span>
                    </div>
                    <div>
                      <p className="text-foreground/50 text-xs uppercase tracking-wider">{w.category}</p>
                      <p className="font-heading font-semibold text-foreground mt-0.5">{w.name}</p>
                      <p className="text-foreground/40 text-xs mt-0.5">{w.genre}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 text-center bg-surface/50">
        <div className="container mx-auto max-w-xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Who Will Win in 2026?</h2>
          <p className="text-foreground/60 mb-6">Cast your vote now and help crown this year&apos;s champions.</p>
          <Button asChild><Link href="/nominees">Vote Now</Link></Button>
        </div>
      </section>
    </div>
  );
}
