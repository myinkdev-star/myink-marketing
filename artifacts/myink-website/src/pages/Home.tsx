import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandIntroSection } from "@/components/sections/BrandIntroSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { useContent } from "@/hooks/useContent";

interface HomeCTA {
  eyebrow?: string;
  headline_1?: string;
  headline_italic?: string;
  subtext?: string;
  primary_label?: string;
  secondary_label?: string;
  note?: string;
}

interface HomeContent {
  marquee?: string[];
  cta?: HomeCTA;
}

const DEFAULT_MARQUEE = [
  "Brand Strategy",
  "Campaign Execution",
  "Advertising Concepts",
  "Ghostwriting",
  "Press Events",
  "Digital Strategy",
  "Script Writing",
  "Media Relations",
];

export default function Home() {
  const { data: home } = useContent<HomeContent>("home.md");

  const marqueeItems = home.marquee ?? DEFAULT_MARQUEE;
  const cta = home.cta ?? {};

  const ctaEyebrow       = cta.eyebrow         ?? "Let's Work Together";
  const ctaHeadline1     = cta.headline_1       ?? "Your brand's next chapter";
  const ctaHeadlineIt    = cta.headline_italic  ?? "doesn't write itself.";
  const ctaSubtext       = cta.subtext          ??
    "Most of the best partnerships we've built started with a conversation, not a formal brief. If you are thinking seriously about where your brand needs to go next, that is reason enough to reach out.";
  const ctaPrimaryLabel  = cta.primary_label    ?? "Start a Conversation";
  const ctaSecondaryLabel= cta.secondary_label  ?? "Explore Our Services";
  const ctaNote          = cta.note             ??
    "We review every enquiry personally and respond within 48 business hours.";

  return (
    <PageLayout>
      {/* Full-screen editorial hero */}
      <HeroSection />

      {/* Scrolling discipline ticker */}
      <div className="bg-secondary text-secondary-foreground py-4 overflow-hidden flex border-b border-white/5">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center">
              {marqueeItems.map((item, idx) => (
                <div key={`${i}-${idx}`} className="flex items-center">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase px-8 text-secondary-foreground/60">
                    {item}
                  </span>
                  <span className="text-primary/60">·</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Brand positioning statement */}
      <BrandIntroSection />

      {/* Five disciplines table on dark bg */}
      <ServicesPreview />

      {/* Differentiator ruled list */}
      <WhyChooseUs />

      {/* Asymmetric work preview grid */}
      <CaseStudyGrid />

      {/* Editorial stacked testimonials */}
      <TestimonialsSection />

      {/* Full-width dark CTA — driven by home.md */}
      <CTASection
        eyebrow={ctaEyebrow}
        headline={
          <>
            {ctaHeadline1}{" "}
            <span className="text-primary italic">{ctaHeadlineIt}</span>
          </>
        }
        subtext={ctaSubtext}
        primaryCta={{ label: ctaPrimaryLabel, href: "/contact" }}
        secondaryCta={{ label: ctaSecondaryLabel, href: "/services" }}
        note={ctaNote}
      />
    </PageLayout>
  );
}
