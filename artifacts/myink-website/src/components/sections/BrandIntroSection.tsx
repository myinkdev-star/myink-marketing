import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";

export function BrandIntroSection() {
  return (
    <section className="py-28 md:py-40 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Headline — bold positioning statement */}
            <div className="lg:col-span-6">
              <h2 className="text-3xl md:text-[42px] font-display font-bold leading-[1.1]">
                We are not an agency for everyone.{" "}
                <span className="text-primary italic">We work with brands</span> that have
                something real to say — and the conviction to say it at a level that makes
                it impossible to ignore.
              </h2>
            </div>

            {/* Elaboration + link */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-10">
              <div className="space-y-5">
                <p className="text-lg text-foreground/60 leading-[1.85]">
                  M.Y. INK functions as a senior strategic partner. We sit at the table
                  where decisions are made, not downstream from them. We build the strategy,
                  shape the creative direction, and take ownership of the execution —
                  with the same rigour at every stage.
                </p>
                <p className="text-lg text-foreground/60 leading-[1.85]">
                  We do not take on more clients than we can serve at the highest level.
                  If you work with us, you have our full attention and our best thinking —
                  without the dilution that comes from an agency that scales for revenue
                  rather than quality.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors group w-fit"
              >
                Our story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
