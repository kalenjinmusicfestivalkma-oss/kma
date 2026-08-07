import type { Metadata } from "next";

export const metadata: Metadata = { title: "Manage Tickets | KMA Admin" };

const tickets = [
  { id: "TKT-001", buyer: "Jane Chebet",  phone: "+254 7** ***234", tier: "VIP",      qty: 2, amount: "KES 10,000", method: "M-Pesa", status: "paid",    date: "Aug 5, 2026" },
  { id: "TKT-002", buyer: "Brian Rotich", phone: "+254 7** ***891", tier: "Standard", qty: 4, amount: "KES 6,000",  method: "M-Pesa", status: "paid",    date: "Aug 5, 2026" },
  { id: "TKT-003", buyer: "Alice Koech",  phone: "+254 7** ***567", tier: "Platinum", qty: 1, amount: "KES 12,000", method: "M-Pesa", status: "paid",    date: "Aug 4, 2026" },
  { id: "TKT-004", buyer: "Peter Lagat",  phone: "+254 7** ***774", tier: "VIP",      qty: 3, amount: "KES 15,000", method: "M-Pesa", status: "pending", date: "Aug 6, 2026" },
  { id: "TKT-005", buyer: "Mary Sang",    phone: "+254 7** ***321", tier: "Standard", qty: 2, amount: "KES 3,000",  method: "M-Pesa", status: "refunded", date: "Aug 3, 2026" },
];

const tierSummary = [
  { tier: "Standard", sold: 680,  capacity: 1000, revenue: "KES 1.02M" },
  { tier: "VIP",      sold: 480,  capacity: 600,  revenue: "KES 2.4M"  },
  { tier: "Platinum", sold: 80,   capacity: 100,  revenue: "KES 960K"  },
];

export default function AdminTicketsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Tickets</h1>
          <p className="text-foreground/50 text-sm mt-1">1,240 sold · KES 4.38M total revenue</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface text-foreground/70 hover:text-foreground text-sm px-4 py-2 transition-all">
          ⬇️ Export
        </button>
      </div>

      {/* Tier summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tierSummary.map((t) => {
          const pct = Math.round((t.sold / t.capacity) * 100);
          return (
            <div key={t.tier} className="rounded-xl border border-border bg-surface p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-semibold text-foreground">{t.tier}</h3>
                <span className="text-primary-gold text-sm font-semibold">{t.revenue}</span>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-heading text-2xl font-bold text-foreground">{t.sold}</span>
                <span className="text-foreground/40 text-sm">/ {t.capacity} sold</span>
              </div>
              <div className="h-2 rounded-full bg-border overflow-hidden">
                <div className="h-full rounded-full bg-primary-gold" style={{ width: `${pct}%` }} />
              </div>
              <p className="text-foreground/40 text-xs mt-1">{pct}% capacity</p>
            </div>
          );
        })}
      </div>

      {/* Ticket table */}
      <div className="rounded-xl border border-border bg-surface overflow-x-auto">
        <table className="w-full text-sm min-w-[700px]">
          <thead>
            <tr className="border-b border-border bg-background/30">
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">ID</th>
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Buyer</th>
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Tier</th>
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Qty</th>
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Amount</th>
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Status</th>
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {tickets.map((t) => (
              <tr key={t.id} className="hover:bg-background/20 transition-colors">
                <td className="px-5 py-3.5 text-foreground/40 font-mono text-xs">{t.id}</td>
                <td className="px-5 py-3.5">
                  <p className="font-medium text-foreground text-xs">{t.buyer}</p>
                  <p className="text-foreground/40 text-xs">{t.phone}</p>
                </td>
                <td className="px-5 py-3.5">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    t.tier === "Platinum" ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                    : t.tier === "VIP"    ? "bg-primary-gold/10 text-primary-gold border border-primary-gold/20"
                    : "bg-surface-hover text-foreground/60 border border-border"
                  }`}>{t.tier}</span>
                </td>
                <td className="px-5 py-3.5 text-foreground/70 text-xs">{t.qty}</td>
                <td className="px-5 py-3.5 text-foreground font-medium text-xs">{t.amount}</td>
                <td className="px-5 py-3.5">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    t.status === "paid"     ? "bg-kalenjin-green/10 text-kalenjin-green border border-kalenjin-green/20"
                    : t.status === "pending" ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                    : "bg-foreground/5 text-foreground/40 border border-border"
                  }`}>
                    {t.status === "paid" ? "✓ Paid" : t.status === "pending" ? "⏳ Pending" : "↩ Refunded"}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-foreground/50 text-xs">{t.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
