import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowUpRight, ArrowRight, MoveRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { FadeIn } from "@/components/shared/FadeIn";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { useContent } from "@/hooks/useContent";

interface WorkPageContent {
  page_eyebrow: string;
  headline: string;
  headline_italic: string;
  intro_col1: string;
  intro_col2: string;
  social_note: string;
}

/* ─────────────────────── DATA MODEL ───────────────────── */

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  img: string;
  accentColor?: string;
  year: string;
  scope: string;
  sector: string;
  pullQuote: string;
  challenge: string;
  strategy: string;
  execution: string;
  result: string;
  resultMetric?: string;
  featured?: boolean;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "Elevated Living",
    category: "Brand Strategy",
    img: "campaign-2.png",
    year: "2024",
    scope: "Positioning · Messaging Architecture · Campaign Launch",
    sector: "Real Estate · Luxury",
    featured: true,
    pullQuote:
      "The brief was simple: make the right people feel like this was the only decision that made sense.",
    challenge:
      "A luxury residential development entering Nassau's most competitive real estate cycle with a brand that said nothing specific to anyone. Generic luxury positioning in a market where every competitor claimed the same thing.",
    strategy:
      "We identified a segment of high-net-worth buyers the competing developments were systematically ignoring: experienced investors who had lived in premium residences before and cared less about aspiration and more about curation. We repositioned the brand entirely for that audience.",
    execution:
      "Complete messaging architecture. New brand voice. A campaign suite across print, digital, and out-of-home that treated the target audience as the sophisticated buyers they actually were. Every asset built to the same strategic brief.",
    result:
      "Pre-sale targets exceeded within 60 days of launch. The campaign became the internal benchmark the client now applies to all future marketing decisions.",
    resultMetric: "Pre-sale targets exceeded in 60 days",
  },
  {
    id: 2,
    title: "The New Standard",
    category: "Campaigns",
    img: "campaign-1.png",
    year: "2024",
    scope: "Campaign Strategy · Creative Direction · Full Execution",
    sector: "Hospitality · Heritage",
    pullQuote:
      "Legacy is only an advantage if the right people understand why it matters.",
    challenge:
      "A heritage hospitality brand with genuine quality and decades of guest loyalty, losing bookings to newer boutique competitors who were better at telling their story. The brand had stopped speaking to the guest they actually wanted.",
    strategy:
      "We separated the brand's story from its history. The history was a credential — not the campaign. The campaign focused on the experience the brand consistently delivered and the type of guest who valued that over novelty.",
    execution:
      "A full creative campaign in three phases: awareness, consideration, conversion. Photography direction, copywriting, digital placements, and a repositioned loyalty narrative that reactivated lapsed guests alongside new acquisition.",
    result:
      "40% increase in direct booking enquiries in the first quarter. The repositioned loyalty programme saw a 2.3× increase in re-engagement within 90 days.",
    resultMetric: "+40% direct booking enquiries, Q1",
  },
  {
    id: 3,
    title: "Motion & Energy",
    category: "Digital",
    img: "campaign-3.png",
    year: "2023",
    scope: "Digital Strategy · Content Direction · Paid Media",
    sector: "Lifestyle · Consumer",
    pullQuote:
      "They had a product people loved and a digital presence people ignored.",
    challenge:
      "A lifestyle brand with strong product-market fit and a loyal offline customer base, but essentially no effective digital presence. The social channels existed but generated no measurable interest from the people they were trying to reach.",
    strategy:
      "Audience behaviour audit across all existing platforms. We discovered the brand's existing customers were highly active on platforms the brand had written off as irrelevant. We built the strategy from where the audience already was, not where the brand assumed they should be.",
    execution:
      "A 90-day content calendar. Paid media strategy with weekly optimisation cycles. New visual language built specifically for digital consumption. Platform-specific copy direction that matched how the audience actually communicated.",
    result:
      "3× increase in platform engagement rate. 180% growth in qualified inbound leads. Monthly content views increased from under 10,000 to over 200,000 in six months.",
    resultMetric: "3× engagement · 180% lead growth",
  },
  {
    id: 4,
    title: "The Summit",
    category: "Press & Events",
    img: "strategy-session.png",
    year: "2023",
    scope: "Event Concept · Press Strategy · Full Production Oversight",
    sector: "Professional Services · B2B",
    pullQuote:
      "An event is only as good as the conversations it produces the week after.",
    challenge:
      "An international industry gathering that had become formulaic — attended out of obligation, not interest. The client needed to relaunch it as the definitive regional forum for senior decision-makers in their sector.",
    strategy:
      "We redesigned the event from the conversation it needed to produce backward. If the goal was press coverage and peer-to-peer credibility among senior buyers, every element of the event had to be built to generate those specific outcomes — not just fill a room.",
    execution:
      "Full event concept, programming, and run-of-show design. Press strategy targeting regional and international trade publications. Speaker selection as an editorial exercise, not a logistics one. On-site communications team managing real-time media.",
    result:
      "Covered by 14 regional and international publications within 72 hours. Net Promoter Score among senior attendees up from 34 to 81. Three client partnerships originated from attendee introductions made at the event.",
    resultMetric: "14 publications · NPS 34 → 81",
  },
  {
    id: 5,
    title: "Voice of Authority",
    category: "Brand Strategy",
    img: "agency-office.png",
    year: "2023",
    scope: "Thought Leadership Strategy · Ghostwriting · Editorial Placement",
    sector: "Professional Services · Finance",
    pullQuote:
      "Credibility in a new market is not declared — it is demonstrated, in public, over time.",
    challenge:
      "A senior executive entering a new regional market where no one knew their name. They had the track record to be influential — but no presence in the publications, forums, or conversations that shaped the sector they wanted to lead.",
    strategy:
      "We treated their personal brand as an editorial project. The strategy was to place the right ideas in front of the right people in the right sequence — so that by the time they sought a significant mandate in the market, the market already knew who they were.",
    execution:
      "Six months of strategic thought leadership content. We ghostwrote op-eds, white papers, and commentary pieces placed across regional business publications. A speaking track that compounded the written work. Clear editorial calendar tied to key industry moments.",
    result:
      "Board-level advisory invitation within three months. Two unsolicited partnership enquiries from sector leaders. Feature profile published in the region's leading business magazine.",
    resultMetric: "Board invitation · 3 months to influence",
  },
  {
    id: 6,
    title: "Island Time",
    category: "Campaigns",
    img: "campaign-1.png",
    year: "2022",
    scope: "Campaign Strategy · Script Writing · Media Planning",
    sector: "Tourism · Destination",
    pullQuote:
      "The brief was to make people choose here first. Not eventually. First.",
    challenge:
      "A destination that had been outspent by larger regional competitors for years and had responded by trying to compete on the same terms — and losing. The brand had stopped saying anything distinctly true about itself.",
    strategy:
      "We stopped competing on category terms entirely. Instead of claiming the same 'paradise' attributes as every competing destination, we built the campaign around the specific emotional truth that distinguished this destination's experience from anything comparable in the region.",
    execution:
      "Full campaign concept. Original script writing for broadcast and digital video. Photography direction that captured the specific atmospheric quality we had identified as the campaign's emotional core. Media planning weighted toward high-intent channels.",
    result:
      "The campaign was adopted as a regional tourism marketing reference case study. Visitor bookings in the target demographic increased 34% year-over-year. Campaign creative extended for a second cycle — an unusual outcome in destination marketing.",
    resultMetric: "+34% bookings · Extended for second cycle",
  },
];

