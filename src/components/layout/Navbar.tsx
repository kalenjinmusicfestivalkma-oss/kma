"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Music } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/categories", label: "Categories" },
  { href: "/nominees", label: "Nominees" },
  { href: "/winners", label: "Winners" },
  { href: "/tickets", label: "Tickets" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-gold">
            <Music className="h-4 w-4 text-black" />
          </div>
          <span className="font-heading font-bold text-xl text-white group-hover:text-primary-gold transition-colors">
            KMA <span className="text-primary-gold">2026</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary-gold hover:bg-surface rounded-md transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="inline-flex items-center bg-charcoal text-bone-white font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] border border-ash hover:opacity-80 transition-opacity">Login</Link>
          <Link href="/nominees" className="inline-flex items-center bg-bone-white text-void-black font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] hover:opacity-80 transition-opacity">Vote Now</Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground/70 hover:text-primary-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary-gold hover:bg-surface rounded-md transition-all"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-3 border-t border-bone-white/10">
            <Link href="/login" className="flex-1 inline-flex items-center justify-center bg-charcoal text-bone-white font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] border border-ash hover:opacity-80 transition-opacity">Login</Link>
            <Link href="/nominees" className="flex-1 inline-flex items-center justify-center bg-bone-white text-void-black font-enreal font-light text-[13px] tracking-normal px-[16px] py-[8px] hover:opacity-80 transition-opacity">Vote Now</Link>
          </div>
        </div>
      )}
    </header>
  );
}
