import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceCategoryCard, ServiceCategory } from "@/components/shared/ServiceCategoryCard";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/button";

/* ─────────────────────── DATA ─────────────────────────── */

const CATEGORIES: ServiceCategory[] = [
  {
    num: "01",
    title: "Brand & Marketing Strategy",
    tagline: "The foundation. Before a single decision is made.",
    intro:
      "Every engagement begins here, regardless of which service a client initially enquires about. Because the most expensive mistake in marketing is executing the wrong strategy with precision. We do the work to ensure the strategy is correct before anything else is built on top of it.",
    services: [
      "Customized marketing strategies built around your specific market context",
      "Brand positioning and competitive differentiation analysis",
      "Target audience profiling and market segmentation",
      "Consumer research and audience insight studies",
      "Growth roadmapping and opportunity identification",
      "Messaging hierarchy and brand voice development",
    ],
    outcome:
      "A strategy your team can actually use — one that sharpens your positioning, clarifies your messaging, prioritises your spend, and gives every future marketing decision a filter to run through.",
    idealClient:
      "Businesses entering a new growth phase, brands that have lost market clarity, and founders who want to compete from a position of genuine strategic strength rather than tactical activity.",
  },
  {
    num: "02",
    title: "Campaign Development & Execution",
    tagline: "Campaigns built to convert, not just to impress.",
    intro:
      "A campaign is not just a creative concept. It is a system — built from insight, shaped by strategy, executed with precision across every channel that matters, and measured against outcomes that were agreed upon before the work began. We own the entire process.",
    services: [
      "Full-service campaign strategy, concepting, and creative development",
      "Promotion design and campaign architecture across all channels",
      "Advertising concepts for traditional, digital, and out-of-home media",
      "Webinar hosting and live virtual event production",
      "Production oversight — photography, video, design, and copy",
      "Campaign management, pacing, and performance review",
      "Creative impact reporting — measurable results, documented",
    ],
    outcome:
      "A campaign that earns attention, communicates with clarity, and drives audiences to take the specific action your business needs — not just impressions, awareness, or reach.",
    idealClient:
      "Brands preparing for a launch, seasonal push, grand opening, or market re-entry who understand that the quality of the campaign is inseparable from the quality of the strategy behind it.",
  },
  {
    num: "03",
    title: "Content, Messaging & Editorial Support",
    tagline: "The words that separate authorities from the rest.",
    intro:
      "Your reputation in your market is built, in large part, by what you say and how you say it. We help brands and their leadership teams develop the written and spoken work that positions them as the definitive authorities in their field — and the visual content that stops the scroll and starts the conversation.",
    services: [
      "Ghostwriting — op-eds, thought leadership articles, white papers, speeches",
      "Script writing for video, broadcast, podcast, and digital content",
      "Social asset creation — graphics, banners, and platform-specific visuals",
      "Motion graphics and kinetic design",
      "Animated social posts and micro-content production",
      "How-to video scripting and production",
      "Social influencer collaboration and partnership management",
      "Brand messaging documents and key message frameworks",
      "Long-form content strategy and editorial calendar development",
    ],
    outcome:
      "A consistent, credible voice across every written, visual, and spoken platform — one that attracts the right attention, builds trust with discerning audiences, and compounds in value the longer it is sustained.",
    idealClient:
      "Executives and founders who understand that thought leadership is a long game worth playing, and brands that want content to do more than fill a content calendar.",
  },
  {
    num: "04",
    title: "Publicity & Communications",
    tagline: "Stories placed where they change minds.",
    intro:
      "Earned media is more valuable than paid media — and significantly harder to get right. We build publicity strategies that place the right story in the right room at the right moment, generating coverage that does more than mention a brand: it repositions one.",
    services: [
      "Press release development and strategic media distribution",
      "Press coverage strategy and earned media placement",
      "Live news appearance planning, coaching, and coordination",
      "Press night concept, design, and full event execution",
      "Media relations and journalist outreach",
      "Brand narrative development and story positioning",
      "Crisis communications preparation and response support",
    ],
    outcome:
      "Authentic coverage in the publications and channels that shape your market's perception, a stronger public narrative, and press events that generate real industry conversation — not just a news cycle.",
    idealClient:
      "Brands with news worth sharing, organisations preparing for a significant announcement, and business leaders who understand that public perception is a strategic asset worth managing with the same rigour as any other.",
  },
  {
    num: "05",
    title: "Digital Presence & Growth Support",
    tagline: "Disciplined execution across every platform that matters.",
    intro:
      "Digital marketing without a clear strategic framework is simply an expensive way to generate noise. We build strategies rooted in data, executed with discipline, and designed to convert the right kind of attention into measurable business outcomes — not just platform metrics.",
    services: [
      "Digital marketing strategy and channel planning",
      "Social media strategy and content direction",
      "Website builds and edits — strategy-led development and optimisation",
      "Search engine optimisation — technical and content-focused",
      "Paid media strategy and campaign management",
      "Digital analytics, reporting, and performance optimisation",
    ],
    outcome:
      "A disciplined digital presence that grows the right audience, strengthens brand equity across every relevant platform, and produces results that appear in quarterly reports — not just analytics dashboards.",
    idealClient:
      "Brands ready to invest in digital growth seriously — not those looking to post more content, but those prepared to use every channel with purpose, precision, and a strategy behind every decision.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery & Immersion",
    desc: "We spend the time to understand your brand as it actually exists — not as you hope it is perceived. We study your market, your competitors, and your audience before making a single recommendation.",
  },
  {
    num: "02",
    title: "Strategic Development",
    desc: "With clarity in hand, we build the strategy. Every recommendation is specific, defensible, and designed to create a measurable competitive advantage. Nothing vague. Nothing templated.",
  },
  {
    num: "03",
    title: "Creative & Execution",
    desc: "We bring the strategy to life through creative and executional precision — across every channel and touchpoint that matters, at the standard our clients expect and their audiences deserve.",
  },
  {
    num: "04",
    title: "Measure & Refine",
    desc: "We track what matters, report with full transparency, and make the adjustments the data requires. Good strategy does not mean set-and-forget — it means continuous improvement against a clear benchmark.",
  },
];

