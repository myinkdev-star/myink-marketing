import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

/* ──────────────────────────── DATA ──────────────────────────── */

const CATEGORIES = [
  {
    num: "01",
    title: "Brand & Marketing Strategy",
    tagline: "The foundation everything else is built on.",
    intro:
      "Before a single campaign is launched or a word of copy is written, strategy must come first. We work closely with your leadership to define where your brand stands, where it needs to go, and the clearest path to get there — in a way that creates real competitive separation.",
    services: [
      "Customized marketing strategies built around your specific market context",
      "Brand positioning and competitive differentiation analysis",
      "Target audience profiling and market segmentation",
      "Growth roadmapping and opportunity identification",
      "Messaging hierarchy and brand voice development",
    ],
    outcome:
      "You leave with a clear, executable strategy that aligns your team, sharpens your positioning, and gives every future marketing decision a filter to run through.",
    idealClient:
      "Established brands entering a new phase of growth, businesses that have lost market clarity, and founders who want to build from a position of strength.",
  },
  {
    num: "02",
    title: "Campaign Development & Execution",
    tagline: "Ideas that move people. Execution that moves markets.",
    intro:
      "A great campaign is more than a good idea — it is a disciplined process from insight to impact. We develop campaigns that are rooted in strategy, shaped by creativity, and executed with the kind of precision that produces results worth measuring. From concept through launch, we own the entire process.",
    services: [
      "Full-service campaign strategy, concepting, and creative development",
      "Promotion design and campaign architecture",
      "Advertising concepts across traditional, digital, and out-of-home channels",
      "Production oversight — photography, video, design, and copy",
      "Campaign management, pacing, and performance review",
    ],
    outcome:
      "A cohesive, high-impact campaign that captures attention, communicates your message with clarity, and drives audiences to take the action you need.",
    idealClient:
      "Brands preparing for a product launch, seasonal push, grand opening, or market re-entry who want campaign work done at the highest level.",
  },
  {
    num: "03",
    title: "Content, Messaging & Editorial Support",
    tagline: "Your authority, articulated at the highest level.",
    intro:
      "What you say — and how you say it — is one of the most powerful competitive advantages available to any brand. We help brands and their leaders craft the written and spoken content that positions them as authorities, builds trust with discerning audiences, and elevates their reputation over time.",
    services: [
      "Ghostwriting — op-eds, thought leadership articles, white papers, speeches",
      "Script writing for video, broadcast, podcast, and digital content",
      "Brand messaging documents and key message frameworks",
      "Executive communications and stakeholder presentations",
      "Long-form content strategy and editorial calendar development",
    ],
    outcome:
      "A consistent, authoritative voice across every written and spoken platform that builds credibility, attracts the right audiences, and sets your brand apart as a leader in its field.",
    idealClient:
      "Executives, founders, and brands that understand content is currency — and want to invest in the kind that compounds.",
  },
  {
    num: "04",
    title: "Publicity & Communications",
    tagline: "The right story. The right room. The right moment.",
    intro:
      "Media coverage that matters is earned, not bought. We design publicity strategies that generate meaningful press — positioning your brand in the publications, conversations, and rooms that influence your target market. From the way your story is told to the events where it unfolds, we shape the narrative.",
    services: [
      "Press release development and strategic media distribution",
      "Press event concept, design, and full execution",
      "Media relations and journalist outreach",
      "Brand narrative development and story positioning",
      "Crisis communications preparation and response support",
    ],
    outcome:
      "Authentic media coverage, a stronger public narrative, and press events that create genuine industry moments — not just noise.",
    idealClient:
      "Brands with news worth sharing, businesses preparing for a significant announcement, and organizations that want to own the conversation in their market.",
  },
  {
    num: "05",
    title: "Digital Presence & Growth Support",
    tagline: "Precision across every platform that matters.",
    intro:
      "Digital marketing without strategy is just spending money. We build data-informed digital strategies designed to reach the right audiences, drive meaningful engagement, and deliver measurable returns. Every tactic we deploy is tied to a clear business objective — not just a vanity metric.",
    services: [
      "Digital marketing strategy and channel planning",
      "Social media strategy and content direction",
      "Search engine optimization (SEO) — technical and content-focused",
      "Paid media strategy and campaign management",
      "Digital analytics, reporting, and performance optimization",
    ],
    outcome:
      "A disciplined digital presence that grows your audience, strengthens your brand equity online, and converts the right kind of attention into real business outcomes.",
    idealClient:
      "Businesses ready to invest seriously in digital growth — not just those looking to post more, but those ready to do it with purpose and precision.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery & Immersion",
    desc: "We begin by listening — deeply. We study your brand, your market, your competitors, and your audience before making a single recommendation.",
  },
  {
    num: "02",
    title: "Strategic Development",
    desc: "With clarity in hand, we build the strategy. Every recommendation is intentional, defensible, and designed to create a distinct advantage.",
  },
  {
    num: "03",
    title: "Creative & Execution",
    desc: "We bring the strategy to life through precise, high-quality creative execution — across every channel and touchpoint that matters.",
  },
  {
    num: "04",
    title: "Measure & Elevate",
    desc: "We track what matters, report with transparency, and continuously refine the work. Strategy is never set-and-forget.",
  },
];

