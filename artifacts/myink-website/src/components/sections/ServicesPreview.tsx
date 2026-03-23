import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/button";
import { useContentCollection, useContent } from "@/hooks/useContent";

interface ServiceFile {
  num: string;
  title: string;
  tagline: string;
  intro: string;
}

interface HomeContent {
  what_we_do?: { headline?: string };
}

const SERVICE_FILES = [
  "services/01-brand-strategy.md",
  "services/02-campaigns.md",
  "services/03-content-editorial.md",
  "services/04-publicity.md",
  "services/05-digital-presence.md",
];

export function ServicesPreview() {
  const { items } = useContentCollection<ServiceFile>(SERVICE_FILES);
  const { data: home } = useContent<HomeContent>("home.md");

  const headline =
    home.what_we_do?.headline ?? "Five disciplines. One standard.";

  return (
    <section className="py-32 md:py-44 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-5">
              What We Do
            </p>
            <h2
              className="font-display font-bold text-foreground"
              style={{ fontSize: "clamp(32px, 4.5vw, 52px)", letterSpacing: "-0.025em" }}
            >
              {headline}
            </h2>
          </div>
          <Link href="/services">
            <Button
              variant="outline"
              className="border-border text-foreground/70 hover:border-primary hover:text-primary shrink-0"
            >
              Full Service List <ArrowUpRight className="ml-2 w-3.5 h-3.5" />
            </Button>
          </Link>
        </FadeIn>

        {/* Service rows */}
        <div className="divide-y divide-border">
          {items.map((row, idx) => (
            <FadeIn key={row.num ?? idx} delay={idx * 0.06}>
              <Link href="/services">
                <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-10 cursor-pointer transition-colors duration-300">

                  {/* Left accent: grows on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-out" />

                  <div className="lg:col-span-1 flex items-start pt-0.5 pl-0 lg:pl-4">
                    <span className="text-[11px] font-bold text-primary/65 tabular-nums">
                      {row.num}
                    </span>
                  </div>

                  <div className="lg:col-span-4 lg:pl-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary mb-2.5">
                      {row.title}
                    </p>
                    <h3
                      className="font-display font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-snug"
                      style={{ fontSize: "clamp(17px, 1.6vw, 20px)" }}
                    >
                      {row.tagline}
                    </h3>
                  </div>

                  <div className="lg:col-span-6">
                    <p className="text-muted-foreground leading-[1.72] text-[15px]">
                      {row.intro}
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
