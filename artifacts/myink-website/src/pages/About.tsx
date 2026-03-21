import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

/* ───────────────────────────── DATA ───────────────────────────── */

const VALUES = [
  {
    num: "01",
    title: "Strategy First. Always.",
    desc: "Every recommendation we make — every campaign, every event, every piece of copy — is rooted in a strategy that has been thought through rigorously. We do not execute without a plan, and we do not plan without understanding your brand deeply.",
  },
  {
    num: "02",
    title: "Excellence in Execution",
    desc: "Good enough is a ceiling we refuse to hit. We set a standard of quality in everything we produce — the craft, the thinking, the communication, the delivery. Premium clients deserve a premium standard across the board.",
  },
  {
    num: "03",
    title: "Selective by Design",
    desc: "We intentionally limit the number of brands we work with at any given time. This is how we protect the quality of our work and the depth of our attention. Every client we take on gets all of us — not a fraction.",
  },
  {
    num: "04",
    title: "Creative without Compromise",
    desc: "Safe is boring, and boring doesn't build brands. We push for ideas that are bold, unexpected, and built to last. We challenge our clients — respectfully, always — because it is the only way to produce work that truly stands out.",
  },
];

const STATS = [
  { value: "10+", label: "Years of Regional Marketing Experience" },
  { value: "50+", label: "Brand Campaigns Executed" },
  { value: "5", label: "Core Service Disciplines" },
  { value: "100%", label: "Client-First Approach" },
];

const PHILOSOPHY = [
  {
    title: "We think before we act.",
    desc: "The most expensive mistake in marketing is executing the wrong strategy beautifully. We spend the time to get the thinking right before a single asset is produced or a dollar is spent.",
  },
  {
    title: "We lead. We don't follow.",
    desc: "Trend-chasing produces derivative work. We study what is happening in the market so that we can position our clients ahead of it — not behind it. Our job is to make our clients look like visionaries.",
  },
  {
    title: "We measure what matters.",
    desc: "Vanity metrics are easy to produce and easy to spin. We define what success looks like before we begin, and we hold ourselves accountable to outcomes that actually move a business forward.",
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

export default function About() {
  return (
    <PageLayout>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="pt-40 pb-24 md:pt-52 md:pb-32 bg-background relative overflow-hidden border-b border-border">
        <div className="absolute top-0 right-0 w-px h-full bg-primary/20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            className="text-xs font-bold uppercase tracking-widest text-primary mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            Who We Are
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-[86px] font-display font-bold leading-[1.04] tracking-tight max-w-4xl mb-10"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            We believe every brand has a{" "}
            <span className="text-primary italic">story</span>{" "}
            worth telling well.
          </motion.h1>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            <p className="text-xl text-foreground/65 leading-[1.85]">
              M.Y. INK Marketing was founded on a premise that sounds simple but is rarely
              practiced: great execution requires brilliant strategy. We are a collective of
              thinkers, writers, and creative directors dedicated to building brands that lead
              in their market.
            </p>
            <p className="text-xl text-foreground/65 leading-[1.85]">
              Based in Nassau, Bahamas — with reach across the Caribbean and beyond — we work
              with a carefully selected group of brands that are serious about their market
              position and willing to invest in getting there the right way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <FadeIn className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}images/agency-office.png`}
                  alt="M.Y. INK — Strategic thinking in action"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary p-8 hidden lg:block">
                  <p className="text-white font-display font-bold text-lg leading-tight max-w-[160px]">
                    Nassau, Bahamas
                    <span className="block text-white/70 font-normal text-sm mt-1">Est. Caribbean</span>
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="order-1 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-8">
                Built for brands that are serious about where they are going.
              </h2>
              <div className="space-y-5 text-foreground/65 leading-[1.85] text-lg">
                <p>
                  M.Y. INK was born from the recognition that the Caribbean market deserved a
                  different kind of agency — one that combined the strategic rigour of global
                  firms with the deep local knowledge and cultural fluency that only comes from
                  being truly rooted here.
                </p>
                <p>
                  We started small and intentional. We grew the same way. Every client we have
                  taken on has been a deliberate choice — because the quality of our client
                  relationships directly determines the quality of our work.
                </p>
                <p>
                  Today, M.Y. INK operates as a senior strategic partner to ambitious brands
                  across hospitality, real estate, lifestyle, events, and professional services.
                  Our work is our reputation, and our reputation is everything.
                </p>
              </div>
              <div className="mt-10">
                <Link href="/services">
                  <Button size="lg" className="px-8">
                    See What We Offer <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section className="py-20 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {STATS.map((stat, idx) => (
              <FadeIn key={idx} delay={idx * 0.08} className="px-8 py-6 text-center lg:text-left">
                <span className="text-5xl md:text-6xl font-display font-bold text-primary block mb-2">
                  {stat.value}
                </span>
                <span className="text-sm text-foreground/50 leading-snug block">{stat.label}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-20">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              What We Stand For
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold max-w-xl leading-tight">
              Four principles we never negotiate on.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((v, idx) => (
              <FadeIn key={v.num} delay={idx * 0.1}>
                <div className="group border border-border p-10 hover:border-primary transition-colors duration-300 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-500" />
                  <span className="text-xs font-bold text-primary/40 tracking-widest block mb-6">
                    {v.num}
                  </span>
                  <h3 className="text-2xl font-display font-bold mb-5 group-hover:text-primary transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-foreground/60 leading-[1.85]">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-secondary text-secondary-foreground dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-20">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              How We Think
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white max-w-xl leading-tight">
              The philosophy behind the work.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/8">
            {PHILOSOPHY.map((p, idx) => (
              <FadeIn key={idx} delay={idx * 0.12}>
                <div className="group p-8 lg:p-12 hover:bg-white/3 transition-colors">
                  <div className="w-8 h-0.5 bg-primary mb-8 group-hover:w-16 transition-all duration-300" />
                  <h3 className="text-xl font-display font-bold text-white mb-5 leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-secondary-foreground/55 leading-[1.85] text-sm">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-20">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              The Team
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Senior thinkers. Senior executors.
              </h2>
              <p className="text-foreground/60 text-lg leading-[1.85]">
                Our team is small by design. Every person here is senior, experienced, and
                fully invested in the work we deliver. No juniors running your account. No
                account managers between you and the people doing the thinking.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { role: "Partner & Strategy Director", specialty: "Brand Strategy · Positioning" },
              { role: "Creative Director", specialty: "Campaigns · Art Direction" },
              { role: "Head of Digital & Content", specialty: "Digital · Editorial" },
            ].map((member, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="group">
                  <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-secondary">
                    <img
                      src={`${import.meta.env.BASE_URL}images/strategy-session.png`}
                      alt="Team member"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                    {member.role}
                  </p>
                  <p className="text-foreground/50 text-sm">{member.specialty}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                  Work With Us
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] mb-6">
                  Looking for an agency that{" "}
                  <span className="text-primary italic">actually gets it?</span>
                </h2>
                <p className="text-foreground/60 text-lg leading-relaxed">
                  If you've read this far, there's probably something in your brand that's been
                  waiting for the right strategic partner. Let's find out if that's us.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full px-8 justify-between group">
                    Start a Conversation
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/work">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full px-8 justify-between bg-transparent border-border hover:border-primary hover:text-primary group"
                  >
                    See Our Work
                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
