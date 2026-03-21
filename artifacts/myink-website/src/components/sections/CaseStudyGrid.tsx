import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/button";

interface CaseStudy {
  img: string;
  tag: string;
  title: string;
  outcome: string;
}

const FEATURED: CaseStudy = {
  img: "campaign-2.png",
  tag: "Brand Strategy",
  title: "Elevated Living",
  outcome: "Complete strategic overhaul for a luxury real estate development launch.",
};

const SECONDARY: CaseStudy[] = [
  {
    img: "campaign-1.png",
    tag: "Campaign Execution",
    title: "The New Standard",
    outcome: "Repositioning a heritage hospitality brand for a modern audience.",
  },
  {
    img: "campaign-3.png",
    tag: "Digital & Press",
    title: "Motion & Energy",
    outcome: "A cross-channel campaign that drove record-breaking engagement.",
  },
];

function OverlayCard({
  item,
  className = "",
  large = false,
}: {
  item: CaseStudy;
  className?: string;
  large?: boolean;
}) {
  return (
    <Link href="/work" className={`group block ${className}`}>
      <div
        className={`relative overflow-hidden bg-secondary ${
          large ? "h-[460px] lg:h-full min-h-[460px]" : "h-[220px]"
        }`}
      >
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10" />
        <img
          src={`${import.meta.env.BASE_URL}images/${item.img}`}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 lg:p-8 bg-gradient-to-t from-black/80 to-transparent">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
            {item.tag}
          </span>
          <h3
            className={`font-display font-bold text-white group-hover:text-primary transition-colors ${
              large ? "text-3xl" : "text-xl"
            }`}
          >
            {item.title}
          </h3>
          {large && (
            <p className="text-white/55 text-sm leading-relaxed mt-2">{item.outcome}</p>
          )}
        </div>
      </div>
    </Link>
  );
}

export function CaseStudyGrid() {
  return (
    <section className="py-28 md:py-40 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Proof is in
              <br />
              the execution.
            </h2>
          </div>
          <Link href="/work">
            <Button
              variant="outline"
              className="shrink-0 border-border hover:border-primary hover:text-primary bg-transparent"
            >
              All Case Studies <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </FadeIn>

        {/* Asymmetric grid: large left + two stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <FadeIn className="lg:col-span-7 h-full">
            <OverlayCard item={FEATURED} large className="h-full" />
          </FadeIn>

          <div className="lg:col-span-5 flex flex-col gap-5">
            {SECONDARY.map((item, idx) => (
              <FadeIn key={idx} delay={0.1 + idx * 0.08}>
                <OverlayCard item={item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
