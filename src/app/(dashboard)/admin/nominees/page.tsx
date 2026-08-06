import type { Metadata } from "next";
import { SAMPLE_NOMINEES } from "@/lib/constants";

export const metadata: Metadata = { title: "Manage Nominees | KMA Admin" };

export default function AdminNomineesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-white">Nominees</h1>
          <p className="text-foreground/50 text-sm mt-1">{SAMPLE_NOMINEES.length} nominees registered</p>
        </div>
        <a
          href="/admin/nominees/new"
          id="add-nominee-btn"
          className="inline-flex items-center gap-2 rounded-lg bg-primary-gold text-black font-semibold text-sm px-4 py-2 hover:bg-primary-gold/90 transition-colors"
        >
          ➕ Add Nominee
        </a>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <input
          type="search"
          placeholder="Search nominees..."
          className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary-gold/50 w-64 transition"
        />
        <select className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition">
          <option value="">All Categories</option>
          <option value="best-artist">Best Artist</option>
          <option value="best-male">Best Male</option>
          <option value="best-female">Best Female</option>
        </select>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-surface overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-background/30">
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase tracking-wider">Artist</th>
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase tracking-wider">Genre</th>
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase tracking-wider">Category</th>
              <th className="text-right px-5 py-3 text-foreground/50 font-medium text-xs uppercase tracking-wider">Votes</th>
              <th className="text-right px-5 py-3 text-foreground/50 font-medium text-xs uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {SAMPLE_NOMINEES.map((nominee) => (
              <tr key={nominee.id} className="hover:bg-background/20 transition-colors">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-gold/10 border border-primary-gold/20">
                      <span className="text-primary-gold font-bold text-xs">{nominee.name.charAt(0)}</span>
                    </div>
                    <span className="font-medium text-white">{nominee.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-foreground/60">{nominee.genre}</td>
                <td className="px-5 py-3.5">
                  <span className="rounded-full bg-primary-gold/10 border border-primary-gold/20 px-2.5 py-0.5 text-xs text-primary-gold font-medium">
                    {nominee.category}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-right font-medium text-white">{nominee.votes.toLocaleString()}</td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center justify-end gap-2">
                    <button className="rounded-md border border-border px-3 py-1 text-xs text-foreground/60 hover:text-white hover:border-white/20 transition-all">
                      Edit
                    </button>
                    <button className="rounded-md border border-red-500/20 px-3 py-1 text-xs text-red-400 hover:bg-red-500/10 transition-all">
                      Remove
                    </button>
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
