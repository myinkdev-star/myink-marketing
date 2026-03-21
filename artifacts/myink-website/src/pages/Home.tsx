import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

/* ─────────────────────────── DATA ─────────────────────────── */

const MARQUEE_ITEMS = [
  "Brand Strategy",
  "Campaign Execution",
  "Advertising Concepts",
  "Ghostwriting",
  "Press Events",
  "Digital Strategy",
  "Script Writing",
  "Media Relations",
];

const SERVICE_ROWS = [
  {
    num: "01",
    category: "Strategy & Planning",
    headline: "Before a single decision is made.",
    desc: "We don't begin with creative. We begin with your market, your competitors, and the specific advantage your brand has — or could have. Every engagement starts here.",
  },
  {
    num: "02",
    category: "Campaigns & Advertising",
    headline: "Campaigns built to convert, not just impress.",
    desc: "Every creative decision has a strategic rationale behind it. We build campaigns from the insight outward and measure the outcomes that matter to your business.",
  },
  {
    num: "03",
    category: "Editorial & Voice",
    headline: "The words that separate authorities from the rest.",
    desc: "Your reputation is built by what you say and how you say it. We craft the written and spoken work that makes your brand impossible to dismiss — every word deliberate.",
  },
  {
    num: "04",
    category: "Media & Press",
    headline: "Stories placed where they shift perception.",
    desc: "Earned media is more valuable than paid — and harder to get right. We design press strategies that generate coverage that does more than mention a brand: it repositions one.",
  },
  {
    num: "05",
    category: "Digital Execution",
    headline: "Every platform that matters. Not all of them.",
    desc: "We identify where your audience actually lives, build a clear strategy for each platform, and execute with data-backed discipline. Digital without noise.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Senior thinking at every stage.",
    desc: "The senior people who present the work are the same people who build it. No layers. No hand-offs to juniors after the pitch.",
  },
  {
    title: "Built for your brand. Not repurposed from another.",
    desc: "We do not have a playbook we reapply to new clients. Every strategy is built from the ground up around your specific market, audience, and competitive context.",
  },
  {
    title: "Creative that serves the strategy.",
    desc: "The creative is never the starting point — it is the destination the strategy leads to. Bold, sharp, and always in that order.",
  },
  {
    title: "Accountability to outcomes, not outputs.",
    desc: "We define what success looks like before we begin, and we hold ourselves to it. We measure the things that move your business, not the metrics that make an agency look busy.",
  },
  {
    title: "A roster small enough to matter.",
    desc: "We limit how many brands we work with at any given time. Quality of work requires depth of attention, and depth of attention has a limit.",
  },
];

const TESTIMONIALS = [
  {
    quote: "M.Y. INK did something most agencies can't: they made us look at our own brand differently. The strategy they developed became the internal compass our team still uses two years later.",
    author: "Marcus T.",
    title: "CEO · Hospitality Group",
  },
  {
    quote: "They joined our leadership conversations — not just our marketing meetings. The thinking they bring is not what I expected from an agency. It is what I would have expected from our best internal hire.",
    author: "Simone R.",
    title: "Founder · Lifestyle Brand",
  },
  {
    quote: "Our brand occupied a competitive, crowded space. They found the position we hadn't seen ourselves, built a campaign around it, and won us the market segment we'd been chasing for three years.",
    author: "David H.",
    title: "Director · Real Estate Development",
  },
];

