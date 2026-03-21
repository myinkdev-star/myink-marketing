import { Link } from "wouter";
import { Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/10 dark pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-display font-bold text-3xl tracking-tighter text-white mb-4 block">
              M.Y. INK
            </Link>
            <p className="text-secondary-foreground/70 text-sm max-w-xs mb-6 leading-relaxed">
              A strategic marketing firm for brands that are serious about where they are going.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 border border-secondary-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 border border-secondary-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 border border-secondary-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-white/60">Agency</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/work" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">Selected Work</Link></li>
              <li><Link href="/insights" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">The Journal</Link></li>
              <li><Link href="/contact" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-white/60">Expertise</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">Brand & Marketing Strategy</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">Campaign Development</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">Content & Editorial</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">Publicity & Communications</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">Digital Presence & Growth</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-white/60">Let's Talk</h4>
            <ul className="space-y-4 mb-6">
              <li className="text-secondary-foreground/70 text-sm">Nassau, Bahamas</li>
              <li><a href="mailto:hello@myink.com" className="text-white hover:text-primary transition-colors text-sm">hello@myink.com</a></li>
              <li><a href="tel:+12420000000" className="text-white hover:text-primary transition-colors text-sm">+1 (242) 000-0000</a></li>
            </ul>
            <Link href="/contact">
              <Button variant="outline" className="w-full text-secondary-foreground border-secondary-foreground/30 hover:bg-white hover:text-secondary text-xs">
                Start a Project <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/50">
            © {new Date().getFullYear()} M.Y. INK Marketing. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
