import { Link } from "wouter";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DETAILED_SERVICES = [
  {
    title: "Customized Marketing Strategies",
    desc: "We don't believe in templates. We build tailored strategic plans rooted in your brand's unique goals, market position, and growth ambitions. This involves deep market research, audience profiling, and competitive analysis to find your white space.",
  },
  {
    title: "Promotion & Campaign Execution",
    desc: "From the initial creative spark to the final media buy. We provide full-service campaign development including creative concepts, production oversight, and results-driven execution that moves the needle.",
  },
  {
    title: "Advertising Concepts",
    desc: "Bold ideas translated into compelling advertising across traditional and digital channels. We ensure your core message is delivered with impact, capturing attention in a crowded marketplace.",
  },
  {
    title: "Ghostwriting",
    desc: "Your voice, elevated. We produce strategic long-form content—op-eds, speeches, white papers, and articles—designed to position you and your brand as unquestionable industry authorities.",
  },
  {
    title: "Script Writing (All Media)",
    desc: "Words that demand to be heard. We craft compelling scripts for video, broadcast, podcast, and digital content that hook viewers in the first three seconds and move audiences to action.",
  },
  {
    title: "Press Releases & Media Relations",
    desc: "Professionally crafted press releases that get your news placed in the right publications. We understand what journalists want and package your news to ensure maximum pickup and positive sentiment.",
  },
  {
    title: "Press Events",
    desc: "From concept to flawless execution. We design, manage, and execute press events that generate coverage, create industry conversation, and build undeniable brand credibility.",
  },
  {
    title: "Digital Strategies & Implementation",
    desc: "Data-informed digital marketing strategies executed with absolute precision. We handle SEO, social media strategy, content marketing, and paid media to build your digital footprint the right way.",
  }
];

export default function Services() {
  return (
    <PageLayout>
      <section className="py-24 md:py-32 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
              Expertise & <span className="text-primary italic">Capabilities</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              We offer comprehensive strategic marketing services for brands that demand excellence. From the boardroom strategy to the final creative output.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 lg:gap-x-24">
            {DETAILED_SERVICES.map((service, idx) => (
              <div key={idx} className="group">
                <div className="h-[1px] w-12 bg-primary mb-6 transition-all group-hover:w-24" />
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-6">{service.desc}</p>
                <Link href="/contact" className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-foreground hover:text-primary transition-colors">
                  Discuss this service <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary text-secondary-foreground dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left">
            {[
              { q: "Do you work with international clients?", a: "Yes. While we are based in the Bahamas and deeply understand the Caribbean market, our strategic approach translates globally. We work with clients across North America and Europe." },
              { q: "How do you price your services?", a: "We typically work on a retainer basis for ongoing strategic partnerships, or project-based fees for specific campaigns or events. We do not do hourly billing, as we price based on value and deliverables." },
              { q: "Do you handle the actual production of assets?", a: "We lead the creative direction and strategy. Depending on the project, we either execute in-house or bring in our trusted network of top-tier photographers, videographers, and developers to bring the vision to life." }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-background/5 border border-border/10">
                <h4 className="text-xl font-bold text-white mb-3">{faq.q}</h4>
                <p className="text-secondary-foreground/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
