import type { Metadata } from "next";

export const metadata: Metadata = { title: "Manage Sponsors | KMA Admin" };

const sponsors = [
  { id: 1, name: "Safaricom",              tier: "Platinum", amount: "KES 500,000", status: "active",  logo: "S" },
  { id: 2, name: "KCB Bank",              tier: "Gold",     amount: "KES 250,000", status: "active",  logo: "K" },
  { id: 3, name: "Nation Media Group",    tier: "Gold",     amount: "KES 250,000", status: "active",  logo: "N" },
  { id: 4, name: "East Africa Breweries", tier: "Silver",   amount: "KES 100,000", status: "pending", logo: "E" },
];

export default function AdminSponsorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-white">Sponsors & Partners</h1>
          <p className="text-foreground/50 text-sm mt-1">{sponsors.length} active sponsors · KES 1.1M pledged</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-primary-gold text-black font-semibold text-sm px-4 py-2 hover:bg-primary-gold/90 transition-colors">
          ➕ Add Sponsor
        </button>
      </div>

      <div className="rounded-xl border border-border bg-surface overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-background/30">
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Sponsor</th>
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Tier</th>
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Pledge Amount</th>
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Status</th>
              <th className="text-right px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {sponsors.map((s) => (
              <tr key={s.id} className="hover:bg-background/20 transition-colors">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background border border-border text-xs font-bold text-foreground/60">
                      {s.logo}
                    </div>
                    <span className="font-medium text-white">{s.name}</span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    s.tier === "Platinum" ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                    : s.tier === "Gold"   ? "bg-primary-gold/10 text-primary-gold border border-primary-gold/20"
                    : "bg-surface-hover text-foreground/60 border border-border"
                  }`}>
                    {s.tier}
                  </span>
                </td>
                <td className="px-5 py-4 text-foreground/70">{s.amount}</td>
                <td className="px-5 py-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    s.status === "active"
                      ? "bg-kalenjin-green/10 text-kalenjin-green border border-kalenjin-green/20"
                      : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                  }`}>
                    {s.status === "active" ? "✓ Active" : "⏳ Pending"}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="rounded-md border border-border px-3 py-1 text-xs text-foreground/60 hover:text-white hover:border-white/20 transition-all">Edit</button>
                    <button className="rounded-md border border-red-500/20 px-3 py-1 text-xs text-red-400 hover:bg-red-500/10 transition-all">Remove</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
