import { Link } from "wouter";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_COLS = [
  {
    label: "Agency",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Selected Work", href: "/work" },
      { label: "The Journal", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Expertise",
    links: [
      { label: "Brand & Marketing Strategy", href: "/services" },
      { label: "Campaign Development", href: "/services" },
      { label: "Content & Editorial", href: "/services" },
      { label: "Publicity & Communications", href: "/services" },
      { label: "Digital Presence & Growth", href: "/services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-white/5 dark pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

          {/* Brand col */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-display font-bold text-[22px] tracking-[-0.04em] text-white mb-5 block">
              M.Y. INK
            </Link>
            <p className="text-secondary-foreground/45 text-[14px] max-w-[220px] mb-8 leading-[1.8]">
              A strategic marketing firm for brands that are serious about where they are going.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "X / Twitter" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-secondary-foreground/40 hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {NAV_COLS.map((col) => (
            <div key={col.label}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] mb-7 text-white/25">
                {col.label}
              </h4>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-secondary-foreground/50 hover:text-white transition-colors duration-200 text-[14px] leading-none link-line"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact col */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] mb-7 text-white/25">
              Get in Touch
            </h4>
            <ul className="space-y-3.5 mb-8">
              <li className="text-secondary-foreground/40 text-[14px]">Nassau, Bahamas</li>
              <li>
                <a
                  href="mailto:hello@myink.com"
                  className="text-secondary-foreground/70 hover:text-white transition-colors duration-200 text-[14px] link-line"
                >
                  hello@myink.com
                </a>
              </li>
            </ul>
            <Link href="/contact">
              <Button
                variant="outline"
                className="w-full border-white/12 text-secondary-foreground/60 hover:bg-white hover:text-secondary hover:border-white text-[11px]"
              >
                Begin a Conversation
              </Button>
            </Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/7 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-secondary-foreground/30 tracking-wide">
            © {new Date().getFullYear()} M.Y. INK Marketing. All rights reserved.
          </p>
          <div className="flex gap-7 text-[12px] text-secondary-foreground/30">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
