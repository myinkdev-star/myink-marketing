import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

const MARQUEE_ITEMS = [
  "Strategy", "Campaigns", "Advertising", "Ghostwriting", 
  "Press Events", "Digital Strategy", "Script Writing", "Brand Positioning"
];

const SERVICES = [
  {
    num: "01",
    title: "Customized Marketing Strategies",
    desc: "Tailored strategic plans built around your brand's unique goals, market position, and growth ambitions."
  },
  {
    num: "02",
    title: "Promotion & Campaign Execution",
    desc: "Full-service campaign development — creative concepts, production oversight, and results-driven execution."
  },
  {
    num: "03",
    title: "Advertising Concepts",
    desc: "Bold ideas translated into compelling advertising across traditional and digital channels."
  },
  {
    num: "04",
    title: "Ghostwriting",
    desc: "Your voice, elevated. Strategic long-form content written to position you as an industry authority."
  },
  {
    num: "05",
    title: "Script Writing (All Media)",
    desc: "Compelling scripts for video, broadcast, podcast, and digital content that move audiences to action."
  },
  {
    num: "06",
    title: "Press Releases",
    desc: "Professionally crafted press releases that get your news placed in the right publications."
  },
  {
    num: "07",
    title: "Press Events",
    desc: "From concept to execution — we design press events that generate coverage, conversation, and credibility."
  },
  {
    num: "08",
    title: "Digital Strategies",
    desc: "Data-informed digital marketing strategies executed with precision across SEO, social, and paid media."
  }
];

export default function Home() {
  return (
    <PageLayout>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-12 pb-24 overflow-hidden">
        {/* Background Image/Texture */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 z-10 mix-blend-multiply" />
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-texture.png`} 
            alt="Hero abstract texture" 
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-6">
                Creative Thinking <br />
                <span className="text-primary italic">That Moves</span> <br />
                Brands Forward.
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              M.Y. INK is a strategic marketing partner for brands that refuse to be ordinary. We don't follow trends — we set them.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Start a Project
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background">
                  See Our Work
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <div className="bg-secondary text-secondary-foreground py-4 overflow-hidden flex border-y border-border/20">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {MARQUEE_ITEMS.map((item, idx) => (
                <div key={`${i}-${idx}`} className="flex items-center">
                  <span className="text-sm md:text-base font-medium tracking-widest uppercase px-6">
                    {item}
                  </span>
                  <span className="text-primary">•</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* POSITIONING STATEMENT */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-3">
              <span className="text-6xl md:text-8xl font-display font-bold text-primary leading-none">01</span>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-3xl md:text-5xl font-display font-medium leading-tight mb-8">
                We are not an agency for everyone. We work with brands that have something to say — and the ambition to say it boldly.
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed">
                From campaign strategy to press events, from digital execution to editorial voice — M.Y. INK works as an extension of your brand's leadership team. We don't just execute orders; we provide the strategic thinking required to dominate your market.
              </p>
              <div className="mt-10">
                <Link href="/about" className="inline-flex items-center font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors group">
                  More About Us 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">What We Do</h2>
              <p className="text-foreground/70 text-lg max-w-xl">
                Comprehensive strategic marketing — from the first idea to the final execution.
              </p>
            </div>
            <Link href="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div 
                key={service.num} 
                className="group p-8 border border-border bg-background hover:border-primary transition-colors duration-300 flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150" />
                
                <span className="text-sm font-bold text-primary mb-6 block">{service.num}</span>
                <h3 className="text-xl font-display font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed flex-grow">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK TEASER */}
      <section className="py-24 md:py-32 bg-secondary text-secondary-foreground dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Selected Work</h2>
            <Link href="/work">
              <Button variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-white hover:text-secondary">
                View All Work
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "campaign-1.png", tag: "Campaign Execution", title: "The New Standard", desc: "Repositioning a heritage hospitality brand for a modern audience." },
              { img: "campaign-2.png", tag: "Brand Strategy", title: "Elevated Living", desc: "Complete strategic overhaul for a luxury real estate development." },
              { img: "campaign-3.png", tag: "Digital & Press", title: "Motion & Energy", desc: "A cross-channel digital campaign that drove record engagement." }
            ].map((work, idx) => (
              <Link key={idx} href="/work" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-secondary">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${work.img}`}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{work.tag}</p>
                <h3 className="text-2xl font-display font-bold text-white mb-2 flex items-center justify-between">
                  {work.title}
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-secondary-foreground/70 text-sm">{work.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Process</h2>
            <p className="text-foreground/70 text-lg">Strategy is never an accident. We follow a rigorous process to ensure every execution hits the mark.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-[1px] bg-border/50 -z-10" />
            
            {[
              { num: "01", title: "Discover", desc: "We start by understanding your brand, audience, and ambition. No assumptions. Deep listening." },
              { num: "02", title: "Strategize", desc: "We craft a clear, focused strategy — creating competitive advantage and measurable results." },
              { num: "03", title: "Execute", desc: "Precise, high-quality execution across every touchpoint. Every detail matters." },
              { num: "04", title: "Elevate", desc: "We measure, refine, and continuously push your brand forward. Strategy is never set-and-forget." }
            ].map((step) => (
              <div key={step.num} className="relative pt-8 md:pt-0">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center font-bold text-primary mb-6 mx-auto md:mx-0">
                  {step.num}
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-center md:text-left">{step.title}</h3>
                <p className="text-foreground/70 text-sm text-center md:text-left leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">Ready to Move Your Brand Forward?</h2>
          <p className="text-xl opacity-90 mb-10">We take on a limited number of clients each year. Let's talk about yours.</p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-primary hover:bg-white px-8">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