const CASE_STUDIES = [
  {
    img: "campaign-2.png",
    tag: "Brand Strategy",
    title: "Elevated Living",
    outcome: "Complete strategic overhaul for a luxury real estate development launch.",
    large: true,
  },
  {
    img: "campaign-1.png",
    tag: "Campaign Execution",
    title: "The New Standard",
    outcome: "Repositioning a heritage hospitality brand for a modern audience.",
    large: false,
  },
  {
    img: "campaign-3.png",
    tag: "Digital & Press",
    title: "Motion & Energy",
    outcome: "A cross-channel campaign that drove record-breaking engagement.",
    large: false,
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
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function Home() {
  return (
    <PageLayout>

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-48 overflow-hidden bg-background">
        {/* Subtle diagonal texture */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-texture.png`}
            alt=""
            className="w-full h-full object-cover opacity-[0.18]"
          />
        </div>
        {/* Accent lines */}
        <div className="absolute top-0 right-16 w-px h-full bg-primary/15 z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Location line */}
          <motion.div
            className="flex items-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">
              Nassau, Bahamas · Strategic Marketing Firm
            </span>
          </motion.div>

          {/* Main headline — full width, editorial scale */}
          <motion.h1
            className="font-display font-bold leading-[0.96] tracking-tight mb-0"
            style={{ fontSize: "clamp(52px, 9vw, 130px)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Creative Thinking<br />
            <span className="text-primary italic">That Moves</span><br />
            Brands Forward.
          </motion.h1>

          {/* Bottom strip — sub-copy left, CTAs right */}
          <motion.div
            className="mt-14 pt-8 border-t border-border grid grid-cols-1 lg:grid-cols-2 gap-8 items-end"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p className="text-lg text-foreground/60 leading-[1.8] max-w-xl">
              M.Y. INK turns marketing challenges into strategic opportunities — combining
              creative thinking with disciplined execution to build brands that lead in
              their market. Full-service. Senior-led. Selectively engaged.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto px-8 group">
                  Start a Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/work">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-8 bg-transparent border-foreground/25 hover:border-primary hover:text-primary"
                >
                  See Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────── */}
      <div className="bg-secondary text-secondary-foreground py-4 overflow-hidden flex border-b border-white/5">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center">
              {MARQUEE_ITEMS.map((item, idx) => (
                <div key={`${i}-${idx}`} className="flex items-center">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase px-8 text-secondary-foreground/60">
                    {item}
                  </span>
                  <span className="text-primary/60">·</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── 2. POSITIONING STATEMENT ────────────────────────── */}
      <section className="py-28 md:py-40 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-6">
                <h2 className="text-3xl md:text-[42px] font-display font-bold leading-[1.1]">
                  We are not an agency for everyone.{" "}
                  <span className="text-primary italic">We work with brands</span> that have
                  something real to say — and the conviction to say it at a level that makes
                  it impossible to ignore.
                </h2>
              </div>
              <div className="lg:col-span-6 flex flex-col justify-between gap-10">
                <div className="space-y-5">
                  <p className="text-lg text-foreground/60 leading-[1.85]">
                    M.Y. INK functions as a senior strategic partner. We sit at the table
                    where decisions are made, not downstream from them. We build the strategy,
                    shape the creative direction, and take ownership of the execution —
                    with the same rigour at every stage.
                  </p>
                  <p className="text-lg text-foreground/60 leading-[1.85]">
                    We do not take on more clients than we can serve at the highest level.
                    If you work with us, you have our full attention and our best thinking —
                    without the dilution that comes from an agency that scales for revenue
                    rather than quality.
                  </p>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors group w-fit"
                >
                  Our story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 3. SERVICES TABLE ───────────────────────────────── */}
      <section className="py-28 md:py-40 bg-secondary text-secondary-foreground dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                What We Do
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Five disciplines. One standard.
              </h2>
            </div>
            <Link href="/services">
              <Button variant="outline" className="border-white/20 text-secondary-foreground hover:bg-white hover:text-secondary shrink-0">
                Full Service List <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>

          <div className="divide-y divide-white/8">
            {SERVICE_ROWS.map((row, idx) => (
              <FadeIn key={row.num} delay={idx * 0.07}>
                <Link href="/services">
                  <div className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-9 cursor-pointer">
                    <div className="lg:col-span-1 flex items-start">
                      <span className="text-xs font-bold text-primary/40 mt-1">{row.num}</span>
                    </div>
                    <div className="lg:col-span-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-2">
                        {row.category}
                      </p>
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors duration-200 leading-snug">
                        {row.headline}
                      </h3>
                    </div>
                    <div className="lg:col-span-6">
                      <p className="text-secondary-foreground/55 leading-[1.85] text-[15px]">
                        {row.desc}
                      </p>
                    </div>
                    <div className="lg:col-span-1 flex items-center justify-end">
                      <ArrowUpRight className="w-5 h-5 text-primary/0 group-hover:text-primary/70 transition-colors duration-200" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. DIFFERENTIATORS — editorial ruled list ────────── */}
      <section className="py-28 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Why the clients who find us tend to stay.
              </h2>
              <p className="text-foreground/55 text-lg leading-[1.85] self-end">
                There is no shortage of marketing agencies. What is genuinely rare is a firm
                with the discipline to do the thinking first, and the craft to execute it well.
              </p>
            </div>
          </FadeIn>

          <div className="divide-y divide-border">
            {DIFFERENTIATORS.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.06}>
                <div className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16 py-8 hover:bg-card transition-colors duration-200 -mx-4 px-4">
                  <div className="lg:col-span-1 flex items-start pt-1">
                    <span className="text-xs font-bold text-primary/35 tracking-widest">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-foreground/55 leading-[1.85] text-[15px]">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-12">
            <Link href="/about">
              <Button size="lg" variant="outline" className="px-8 border-border hover:border-primary hover:text-primary bg-transparent group">
                About the Firm
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── 5. SELECTED WORK — asymmetric editorial grid ─────── */}
      <section className="py-28 md:py-40 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Selected Work</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Proof is in<br />the execution.
              </h2>
            </div>
            <Link href="/work">
              <Button variant="outline" className="shrink-0 border-border hover:border-primary hover:text-primary bg-transparent">
                All Case Studies <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>

          {/* Asymmetric: large left + two stacked right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Large feature card */}
            <FadeIn className="lg:col-span-7">
              <Link href="/work" className="group block h-full">
                <div className="relative overflow-hidden bg-secondary h-[460px] lg:h-full min-h-[460px]">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  <img
                    src={`${import.meta.env.BASE_URL}images/${CASE_STUDIES[0].img}`}
                    alt={CASE_STUDIES[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">
                      {CASE_STUDIES[0].tag}
                    </span>
                    <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {CASE_STUDIES[0].title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">{CASE_STUDIES[0].outcome}</p>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Two stacked smaller cards */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {CASE_STUDIES.slice(1).map((work, idx) => (
                <FadeIn key={idx} delay={0.1 + idx * 0.08} className="flex-1">
                  <Link href="/work" className="group block h-full">
                    <div className="relative overflow-hidden bg-secondary h-[220px]">
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                      <img
                        src={`${import.meta.env.BASE_URL}images/${work.img}`}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
                          {work.tag}
                        </span>
                        <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">
                          {work.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS — editorial stacked ──────────────── */}
      <section className="py-28 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Client Perspectives
            </p>
          </FadeIn>

          <div className="divide-y divide-border">
            {TESTIMONIALS.map((t, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8">
                    <blockquote className="text-2xl md:text-3xl font-display font-bold leading-[1.3] text-foreground mb-8">
                      "{t.quote}"
                    </blockquote>
                  </div>
                  <div className="lg:col-span-4 lg:text-right lg:pt-2">
                    <p className="font-bold text-foreground text-base">{t.author}</p>
                    <p className="text-primary text-xs font-bold uppercase tracking-widest mt-1">
                      {t.title}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ─────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-secondary text-secondary-foreground dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                  Let's Work Together
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.06] mb-6">
                  Your brand's next chapter doesn't write itself.
                </h2>
                <p className="text-secondary-foreground/55 text-lg leading-[1.85] max-w-lg">
                  Most of the best partnerships we've built started with a conversation, not
                  a formal brief. If you are thinking seriously about where your brand needs
                  to go next, that is reason enough to reach out.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <Link href="/contact">
                  <Button size="lg" className="w-full justify-between px-8 h-14 text-base group">
                    Start a Conversation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-between px-8 h-14 text-base border-white/20 text-secondary-foreground hover:bg-white hover:text-secondary group"
                  >
                    Explore Our Services
                    <ArrowUpRight className="w-5 h-5" />
                  </Button>
                </Link>
                <p className="text-secondary-foreground/30 text-xs tracking-wide text-center pt-1">
                  We review every enquiry personally and respond within 48 business hours.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </PageLayout>
  );
}
