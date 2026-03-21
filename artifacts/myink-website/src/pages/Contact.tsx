import { MapPin, Mail, Phone, Instagram, Linkedin, Twitter } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { FadeIn } from "@/components/shared/FadeIn";

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function Contact() {
  return (
    <PageLayout>

      {/* ── PAGE HERO ─────────────────────────────────────── */}
      <PageHero
        eyebrow="Get in Touch"
        headline={
          <>
            Let's build something{" "}
            <span className="text-primary italic">worth talking about.</span>
          </>
        }
        intro={
          <p className="text-xl text-foreground/60 max-w-2xl leading-[1.85]">
            We take a limited number of new clients each quarter — not as a positioning
            tactic, but because depth of attention is how we protect the quality of our
            work. Fill in the form below. We review every inquiry personally.
          </p>
        }
      />

      {/* ── MAIN CONTENT ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

            {/* ── LEFT: Info panel ── */}
            <FadeIn className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-12">

                {/* Contact details */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                    Contact Information
                  </p>
                  <div className="space-y-6">
                    {[
                      {
                        icon: <MapPin className="w-5 h-5 shrink-0 text-foreground/40" />,
                        label: "Headquarters",
                        value: "Nassau, Bahamas",
                        href: undefined,
                      },
                      {
                        icon: <Mail className="w-5 h-5 shrink-0 text-foreground/40" />,
                        label: "Email",
                        value: "hello@myink.com",
                        href: "mailto:hello@myink.com",
                      },
                      {
                        icon: <Phone className="w-5 h-5 shrink-0 text-foreground/40" />,
                        label: "Phone",
                        value: "+1 (242) 000-0000",
                        href: "tel:+12420000000",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        {item.icon}
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-foreground/35 mb-1">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-foreground hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-foreground/70">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social icons */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-5">
                    Follow Us
                  </p>
                  <div className="flex gap-3">
                    {[
                      { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
                      { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
                      { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className="w-11 h-11 border border-border flex items-center justify-center text-foreground/50 hover:border-primary hover:text-primary transition-colors"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* What to expect */}
                <div className="border border-border p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground/35 mb-3">
                    What to Expect
                  </p>
                  <p className="text-foreground/65 text-sm leading-relaxed">
                    We review every inquiry ourselves — no automated responses. A real
                    person will read what you've written and reply within{" "}
                    <span className="font-bold text-foreground">48 business hours</span>.
                    If there is a genuine fit, you'll know it from the first call.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* ── RIGHT: Form ── */}
            <FadeIn delay={0.15} className="lg:col-span-8">
              <ContactForm />
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── BOTTOM STRIP ──────────────────────────────────── */}
      <section className="py-16 bg-secondary text-secondary-foreground dark border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="font-display font-bold text-2xl text-white mb-1">
                  M.Y. INK Marketing
                </p>
                <p className="text-secondary-foreground/45 text-sm">
                  Strategic Marketing · Nassau, Bahamas · Caribbean & Beyond
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-secondary-foreground/45 text-sm mb-1">Direct inquiry</p>
                <a
                  href="mailto:hello@myink.com"
                  className="text-white hover:text-primary transition-colors font-medium"
                >
                  hello@myink.com
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </PageLayout>
  );
}
