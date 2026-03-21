import { useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

/* ───────────────────────────── DATA ───────────────────────────── */

const FILTERS = ["All", "Brand Strategy", "Campaigns", "Digital", "Press & Events"];

const CASE_STUDIES = [
  {
    id: 1,
    title: "Elevated Living",
    category: "Brand Strategy",
    img: "campaign-2.png",
    year: "2024",
    scope: "Positioning · Messaging · Campaign Launch",
    desc: "A complete brand strategy overhaul and market repositioning for a luxury real estate development entering a competitive Nassau market. We redefined their audience, reframed their value proposition, and built the campaign that launched them to sold-out status.",
    result: "Pre-sale targets exceeded in 60 days.",
  },
  {
    id: 2,
    title: "The New Standard",
    category: "Campaigns",
    img: "campaign-1.png",
    year: "2024",
    scope: "Campaign Strategy · Creative Direction · Execution",
    desc: "Heritage hospitality brand losing ground to newer boutique competitors. We rebuilt their market story from the inside out — developing a campaign that honoured their history while positioning them squarely for the modern luxury traveller.",
    result: "40% increase in direct booking enquiries within the first quarter.",
  },
  {
    id: 3,
    title: "Motion & Energy",
    category: "Digital",
    img: "campaign-3.png",
    year: "2023",
    scope: "Digital Strategy · Content · Paid Media",
    desc: "A lifestyle brand with strong product but weak digital presence. We built a cross-channel content and paid media strategy that connected their visual identity to platforms where their audience actually lived — and drove record engagement in the process.",
    result: "3× engagement rate increase. 180% growth in qualified leads.",
  },
  {
    id: 4,
    title: "Global Summit",
    category: "Press & Events",
    img: "strategy-session.png",
    year: "2023",
    scope: "Press Event Design · Media Relations · Execution",
    desc: "End-to-end design and management of an international industry press event that brought together media, thought leaders, and decision-makers under one roof. Every detail — from the run-of-show to the media kits — executed to a premium standard.",
    result: "Coverage in 12+ regional and international publications.",
  },
  {
    id: 5,
    title: "Voice of Authority",
    category: "Brand Strategy",
    img: "agency-office.png",
    year: "2023",
    scope: "Ghostwriting · Thought Leadership · Brand Voice",
    desc: "Executive positioning project for a top-tier business leader looking to establish credibility in a new market. We developed their editorial voice, produced a suite of thought leadership content, and placed their byline in the publications that mattered.",
    result: "Board-level speaking invitation received within 3 months of publication.",
  },
  {
    id: 6,
    title: "Island Time",
    category: "Campaigns",
    img: "campaign-1.png",
    year: "2022",
    scope: "Campaign Strategy · Script Writing · Media",
    desc: "A vibrant, emotion-led tourism campaign for a destination that had lost its story in a sea of competitive noise. We stripped it back to what was true, built a campaign around authentic moments, and gave the destination a voice that travellers actually responded to.",
    result: "Campaign adopted as regional tourism reference case study.",
  },
];

/* ─────────────────────────── HELPERS ─────────────────────────── */

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────── PAGE ───────────────────────────── */

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((w) => w.category === activeFilter);

  return (
    <PageLayout>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="pt-40 pb-16 md:pt-52 md:pb-20 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-px h-full bg-primary/20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            className="text-xs font-bold uppercase tracking-widest text-primary mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            Our Portfolio
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-[80px] font-display font-bold leading-[1.04]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
            >
              Selected{" "}
              <span className="text-primary italic">Work.</span>
            </motion.h1>

            <motion.p
              className="text-xl text-foreground/60 leading-[1.85] lg:pb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
            >
              A curated selection of brand strategy, campaign, and digital work. Each project
              represents a real problem solved with strategic thinking and premium execution.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ───────────────────────────────────────── */}
      <div className="bg-background sticky top-[72px] z-30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto no-scrollbar">
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
                    layoutId="filter-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CASE STUDIES ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
            <AnimatePresence mode="popLayout">
              {filtered.map((work, idx) => (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <div className="group cursor-pointer">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-secondary">
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                      <img
                        src={`${import.meta.env.BASE_URL}images/${work.img}`}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlaid tag */}
                      <div className="absolute top-4 left-4 z-20 flex items-center gap-3">
                        <span className="bg-black/70 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-primary px-3 py-1.5">
                          {work.category}
                        </span>
                        <span className="bg-black/50 backdrop-blur-sm text-xs font-medium text-white/60 px-3 py-1.5">
                          {work.year}
                        </span>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-3xl font-display font-bold group-hover:text-primary transition-colors leading-tight">
                        {work.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-2" />
                    </div>

                    <p className="text-xs font-bold uppercase tracking-widest text-foreground/35 mb-4">
                      {work.scope}
                    </p>

                    <p className="text-foreground/60 leading-[1.85] mb-5">{work.desc}</p>

                    {/* Result pill */}
                    <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 px-4 py-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-foreground/70">{work.result}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-32 text-center text-foreground/40 text-lg">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-secondary text-secondary-foreground dark border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-5">
                  Start Your Project
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-5">
                  Ready to be the next case study worth talking about?
                </h2>
                <p className="text-secondary-foreground/55 leading-[1.85]">
                  We build campaigns, strategies, and brand stories that actually get results.
                  If you're serious about what comes next for your brand, let's talk.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto px-8 group">
                    Start a Project
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto px-8 border-white/20 text-secondary-foreground hover:bg-white hover:text-secondary"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </PageLayout>
  );
}
