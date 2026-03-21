import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { FadeIn } from "@/components/shared/FadeIn";
import { CTASection } from "@/components/sections/CTASection";

/* ─────────────────────── DATA ─────────────────────────── */

const FILTERS = ["All", "Brand Strategy", "Campaigns", "Digital", "Press & Events"];

const CASE_STUDIES = [
  {
    id: 1,
    title: "Elevated Living",
    category: "Brand Strategy",
    img: "campaign-2.png",
    year: "2024",
    scope: "Positioning · Messaging · Campaign Launch",
    desc: "A luxury real estate development entering a crowded Nassau market with an undifferentiated brand. We conducted a full competitive audit, redefined the target audience, repositioned the value proposition, and built the launch campaign that did exactly what it was designed to do.",
    result: "Pre-sale targets exceeded within 60 days of campaign launch.",
  },
  {
    id: 2,
    title: "The New Standard",
    category: "Campaigns",
    img: "campaign-1.png",
    year: "2024",
    scope: "Campaign Strategy · Creative Direction · Execution",
    desc: "A heritage hospitality brand losing ground to newer boutique competitors. We rebuilt their market story from the inside out — honouring what made them great while positioning them directly for the audience their competitors were winning.",
    result: "40% increase in direct booking enquiries in the first quarter.",
  },
  {
    id: 3,
    title: "Motion & Energy",
    category: "Digital",
    img: "campaign-3.png",
    year: "2023",
    scope: "Digital Strategy · Content · Paid Media",
    desc: "A lifestyle brand with a strong product and a weak digital presence. We audited their audience behaviour, built a cross-channel content and paid media strategy, and gave their visual identity somewhere to live where their buyers actually spent time.",
    result: "3× increase in engagement rate. 180% growth in qualified inbound leads.",
  },
  {
    id: 4,
    title: "Global Summit",
    category: "Press & Events",
    img: "strategy-session.png",
    year: "2023",
    scope: "Press Event Design · Media Relations · Execution",
    desc: "An international industry press event with zero room for error. We designed the concept, managed every detail of the run-of-show, handled all media relations, and created an environment that made journalists want to be in the room.",
    result: "Covered in 12 regional and international publications within 72 hours.",
  },
  {
    id: 5,
    title: "Voice of Authority",
    category: "Brand Strategy",
    img: "agency-office.png",
    year: "2023",
    scope: "Ghostwriting · Thought Leadership · Brand Voice",
    desc: "A high-profile business leader moving into a new market who needed credibility quickly and credibly. We developed their editorial voice, produced a body of thought leadership content, and placed it in the publications that mattered to the buyers they were trying to reach.",
    result: "Board-level speaking invitation received within three months of publication.",
  },
  {
    id: 6,
    title: "Island Time",
    category: "Campaigns",
    img: "campaign-1.png",
    year: "2022",
    scope: "Campaign Strategy · Script Writing · Media",
    desc: "A destination that had lost its voice in a market saturated with indistinct tourism campaigns. We stripped it back to what was genuinely true, found the emotional core that other campaigns had missed, and built something that travellers actually remembered.",
    result: "Adopted as a regional tourism marketing reference case study.",
  },
];

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((w) => w.category === activeFilter);

  return (
    <PageLayout>

      {/* ── PAGE HERO ─────────────────────────────────────── */}
      <PageHero
        eyebrow="Our Portfolio"
        headline={
          <>
            Selected{" "}
            <span className="text-primary italic">Work.</span>
          </>
        }
        intro={
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <p className="text-xl text-foreground/60 leading-[1.85]">
              Six engagements. Each one a real brief, a specific challenge, and a strategy
              built from the ground up. The results below are not projections — they are
              what happened.
            </p>
          </div>
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
                    layoutId="work-filter"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CASE STUDIES GRID ─────────────────────────────── */}
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
                      <div className="absolute top-4 left-4 z-20 flex items-center gap-3">
                        <span className="bg-black/70 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-primary px-3 py-1.5">
                          {work.category}
                        </span>
                        <span className="bg-black/50 backdrop-blur-sm text-xs font-medium text-white/60 px-3 py-1.5">
                          {work.year}
                        </span>
                      </div>
                    </div>

                    {/* Title row */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-3xl font-display font-bold group-hover:text-primary transition-colors leading-tight">
                        {work.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-2" />
                    </div>

                    {/* Scope */}
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground/35 mb-4">
                      {work.scope}
                    </p>

                    {/* Description */}
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

      {/* ── CTA ───────────────────────────────────────────── */}
      <CTASection
        eyebrow="Start Your Project"
        headline="Every case study started as a phone call."
        subtext="If you see a project above that reminds you of where your brand is — or where you want it to go — that is a useful starting point for a conversation."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/services" }}
      />

    </PageLayout>
  );
}
