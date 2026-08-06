import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Kalenjin Music Awards 2026",
  description: "KMA Admin Dashboard",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

function AdminSidebar() {
  const links = [
    { href: "/admin",           icon: "📊", label: "Overview"   },
    { href: "/admin/nominees",  icon: "🎤", label: "Nominees"   },
    { href: "/admin/categories",icon: "🏆", label: "Categories" },
    { href: "/admin/votes",     icon: "🗳️", label: "Votes"      },
    { href: "/admin/tickets",   icon: "🎟️", label: "Tickets"    },
    { href: "/admin/news",      icon: "📰", label: "News"       },
    { href: "/admin/sponsors",  icon: "🤝", label: "Sponsors"   },
    { href: "/admin/settings",  icon: "⚙️", label: "Settings"   },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-60 shrink-0 border-r border-border bg-surface">
      {/* Logo */}
      <div className="flex items-center gap-2 px-5 py-4 border-b border-border">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-gold">
          <span className="font-heading font-bold text-black text-sm">K</span>
        </div>
        <div>
          <p className="font-heading font-bold text-white text-sm">KMA Admin</p>
          <p className="text-foreground/40 text-xs">2026 Edition</p>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex-1 p-3 space-y-0.5">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground/60 hover:text-white hover:bg-surface-hover transition-all group"
          >
            <span>{link.icon}</span>
            <span className="font-medium">{link.label}</span>
          </a>
        ))}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-border">
        <a
          href="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground/40 hover:text-white hover:bg-surface-hover transition-all"
        >
          <span>🌐</span>
          <span>View Site</span>
        </a>
        <a
          href="/api/auth/signout"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-400/70 hover:text-red-400 hover:bg-surface-hover transition-all"
        >
          <span>🚪</span>
          <span>Sign Out</span>
        </a>
      </div>
    </aside>
  );
}

function AdminHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-3.5 border-b border-border bg-surface/50 backdrop-blur-sm">
      <div>
        <p className="font-heading font-semibold text-white text-sm">Admin Panel</p>
        <p className="text-foreground/40 text-xs">Kalenjin Music Awards 2026</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-kalenjin-green/30 bg-kalenjin-green/10 px-3 py-1 text-xs text-kalenjin-green font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-kalenjin-green" />
          Voting Active
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-gold/10 border border-primary-gold/20">
          <span className="text-primary-gold text-xs font-bold">A</span>
        </div>
      </div>
    </header>
  );
}