const FAQS = [
  {
    q: "Do you work with clients outside the Bahamas?",
    a: "Yes. While our roots are in Nassau and our market intelligence runs deepest in the Caribbean, the strategic frameworks we apply translate across geographies. We work with clients across North America and the wider Caribbean — and have done so successfully.",
  },
  {
    q: "How does your pricing work?",
    a: "We work on a project-basis or retainer model, depending on the engagement. We price based on scope and value — not hours. We don't do hourly billing because the most valuable thing we provide is the thinking, and the thinking is difficult to meter by the hour.",
  },
  {
    q: "Do you manage the full production of creative assets?",
    a: "We lead creative direction, strategy, and quality control for all assets. Depending on the project, we execute in-house or through our trusted network of photographers, directors, and designers — all of whom we've worked with long enough to trust with our clients.",
  },
  {
    q: "How selective are you about new clients?",
    a: "Genuinely selective. We review every inquiry personally. The question we ask is whether we believe we are the right strategic fit — and whether we can serve a brand at the standard we hold ourselves to. We turn down work that doesn't meet that threshold.",
  },
];

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function Services() {
  return (
    <PageLayout>

      {/* ── PAGE HERO ─────────────────────────────────────── */}
      <PageHero
        eyebrow="Our Expertise"
        headline={
          <>
            What We{" "}
            <span className="text-primary italic">Do Best.</span>
          </>
        }
        intro={
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <p className="text-xl text-muted-foreground leading-[1.72]">
              Five capabilities — each one a distinct discipline, together forming the
              complete strategic infrastructure most brands piece together from multiple
              vendors and wonder why it never feels cohesive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="px-8">
                  Discuss Your Needs <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        }
      />

      {/* Category anchor nav */}
      <div className="bg-background border-b border-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {CATEGORIES.map((cat) => (
              <a
                key={cat.num}
                href={`#category-${cat.num}`}
                className="text-xs font-bold uppercase tracking-widest text-foreground border border-border px-4 py-2 hover:border-primary hover:text-primary transition-colors"
              >
                {cat.num} {cat.title}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── SERVICE CATEGORIES ────────────────────────────── */}
      <section className="bg-background">
        {CATEGORIES.map((cat, idx) => (
          <ServiceCategoryCard key={cat.num} category={cat} isEven={idx % 2 === 1} />
        ))}
      </section>

      {/* ── PROCESS ───────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-secondary text-secondary-foreground dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-20">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              How We Work
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white max-w-xl leading-tight">
              Our process is our standard.
            </h2>
            <p className="text-secondary-foreground/55 text-lg max-w-2xl mt-5 leading-relaxed">
              Every engagement follows the same four-stage framework — because exceptional
              outcomes require structure, not improvisation.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/8">
            {PROCESS_STEPS.map((step, idx) => (
              <FadeIn key={step.num} delay={idx * 0.1}>
                <div className="group p-8 lg:p-10 hover:bg-white/3 transition-colors">
                  <span className="text-5xl font-display font-bold text-white/10 block mb-6 leading-none">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-secondary-foreground/55 text-sm leading-[1.8]">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Questions & Answers
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              What clients typically ask.
            </h2>
          </FadeIn>

          <div className="divide-y divide-border">
            {FAQS.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16">
                  <div className="lg:col-span-5">
                    <h4 className="text-xl font-display font-bold leading-snug">{faq.q}</h4>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-muted-foreground leading-[1.72]">{faq.a}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Let's Begin
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] mb-6">
                Not sure which service your brand needs first?
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed">
                Most of our best client relationships began with a conversation, not a
                formal brief. Tell us where your brand is today and what you're trying to
                build — we'll tell you honestly whether and how we can help.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="border border-border p-10">
                <h3 className="text-2xl font-display font-bold mb-3">
                  Begin the Conversation
                </h3>
                <p className="text-foreground/55 mb-8 text-sm leading-relaxed">
                  We review every enquiry personally and respond within 48 business hours.
                  If there's a fit, you'll know it from the first call.
                </p>
                <div className="space-y-4">
                  <Link href="/contact" className="block">
                    <Button
                      size="lg"
                      className="w-full justify-between px-6 h-13 text-base group"
                    >
                      Request a Consultation
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/work" className="block">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full justify-between px-6 h-13 text-base bg-transparent border-border hover:border-primary hover:text-primary group"
                    >
                      Review Our Work First
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <p className="mt-6 text-xs text-foreground/35 text-center tracking-wide">
                  We typically respond within 48 business hours.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
