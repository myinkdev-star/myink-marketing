import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/button";

interface CtaLink {
  label: string;
  href: string;
}

interface CTASectionProps {
  eyebrow?: string;
  headline: React.ReactNode;
  subtext?: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  note?: string;
}

export function CTASection({
  eyebrow = "Let's Work Together",
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  note,
}: CTASectionProps) {
  return (
    <section className="py-32 md:py-44 bg-secondary text-secondary-foreground dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">

            {/* Left: copy */}
            <div>
              {eyebrow && (
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-7">
                  {eyebrow}
                </p>
              )}
              <h2
                className="font-display font-bold text-white leading-[1.04] mb-7"
                style={{ fontSize: "clamp(36px, 5.5vw, 64px)", letterSpacing: "-0.025em" }}
              >
                {headline}
              </h2>
              {subtext && (
                <p className="text-muted-foreground text-[17px] leading-[1.72] max-w-lg">
                  {subtext}
                </p>
              )}
            </div>

            {/* Right: actions */}
            <div className="flex flex-col gap-4">
              <Link href={primaryCta.href}>
                <Button
                  size="lg"
                  className="w-full justify-between px-7 h-14 group"
                >
                  <span>{primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>

              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-between px-7 h-14 border-white/12 text-secondary-foreground/80 hover:bg-white hover:text-secondary hover:border-white group"
                  >
                    <span>{secondaryCta.label}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </Button>
                </Link>
              )}

              {note && (
                <p className="text-secondary-foreground/25 text-[11px] tracking-[0.05em] text-center pt-0.5">
                  {note}
                </p>
              )}
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
