import { useState } from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

const ARTICLES = [
  { id: 1, title: "The Anatomy of a Campaign That Actually Works", category: "Strategy", date: "Oct 12, 2024" },
  { id: 2, title: "Why Strategy Comes Before Creativity", category: "Brand", date: "Sep 28, 2024" },
  { id: 3, title: "Building Brand Authority in a Noisy Market", category: "Digital", date: "Sep 15, 2024" },
  { id: 4, title: "The Evolution of the Modern Press Event", category: "Press", date: "Aug 30, 2024" },
  { id: 5, title: "Ghostwriting: The Secret Weapon of CEOs", category: "Brand", date: "Aug 12, 2024" },
  { id: 6, title: "Data vs. Intuition in Marketing Decisions", category: "Strategy", date: "Jul 22, 2024" },
];

export default function Insights() {
  return (
    <PageLayout>
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-16">
            Insights & <span className="text-primary italic">Perspectives</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {ARTICLES.map((article) => (
                <article key={article.id} className="group cursor-pointer border border-border p-6 bg-card hover:border-primary transition-colors">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{article.category}</span>
                    <span className="text-sm text-foreground/50">{article.date}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold leading-tight mb-4 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <Link href="/contact" className="text-sm font-bold uppercase tracking-wider underline underline-offset-4 decoration-primary/30 group-hover:decoration-primary">
                    Read Article
                  </Link>
                </article>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-secondary text-secondary-foreground dark p-8 sticky top-32">
                <h3 className="text-2xl font-display font-bold text-white mb-4">The Journal</h3>
                <p className="text-secondary-foreground/70 mb-8">
                  Get strategic thinking, agency news, and marketing insights delivered directly to your inbox. No fluff, just value.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
