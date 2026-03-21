import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = ["All", "Brand Strategy", "Campaigns", "Digital", "Press"];

const CASE_STUDIES = [
  { id: 1, title: "Elevated Living", category: "Brand Strategy", img: "campaign-2.png", desc: "Complete strategic overhaul for a luxury real estate development in Nassau." },
  { id: 2, title: "The New Standard", category: "Campaigns", img: "campaign-1.png", desc: "Repositioning a heritage hospitality brand for a modern audience." },
  { id: 3, title: "Motion & Energy", category: "Digital", img: "campaign-3.png", desc: "A cross-channel digital campaign that drove record engagement." },
  { id: 4, title: "Global Summit", category: "Press", img: "strategy-session.png", desc: "End-to-end management of an international industry press event." },
  { id: 5, title: "Voice of Authority", category: "Brand Strategy", img: "agency-office.png", desc: "Executive ghostwriting and positioning for a top-tier CEO." },
  { id: 6, title: "Island Time", category: "Campaigns", img: "campaign-1.png", desc: "A vibrant tourism campaign that redefined destination marketing." },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredWork = activeFilter === "All" 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(work => work.category === activeFilter);

  return (
    <PageLayout>
      <section className="pt-24 pb-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-12">
            Selected <span className="text-primary italic">Work</span>
          </h1>
          
          <div className="flex flex-wrap gap-4 border-b border-border pb-8">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-colors ${
                  activeFilter === cat 
                    ? "bg-foreground text-background" 
                    : "bg-transparent text-foreground/60 hover:text-foreground hover:bg-card"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32 bg-background min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <AnimatePresence>
              {filteredWork.map((work) => (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group block"
                >
                  <Link href="/contact" className="block">
                    <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-card border border-border">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                      <img 
                        src={`${import.meta.env.BASE_URL}images/${work.img}`}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{work.category}</p>
                        <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{work.title}</h3>
                        <p className="text-foreground/70">{work.desc}</p>
                      </div>
                      <ArrowUpRight className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-2" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredWork.length === 0 && (
            <div className="text-center py-24 text-foreground/50">
              No projects found for this category.
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
