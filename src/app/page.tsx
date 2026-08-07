import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Trophy, Mic2, Music2, Star } from "lucide-react";
import { InstrumentBackground } from "@/components/shared/InstrumentBackground";

// ─── Sample Data ─────────────────────────────────────────────────────────────

const categories = [
  { icon: Trophy,  title: "Best Artist of the Year",     slug: "best-artist",    count: 8 },
  { icon: Mic2,    title: "Best Male Artist",             slug: "best-male",      count: 6 },
  { icon: Music2,  title: "Best Female Artist",           slug: "best-female",    count: 6 },
  { icon: Star,    title: "Best Upcoming Artist",         slug: "best-upcoming",  count: 5 },
  { icon: Trophy,  title: "Song of the Year",             slug: "song-of-year",   count: 7 },
  { icon: Mic2,    title: "Best Gospel Artist",           slug: "best-gospel",    count: 5 },
];

const nominees = [
  { name: "Jua Cali Kiprotich",  genre: "Benga / Afrobeats", votes: 12840, img: "/images/artist-1.jpg" },
  { name: "Chebet Alai",         genre: "Gospel / Kalenjin", votes: 11290, img: "/images/artist-2.jpg" },
  { name: "Kibet Birgen",        genre: "Traditional Fusion", votes: 9870, img: "/images/artist-3.jpg" },
  { name: "Linet Chebet",        genre: "Afropop",            votes: 9210, img: "/images/artist-4.jpg" },
];

const sponsors = [
  { name: "Safaricom",    tier: "Platinum" },
  { name: "KCB Bank",     tier: "Gold"     },
  { name: "Nation Media", tier: "Gold"     },
  { name: "East Africa Breweries", tier: "Silver" },
];

// ─── Subcomponents ────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <InstrumentBackground />

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10 max-w-5xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-gold/30 bg-primary-gold/10 px-4 py-1.5 mb-8">
          <span className="h-2 w-2 rounded-full bg-primary-gold animate-pulse" />
          <span className="text-primary-gold text-sm font-medium tracking-wide">Nominations Open — Vote Now</span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6">
          Kalenjin{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-yellow-300 to-primary-gold">
            Music Awards
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl text-foreground/60 mt-2">2026</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Celebrating the pulse of the Rift Valley — honoring outstanding artists who preserve, evolve,
          and amplify our rich Kalenjin musical heritage.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto px-10 text-base font-semibold shadow-lg shadow-primary-gold/20" asChild>
            <Link href="/nominees">🗳️ Cast Your Vote</Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 text-base" asChild>
            <Link href="/tickets">Get Event Tickets</Link>
          </Button>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { value: "20+", label: "Award Categories" },
            { value: "80+", label: "Nominees" },
            { value: "50K+", label: "Votes Cast" },
            { value: "5th", label: "Annual Edition" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-heading text-3xl md:text-4xl font-bold text-primary-gold">{stat.value}</span>
              <span className="text-foreground/50 text-sm mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="text-primary-gold text-sm font-semibold uppercase tracking-widest">This Year&apos;s Awards</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">Award Categories</h2>
          <p className="text-foreground/60 mt-4 max-w-xl mx-auto">
            Twenty prestigious categories recognizing excellence across every dimension of Kalenjin music.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group relative flex items-center gap-4 rounded-xl border border-border bg-surface p-5 hover:border-primary-gold/50 hover:bg-surface-hover transition-all duration-300"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-gold/10 group-hover:bg-primary-gold/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary-gold" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary-gold transition-colors">{cat.title}</h3>
                  <p className="text-foreground/50 text-sm mt-0.5">{cat.count} Nominees</p>
                </div>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/20 group-hover:text-primary-gold/50 transition-colors text-xl">›</span>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link href="/categories">View All 20 Categories →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function NomineesSection() {
  return (
    <section className="py-24 px-4 md:px-6 bg-surface/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="text-primary-gold text-sm font-semibold uppercase tracking-widest">2026 Nominees</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">Featured Nominees</h2>
          <p className="text-foreground/60 mt-4 max-w-xl mx-auto">
            Meet the talented artists competing for this year&apos;s most coveted awards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nominees.map((nominee) => (
            <div
              key={nominee.name}
              className="group relative rounded-xl border border-border bg-surface overflow-hidden hover:border-primary-gold/40 transition-all duration-300"
            >
              {/* Artist image placeholder */}
              <div className="relative h-52 bg-gradient-to-br from-kalenjin-maroon/30 via-background to-kalenjin-green/20 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary-gold/30 bg-primary-gold/10">
                  <Mic2 className="h-10 w-10 text-primary-gold/60" />
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-heading font-semibold text-foreground group-hover:text-primary-gold transition-colors">{nominee.name}</h3>
                <p className="text-foreground/50 text-sm mt-1">{nominee.genre}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-foreground/40">{nominee.votes.toLocaleString()} votes</span>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/nominees">Vote</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild>
            <Link href="/nominees">View All Nominees →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function VotingCTA() {
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-kalenjin-maroon/10 via-transparent to-kalenjin-green/10" />
      </div>
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <div className="rounded-2xl border border-primary-gold/20 bg-surface/80 backdrop-blur-sm p-10 md:p-14">
          <span className="inline-block rounded-full bg-primary-gold/10 border border-primary-gold/30 px-4 py-1.5 text-primary-gold text-sm font-medium mb-6">
            ⏳ Voting Closes August 30, 2026
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Vote <span className="text-primary-gold">Matters</span>
          </h2>
          <p className="text-foreground/60 mb-8 text-lg max-w-lg mx-auto">
            Support your favorite Kalenjin artists. One OTP-verified vote per person ensures every vote counts fairly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-10 shadow-xl shadow-primary-gold/20" asChild>
              <Link href="/nominees">Start Voting</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn About KMA</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SponsorsSection() {
  return (
    <section className="py-20 border-t border-border overflow-hidden">
      <div className="container mx-auto max-w-5xl px-4 md:px-6 mb-10">
        <p className="text-center text-foreground/40 text-sm uppercase tracking-widest font-medium">
          Proudly Supported By
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden">
        {/* Left/Right fading gradients for smooth entry/exit */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max animate-marquee gap-8 px-4 hover:[animation-play-state:paused]">
          {[...sponsors, ...sponsors, ...sponsors].map((sponsor, idx) => (
            <div
              key={`${sponsor.name}-${idx}`}
              className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-border bg-surface px-8 py-5 hover:border-primary-gold/30 transition-all duration-200 w-[180px] shrink-0"
            >
              <span className="font-heading font-bold text-lg text-foreground/80 group-hover:text-foreground transition-colors text-center">
                {sponsor.name}
              </span>
              <span className={`text-xs font-medium ${
                sponsor.tier === "Platinum"
                  ? "text-cyan-400"
                  : sponsor.tier === "Gold"
                  ? "text-primary-gold"
                  : "text-foreground/40"
              }`}>
                {sponsor.tier} Sponsor
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center mt-10">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/sponsors">Become a Sponsor →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <NomineesSection />
      <VotingCTA />
      <SponsorsSection />
    </>
  );
}
