import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL, CONTACT_PHONE, EVENT_VENUE } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Kalenjin Music Awards 2026",
  description: "Get in touch with the Kalenjin Music Awards team. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 px-4 md:px-6 text-center">
        <div className="container mx-auto max-w-2xl">
          <span className="text-primary-gold text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mt-4 mb-4 text-foreground">
            Contact <span className="text-primary-gold">Us</span>
          </h1>
          <p className="text-foreground/60 text-lg">
            Questions about nominations, tickets, partnerships, or the event? We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-6 pb-24">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3 rounded-2xl border border-border bg-surface p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1.5" htmlFor="contact-first-name">First Name</label>
                  <input
                    id="contact-first-name"
                    type="text"
                    placeholder="John"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1.5" htmlFor="contact-last-name">Last Name</label>
                  <input
                    id="contact-last-name"
                    type="text"
                    placeholder="Kiprotich"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1.5" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1.5" htmlFor="contact-subject">Subject</label>
                <select
                  id="contact-subject"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition"
                >
                  <option value="">Select a topic...</option>
                  <option value="tickets">Ticket Enquiry</option>
                  <option value="nominations">Nominations</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="media">Media & Press</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1.5" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition resize-none"
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-heading font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-gold/10">
                    <Mail className="h-4 w-4 text-primary-gold" />
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs uppercase tracking-wider">Email</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-foreground hover:text-primary-gold transition-colors">{CONTACT_EMAIL}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-gold/10">
                    <Phone className="h-4 w-4 text-primary-gold" />
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs uppercase tracking-wider">Phone</p>
                    <a href={`tel:${CONTACT_PHONE}`} className="text-sm text-foreground hover:text-primary-gold transition-colors">{CONTACT_PHONE}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-gold/10">
                    <MapPin className="h-4 w-4 text-primary-gold" />
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs uppercase tracking-wider">Venue</p>
                    <p className="text-sm text-foreground">{EVENT_VENUE}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-heading font-semibold text-foreground mb-3">Become a Sponsor</h3>
              <p className="text-foreground/50 text-sm mb-4">Partner with KMA to reach thousands of music lovers across the Rift Valley and beyond.</p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/sponsors">View Sponsorship Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
