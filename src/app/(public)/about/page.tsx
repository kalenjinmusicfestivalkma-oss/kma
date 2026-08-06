import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Trophy, Users, Music, Target, Globe, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Kalenjin Music Awards 2026",
  description: "Learn about the Kalenjin Music Awards — celebrating excellence in Kalenjin music and culture since 2021.",
};

const values = [
  { icon: Trophy,  title: "Excellence",   desc: "Recognizing the highest standards of artistic achievement and musical innovation." },
  { icon: Music,   title: "Heritage",     desc: "Celebrating and preserving the rich tapestry of Kalenjin musical traditions." },
  { icon: Users,   title: "Community",    desc: "Building bridges between artists, fans, and cultural institutions across the region." },
  { icon: Target,  title: "Impact",       desc: "Creating opportunities for artists to reach wider audiences and achieve their dreams." },
  { icon: Globe,   title: "Visibility",   desc: "Putting Kalenjin music on the global stage and inspiring the next generation." },
  { icon: Heart,   title: "Passion",      desc: "Driven by genuine love for the art form and the communities that gave birth to it." },
];

const team = [
  { name: "Daniel Kiprotich",   role: "Founder & Chairman",          initials: "DK" },
  { name: "Agnes Chebet",       role: "Executive Director",           initials: "AC" },
  { name: "Victor Rotich",      role: "Head of Nominations",          initials: "VR" },
  { name: "Mercy Koech",        role: "Head of Events & Ticketing",   initials: "MK" },
  { name: "Brian Lagat",        role: "Director of Partnerships",     initials: "BL" },
  { name: "Grace Chepkemoi",    role: "Marketing & Communications",   initials: "GC" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kalenjin-maroon/10 via-background to-kalenjin-green/10 pointer-events-none" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <span className="text-primary-gold text-sm font-semibold uppercase tracking-widest">Our Story</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mt-4 mb-6 text-white">
            About <span className="text-primary-gold">KMA</span>
          </h1>
          <p className="text-foreground/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            The Kalenjin Music Awards is the premier platform dedicated to celebrating and promoting 
            outstanding talent in Kalenjin music. Since our founding, we have honored artists who 
            keep our cultural heritage alive while pushing creative boundaries.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 md:px-6 bg-surface/50">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary-gold text-sm font-semibold uppercase tracking-widest">Our Mission</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-5 text-white">
              Amplifying the Voice of Kalenjin Music
            </h2>
            <p className="text-foreground/60 leading-relaxed mb-4">
              We believe that music is the heartbeat of culture. The Kalenjin Music Awards was founded 
              to create a prestigious platform that recognizes artistic excellence, encourages cultural 
              preservation, and provides a spotlight for both established and emerging artists.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Our annual ceremony brings together artists, fans, industry leaders, and cultural 
              ambassadors to celebrate what makes Kalenjin music uniquely powerful — its storytelling, 
              rhythm, and deep connection to the Rift Valley way of life.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "5th",  label: "Annual Edition"    },
              { num: "20+",  label: "Award Categories"  },
              { num: "80+",  label: "Nominees in 2026"  },
              { num: "50K+", label: "Community Voters"  },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-surface p-6 text-center">
                <div className="font-heading text-4xl font-bold text-primary-gold mb-1">{stat.num}</div>
                <div className="text-foreground/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-primary-gold text-sm font-semibold uppercase tracking-widest">What We Stand For</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 text-white">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-surface p-6 hover:border-primary-gold/30 transition-colors">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-gold/10 mb-4">
                  <Icon className="h-5 w-5 text-primary-gold" />
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">{title}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 md:px-6 bg-surface/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-primary-gold text-sm font-semibold uppercase tracking-widest">The People Behind KMA</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 text-white">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member) => (
              <div key={member.name} className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-gold/30 to-kalenjin-maroon/30 border border-primary-gold/20">
                  <span className="font-heading font-bold text-sm text-primary-gold">{member.initials}</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-white text-sm">{member.name}</p>
                  <p className="text-foreground/50 text-xs mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Ready to Celebrate?</h2>
          <p className="text-foreground/60 mb-8">Cast your vote, get your tickets, and be part of the biggest night in Kalenjin music.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild><Link href="/nominees">Vote Now</Link></Button>
            <Button size="lg" variant="outline" asChild><Link href="/tickets">Get Tickets</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
