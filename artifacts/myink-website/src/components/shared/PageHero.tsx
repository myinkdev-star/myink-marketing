import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  headline: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
}

export function PageHero({ eyebrow, headline, intro, className = "" }: PageHeroProps) {
  return (
    <section
      className={`pt-40 pb-20 md:pt-52 md:pb-28 bg-background border-b border-border relative overflow-hidden ${className}`}
    >
      {/* Structural right line */}
      <div className="absolute top-0 right-0 w-px h-full bg-primary/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.p
          className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          className="font-display font-bold leading-[1.04] max-w-5xl"
          style={{ fontSize: "clamp(38px, 7vw, 80px)", letterSpacing: "-0.03em" }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {headline}
        </motion.h1>

        {intro && (
          <motion.div
            className="mt-9"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.38 }}
          >
            {intro}
          </motion.div>
        )}

      </div>
    </section>
  );
}
