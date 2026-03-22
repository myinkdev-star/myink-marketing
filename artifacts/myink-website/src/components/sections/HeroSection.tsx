import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContent } from "@/hooks/useContent";

interface HomeContent {
  hero_headline_line1: string;
  hero_headline_line2: string;
  hero_headline_italic: string;
  hero_body: string;
  location_badge: string;
}

export function HeroSection() {
  const { data: home } = useContent<HomeContent>("home.md");

  const line1 = home.hero_headline_line1 || "Creative Thinking.";
  const line2 = home.hero_headline_line2 || "Strategic Execution.";
  const lineItalic = home.hero_headline_italic || "Meaningful Growth.";
  const body =
    home.hero_body ||
    "Creative thinking that moves brands forward. M.Y. INK builds revenue-generating campaigns driven by KPIs — for ambitious brands that are serious about where they are going.";
  const locationBadge =
    home.location_badge || "Nassau, Bahamas · Strategic Marketing Firm";

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-48 overflow-hidden bg-background">

      {/* Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-texture.png`}
          alt=""
          className="w-full h-full object-cover opacity-[0.14]"
        />
      </div>

      {/* Structural line */}
      <div className="absolute top-0 right-16 w-px h-full bg-primary/12 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Location marker */}
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-primary inline-block"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/35">
            {locationBadge}
          </span>
        </motion.div>

        {/* Billboard headline */}
        <motion.h1
          className="font-display font-bold leading-[0.94]"
          style={{ fontSize: "clamp(48px, 8.5vw, 122px)", letterSpacing: "-0.03em" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          {line1}
          <br />
          {line2}
          <br />
          <span className="text-primary italic">{lineItalic}</span>
        </motion.h1>

        {/* Bottom strip */}
        <motion.div
          className="mt-16 pt-8 border-t border-border grid grid-cols-1 lg:grid-cols-2 gap-8 items-end"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <p className="text-[17px] text-muted-foreground leading-[1.72] max-w-xl">
            {body}
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 lg:justify-end">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto group">
                Begin a Conversation
                <ArrowRight className="ml-2.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            <Link href="/work">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-foreground/20"
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
