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
    <section className="py-28 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <FadeIn className="mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Client Perspectives
          </p>
        </FadeIn>

        {/* Editorial stacked quotes — no cards, no borders */}
        <div className="divide-y divide-border">
          {TESTIMONIALS.map((t, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Large bold quote */}
                <div className="lg:col-span-8">
                  <blockquote className="text-2xl md:text-3xl font-display font-bold leading-[1.3] text-foreground">
                    "{t.quote}"
                  </blockquote>
                </div>
                {/* Attribution — right-aligned on desktop */}
                <div className="lg:col-span-4 lg:text-right lg:pt-2">
                  <p className="font-bold text-foreground text-base">{t.author}</p>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mt-1">
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
