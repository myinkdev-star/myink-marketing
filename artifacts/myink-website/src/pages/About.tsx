import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { FadeIn } from "@/components/shared/FadeIn";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";

/* ─────────────────────── DATA ─────────────────────────── */

const VALUES = [
  {
    num: "01",
    title: "Strategy First. Always.",
    desc: "Every piece of work we produce — every campaign, every press event, every line of copy — traces back to a clear strategy. We are incapable of executing without one. It is the discipline that protects the quality of our output and the credibility of our clients.",
  },
  {
    num: "02",
    title: "Excellence in Execution",
    desc: "We work with clients who notice the difference between good and excellent. We consider that a privilege — not a burden. It is what keeps our standard where it is, and what makes the work worth producing.",
  },
  {
    num: "03",
    title: "Selective by Design",
    desc: "The value of a smaller client roster is that every brand gets more of us: more attention, more senior thinking, more deliberate work. We are not structured for volume. We are structured for quality, and quality requires selectivity.",
  },
  {
    num: "04",
    title: "Creative Without Compromise",
    desc: "Predictability is the enemy of a brand that wants to stand out. We push the work into territory that is bold, distinctive, and built to endure — because safe ideas produce safe results, and safe results do not win markets.",
  },
];

const STATS = [
  { value: "10+", label: "Years of Regional Marketing Experience" },
  { value: "50+", label: "Brand Campaigns Executed" },
  { value: "5", label: "Core Service Disciplines" },
  { value: "100%", label: "Senior Team on Every Account" },
];

const PHILOSOPHY = [
  {
    title: "The thinking comes first.",
    desc: "Executing the wrong strategy beautifully is still the wrong strategy. We spend the time to get the thinking right — on your market, your audience, your competitive position — before a single asset is produced or a dollar is committed.",
  },
  {
    title: "We make our clients look prescient.",
    desc: "The best strategic advice positions a brand ahead of where the market is going, not behind it. We study what is happening in order to advise confidently on what should happen next.",
  },
  {
    title: "We define success before we begin.",
    desc: "Vague goals produce vague results. Every engagement starts with an agreed-upon picture of what success looks like — because that is the only honest way to know whether the work worked.",
  },
];

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function About() {
  return (
    <PageLayout>

      {/* ── PAGE HERO ─────────────────────────────────────── */}
      <PageHero
        eyebrow="Who We Are"
        headline={
          <>
            We believe every brand has a{" "}
            <span className="text-primary italic">story</span>{" "}
            worth telling well.
          </>
        }
        intro={
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <p className="text-xl text-foreground/60 leading-[1.85]">
              M.Y. INK was founded on a conviction that has only deepened over time: most
              brands are underserved by their agencies. Not because agencies lack
              capability — but because they lack the discipline to think before they act.
            </p>
            <p className="text-xl text-foreground/60 leading-[1.85]">
              We built M.Y. INK to be the exception. A strategic firm, not a service
              provider. A partner, not a vendor. Based in Nassau, Bahamas — with the
              strategic scope to serve ambitious brands wherever they operate.
            </p>
          </div>
        }
      />

      {/* ── STORY ─────────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <FadeIn className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}images/agency-office.png`}
                  alt="M.Y. INK strategic thinking"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary p-8 hidden lg:block">
                  <p className="text-white font-display font-bold text-lg leading-tight max-w-[160px]">
                    Nassau, Bahamas
                    <span className="block text-white/70 font-normal text-sm mt-1">
                      Est. Caribbean
                    </span>
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="order-1 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-8">
                Built for brands serious about where they are going.
              </h2>
              <div className="space-y-5 text-foreground/65 leading-[1.85] text-lg">
                <p>
                  The Caribbean market has produced brands, businesses, and stories that
                  deserve to be told at the highest level. What it has often lacked is the
                  strategic infrastructure to do so consistently, at scale, and with the
                  rigour that premium positioning requires. That is the gap M.Y. INK was
                  designed to fill.
                </p>
                <p>
                  We have remained deliberately small. Our client roster is selective by
                  design — not because we lack capacity, but because quality of work and
                  depth of attention don't scale infinitely. We would rather serve fewer
                  brands exceptionally than many brands adequately.
                </p>
                <p>
                  Today, M.Y. INK partners with brands across hospitality, real estate,
                  lifestyle, professional services, and events — organisations that
                  understand what it means to invest in their market position, not just
                  their marketing spend.
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

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="py-20 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {STATS.map((stat, idx) => (
              <FadeIn key={idx} delay={idx * 0.08} className="px-8 py-6 text-center lg:text-left">
                <span className="text-5xl md:text-6xl font-display font-bold text-primary block mb-2">
                  {stat.value}
                </span>
                <span className="text-sm text-foreground/50 leading-snug block">
                  {stat.label}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES — editorial ruled list ─────────────────── */}
      <section className="py-28 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Four principles we do not negotiate on.
              </h2>
              <p className="text-foreground/55 text-lg leading-[1.85] self-end">
                These are not values statements written for a website. They are the
                operating commitments that determine who we work with and how.
              </p>
            </div>
          </FadeIn>

          <div className="divide-y divide-border">
            {VALUES.map((v, idx) => (
              <FadeIn key={v.num} delay={idx * 0.08}>
                <div className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16 py-10 hover:bg-card transition-colors duration-200 -mx-4 px-4">
                  <div className="lg:col-span-1 pt-1">
                    <span className="text-xs font-bold text-primary/35 tracking-widest">
                      {v.num}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors leading-snug">
                      {v.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-foreground/55 leading-[1.85]">{v.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ────────────────────────────────────── */}
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
                  <p className="text-secondary-foreground/55 leading-[1.85] text-sm">
                    {p.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-20">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              The Team
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Senior people on every account.
              </h2>
              <p className="text-foreground/60 text-lg leading-[1.85]">
                No junior strategists running accounts. No layers between you and the
                people doing the thinking. The partners who present the work are the same
                people who built it.
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
                      alt={member.role}
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

      {/* ── CTA ───────────────────────────────────────────── */}
      <CTASection
        eyebrow="Work With Us"
        headline={
          <>
            The right relationship starts with{" "}
            <span className="text-primary italic">the right conversation.</span>
          </>
        }
        subtext="If something you've read here sounds like what your brand has been missing, that intuition is worth acting on. We'd like to hear from you."
        primaryCta={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCta={{ label: "See Our Work", href: "/work" }}
      />

    </PageLayout>
  );
}
