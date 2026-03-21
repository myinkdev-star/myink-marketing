import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

/* ─────────────────────────── DATA ─────────────────────────── */

const MARQUEE_ITEMS = [
  "Brand Strategy",
  "Campaign Execution",
  "Advertising",
  "Ghostwriting",
  "Press Events",
  "Digital Strategy",
  "Script Writing",
  "Media Relations",
];

const SERVICE_CATEGORIES = [
  {
    num: "01",
    category: "Strategy & Planning",
    headline: "Before a single decision is made.",
    services: ["Customized Marketing Strategies", "Brand Positioning"],
    desc: "We don't begin with creative. We begin with your market, your competitors, and the specific advantage your brand has — or could have. Every engagement we take on starts here, regardless of what prompted the call.",
  },
  {
    num: "02",
    category: "Campaigns & Advertising",
    headline: "Campaigns built to convert, not just to impress.",
    services: ["Promotion & Campaign Design & Execution", "Advertising Concepts & Execution"],
    desc: "Every creative decision we make has a strategic rationale behind it. We build campaigns from the insight outward, execute across every channel that matters to your audience, and measure the outcomes that matter to your business.",
  },
  {
    num: "03",
    category: "Editorial & Voice",
    headline: "The words that separate authorities from the rest.",
    services: ["Ghostwriting", "Script Writing (All Media)"],
    desc: "Your reputation is built, in large part, by what you say and how you say it. We craft the written and spoken work that makes your brand impossible to dismiss — thought leadership, scripts, brand voice — every word deliberate.",
  },
  {
    num: "04",
    category: "Media & Press",
    headline: "Stories placed where they shift perception.",
    services: ["Press Releases", "Press Events"],
    desc: "Earned media is more valuable than paid media — and harder to get right. We design press strategies that generate coverage that does more than mention a brand. It repositions one.",
  },
  {
    num: "05",
    category: "Digital Execution",
    headline: "Every platform that matters. Not all of them.",
    services: ["Digital Strategies & Implementation"],
    desc: "We don't chase every channel. We identify where your audience actually lives, build a clear strategy for each platform, and execute with data-backed discipline. Digital without noise.",
  },
];

const WHY_PILLARS = [
  {
    num: "01",
    title: "Senior thinking at every stage.",
    desc: "There are no junior strategists running your account here. The senior people who present the work are the same people who build it — from strategy through to final delivery.",
  },
  {
    num: "02",
    title: "Built for your brand. Not repurposed from another.",
    desc: "We do not have a playbook we reapply to new clients. Every strategy is built from the ground up around your specific market, audience, and competitive context. Precision is not optional.",
  },
  {
    num: "03",
    title: "Creative that serves the strategy.",
    desc: "We make things look remarkable because remarkable things get remembered. But the creative is never the starting point — it is the destination the strategy leads to. Always in that order.",
  },
  {
    num: "04",
    title: "Accountability to outcomes, not outputs.",
    desc: "We define what success looks like before we begin, and we hold ourselves to it. We measure the things that move your business — not the metrics that make an agency look productive.",
  },
  {
    num: "05",
    title: "A roster small enough to matter.",
    desc: "We limit how many brands we work with at any given time. Quality of work requires depth of attention, and depth of attention has a limit. We respect that limit.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "M.Y. INK did something most agencies can't: they made us look at our own brand differently. The strategy they developed became the internal compass our team still uses two years later.",
    author: "Marcus T.",
    title: "CEO · Hospitality Group",
  },
  {
    quote:
      "They joined our leadership conversations — not just our marketing meetings. The thinking they bring is not what I expected from an agency. It is what I would have expected from our best internal hire.",
    author: "Simone R.",
    title: "Founder · Lifestyle Brand",
  },
  {
    quote:
      "Our brand occupied a competitive, crowded space. They found the position we hadn't seen ourselves, built a campaign around it, and won us the market segment we'd been chasing for three years.",
    author: "David H.",
    title: "Director · Real Estate Development",
  },
];

