import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AWARD_CATEGORIES } from "@/lib/constants";
import { Trophy, Mic2, Music2, Star, Music } from "lucide-react";

export const metadata: Metadata = {
  title: "Award Categories | Kalenjin Music Awards 2026",
  description: "Browse all 20+ award categories at the Kalenjin Music Awards 2026. From Best Artist to Best Traditional, find your favourite category and vote.",
};

const icons = [Trophy, Mic2, Music2, Star, Music];

export default function CategoriesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 px-4 md:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-kalenjin-maroon/10 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <span className="text-primary-gold text-sm font-semibold uppercase tracking-widest">KMA 2026</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mt-4 mb-4 text-foreground">
            Award <span className="text-primary-gold">Categories</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto">
            Twenty prestigious categories recognizing the full breadth of Kalenjin musical excellence.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AWARD_CATEGORIES.map((cat, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Link
                  key={cat.id}
                  href={`/nominees?category=${cat.id}`}
                  className="group relative flex flex-col gap-3 rounded-xl border border-border bg-surface p-6 hover:border-primary-gold/50 hover:bg-surface-hover transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-gold/10 group-hover:bg-primary-gold/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary-gold" />
                  </div>
                  <div>
                    <h2 className="font-heading font-semibold text-foreground group-hover:text-primary-gold transition-colors leading-snug">
                      {cat.name}
                    </h2>
                    <p className="text-foreground/40 text-sm mt-1">{cat.nominees} Nominees</p>
                  </div>
                  <div className="mt-auto pt-3 border-t border-border">
                    <span className="text-primary-gold text-sm font-medium group-hover:underline">
                      View &amp; Vote →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-surface/50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">Want to Nominate an Artist?</h2>
          <p className="text-foreground/60 mb-6">Nominations for KMA 2027 will open in January. Stay tuned!</p>
          <Button variant="outline" asChild><Link href="/contact">Get in Touch</Link></Button>
        </div>
      </section>
    </div>
  );
}
