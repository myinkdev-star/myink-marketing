import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { InsightCard, Insight } from "@/components/shared/InsightCard";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/button";

/* ─────────────────────── DATA ─────────────────────────── */

const FILTERS = ["All", "Strategy", "Brand", "Digital", "Press"];

const ARTICLES: Insight[] = [
  {
    id: 1,
    title: "The Anatomy of a Campaign That Actually Works",
    category: "Strategy",
    date: "March 2026",
    readTime: "7 min",
    excerpt:
      "Most campaigns are built backwards — from the creative, not the insight. Here is what it looks like when the architecture is correct, from brief to debrief.",
    featured: true,
  },
  {
    id: 2,
    title: "Why Strategy Comes Before Creativity",
    category: "Brand",
    date: "February 2026",
    readTime: "5 min",
    excerpt:
      "Every agency claims to be strategic. The real test is what they do in the first three weeks of an engagement. Strategy is not a document — it is a discipline.",
    featured: false,
  },
  {
    id: 3,
    title: "Building Brand Authority in a Market That Isn't Listening",
    category: "Digital",
    date: "January 2026",
    readTime: "6 min",
    excerpt:
      "Authority is not declared — it is demonstrated, consistently, over time. A framework for brands that want to own the conversation in their category.",
    featured: false,
  },
  {
    id: 4,
    title: "The Press Event Isn't Dead. It Just Needs a Better Reason to Exist.",
    category: "Press",
    date: "December 2025",
    readTime: "4 min",
    excerpt:
      "When designed with intention, press events are still one of the most powerful tools in a brand's communications arsenal. The difference is entirely in the brief.",
    featured: false,
  },
  {
    id: 5,
    title: "Ghostwriting: Why the Best-Known Executives Don't Write Alone",
    category: "Brand",
    date: "November 2025",
    readTime: "5 min",
    excerpt:
      "The most credible thought leaders in any industry share one thing: they say it well. What varies is how much of that they wrote themselves.",
    featured: false,
  },
  {
    id: 6,
    title: "Data vs. Intuition in Marketing: A False Choice",
    category: "Strategy",
    date: "October 2025",
    readTime: "8 min",
    excerpt:
      "Data tells you what happened. It cannot tell you what to do about it. The best agencies use data to inform their intuition — not replace it.",
    featured: false,
  },
  {
    id: 7,
    title: "What Premium Brands Understand That Others Don't",
    category: "Brand",
    date: "September 2025",
    readTime: "6 min",
    excerpt:
      "Premium is not a price point — it is a set of decisions made consistently over time. Unpacking the habits that separate brands people aspire to from brands people simply purchase.",
    featured: false,
  },
  {
    id: 8,
    title: "The Caribbean Brand Opportunity No One Is Taking Seriously Enough",
    category: "Strategy",
    date: "August 2025",
    readTime: "7 min",
    excerpt:
      "The region has extraordinary cultural assets, compelling stories, and growing economic ambition. What it has lacked is the strategic infrastructure to tell those stories at the right scale.",
    featured: false,
  },
];

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function Insights() {
  const [activeFilter, setActiveFilter] = useState("All");

  const featured = ARTICLES.find((a) => a.featured);
  const rest = ARTICLES.filter((a) => !a.featured);

  const filteredFeatured =
    activeFilter === "All" || featured?.category === activeFilter ? featured : null;

  const filteredRest =
    activeFilter === "All"
      ? rest
      : rest.filter((a) => a.category === activeFilter);

  return (
    <PageLayout>

      {/* ── PAGE HERO ─────────────────────────────────────── */}
      <PageHero
        eyebrow="The Journal"
        headline={
          <>
            Insights &{" "}
            <span className="text-primary italic">Perspectives.</span>
          </>
        }
        intro={
          <p className="text-xl text-muted-foreground leading-[1.72] max-w-2xl">
            Marketing intelligence from the team at M.Y. INK. We write when we have
            something worth saying — not on a publishing schedule.
          </p>
        }
      />

      {/* ── FILTER BAR ────────────────────────────────────── */}
      <div className="bg-background sticky top-[72px] z-30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`relative py-4 px-5 text-xs font-bold uppercase tracking-widest transition-colors shrink-0 ${
                  activeFilter === f
                    ? "text-primary"
                    : "text-foreground/45 hover:text-foreground"
                }`}
              >
                {f}
                {activeFilter === f && (
                  <motion.div
                    layoutId="insights-filter"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTENT ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured article */}
          {filteredFeatured && (
            <FadeIn className="mb-20">
              <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border hover:border-primary transition-colors duration-300 cursor-pointer">
                {/* Image */}
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-secondary">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                  <img
                    src={`${import.meta.env.BASE_URL}images/strategy-session.png`}
                    alt={filteredFeatured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">
                        {filteredFeatured.category}
                      </span>
                      <span className="text-foreground/30">·</span>
                      <span className="text-sm text-foreground/40">{filteredFeatured.date}</span>
                      <span className="text-foreground/30">·</span>
                      <span className="flex items-center gap-1 text-sm text-foreground/40">
                        <Clock className="w-3 h-3" /> {filteredFeatured.readTime}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6 group-hover:text-primary transition-colors">
                      {filteredFeatured.title}
                    </h2>
                    <p className="text-muted-foreground leading-[1.72] text-lg">
                      {filteredFeatured.excerpt}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center gap-3 font-bold text-sm uppercase tracking-widest group-hover:text-primary transition-colors">
                    Read Article
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Article grid */}
          {filteredRest.length > 0 && (
            <>
              <FadeIn className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/35">
                  {activeFilter === "All" ? "All Articles" : activeFilter}
                </p>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRest.map((article, idx) => (
                  <FadeIn key={article.id} delay={idx * 0.07}>
                    <InsightCard article={article} />
                  </FadeIn>
                ))}
              </div>
            </>
          )}

          {filteredRest.length === 0 && !filteredFeatured && (
            <div className="py-32 text-center text-foreground/40 text-lg">
              No articles in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────── */}
      <section className="py-28 bg-secondary text-secondary-foreground dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-5">
                  Stay Sharp
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5 leading-tight">
                  Thinking worth reading, when we have it.
                </h2>
                <p className="text-secondary-foreground/55 leading-[1.85]">
                  We write when we have something genuinely useful to say — which means you
                  will not hear from us often. But when you do, it will be worth the time.
                </p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow bg-white/5 border border-white/15 px-5 py-4 text-secondary-foreground placeholder:text-secondary-foreground/35 focus:outline-none focus:border-primary transition-colors text-base"
                    required
                  />
                  <Button type="submit" className="shrink-0 px-8">
                    Subscribe <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
                <p className="mt-4 text-xs text-secondary-foreground/30 tracking-wide">
                  No noise. No publishing schedule. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </PageLayout>
  );
}
