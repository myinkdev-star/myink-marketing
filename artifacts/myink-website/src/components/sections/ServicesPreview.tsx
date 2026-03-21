import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/button";

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

export function ServicesPreview() {
  return (
    <section className="py-32 md:py-44 bg-secondary text-secondary-foreground dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-5">
              What We Do
            </p>
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(32px, 4.5vw, 52px)", letterSpacing: "-0.025em" }}
            >
              Five disciplines. One standard.
            </h2>
          </div>
          <Link href="/services">
            <Button
              variant="outline"
              className="border-white/15 text-secondary-foreground/70 hover:bg-white hover:text-secondary hover:border-white shrink-0"
            >
              Full Service List <ArrowUpRight className="ml-2 w-3.5 h-3.5" />
            </Button>
          </Link>
        </FadeIn>

        {/* Service rows */}
        <div className="divide-y divide-white/7">
          {SERVICE_ROWS.map((row, idx) => (
            <FadeIn key={row.num} delay={idx * 0.06}>
              <Link href="/services">
                <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-10 cursor-pointer transition-colors duration-300">

                  {/* Left accent: grows on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-out" />

                  <div className="lg:col-span-1 flex items-start pt-0.5 pl-0 lg:pl-4">
                    <span className="text-[11px] font-bold text-primary/35 tabular-nums">
                      {row.num}
                    </span>
                  </div>

                  <div className="lg:col-span-4 lg:pl-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary/60 mb-2.5">
                      {row.category}
                    </p>
                    <h3
                      className="font-display font-bold text-white group-hover:text-primary transition-colors duration-200 leading-snug"
                      style={{ fontSize: "clamp(17px, 1.6vw, 20px)" }}
                    >
                      {row.headline}
                    </h3>
                  </div>

                  <div className="lg:col-span-6">
                    <p className="text-secondary-foreground/50 leading-[1.9] text-[15px]">
                      {row.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-1 flex items-center justify-end">
                    <ArrowUpRight className="w-4 h-4 text-transparent group-hover:text-primary/60 transition-colors duration-200" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
