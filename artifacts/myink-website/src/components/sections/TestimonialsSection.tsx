import { FadeIn } from "@/components/shared/FadeIn";

const TESTIMONIALS = [
  {
    quote:
      "M.Y. INK did something most agencies can't: they made us look at our own brand differently. The strategy they developed became the internal compass our team still uses two years later.",
    author: "Marcus T.",
    title: "CEO · Hospitality Group",
  },
  {
    quote:
      "They joined our leadership conversations — not just our marketing meetings. The thinking they bring is not what I expected from an agency. It is what I would have expected from our best internal hire.",
    author: "Simone R.",
    title: "Founder · Lifestyle Brand",
  },
  {
    quote:
      "Our brand occupied a competitive, crowded space. They found the position we hadn't seen ourselves, built a campaign around it, and won us the market segment we'd been chasing for three years.",
    author: "David H.",
    title: "Director · Real Estate Development",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 md:py-44 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label */}
        <FadeIn className="mb-18">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Client Perspectives
          </p>
        </FadeIn>

        {/* Stacked editorial quotes */}
        <div className="divide-y divide-border">
          {TESTIMONIALS.map((t, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="py-14 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                {/* Quote */}
                <div className="lg:col-span-8 relative">
                  {/* Decorative quotation mark behind text */}
                  <span
                    className="absolute -top-5 -left-1 font-display font-bold text-[80px] leading-none text-primary/7 select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    "
                  </span>
                  <blockquote
                    className="relative font-display font-bold leading-[1.28] text-foreground"
                    style={{ fontSize: "clamp(20px, 2.5vw, 30px)", letterSpacing: "-0.015em" }}
                  >
                    {t.quote}
                  </blockquote>
                </div>

                {/* Attribution */}
                <div className="lg:col-span-4 lg:text-right lg:pt-1">
                  <p className="font-bold text-foreground text-[15px] tracking-tight">
                    {t.author}
                  </p>
                  <p className="text-primary text-[11px] font-bold uppercase tracking-[0.18em] mt-1.5">
                    {t.title}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
