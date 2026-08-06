"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Award, Music, Users, Star } from "lucide-react";
import { WayfinderIllustration } from "@/components/shared/WayfinderIllustration";
import { VotingModal } from "@/components/shared/VotingModal";
import { SAMPLE_NOMINEES, AWARD_CATEGORIES, APP_YEAR, EVENT_DATE, EVENT_VENUE, VOTING_DEADLINE } from "@/lib/constants";

export default function HomePage() {
  const [selectedNominee, setSelectedNominee] = useState<typeof SAMPLE_NOMINEES[0] | null>(null);

  const topNominees = SAMPLE_NOMINEES.slice(0, 4);

  return (
    <div className="flex flex-col">

      {/* ── HERO: Wayfinder illustration as background ─────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Wayfinder SVG illustration */}
        <WayfinderIllustration />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-[1]" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center flex flex-col items-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-gold/30 bg-primary-gold/10 px-4 py-1.5 text-sm font-medium text-primary-gold">
            <Star className="h-3.5 w-3.5" />
            {APP_YEAR} — 3rd Edition Now Open
          </div>

          {/* Title */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Kalenjin{" "}
            <span className="text-primary-gold">Music</span>{" "}
            Awards
          </h1>

          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mb-4">
            Celebrating excellence in Kalenjin music and culture. Nominate, vote, and
            celebrate the artists who define our sound.
          </p>

          <p className="text-foreground/40 text-sm mb-10">
            📅 {EVENT_DATE} &nbsp;·&nbsp; 📍 {EVENT_VENUE}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/nominees"
              className="inline-flex items-center gap-2 bg-primary-gold text-black font-heading font-semibold px-8 py-3 rounded-lg hover:bg-primary-gold-hover transition-colors text-base"
            >
              Vote Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-8 py-3 font-medium text-foreground/80 hover:bg-surface-hover hover:text-white transition-all text-base"
            >
              View Categories
            </Link>
          </div>

          {/* Countdown strip */}
          <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-2 text-sm text-foreground/50 backdrop-blur-sm">
            ⏰ Voting closes {VOTING_DEADLINE}
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────────── */}
      <section className="border-y border-border bg-surface/50 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Award,  label: "Categories",  value: `${AWARD_CATEGORIES.length}+` },
              { icon: Music,  label: "Nominees",    value: "150+" },
              { icon: Users,  label: "Votes Cast",  value: "24K+" },
              { icon: Star,   label: "Edition",     value: "3rd" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <stat.icon className="h-6 w-6 text-primary-gold" />
                <span className="font-heading text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-foreground/50">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOMINEE SPOTLIGHT ──────────────────────────────────────────── */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-primary-gold text-sm font-semibold uppercase tracking-widest">Featured</span>
            <h2 className="font-heading text-4xl font-bold text-white mt-2">Top Nominees</h2>
            <p className="text-foreground/50 mt-3 max-w-xl mx-auto">
              These artists are leading the vote. Cast your voice and help crown the winner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {topNominees.map((nominee) => (
              <button
                key={nominee.id}
                onClick={() => setSelectedNominee(nominee)}
                className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 text-left hover:border-primary-gold/40 transition-all hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-gold/10 text-primary-gold font-heading font-bold text-lg">
                  {nominee.name.charAt(0)}
                </div>
                <p className="font-heading font-semibold text-white text-lg leading-tight">{nominee.name}</p>
                <p className="text-foreground/50 text-sm mt-1">{nominee.genre}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-primary-gold font-semibold text-sm">{nominee.votes.toLocaleString()} votes</span>
                  <span className="text-xs text-foreground/30 bg-surface-hover rounded-full px-2 py-0.5">Vote →</span>
                </div>
                {/* Progress bar */}
                <div className="mt-3 h-1 w-full bg-surface-hover rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-gold rounded-full"
                    style={{ width: `${Math.min(100, (nominee.votes / 15000) * 100)}%` }}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/nominees"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground/70 hover:bg-surface-hover hover:text-white transition-all"
            >
              View All Nominees <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── EVENT CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 md:px-6 bg-surface/30">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-primary-gold text-sm font-semibold uppercase tracking-widest">Gala Night</span>
          <h2 className="font-heading text-4xl font-bold text-white mt-2 mb-4">Join Us on {EVENT_DATE}</h2>
          <p className="text-foreground/50 max-w-xl mx-auto mb-8">
            The biggest night in Kalenjin music. Live performances, awards, and a celebration of our cultural heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tickets"
              className="inline-flex items-center gap-2 bg-primary-gold text-black font-heading font-semibold px-8 py-3 rounded-lg hover:bg-primary-gold-hover transition-colors"
            >
              Get Tickets <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-8 py-3 font-medium text-foreground/80 hover:bg-surface-hover hover:text-white transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {selectedNominee && (
        <VotingModal nominee={selectedNominee} onClose={() => setSelectedNominee(null)} />
      )}
    </div>
  );
}
