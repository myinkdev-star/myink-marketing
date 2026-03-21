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
    <section className="py-28 md:py-40 bg-secondary text-secondary-foreground dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              {eyebrow && (
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                  {eyebrow}
                </p>
              )}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.06] mb-6">
                {headline}
              </h2>
              {subtext && (
                <p className="text-secondary-foreground/55 text-lg leading-[1.85] max-w-lg">
                  {subtext}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-5">
              <Link href={primaryCta.href}>
                <Button
                  size="lg"
                  className="w-full justify-between px-8 h-14 text-base group"
                >
                  {primaryCta.label}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-between px-8 h-14 text-base border-white/20 text-secondary-foreground hover:bg-white hover:text-secondary group"
                  >
                    {secondaryCta.label}
                    <ArrowUpRight className="w-5 h-5" />
                  </Button>
                </Link>
              )}

              {note && (
                <p className="text-secondary-foreground/30 text-xs tracking-wide text-center pt-1">
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