const CASE_STUDIES = [
  {
    img: "campaign-1.png",
    tag: "Campaign Execution",
    title: "The New Standard",
    outcome: "Repositioning a heritage hospitality brand for a modern, premium audience.",
  },
  {
    img: "campaign-2.png",
    tag: "Brand Strategy",
    title: "Elevated Living",
    outcome: "Complete strategic overhaul for a luxury real estate development launch.",
  },
  {
    img: "campaign-3.png",
    tag: "Digital & Press",
    title: "Motion & Energy",
    outcome: "A cross-channel campaign that drove record-breaking audience engagement.",
  },
];

/* ────────────────────────── ANIMATIONS ────────────────────── */

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
      initial={{ opacity: 0, y: 28 }}
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
      <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/85 z-10" />
          <img
            src={`${import.meta.env.BASE_URL}images/hero-texture.png`}
            alt=""
            className="w-full h-full object-cover object-center opacity-50"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/30 z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 px-4 py-2 mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Nassau, Bahamas · Strategic Marketing Firm
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-[90px] font-display font-bold leading-[1.02] tracking-tight mb-8"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
            >
              Creative Thinking <br />
              <span className="text-primary italic">That Moves</span>{" "}
              <br className="hidden sm:block" />
              Brands Forward.
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-foreground/65 max-w-2xl mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              M.Y. INK is a strategic marketing firm. We work with a deliberately small number
              of ambitious brands — in the Bahamas, across the Caribbean, and beyond — who
              understand that the quality of their thinking is the difference between a brand
              people respect and one they merely recognise.
            </motion.p>

            <motion.p
              className="text-sm text-foreground/45 mb-12 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              Working across hospitality, real estate, lifestyle, events, and professional services.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto px-8 text-base h-13">
                  Start a Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/work">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-8 text-base h-13 bg-transparent border-foreground/30 text-foreground hover:border-primary hover:text-primary"
                >
                  See Our Work
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────── */}
      <div className="bg-secondary text-secondary-foreground py-4 overflow-hidden flex border-y border-white/5">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center">
              {MARQUEE_ITEMS.map((item, idx) => (
                <div key={`${i}-${idx}`} className="flex items-center">
                  <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase px-8 text-secondary-foreground/70">
                    {item}
                  </span>
                  <span className="text-primary text-lg">·</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── 2. BRAND POSITIONING ────────────────────────────── */}
      <section className="py-28 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <FadeIn className="lg:col-span-4">
              <span className="text-[clamp(80px,12vw,140px)] font-display font-bold text-primary/15 leading-none select-none block">
                01
              </span>
              <div className="mt-6 w-12 h-px bg-primary" />
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-foreground/40">
                Who We Are
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-8">
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.12] mb-8">
                We are not an agency for everyone.{" "}
                <span className="text-primary italic">We work with brands</span> that have
                something real to say — and the conviction to say it at a level that makes
                it impossible to ignore.
              </h2>
              <p className="text-lg text-foreground/65 leading-relaxed mb-6 max-w-3xl">
                M.Y. INK functions as a senior strategic partner. We sit at the table where
                decisions are made, not downstream from them. We build the strategy, shape
                the creative direction, and take ownership of the execution — with the same
                rigour at every stage.
              </p>
              <p className="text-lg text-foreground/65 leading-relaxed mb-10 max-w-3xl">
                What we do not do is take on more clients than we can serve at the highest
                level. What that means for you: if you work with us, you have our full
                attention and our best thinking — without the dilution that comes from an
                agency that scales for revenue rather than quality.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center font-bold uppercase tracking-widest text-xs hover:text-primary transition-colors group gap-2"
              >
                Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES PREVIEW ─────────────────────────────── */}
      <section className="py-28 md:py-40 bg-secondary text-secondary-foreground dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                What We Do
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                Five disciplines. <br />
                <span className="text-foreground/50">One standard.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-white/20 text-secondary-foreground hover:bg-white hover:text-secondary shrink-0"
                >
                  All Services <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </FadeIn>
          </div>

          <div className="space-y-0 divide-y divide-white/8">
            {SERVICE_CATEGORIES.map((cat, idx) => (
              <FadeIn key={cat.num} delay={idx * 0.08}>
                <div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-10 hover:pl-2 transition-all duration-300">
                  <div className="lg:col-span-1">
                    <span className="text-primary/50 text-sm font-bold">{cat.num}</span>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                      {cat.category}
                    </p>
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">
                      {cat.headline}
                    </h3>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-secondary-foreground/60 leading-relaxed">{cat.desc}</p>
                  </div>
                  <div className="lg:col-span-3 flex flex-wrap gap-2 items-start">
                    {cat.services.map((s) => (
                      <span
                        key={s}
                        className="text-xs border border-white/10 text-secondary-foreground/50 px-3 py-1.5 rounded-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY M.Y. INK ─────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl mb-20">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Why M.Y. INK
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              What separates the agencies clients stay with from the ones they replace.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_PILLARS.map((pillar, idx) => (
              <FadeIn key={pillar.num} delay={idx * 0.08}>
                <div className="group border border-border bg-card p-8 hover:border-primary transition-colors duration-300 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-500" />
                  <span className="text-xs font-bold text-primary/40 mb-6 block tracking-widest">
                    {pillar.num}
                  </span>
                  <h3 className="text-xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed flex-grow">
                    {pillar.desc}
                  </p>
                </div>
              </FadeIn>
            ))}

            {/* CTA card */}
            <FadeIn delay={0.4}>
              <Link href="/about" className="block h-full">
                <div className="group bg-primary p-8 h-full flex flex-col justify-between min-h-[200px] cursor-pointer hover:bg-primary/90 transition-colors">
                  <p className="text-white/85 text-sm leading-relaxed">
                    The brands we've had the longest partnerships with all started the same
                    way: with a conversation, not a brief.
                  </p>
                  <div className="flex items-center gap-2 mt-6 font-bold text-white text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                    Learn About Us <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 5. SELECTED WORK ─────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                Selected Work
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                Proof is in <br className="hidden sm:block" />
                the execution.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link href="/work">
                <Button variant="outline">
                  View All Work <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((work, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <Link href="/work" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden mb-5 bg-secondary">
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                    <img
                      src={`${import.meta.env.BASE_URL}images/${work.img}`}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary bg-black/60 px-3 py-1.5">
                        {work.tag}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-foreground/55 text-sm leading-relaxed">{work.outcome}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 text-primary transition-opacity shrink-0 mt-1" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-secondary text-secondary-foreground dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-20">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Client Perspectives
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              What our clients say.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <FadeIn key={idx} delay={idx * 0.12}>
                <div className="group border border-white/8 bg-white/3 hover:border-primary/40 transition-colors duration-300 p-8 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-primary/40 mb-6 shrink-0" />
                  <blockquote className="text-secondary-foreground/80 text-base leading-[1.8] flex-grow mb-8 italic">
                    "{t.quote}"
                  </blockquote>
                  <div className="border-t border-white/10 pt-6">
                    <p className="font-display font-bold text-white text-base">{t.author}</p>
                    <p className="text-primary text-xs font-medium uppercase tracking-widest mt-1">
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
      <section className="py-28 md:py-40 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/4 -z-0 skew-x-12 translate-x-12" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Let's Work Together
              </p>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.08] mb-6">
                Your brand's next chapter{" "}
                <span className="text-primary italic">doesn't write itself.</span>
              </h2>
              <p className="text-foreground/60 text-lg mb-10 max-w-xl leading-relaxed">
                Most of the best partnerships we've built started with a conversation, not a
                formal brief. If you are thinking seriously about where your brand needs to go
                next, that is reason enough to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="px-8 group">
                    Start a Conversation
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 bg-transparent border-foreground/30 text-foreground hover:border-primary hover:text-primary"
                  >
                    Our Services <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
