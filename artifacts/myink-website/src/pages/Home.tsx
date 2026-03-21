import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandIntroSection } from "@/components/sections/BrandIntroSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

const MARQUEE_ITEMS = [
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
  return (
    <PageLayout>
      {/* Full-screen editorial hero */}
      <HeroSection />

      {/* Scrolling discipline ticker */}
      <div className="bg-secondary text-secondary-foreground py-4 overflow-hidden flex border-b border-white/5">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center">
              {MARQUEE_ITEMS.map((item, idx) => (
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

      {/* Full-width dark CTA */}
      <CTASection
        eyebrow="Let's Work Together"
        headline={
          <>
            Your brand's next chapter{" "}
            <span className="text-primary italic">doesn't write itself.</span>
          </>
        }
        subtext="Most of the best partnerships we've built started with a conversation, not a formal brief. If you are thinking seriously about where your brand needs to go next, that is reason enough to reach out."
        primaryCta={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Services", href: "/services" }}
        note="We review every enquiry personally and respond within 48 business hours."
      />
    </PageLayout>
  );
}
