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
      <div className="absolute top-0 right-0 w-px h-full bg-primary/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-xs font-bold uppercase tracking-widest text-primary mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-[80px] font-display font-bold leading-[1.04] max-w-5xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          {headline}
        </motion.h1>

        {intro && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            {intro}
          </motion.div>
        )}
      </div>
    </section>
  );
}
