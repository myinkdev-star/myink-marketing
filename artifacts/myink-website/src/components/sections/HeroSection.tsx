import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-48 overflow-hidden bg-background">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-texture.png`}
          alt=""
          className="w-full h-full object-cover opacity-[0.18]"
        />
      </div>

      {/* Structural lines */}
      <div className="absolute top-0 right-16 w-px h-full bg-primary/15 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Location marker */}
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">
            Nassau, Bahamas · Strategic Marketing Firm
          </span>
        </motion.div>

        {/* Billboard headline */}
        <motion.h1
          className="font-display font-bold leading-[0.96] tracking-tight"
          style={{ fontSize: "clamp(52px, 9vw, 130px)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          Creative Thinking
          <br />
          <span className="text-primary italic">That Moves</span>
          <br />
          Brands Forward.
        </motion.h1>

        {/* Bottom editorial strip */}
        <motion.div
          className="mt-14 pt-8 border-t border-border grid grid-cols-1 lg:grid-cols-2 gap-8 items-end"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="text-lg text-foreground/60 leading-[1.8] max-w-xl">
            M.Y. INK turns marketing challenges into strategic opportunities — combining
            creative thinking with disciplined execution to build brands that lead in
            their market. Full-service. Senior-led. Selectively engaged.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto px-8 group">
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/work">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 bg-transparent border-foreground/25 hover:border-primary hover:text-primary"
              >
                See Our Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
