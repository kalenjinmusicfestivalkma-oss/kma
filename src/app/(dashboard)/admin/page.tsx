import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Overview | KMA 2026",
};

const statCards = [
  { label: "Total Votes",      value: "52,341",  delta: "+1,204 today",  icon: "🗳️",  color: "text-primary-gold"    },
  { label: "Registered Users", value: "18,892",  delta: "+340 today",    icon: "👥",  color: "text-kalenjin-green"  },
  { label: "Tickets Sold",     value: "1,240",   delta: "+55 today",     icon: "🎟️",  color: "text-cyan-400"        },
  { label: "Revenue (KES)",    value: "4.2M",    delta: "+KES 82K today",icon: "💰",  color: "text-primary-gold"    },
];

const recentVotes = [
  { user: "J. Kiprotich", category: "Best Artist",    nominee: "Chebet Alai",   time: "2 min ago" },
  { user: "M. Chepkoech", category: "Best Female",    nominee: "Linet Chebet",  time: "5 min ago" },
  { user: "D. Rotich",    category: "Song of Year",   nominee: "Kibet Birgen",  time: "8 min ago" },
  { user: "F. Lagat",     category: "Best Upcoming",  nominee: "Mercy Cherono", time: "12 min ago"},
  { user: "B. Sang",      category: "Best Gospel",    nominee: "Solomon Sang",  time: "15 min ago"},
];

const topNominees = [
  { name: "Jua Cali Kiprotich", category: "Best Artist",   votes: 12840, pct: 82 },
  { name: "Chebet Alai",        category: "Best Female",   votes: 11290, pct: 74 },
  { name: "Kibet Birgen",       category: "Best Artist",   votes: 9870,  pct: 63 },
  { name: "Solomon Sang",       category: "Best Gospel",   votes: 8540,  pct: 55 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-white">Dashboard Overview</h1>
        <p className="text-foreground/50 text-sm mt-1">Last updated: just now</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statCards.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-surface p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xl">{s.icon}</span>
              <span className={`text-xs font-medium ${s.color} bg-current/10 rounded-full px-2 py-0.5`} style={{ backgroundColor: "transparent" }}>
                {s.delta}
              </span>
            </div>
            <p className={`font-heading text-3xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-foreground/50 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Votes */}
        <div className="rounded-xl border border-border bg-surface overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <h2 className="font-heading font-semibold text-white">Recent Votes</h2>
            <a href="/admin/votes" className="text-primary-gold text-xs hover:underline">View all →</a>
          </div>
          <div className="divide-y divide-border">
            {recentVotes.map((v, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-3">
                <div>
                  <p className="text-sm text-white font-medium">{v.user}</p>
                  <p className="text-xs text-foreground/40">{v.category} → <span className="text-foreground/60">{v.nominee}</span></p>
                </div>
                <span className="text-xs text-foreground/30 shrink-0">{v.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Nominees */}
        <div className="rounded-xl border border-border bg-surface overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <h2 className="font-heading font-semibold text-white">Top Nominees</h2>
            <a href="/admin/nominees" className="text-primary-gold text-xs hover:underline">Manage →</a>
          </div>
          <div className="p-5 space-y-4">
            {topNominees.map((n) => (
              <div key={n.name}>
                <div className="flex items-center justify-between mb-1.5">
                  <div>
                    <span className="text-sm text-white font-medium">{n.name}</span>
                    <span className="text-foreground/40 text-xs ml-2">{n.category}</span>
                  </div>
                  <span className="text-xs text-primary-gold font-medium">{n.votes.toLocaleString()}</span>
                </div>
                <div className="h-1.5 rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary-gold transition-all"
                    style={{ width: `${n.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-xl border border-border bg-surface p-5">
        <h2 className="font-heading font-semibold text-white mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/admin/nominees/new",   label: "➕ Add Nominee"   },
            { href: "/admin/news/new",       label: "📝 Post Article"  },
            { href: "/admin/tickets",        label: "🎟️ Manage Tickets" },
            { href: "/admin/votes",          label: "🗳️ View Votes"    },
            { href: "/admin/settings",       label: "⚙️ Settings"      },
          ].map((action) => (
            <a
              key={action.href}
              href={action.href}
              className="rounded-lg border border-border bg-background/50 hover:border-primary-gold/30 hover:text-primary-gold px-4 py-2 text-sm text-foreground/70 transition-all font-medium"
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
