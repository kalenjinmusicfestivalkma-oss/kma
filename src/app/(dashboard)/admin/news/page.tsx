import type { Metadata } from "next";

export const metadata: Metadata = { title: "Manage News | KMA Admin" };

const articles = [
  { id: 1, title: "KMA 2026 Nominations Are Now Open!",           category: "Nominations", status: "published", date: "Aug 1, 2026",  views: 4210 },
  { id: 2, title: "Safaricom Confirmed as Platinum Sponsor",       category: "Partnerships",status: "published", date: "Jul 22, 2026", views: 2890 },
  { id: 3, title: "Event Venue Announced: Eldoret Sports Club",    category: "Event",       status: "published", date: "Jul 15, 2026", views: 3120 },
  { id: 4, title: "KMA 2025: A Night to Remember — Highlights",   category: "Recap",       status: "published", date: "Dec 5, 2025",  views: 8740 },
  { id: 5, title: "Meet the 2026 Nominees — Full List Revealed",   category: "Nominations", status: "draft",     date: "Aug 7, 2026",  views: 0    },
];

export default function AdminNewsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">News</h1>
          <p className="text-foreground/50 text-sm mt-1">{articles.length} articles · {articles.filter(a => a.status === "draft").length} drafts</p>
        </div>
        <a
          href="/admin/news/new"
          id="new-article-btn"
          className="inline-flex items-center gap-2 rounded-lg bg-primary-gold text-black font-semibold text-sm px-4 py-2 hover:bg-primary-gold/90 transition-colors"
        >
          ✏️ New Article
        </a>
      </div>

      <div className="rounded-xl border border-border bg-surface overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-background/30">
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Title</th>
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Category</th>
              <th className="text-left px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Status</th>
              <th className="text-right px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Views</th>
              <th className="text-right px-5 py-3 text-foreground/50 font-medium text-xs uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {articles.map((a) => (
              <tr key={a.id} className="hover:bg-background/20 transition-colors">
                <td className="px-5 py-4 max-w-[280px]">
                  <p className="font-medium text-foreground text-sm truncate">{a.title}</p>
                  <p className="text-foreground/40 text-xs mt-0.5">{a.date}</p>
                </td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-surface-hover px-2.5 py-0.5 text-xs text-foreground/60 border border-border">
                    {a.category}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    a.status === "published"
                      ? "bg-kalenjin-green/10 text-kalenjin-green border border-kalenjin-green/20"
                      : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                  }`}>
                    {a.status === "published" ? "✓ Published" : "✎ Draft"}
                  </span>
                </td>
                <td className="px-5 py-4 text-right text-foreground/60 text-sm">{a.views > 0 ? a.views.toLocaleString() : "—"}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="rounded-md border border-border px-3 py-1 text-xs text-foreground/60 hover:text-foreground hover:border-border transition-all">
                      Edit
                    </button>
                    <button className="rounded-md border border-red-500/20 px-3 py-1 text-xs text-red-400 hover:bg-red-500/10 transition-all">
                      Delete
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
