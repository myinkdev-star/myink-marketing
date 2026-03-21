import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";

export function BrandIntroSection() {
  return (
    <section className="py-32 md:py-44 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

            {/* Positioning statement */}
            <div className="lg:col-span-6">
              <h2
                className="font-display font-bold leading-[1.1]"
                style={{ fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
              >
                We are not an agency for everyone.{" "}
                <span className="text-primary italic">We work with brands</span> that have
                something real to say — and the conviction to say it at a level that makes
                it impossible to ignore.
              </h2>
            </div>

            {/* Elaboration */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-10">
              <div className="space-y-6">
                <p className="text-[17px] text-foreground/55 leading-[1.9]">
                  M.Y. INK functions as a senior strategic partner. We sit at the table
                  where decisions are made, not downstream from them. We build the strategy,
                  shape the creative direction, and take ownership of the execution —
                  with the same rigour at every stage.
                </p>
                <p className="text-[17px] text-foreground/55 leading-[1.9]">
                  We do not take on more clients than we can serve at the highest level.
                  If you work with us, you have our full attention and our best thinking —
                  without the dilution that comes from an agency that scales for revenue
                  rather than quality.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.18em] hover:text-primary transition-colors group w-fit link-line"
              >
                Our story
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