const FAQS = [
  {
    q: "Do you work with international clients?",
    a: "Yes. While we are based in the Bahamas and deeply understand the Caribbean market, our strategic approach translates globally. We work with clients across North America, the Caribbean, and beyond.",
  },
  {
    q: "How are your services priced?",
    a: "We work on a retainer basis for ongoing strategic partnerships, or project-based fees for campaigns and events. We price based on value and scope — not hours — because the thinking is what matters most.",
  },
  {
    q: "Do you handle the actual production of creative assets?",
    a: "We lead creative direction and strategy. Depending on the project, we execute in-house or bring in our trusted network of photographers, videographers, and designers to deliver at the level our clients expect.",
  },
  {
    q: "How selective are you about new clients?",
    a: "We deliberately keep our client roster small. This is a feature, not a limitation — it means every brand we work with receives our full focus, our best thinking, and our highest standard of execution.",
  },
];

/* ─────────────────────────── HELPERS ────────────────────────── */

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

/* ─────────────────────────── PAGE ────────────────────────────── */

export default function Services() {
  return (
    <PageLayout>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-background border-b border-border relative overflow-hidden">
        {/* Subtle orange accent shape */}
        <div className="absolute top-0 right-0 w-px h-full bg-primary/20" />
        <div className="absolute bottom-0 left-0 w-40 h-px bg-primary/30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <motion.p
                className="text-xs font-bold uppercase tracking-widest text-primary mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Our Expertise
              </motion.p>
              <motion.h1
                className="text-5xl md:text-7xl lg:text-[80px] font-display font-bold leading-[1.04] tracking-tight"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                What We <br />
                <span className="text-primary italic">Do Best.</span>
              </motion.h1>
            </div>

            <motion.div
              className="lg:col-span-5 lg:pb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
            >
              <p className="text-xl text-foreground/65 leading-relaxed mb-8">
                Five strategic service pillars. One unwavering standard. Every offering we provide
                is built around the same core belief — that marketing done with intelligence and
                precision is one of the most powerful investments a brand can make.
              </p>
              <Link href="/contact">
                <Button size="lg" className="px-8">
                  Discuss Your Needs <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Service category quick-nav */}
          <motion.div
            className="mt-20 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {CATEGORIES.map((cat) => (
              <a
                key={cat.num}
                href={`#category-${cat.num}`}
                className="text-xs font-bold uppercase tracking-widest border border-border px-4 py-2 hover:border-primary hover:text-primary transition-colors"
              >
                {cat.num} {cat.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE CATEGORIES ──────────────────────────────────── */}
      <section className="bg-background">
        {CATEGORIES.map((cat, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div
              key={cat.num}
              id={`category-${cat.num}`}
              className={`border-b border-border py-24 md:py-32 ${isEven ? "bg-card" : "bg-background"}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                  {/* Left — metadata column */}
                  <FadeIn className="lg:col-span-4">
                    <div className="lg:sticky lg:top-32">
                      <span className="text-[80px] md:text-[100px] font-display font-bold text-primary/10 leading-none block -mb-4 select-none">
                        {cat.num}
                      </span>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                        Service Category
                      </p>
                      <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-4">
                        {cat.title}
                      </h2>
                      <p className="text-base text-foreground/50 italic mb-8 border-l-2 border-primary/40 pl-4">
                        "{cat.tagline}"
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors group"
                      >
                        Enquire About This
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </FadeIn>

                  {/* Right — detail column */}
                  <FadeIn delay={0.12} className="lg:col-span-8">
                    <p className="text-lg text-foreground/70 leading-[1.85] mb-10">
                      {cat.intro}
                    </p>

                    {/* Services included */}
                    <div className="mb-10">
                      <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-5">
                        What's Included
                      </p>
                      <ul className="space-y-3">
                        {cat.services.map((s, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground/75 text-base leading-relaxed">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome */}
                    <div className="bg-primary/5 border border-primary/15 p-6 mb-8">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                        The Outcome
                      </p>
                      <p className="text-foreground/80 leading-relaxed">{cat.outcome}</p>
                    </div>

                    {/* Ideal client */}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-foreground/35 mb-2">
                        Ideal For
                      </p>
                      <p className="text-foreground/55 text-sm leading-relaxed italic">
                        {cat.idealClient}
                      </p>
                    </div>
                  </FadeIn>

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────── */}
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
              Every engagement follows the same rigorous, four-stage framework — because great
              outcomes require discipline, not luck.
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

      {/* ── FAQ ─────────────────────────────────────────────────── */}
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
                    <p className="text-foreground/65 leading-[1.85]">{faq.a}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-card border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/4 rounded-full translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/3 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Let's Begin
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] mb-6">
                Not sure which service is right for you?
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed">
                Most of our best client relationships start with a conversation, not a brief.
                Tell us where your brand is and where you want it to go — we'll tell you exactly
                how we can help.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="border border-border p-10">
                <h3 className="text-2xl font-display font-bold mb-3">Start a Conversation</h3>
                <p className="text-foreground/55 mb-8 text-sm leading-relaxed">
                  We take on a limited number of new clients each quarter. If you're serious
                  about elevating your brand, we'd like to hear from you.
                </p>
                <div className="space-y-4">
                  <Link href="/contact" className="block">
                    <Button size="lg" className="w-full justify-between px-6 h-13 text-base group">
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
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
