import { Link } from "wouter";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";

export interface ServiceCategory {
  num: string;
  title: string;
  tagline: string;
  intro: string;
  services: string[];
  outcome: string;
  idealClient: string;
}

interface ServiceCategoryCardProps {
  category: ServiceCategory;
  isEven?: boolean;
}

export function ServiceCategoryCard({ category, isEven = false }: ServiceCategoryCardProps) {
  return (
    <div
      id={`category-${category.num}`}
      className={`border-b border-border py-24 md:py-32 ${isEven ? "bg-card" : "bg-background"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Sticky sidebar */}
          <FadeIn className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <span className="text-[80px] md:text-[100px] font-display font-bold text-primary/10 leading-none block -mb-4 select-none">
                {category.num}
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                Service Category
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-4">
                {category.title}
              </h2>
              <p className="text-base text-muted-foreground italic mb-8 border-l-2 border-primary/40 pl-4 leading-relaxed">
                "{category.tagline}"
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

          {/* Main content */}
          <FadeIn delay={0.12} className="lg:col-span-8">
            {/* Intro paragraph */}
            <p className="text-lg text-muted-foreground leading-[1.72] mb-10">
              {category.intro}
            </p>

            {/* What's included checklist */}
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/60 mb-5">
                What's Included
              </p>
              <ul className="space-y-3">
                {category.services.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-base leading-[1.72]">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome box */}
            <div className="bg-primary/5 border border-primary/15 p-6 mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                The Outcome
              </p>
              <p className="text-foreground leading-[1.72]">{category.outcome}</p>
            </div>

            {/* Ideal client */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/55 mb-2">
                Ideal For
              </p>
              <p className="text-muted-foreground text-sm leading-[1.72] italic">
                {category.idealClient}
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