const FEATURED = CASE_STUDIES.find((c) => c.featured)!;
const FILTERS = ["All", "Brand Strategy", "Campaigns", "Digital", "Press & Events"];

/* ─── Featured Case Study ───────────────────────────────── */

function FeaturedCaseStudy({ study }: { study: CaseStudy }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-background border-b border-border">

      {/* Full-bleed image */}
      <div className="relative h-[60vh] md:h-[75vh] overflow-hidden bg-secondary">
        <motion.img
          src={`${import.meta.env.BASE_URL}images/${study.img}`}
          alt={study.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.06 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

        {/* Top meta */}
        <motion.div
          className="absolute top-8 left-8 md:top-10 md:left-12 flex items-center gap-4"
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3 }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-black/50 backdrop-blur-sm px-3 py-1.5">
            Featured Work
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 bg-black/30 backdrop-blur-sm px-3 py-1.5">
            {study.category} · {study.year}
          </span>
        </motion.div>

        {/* Bottom copy */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-12 pb-10 md:pb-14">
          <motion.p
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {study.sector}
          </motion.p>
          <motion.h2
            className="font-display font-bold text-white leading-[1.0] mb-5"
            style={{ fontSize: "clamp(36px, 6vw, 88px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            {study.title}
          </motion.h2>
          <motion.p
            className="text-white/50 text-base md:text-lg italic max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            "{study.pullQuote}"
          </motion.p>
        </div>
      </div>

      {/* Four-part case structure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {(
            [
              { label: "The Challenge", body: study.challenge },
              { label: "The Strategy", body: study.strategy },
              { label: "The Execution", body: study.execution },
              { label: "The Result", body: study.result, highlight: true },
            ] as { label: string; body: string; highlight?: boolean }[]
          ).map((col, idx) => (
            <FadeIn key={col.label} delay={idx * 0.1}>
              <div className="px-0 md:px-8 py-10 first:pl-0 last:pr-0">
                <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 ${col.highlight ? "text-primary" : "text-foreground/35"}`}>
                  {col.label}
                </p>
                <p className={`text-sm leading-[1.72] ${col.highlight ? "text-foreground" : "text-muted-foreground"}`}>
                  {col.body}
                </p>
                {col.highlight && study.resultMetric && (
                  <div className="mt-5 inline-flex items-center gap-2 border border-primary/25 bg-primary/5 px-3 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-xs font-bold text-foreground/70">{study.resultMetric}</span>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Scope strip */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/30">
              Scope: {study.scope}
            </p>
            <Link href="/contact">
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-foreground/40 hover:text-primary transition-colors group">
                Discuss a similar brief
                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Case Study Card ───────────────────────────────────── */

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden mb-0 bg-secondary">
        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors duration-500 z-10" />
        <img
          src={`${import.meta.env.BASE_URL}images/${study.img}`}
          alt={study.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Category + year tag */}
        <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary bg-black/65 backdrop-blur-sm px-3 py-1.5">
            {study.category}
          </span>
          <span className="text-[10px] font-bold tracking-widest text-white/45 bg-black/40 backdrop-blur-sm px-2.5 py-1.5">
            {study.year}
          </span>
        </div>
        {/* Hover arrow */}
        <div className="absolute bottom-5 right-5 z-20">
          <div className="w-10 h-10 bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="pt-7 pb-10 border-b border-border">
        {/* Sector label */}
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30 mb-3">
          {study.sector}
        </p>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-display font-bold group-hover:text-primary transition-colors leading-tight mb-6">
          {study.title}
        </h3>

        {/* Challenge / Result mini structure */}
        <div className="grid grid-cols-1 gap-5">
          {/* Challenge */}
          <div className="flex gap-4">
            <div className="w-px bg-border shrink-0 mt-1 self-stretch" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/30 mb-1.5">
                Challenge
              </p>
              <p className="text-sm text-muted-foreground leading-[1.72]">
                {study.challenge.split(".")[0]}.
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="flex gap-4">
            <div className="w-px bg-primary/40 shrink-0 mt-1 self-stretch" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary mb-1.5">
                Result
              </p>
              <p className="text-sm text-muted-foreground leading-[1.72]">
                {study.result.split(".")[0]}.
              </p>
              {study.resultMetric && (
                <span className="inline-flex items-center gap-1.5 mt-2 text-[10px] font-bold uppercase tracking-widest text-primary/70 bg-primary/8 px-2.5 py-1">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {study.resultMetric}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Scope */}
        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/40">
          {study.scope}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Page ──────────────────────────────────────────────── */

export default function Work() {
  const { data: workContent } = useContent<WorkPageContent>("work.md");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((w) => w.category === activeFilter);

  const filteredNonFeatured = filtered.filter((c) => !c.featured || activeFilter !== "All");

  return (
    <PageLayout>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-24 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-px h-full bg-primary/15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            className="text-xs font-bold uppercase tracking-widest text-primary mb-7"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            {workContent.page_eyebrow || "Our Work"}
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-[80px] font-display font-bold leading-[1.02] max-w-4xl mb-10"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            {workContent.headline || "Work that earns"}
            <br />
            <span className="text-primary italic">
              {workContent.headline_italic || "its results."}
            </span>
          </motion.h1>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            <p className="text-xl text-muted-foreground leading-[1.72]">
              {workContent.intro_col1 ||
                "Six engagements. Each one a real brief, a specific challenge, and a strategy built from the ground up. The results listed are not projections — they are what happened."}
            </p>
            <p className="text-xl text-muted-foreground leading-[1.72]">
              {workContent.intro_col2 ||
                "Every case study follows the same structure: the problem as it actually presented itself, the strategy we built to address it, how we executed it, and what it produced."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED CASE STUDY ───────────────────────────── */}
      {activeFilter === "All" && <FeaturedCaseStudy study={FEATURED} />}

      {/* ── HOW WE THINK STRIP ────────────────────────────── */}
      {activeFilter === "All" && (
        <FadeIn>
          <div className="bg-secondary text-secondary-foreground dark py-14 border-b border-white/8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                    How We Work
                  </p>
                  <p className="text-xl md:text-2xl font-display font-bold text-white leading-[1.35] max-w-3xl">
                    Every engagement begins with the same question: what is this brand
                    trying to own in its market — and what is the honest gap between where
                    it is and where that position actually requires it to be?
                  </p>
                </div>
                <div className="lg:col-span-4 flex lg:justify-end">
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="border-white/20 text-secondary-foreground hover:bg-white hover:text-secondary"
                    >
                      Our Disciplines <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      )}

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
                    : "text-foreground/65 hover:text-foreground"
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

      {/* ── CASE STUDY GRID ───────────────────────────────── */}
      <section className="pt-16 pb-28 md:pb-40 bg-background min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Grid header */}
          <FadeIn className="mb-12">
            <div className="flex items-end justify-between gap-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/55">
                {activeFilter === "All"
                  ? `All Work — ${CASE_STUDIES.length} Engagements`
                  : `${activeFilter} — ${filtered.length} ${filtered.length === 1 ? "Engagement" : "Engagements"}`}
              </p>
              <div className="h-px flex-grow bg-border max-w-xs" />
            </div>
          </FadeIn>

          {/* Cards */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
            <AnimatePresence mode="popLayout">
              {filteredNonFeatured.map((work, idx) => (
                <CaseStudyCard key={work.id} study={work} index={idx} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredNonFeatured.length === 0 && (
            <div className="py-32 text-center">
              <p className="text-foreground/30 text-lg">
                No engagements in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── PHILOSOPHY BAR ────────────────────────────────── */}
      <FadeIn>
        <div className="bg-card border-t border-border py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
              {[
                {
                  label: "Our approach",
                  body: "We treat every case study as a strategic document. Not a portfolio piece — a proof of thinking.",
                },
                {
                  label: "On results",
                  body: "We only report what is independently verifiable. No projected outcomes, no inflated attribution.",
                },
                {
                  label: "On disclosure",
                  body: "Client details are published only with explicit permission. Some of our best work is not shown here.",
                },
              ].map((item, idx) => (
                <div key={idx} className="px-0 md:px-8 py-6 first:pl-0 last:pr-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">
                    {item.label}
                  </p>
                  <p className="text-sm text-muted-foreground leading-[1.72]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ── SOCIAL INVITE ─────────────────────────────────── */}
      <FadeIn>
        <div className="py-16 border-t border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <p className="text-[17px] text-muted-foreground leading-[1.72] max-w-2xl">
                {workContent.social_note ||
                  "It is a difficult task picking just a few of our client projects to display. Please follow us on Facebook, Instagram, YouTube or LinkedIn to see what we are up to!"}
              </p>
              <div className="flex items-center gap-3 shrink-0">
                {[
                  { label: "Facebook", href: "https://www.facebook.com" },
                  { label: "Instagram", href: "https://www.instagram.com" },
                  { label: "YouTube", href: "https://www.youtube.com" },
                  { label: "LinkedIn", href: "https://www.linkedin.com" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold uppercase tracking-[0.15em] text-foreground/55 hover:text-primary transition-colors duration-200 border border-border px-3.5 py-2 hover:border-primary"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ── CTA ───────────────────────────────────────────── */}
      <CTASection
        eyebrow="Start Your Project"
        headline={
          <>
            Every case study started{" "}
            <span className="text-primary italic">as a conversation.</span>
          </>
        }
        subtext="If you see a challenge above that resembles yours — or a result that represents where your brand needs to go — that is a useful place to begin. We'd like to hear about it."
        primaryCta={{ label: "Begin a Conversation", href: "/contact" }}
        secondaryCta={{ label: "Our Disciplines", href: "/services" }}
        note="We review every enquiry personally and respond within 48 business hours."
      />

    </PageLayout>
  );
}
