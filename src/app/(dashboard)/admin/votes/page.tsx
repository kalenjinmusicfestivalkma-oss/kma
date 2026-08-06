import type { Metadata } from "next";

export const metadata: Metadata = { title: "Manage Votes | KMA Admin" };

const votes = [
  { id: "V-001", user: "Jane Chebet",    phone: "+254 7** ***234", category: "Best Artist",   nominee: "Chebet Alai",      time: "2026-08-06 19:42",  ip: "41.xxx.xxx.12",  status: "verified" },
  { id: "V-002", user: "Brian Rotich",   phone: "+254 7** ***891", category: "Best Female",   nominee: "Linet Chebet",     time: "2026-08-06 19:39",  ip: "41.xxx.xxx.45",  status: "verified" },
  { id: "V-003", user: "Alice Koech",    phone: "+254 7** ***567", category: "Best Upcoming", nominee: "Mercy Cherono",    time: "2026-08-06 19:35",  ip: "197.xxx.xxx.8",  status: "verified" },
  { id: "V-004", user: "Unknown",        phone: "+254 7** ***321", category: "Best Artist",   nominee: "Jua Cali",         time: "2026-08-06 19:30",  ip: "102.xxx.xxx.99", status: "flagged"  },
  { id: "V-005", user: "Peter Lagat",    phone: "+254 7** ***774", category: "Best Gospel",   nominee: "Solomon Sang",     time: "2026-08-06 19:22",  ip: "41.xxx.xxx.23",  status: "verified" },
];

export default function AdminVotesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-white">Votes</h1>
          <p className="text-foreground/50 text-sm mt-1">52,341 total votes • 3 flagged for review</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface text-foreground/70 hover:text-white text-sm px-4 py-2 transition-all">
          ⬇️ Export CSV
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Today",   value: "1,204", icon: "📅" },
          { label: "Verified",value: "52,338",icon: "✅" },
          { label: "Flagged", value: "3",     icon: "🚩" },
          { label: "Unique Users", value: "18,892", icon: "👥" },
        ].map((c) => (
          <div key={c.label} className="rounded-xl border border-border bg-surface p-4 text-center">
            <div className="text-2xl mb-1">{c.icon}</div>
            <p className="font-heading text-xl font-bold text-white">{c.value}</p>
            <p className="text-foreground/50 text-xs mt-0.5">{c.label}</p>
          </div>
        ))}
      </div>

      {/* Votes table */}
      <div className="rounded-xl border border-border bg-surface overflow-x-auto">
        <table className="w-full text-sm min-w-[700px]">
          <thead>
            <tr className="border-b border-border bg-background/30">
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">ID</th>
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Voter</th>
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Category → Nominee</th>
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Time</th>
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Status</th>
              <th className="text-right px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {votes.map((v) => (
              <tr key={v.id} className={`hover:bg-background/20 transition-colors ${v.status === "flagged" ? "bg-red-500/5" : ""}`}>
                <td className="px-5 py-3.5 text-foreground/40 font-mono text-xs">{v.id}</td>
                <td className="px-5 py-3.5">
                  <p className="font-medium text-white text-xs">{v.user}</p>
                  <p className="text-foreground/40 text-xs">{v.phone}</p>
                </td>
                <td className="px-5 py-3.5">
                  <p className="text-foreground/60 text-xs">{v.category}</p>
                  <p className="font-medium text-white text-xs">{v.nominee}</p>
                </td>
                <td className="px-5 py-3.5 text-foreground/50 text-xs">{v.time}</td>
                <td className="px-5 py-3.5">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    v.status === "verified"
                      ? "bg-kalenjin-green/10 text-kalenjin-green border border-kalenjin-green/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}>
                    {v.status === "verified" ? "✓ Verified" : "⚠ Flagged"}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-right">
                  {v.status === "flagged" && (
                    <button className="text-xs text-red-400 hover:text-red-300 transition-colors border border-red-500/20 rounded-md px-2.5 py-1 hover:bg-red-500/10">
                      Review
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
