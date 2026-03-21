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
    <section className="py-28 md:py-40 bg-secondary text-secondary-foreground dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            <Button
              variant="outline"
              className="border-white/20 text-secondary-foreground hover:bg-white hover:text-secondary shrink-0"
            >
              Full Service List <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </FadeIn>

        {/* Service rows */}
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
                    <ArrowUpRight className="w-5 h-5 text-transparent group-hover:text-primary/70 transition-colors duration-200" />
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
