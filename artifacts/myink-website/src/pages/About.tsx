import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { FadeIn } from "@/components/shared/FadeIn";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { useContent } from "@/hooks/useContent";

/* ── Content types ──────────────────────────────────────── */

interface AboutHero {
  eyebrow?: string;
  headline_1?: string;
  headline_italic?: string;
  headline_2?: string;
  intro_col1?: string;
  intro_col2?: string;
}

interface AboutStory {
  eyebrow?: string;
  headline?: string;
  body1?: string;
  body2?: string;
  body3?: string;
  image?: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Principles {
  headline?: string;
  subtext?: string;
  items?: Array<{ num: string; title: string; desc: string }>;
}

interface Philosophy {
  eyebrow?: string;
  headline?: string;
  items?: Array<{ title: string; desc: string }>;
}

interface Team {
  eyebrow?: string;
  headline?: string;
  subtext?: string;
  members?: Array<{ role: string; specialty: string; photo?: string }>;
}

interface AboutCta {
  eyebrow?: string;
  headline_1?: string;
  headline_italic?: string;
  subtext?: string;
}

interface AboutContent {
  hero?: AboutHero;
  story?: AboutStory;
  stats?: Stat[];
  principles?: Principles;
  philosophy?: Philosophy;
  team?: Team;
  cta?: AboutCta;
}

/* ── Fallback data ──────────────────────────────────────── */

const FB_STATS: Stat[] = [
  { value: "10+",  label: "Years of Regional Marketing Experience" },
  { value: "50+",  label: "Brand Campaigns Executed" },
  { value: "5",    label: "Core Service Disciplines" },
  { value: "100%", label: "Senior Team on Every Account" },
];

const FB_PRINCIPLES = [
  { num: "01", title: "Strategy First. Always.", desc: "Every piece of work we produce — every campaign, every press event, every line of copy — traces back to a clear strategy. We are incapable of executing without one. It is the discipline that protects the quality of our output and the credibility of our clients." },
  { num: "02", title: "Excellence in Execution", desc: "We work with clients who notice the difference between good and excellent. We consider that a privilege — not a burden. It is what keeps our standard where it is, and what makes the work worth producing." },
  { num: "03", title: "Selective by Design", desc: "The value of a smaller client roster is that every brand gets more of us: more attention, more senior thinking, more deliberate work. We are not structured for volume. We are structured for quality, and quality requires selectivity." },
  { num: "04", title: "Creative Without Compromise", desc: "Predictability is the enemy of a brand that wants to stand out. We push the work into territory that is bold, distinctive, and built to endure — because safe ideas produce safe results, and safe results do not win markets." },
];

const FB_PHILOSOPHY = [
  { title: "The thinking comes first.", desc: "Executing the wrong strategy beautifully is still the wrong strategy. We spend the time to get the thinking right — on your market, your audience, your competitive position — before a single asset is produced or a dollar is committed." },
  { title: "We make our clients look prescient.", desc: "The best strategic advice positions a brand ahead of where the market is going, not behind it. We study what is happening in order to advise confidently on what should happen next." },
  { title: "We define success before we begin.", desc: "Vague goals produce vague results. Every engagement starts with an agreed-upon picture of what success looks like — because that is the only honest way to know whether the work worked." },
];

const FB_MEMBERS = [
  { role: "Partner & Strategy Director", specialty: "Brand Strategy · Positioning", photo: undefined },
  { role: "Creative Director",            specialty: "Campaigns · Art Direction",   photo: undefined },
  { role: "Head of Digital & Content",    specialty: "Digital · Editorial",         photo: undefined },
];

/* ── Page ───────────────────────────────────────────────── */

export default function About() {
  const { data: about } = useContent<AboutContent>("about.md");

  /* Hero */
  const hero    = about.hero    ?? {};
  const hEyebrow = hero.eyebrow        ?? "Who We Are";
  const hLine1   = hero.headline_1     ?? "We believe every brand has a";
  const hItalic  = hero.headline_italic ?? "story";
  const hLine2   = hero.headline_2     ?? "worth telling well.";
  const hCol1    = hero.intro_col1     ?? "M.Y. INK was founded on a conviction that has only deepened over time: most brands are underserved by their agencies. Not because agencies lack capability — but because they lack the discipline to think before they act.";
  const hCol2    = hero.intro_col2     ?? "We built M.Y. INK to be the exception. A strategic firm, not a service provider. A partner, not a vendor. Based in Nassau, Bahamas — with the strategic scope to serve ambitious brands wherever they operate.";

  /* Story */
  const story   = about.story   ?? {};
  const sEyebrow = story.eyebrow  ?? "Our Story";
  const sHl      = story.headline ?? "Built for brands serious about where they are going.";
  const sBody1   = story.body1    ?? "The Caribbean market has produced brands, businesses, and stories that deserve to be told at the highest level. What it has often lacked is the strategic infrastructure to do so consistently, at scale, and with the rigour that premium positioning requires. That is the gap M.Y. INK was designed to fill.";
  const sBody2   = story.body2    ?? "We have remained deliberately small. Our client roster is selective by design — not because we lack capacity, but because quality of work and depth of attention don't scale infinitely. We would rather serve fewer brands exceptionally than many brands adequately.";
  const sBody3   = story.body3    ?? "Today, M.Y. INK partners with brands across hospitality, real estate, lifestyle, professional services, and events — organisations that understand what it means to invest in their market position, not just their marketing spend.";
  const sImage   = story.image;

  /* Stats */
  const stats = (about.stats && about.stats.length > 0) ? about.stats : FB_STATS;

  /* Principles */
  const principles = about.principles ?? {};
  const pHl    = principles.headline ?? "Four principles we do not negotiate on.";
  const pSub   = principles.subtext  ?? "These are not values statements written for a website. They are the operating commitments that determine who we work with and how.";
  const pItems = (principles.items && principles.items.length > 0) ? principles.items : FB_PRINCIPLES;

  /* Philosophy */
  const philosophy = about.philosophy ?? {};
  const philEy    = philosophy.eyebrow  ?? "How We Think";
  const philHl    = philosophy.headline ?? "The philosophy behind the work.";
  const philItems = (philosophy.items && philosophy.items.length > 0) ? philosophy.items : FB_PHILOSOPHY;

  /* Team */
  const team    = about.team    ?? {};
  const tEyebrow = team.eyebrow  ?? "The Team";
  const tHl      = team.headline ?? "Senior people on every account.";
  const tSub     = team.subtext  ?? "No junior strategists running accounts. No layers between you and the people doing the thinking. The partners who present the work are the same people who built it.";
  const tMembers = (team.members && team.members.length > 0) ? team.members : FB_MEMBERS;

  /* CTA */
  const cta     = about.cta     ?? {};
  const ctaEy    = cta.eyebrow        ?? "Work With Us";
  const ctaL1    = cta.headline_1     ?? "The right relationship starts with";
  const ctaItal  = cta.headline_italic ?? "the right conversation.";
  const ctaSub   = cta.subtext        ?? "If something you've read here sounds like what your brand has been missing, that intuition is worth acting on. We'd like to hear from you.";

  return (
    <PageLayout>

      {/* ── HERO ──────────────────────────────────────────── */}
      <PageHero
        eyebrow={hEyebrow}
        headline={
          <>
            {hLine1}{" "}
            <span className="text-primary italic">{hItalic}</span>{" "}
            {hLine2}
          </>
        }
        intro={
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <p className="text-xl text-foreground/60 leading-[1.85]">{hCol1}</p>
            <p className="text-xl text-foreground/60 leading-[1.85]">{hCol2}</p>
          </div>
        }
      />

      {/* ── OUR STORY ─────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <FadeIn className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={sImage ? (sImage.startsWith('/') ? `${import.meta.env.BASE_URL}${sImage.slice(1)}` : sImage) : `${import.meta.env.BASE_URL}images/agency-office.png`}
                  alt="M.Y. INK strategic thinking"
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
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">{sEyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-8">{sHl}</h2>
              <div className="space-y-5 text-foreground/65 leading-[1.85] text-lg">
                <p>{sBody1}</p>
                <p>{sBody2}</p>
                <p>{sBody3}</p>
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
            {stats.map((stat, idx) => (
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

      {/* ── PRINCIPLES ────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">{pHl}</h2>
              <p className="text-foreground/55 text-lg leading-[1.85] self-end">{pSub}</p>
            </div>
          </FadeIn>
          <div className="divide-y divide-border">
            {pItems.map((v, idx) => (
              <FadeIn key={v.num} delay={idx * 0.08}>
                <div className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16 py-10 hover:bg-card transition-colors duration-200 -mx-4 px-4">
                  <div className="lg:col-span-1 pt-1">
                    <span className="text-xs font-bold text-primary/35 tracking-widest">{v.num}</span>
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
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">{philEy}</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white max-w-xl leading-tight">
              {philHl}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/8">
            {philItems.map((p, idx) => (
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

      {/* ── TEAM ──────────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-20">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">{tEyebrow}</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">{tHl}</h2>
              <p className="text-foreground/60 text-lg leading-[1.85]">{tSub}</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tMembers.map((member, idx) => {
              const photoSrc = member.photo
                ? (member.photo.startsWith('/') ? `${import.meta.env.BASE_URL}${member.photo.slice(1)}` : member.photo)
                : `${import.meta.env.BASE_URL}images/strategy-session.png`;
              return (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="group">
                    <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-secondary">
                      <img
                        src={photoSrc}
                        alt={member.role}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{member.role}</p>
                    <p className="text-foreground/50 text-sm">{member.specialty}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <CTASection
        eyebrow={ctaEy}
        headline={
          <>
            {ctaL1}{" "}
            <span className="text-primary italic">{ctaItal}</span>
          </>
        }
        subtext={ctaSub}
        primaryCta={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCta={{ label: "See Our Work", href: "/work" }}
      />

    </PageLayout>
  );
}
