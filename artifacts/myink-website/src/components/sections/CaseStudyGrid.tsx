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
        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/12 transition-colors duration-600 z-10" />
        <img
          src={`${import.meta.env.BASE_URL}images/${item.img}`}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-[1.04]"
        />
        {/* Gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent z-10" />

        {/* Text */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 lg:p-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary block mb-2.5">
            {item.tag}
          </span>
          <h3
            className={`font-display font-bold text-white group-hover:text-primary transition-colors duration-200 leading-tight ${
              large ? "text-[28px] lg:text-3xl" : "text-xl"
            }`}
            style={{ letterSpacing: "-0.015em" }}
          >
            {item.title}
          </h3>
          {large && (
            <p className="text-white/45 text-[14px] leading-[1.75] mt-2.5 max-w-sm">{item.outcome}</p>
          )}
        </div>

        {/* Hover arrow */}
        <div className="absolute top-5 right-5 z-20">
          <div className="w-9 h-9 bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function CaseStudyGrid() {
  return (
    <section className="py-32 md:py-44 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-5">
              Selected Work
            </p>
            <h2
              className="font-display font-bold leading-[1.06]"
              style={{ fontSize: "clamp(30px, 4.5vw, 52px)", letterSpacing: "-0.025em" }}
            >
              Proof is in
              <br />
              the execution.
            </h2>
          </div>
          <Link href="/work">
            <Button
              variant="outline"
              className="shrink-0 border-border/70 hover:border-primary hover:text-primary bg-transparent"
            >
              All Case Studies <ArrowUpRight className="ml-2 w-3.5 h-3.5" />
            </Button>
          </Link>
        </FadeIn>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <FadeIn className="lg:col-span-7 h-full">
            <OverlayCard item={FEATURED} large className="h-full" />
          </FadeIn>
          <div className="lg:col-span-5 flex flex-col gap-4">
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
