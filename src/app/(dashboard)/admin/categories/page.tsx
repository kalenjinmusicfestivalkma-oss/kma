import type { Metadata } from "next";
import { AWARD_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = { title: "Manage Categories | KMA Admin" };

export default function AdminCategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-white">Categories</h1>
          <p className="text-foreground/50 text-sm mt-1">{AWARD_CATEGORIES.length} active categories</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-primary-gold text-black font-semibold text-sm px-4 py-2 hover:bg-primary-gold/90 transition-colors">
          ➕ New Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {AWARD_CATEGORIES.map((cat) => (
          <div key={cat.id} className="rounded-xl border border-border bg-surface p-5 hover:border-primary-gold/30 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-gold/10 text-primary-gold text-lg">
                🏆
              </div>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="h-7 w-7 rounded border border-border flex items-center justify-center text-xs text-foreground/50 hover:text-white hover:bg-background transition-colors">✎</button>
                <button className="h-7 w-7 rounded border border-red-500/20 flex items-center justify-center text-xs text-red-400 hover:bg-red-500/10 transition-colors">×</button>
              </div>
            </div>
            
            <h3 className="font-heading font-semibold text-white mb-1">{cat.name}</h3>
            <p className="text-foreground/40 text-xs font-mono mb-4">{cat.id}</p>
            
            <div className="flex items-center justify-between border-t border-border pt-4">
              <div className="flex flex-col">
                <span className="text-foreground/50 text-xs">Nominees</span>
                <span className="text-white font-medium text-sm">{cat.nominees}</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex flex-col text-right">
                <span className="text-foreground/50 text-xs">Total Votes</span>
                <span className="text-primary-gold font-medium text-sm">{(cat.nominees * 1420).toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
