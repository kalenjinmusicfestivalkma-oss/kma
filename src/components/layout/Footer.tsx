import Link from "next/link";
import { Music, X, Globe, Share2, Link2 } from "lucide-react";

const footerLinks = {
  Awards: [
    { label: "About KMA", href: "/about" },
    { label: "Categories", href: "/categories" },
    { label: "Nominees", href: "/nominees" },
    { label: "Past Winners", href: "/winners" },
  ],
  Engage: [
    { label: "Cast Your Vote", href: "/nominees" },
    { label: "Get Tickets", href: "/tickets" },
    { label: "Latest News", href: "/news" },
    { label: "Sponsors", href: "/sponsors" },
  ],
  Support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socials = [
  { Icon: X,      href: "#", label: "Twitter/X" },
  { Icon: Globe,  href: "#", label: "Website"   },
  { Icon: Share2, href: "#", label: "Share"     },
  { Icon: Link2,  href: "#", label: "Links"     },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6 py-14 md:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-gold">
                <Music className="h-5 w-5 text-black" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                KMA <span className="text-primary-gold">2026</span>
              </span>
            </Link>
            <p className="text-foreground/50 text-sm leading-relaxed max-w-xs">
              The premier platform celebrating the richness, diversity, and excellence of Kalenjin music.
              Honoring artists who keep our culture alive.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground/50 hover:border-primary-gold/50 hover:text-primary-gold transition-all"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="font-heading font-semibold text-white mb-4">{section}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-foreground/50 text-sm hover:text-primary-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 text-sm">
            &copy; {new Date().getFullYear()} Kalenjin Music Awards. All rights reserved.
          </p>
          <p className="text-foreground/30 text-xs">
            Built with ❤️ in the Rift Valley
          </p>
        </div>
      </div>
    </footer>
  );
}
