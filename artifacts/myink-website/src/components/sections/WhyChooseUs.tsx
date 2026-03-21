import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/button";

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

export function WhyChooseUs() {
  return (
    <section className="py-32 md:py-44 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <FadeIn className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <h2
              className="font-display font-bold leading-[1.1]"
              style={{ fontSize: "clamp(30px, 4vw, 48px)", letterSpacing: "-0.025em" }}
            >
              Why the clients who find us tend to stay.
            </h2>
            <p className="text-foreground/50 text-[17px] leading-[1.9] self-end">
              There is no shortage of marketing agencies. What is genuinely rare is a firm
              with the discipline to do the thinking first, and the craft to execute it well.
            </p>
          </div>
        </FadeIn>

        {/* Editorial ruled list */}
        <div className="divide-y divide-border">
          {DIFFERENTIATORS.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.06}>
              <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16 py-9 transition-colors duration-300">

                {/* Hover left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-350 ease-out" />

                <div className="lg:col-span-1 flex items-start pt-0.5">
                  <span className="text-[11px] font-bold text-primary/30 tracking-widest tabular-nums">
                    0{idx + 1}
                  </span>
                </div>

                <div className="lg:col-span-4">
                  <h3
                    className="font-display font-bold group-hover:text-primary transition-colors duration-200 leading-snug"
                    style={{ fontSize: "clamp(16px, 1.5vw, 19px)", letterSpacing: "-0.01em" }}
                  >
                    {item.title}
                  </h3>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-muted-foreground leading-[1.72] text-[15px]">{item.desc}</p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.3} className="mt-14">
          <Link href="/about">
            <Button
              size="lg"
              variant="outline"
              className="px-7 border-border/60 hover:border-primary hover:text-primary bg-transparent group"
            >
              About the Firm
              <ArrowRight className="ml-2.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
