import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
];

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/92 backdrop-blur-xl border-b border-border/60 py-3.5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="z-50 select-none">
              <span className="font-display font-bold text-xl tracking-[-0.04em] text-foreground">
                M.Y. INK
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-9">
              {NAV_LINKS.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.href} href={link.href} className="relative group py-1">
                    <span
                      className={`text-[11px] font-bold tracking-[0.12em] uppercase transition-colors duration-200 ${
                        isActive ? "text-primary" : "text-foreground/55 group-hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </span>
                    {/* Growing underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${
                        isActive
                          ? "w-full bg-primary"
                          : "w-0 bg-foreground/40 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link href="/contact">
                <Button variant="default">Begin a Conversation</Button>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden z-50 relative p-1.5 -mr-1.5 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background flex flex-col"
          >
            {/* Inner content, left-aligned, editorial */}
            <div className="flex flex-col h-full pt-28 pb-12 px-6 sm:px-10">
              <nav className="flex flex-col gap-1 flex-grow">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 + idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between py-5 border-b border-border group transition-colors ${
                        location === link.href ? "text-primary" : "text-foreground/80"
                      }`}
                    >
                      <span className="text-3xl font-display font-bold leading-none">
                        {link.label}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/25 group-hover:text-primary transition-colors">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.35 }}
                className="mt-10"
              >
                <Link href="/contact">
                  <Button className="w-full h-14 text-sm" size="lg">
                    Begin a Conversation
                  </Button>
                </Link>
                <p className="text-center text-xs text-foreground/30 mt-4 tracking-wide">
                  Nassau, Bahamas · hello@myink.com
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
