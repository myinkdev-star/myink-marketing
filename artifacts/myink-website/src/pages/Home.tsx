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
    headline: "Where every great campaign begins.",
    services: ["Customized Marketing Strategies", "Brand Positioning"],
    desc: "We don't start with tactics — we start with thinking. Our strategy work gives your brand a clear direction, a competitive edge, and a roadmap that makes every dollar work harder.",
  },
  {
    num: "02",
    category: "Campaigns & Advertising",
    headline: "Ideas that demand attention.",
    services: ["Promotion & Campaign Design & Execution", "Advertising Concepts & Execution"],
    desc: "From concept through launch, we design campaigns with intention and execute them with precision. Bold creative backed by strategic thinking — across every channel that matters.",
  },
  {
    num: "03",
    category: "Editorial & Voice",
    headline: "Your authority, articulated.",
    services: ["Ghostwriting", "Script Writing (All Media)"],
    desc: "We give your brand a voice that commands respect. Long-form content, broadcast scripts, and editorial storytelling — all crafted to position you as the definitive authority in your space.",
  },
  {
    num: "04",
    category: "Media & Press",
    headline: "Coverage that builds credibility.",
    services: ["Press Releases", "Press Events"],
    desc: "From crafting the story to creating the moment — we design press strategies that generate meaningful coverage, spark the right conversations, and build lasting credibility.",
  },
  {
    num: "05",
    category: "Digital Execution",
    headline: "Precision across every platform.",
    services: ["Digital Strategies & Implementation"],
    desc: "Data-informed and creatively led. We build and execute digital strategies that reach the right audiences, drive meaningful engagement, and deliver measurable results.",
  },
];

const WHY_PILLARS = [
  {
    num: "01",
    title: "Strategic Thinking First",
    desc: "We lead with strategy, not execution. Every decision — creative, media, messaging — is rooted in deep strategic thinking designed to move your brand into a stronger market position.",
  },
  {
    num: "02",
    title: "Tailored Campaigns",
    desc: "No templates. No copy-paste playbooks. Every campaign we build is engineered specifically for your brand, your audience, and your goals. Precision matters here.",
  },
  {
    num: "03",
    title: "Refined Creative Direction",
    desc: "We bring a level of creative intelligence that elevates brands. Our work is visually sharp, editorially strong, and always consistent with who you are and where you're going.",
  },
  {
    num: "04",
    title: "Execution with Purpose",
    desc: "There are agencies that think, and agencies that do. We do both at the same level. From concept to final output, we execute with the same intensity we bring to strategy.",
  },
  {
    num: "05",
    title: "Strong Market Presence",
    desc: "We build brands that own their space. Through strategic positioning, consistent messaging, and bold campaigns, we make sure your brand is remembered — for the right reasons.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Working with M.Y. INK completely transformed how we positioned ourselves in the market. Their strategic thinking is next-level — they didn't just give us a campaign, they gave us a direction.",
    author: "Marcus T.",
    title: "CEO, Hospitality Group",
  },
  {
    quote:
      "They don't just execute — they think. M.Y. INK became a true extension of our leadership team. Every recommendation came backed with clear strategic rationale and flawless delivery.",
    author: "Simone R.",
    title: "Founder, Lifestyle Brand",
  },
  {
    quote:
      "From concept to execution, the level of polish and intelligence was unlike anything we had experienced before. Our brand equity has never been stronger.",
    author: "David H.",
    title: "Director, Real Estate Development",
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

        {/* Decorative orange line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/30 z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-5xl">
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 px-4 py-2 mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Nassau, Bahamas · Strategic Marketing Agency
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
              M.Y. INK is a premium strategic marketing partner for ambitious brands in the
              Bahamas and Caribbean. We don't follow trends — we build the campaigns that set them.
            </motion.p>

            <motion.p
              className="text-sm text-foreground/45 mb-12 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              Trusted by hospitality, real estate, events, and lifestyle brands.
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
                something to say — and the ambition to say it boldly.
              </h2>
              <p className="text-lg text-foreground/65 leading-relaxed mb-6 max-w-3xl">
                M.Y. INK Marketing is a strategic marketing firm built for brands that demand
                more than execution — they demand thinking. From campaign strategy to press
                events, from brand positioning to digital implementation, we function as a true
                extension of your leadership team.
              </p>
              <p className="text-lg text-foreground/65 leading-relaxed mb-10 max-w-3xl">
                We are selective. We are strategic. And we are relentless in our commitment to
                making every brand we touch impossible to ignore.
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
                Comprehensive strategy. <br />
                <span className="text-foreground/50">Flawless execution.</span>
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
              What separates good agencies from the ones clients never leave.
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
                  <p className="text-white/80 text-sm font-medium leading-relaxed">
                    Ready to see what strategic thinking can do for your brand?
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
        {/* Decorative orange block */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/4 -z-0 skew-x-12 translate-x-12" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Let's Work Together
              </p>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.08] mb-6">
                Ready to move your brand{" "}
                <span className="text-primary italic">forward?</span>
              </h2>
              <p className="text-xl text-foreground/60 leading-relaxed mb-4">
                We take on a limited number of clients each year — we prefer it that way. It
                means every brand we work with gets our full focus, our best thinking, and our
                highest standard of execution.
              </p>
              <p className="text-base text-foreground/45 mb-12">
                If you believe your brand deserves more — let's have a conversation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="px-10 h-14 text-base">
                    Start a Conversation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-10 h-14 text-base bg-transparent border-foreground/25 hover:border-primary hover:text-primary"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>

              <p className="mt-8 text-sm text-foreground/35 tracking-wide">
                We respond to all serious inquiries within 48 business hours.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
