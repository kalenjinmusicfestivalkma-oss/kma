import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SAMPLE_NOMINEES, AWARD_CATEGORIES } from "@/lib/constants";
import { Mic2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Nominees | Kalenjin Music Awards 2026",
  description: "Meet the 2026 Kalenjin Music Awards nominees. Browse by category and cast your vote for your favourite artists.",
};

export default function NomineesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 px-4 md:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-kalenjin-green/10 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <span className="text-primary-gold text-sm font-semibold uppercase tracking-widest">2026 Nominees</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mt-4 mb-4 text-foreground">
            Meet the <span className="text-primary-gold">Nominees</span>
          </h1>
          <p className="text-foreground/60 text-lg">
            Vote for your favourite artists across all categories. OTP verification ensures every vote counts.
          </p>
        </div>
      </section>

      {/* Voting Notice */}
      <div className="px-4 md:px-6 py-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-primary-gold/30 bg-primary-gold/10 px-6 py-4">
            <div>
              <p className="font-heading font-semibold text-primary-gold">⏳ Voting is Open!</p>
              <p className="text-foreground/60 text-sm mt-0.5">Voting closes August 30, 2026. One verified vote per person per category.</p>
            </div>
            <Button size="sm">Register to Vote</Button>
          </div>
        </div>
      </div>

      {/* Categories & Nominees */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl space-y-16">
          {AWARD_CATEGORIES.slice(0, 6).map((cat) => {
            const catNominees = SAMPLE_NOMINEES.filter((n) => n.category === cat.id);
            if (catNominees.length === 0) return null;
            return (
              <div key={cat.id}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-2xl font-bold text-foreground">{cat.name}</h2>
                  <Link href={`/categories/${cat.id}`} className="text-primary-gold text-sm hover:underline">
                    View all →
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {catNominees.map((nominee) => (
                    <div
                      key={nominee.id}
                      className="group rounded-xl border border-border bg-surface overflow-hidden hover:border-primary-gold/40 transition-all duration-300"
                    >
                      <div className="relative h-44 bg-gradient-to-br from-kalenjin-maroon/20 via-background to-kalenjin-green/20 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary-gold/20 bg-primary-gold/10">
                          <Mic2 className="h-8 w-8 text-primary-gold/50" />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-heading font-semibold text-foreground text-sm group-hover:text-primary-gold transition-colors">{nominee.name}</h3>
                        <p className="text-foreground/40 text-xs mt-0.5">{nominee.genre}</p>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center justify-between text-xs text-foreground/40">
                            <span>{nominee.votes.toLocaleString()} votes</span>
                          </div>
                          <Button size="sm" className="w-full text-xs h-8">
                            🗳️ Vote
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* All categories CTA */}
      <section className="py-12 px-4 md:px-6 text-center border-t border-border">
        <div className="container mx-auto max-w-xl">
          <p className="text-foreground/60 mb-4">Want to see nominees across all 20+ categories?</p>
          <Button variant="outline" asChild><Link href="/categories">Browse All Categories</Link></Button>
        </div>
      </section>
    </div>
  );
}
