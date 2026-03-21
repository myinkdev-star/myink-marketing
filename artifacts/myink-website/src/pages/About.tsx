import { Link } from "wouter";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <PageLayout>
      <section className="py-24 md:py-32 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
              We believe every brand has a <span className="text-primary italic">story</span> worth telling well.
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
              M.Y. INK Marketing was founded on a simple premise: great execution requires brilliant strategy. We are a collective of thinkers, writers, and creators dedicated to moving brands forward.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* editorial photo placeholder via Unsplash since we didn't declare this one specifically */}
              {/* premium editorial architecture abstract */}
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Space" 
                className="w-full h-auto aspect-square object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Our Values</h2>
              <div className="space-y-12">
                {[
                  { title: "Strategy-First", desc: "We don't do tactics without a plan. Every piece of content, every event, and every campaign is rooted in a core strategy designed to win." },
                  { title: "Excellence in Execution", desc: "Good enough is never enough. We sweat the small stuff because the details are what separate premium brands from the rest." },
                  { title: "Selective by Design", desc: "We intentionally limit our client roster. We act as an extension of your team, which means we need to be all-in on your success." },
                  { title: "Creative without Compromise", desc: "We push boundaries. Safe is boring, and boring doesn't sell." }
                ].map((value, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors">
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-foreground/70">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary text-secondary-foreground dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">The Leadership</h2>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto mb-16">
            A tight-knit team of senior strategists, copywriters, and creative directors bringing decades of high-end experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-left group">
                <div className="aspect-[3/4] mb-6 overflow-hidden bg-black/50">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/strategy-session.png`} 
                    alt="Team member" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Jane Doe</h3>
                <p className="text-primary font-medium text-sm tracking-widest uppercase">Partner & Strategy Dir.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-background text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-8">Looking for an agency that gets it?</h2>
          <Link href="/contact">
            <Button size="lg">Contact Us Today</Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
