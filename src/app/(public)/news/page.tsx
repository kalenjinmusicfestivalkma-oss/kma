import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "News | Kalenjin Music Awards 2026",
  description: "Latest news, updates, and announcements from the Kalenjin Music Awards 2026.",
};

const newsArticles = [
  {
    id:       1,
    slug:     "kma-2026-nominations-open",
    category: "Nominations",
    date:     "August 1, 2026",
    title:    "KMA 2026 Nominations Are Now Open!",
    excerpt:  "We are thrilled to announce that nominations for the 5th annual Kalenjin Music Awards are officially open. Artists in all 20 categories can now be nominated by the public.",
    readTime: "3 min read",
  },
  {
    id:       2,
    slug:     "safaricom-headline-sponsor",
    category: "Partnerships",
    date:     "July 22, 2026",
    title:    "Safaricom Confirmed as Platinum Sponsor for KMA 2026",
    excerpt:  "We are proud to welcome Safaricom as the headline platinum sponsor for this year's ceremony. Their support will help us deliver an unforgettable night for Kalenjin music lovers.",
    readTime: "2 min read",
  },
  {
    id:       3,
    slug:     "event-venue-announced",
    category: "Event",
    date:     "July 15, 2026",
    title:    "Event Venue Announced: Eldoret Sports Club",
    excerpt:  "The 2026 ceremony will take place at the iconic Eldoret Sports Club on September 20th. Capacity is limited — get your tickets early!",
    readTime: "2 min read",
  },
  {
    id:       4,
    slug:     "kma-2025-highlights",
    category: "Recap",
    date:     "December 5, 2025",
    title:    "KMA 2025: A Night to Remember — Full Highlights",
    excerpt:  "The 4th annual Kalenjin Music Awards was an unforgettable celebration of talent. Solomon Sang took home the biggest prize of the night. Here's everything that happened.",
    readTime: "5 min read",
  },
];

export default function NewsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 px-4 md:px-6 text-center">
        <div className="container mx-auto max-w-2xl">
          <span className="text-primary-gold text-sm font-semibold uppercase tracking-widest">Stay Updated</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mt-4 mb-4 text-white">
            Latest <span className="text-primary-gold">News</span>
          </h1>
          <p className="text-foreground/60 text-lg">
            Announcements, artist stories, and updates from the world of Kalenjin music.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12 px-4 md:px-6 pb-24">
        <div className="container mx-auto max-w-4xl">
          {/* Featured article */}
          <div className="mb-8 rounded-2xl border border-primary-gold/30 bg-surface overflow-hidden hover:border-primary-gold/50 transition-colors group cursor-pointer">
            <div className="h-56 bg-gradient-to-br from-kalenjin-maroon/20 via-background to-primary-gold/10 flex items-center justify-center">
              <span className="text-6xl">📰</span>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="rounded-full bg-primary-gold/10 border border-primary-gold/30 px-3 py-0.5 text-xs text-primary-gold font-medium">
                  {newsArticles[0].category}
                </span>
                <span className="text-foreground/40 text-xs">{newsArticles[0].date} · {newsArticles[0].readTime}</span>
              </div>
              <h2 className="font-heading text-2xl font-bold text-white group-hover:text-primary-gold transition-colors mb-3">
                {newsArticles[0].title}
              </h2>
              <p className="text-foreground/60 leading-relaxed mb-5">{newsArticles[0].excerpt}</p>
              <Button variant="outline" size="sm" asChild>
                <Link href={`/news/${newsArticles[0].slug}`}>Read More →</Link>
              </Button>
            </div>
          </div>

          {/* Other articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {newsArticles.slice(1).map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="group rounded-xl border border-border bg-surface overflow-hidden hover:border-primary-gold/30 transition-all"
              >
                <div className="h-36 bg-gradient-to-br from-kalenjin-green/10 via-background to-kalenjin-maroon/10 flex items-center justify-center text-3xl">
                  📣
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="rounded-full bg-surface-hover px-2.5 py-0.5 text-xs text-foreground/60">{article.category}</span>
                    <span className="text-foreground/30 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm group-hover:text-primary-gold transition-colors leading-snug mb-2">
                    {article.title}
                  </h3>
                  <p className="text-foreground/50 text-xs leading-relaxed line-clamp-2">{article.excerpt}</p>
                  <p className="text-foreground/30 text-xs mt-3">{article.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
