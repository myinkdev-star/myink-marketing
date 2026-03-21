import { MapPin, Mail, Instagram, Linkedin, Twitter, ShieldCheck, Clock, Users } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { FadeIn } from "@/components/shared/FadeIn";
import { ContactForm } from "@/components/shared/ContactForm";
import { motion } from "framer-motion";

/* ─── Data ──────────────────────────────────────────────── */

const PROCESS_STEPS = [
  {
    num: "01",
    label: "We read your brief",
    desc: "Every submission is read in full by a senior member of our team — not filtered by a form or triaged by an assistant.",
  },
  {
    num: "02",
    label: "We assess the fit",
    desc: "We consider your category, your goals, your timeline, and whether our specific capabilities and approach are genuinely the right match.",
  },
  {
    num: "03",
    label: "We reach out directly",
    desc: "If there's a clear strategic fit, one of our senior team will contact you within 48 business hours to schedule an initial conversation.",
  },
];

const IDEAL_CLIENT_TRAITS = [
  "Has a clear sense of where the brand is heading — even if the path isn't yet defined",
  "Understands that strategy is an investment, not a line item to minimise",
  "Wants a long-term strategic partner, not a vendor to execute briefs",
  "Is prepared to share context honestly — including what hasn't worked before",
  "Operates in a market where positioning and perception have a direct impact on revenue",
];

const REASSURANCES = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    title: "Confidential by default.",
    desc: "Your brief is read by our senior team and by no one else. We do not share, sell, or distribute the information you provide — ever.",
  },
  {
    icon: <Clock className="w-5 h-5 text-primary" />,
    title: "No pitch, no pitch deck.",
    desc: "If we reach out, it's because we've read what you wrote and identified something specific we can help with. We discuss it directly. No capabilities theatre.",
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: "Selective. Intentionally.",
    desc: "We take on a limited number of new clients each quarter. Not to appear exclusive — but because depth of attention is how we protect the quality of our work.",
  },
];

/* ─── Page ──────────────────────────────────────────────── */

export default function Contact() {
  return (
    <PageLayout>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-24 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-px h-full bg-primary/15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.p
            className="text-xs font-bold uppercase tracking-widest text-primary mb-7"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            New Client Enquiry
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-[80px] font-display font-bold leading-[1.02] max-w-5xl mb-10"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            Tell us about your brand.
            <br />
            <span className="text-primary italic">We'll tell you if we're</span>
            <br />
            the right fit.
          </motion.h1>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            <p className="text-xl text-foreground/60 leading-[1.85]">
              We are not looking for the largest brief or the most familiar brand name.
              We are looking for the brands with the most to gain from getting their
              strategy right — and the conviction to do it properly.
            </p>
            <p className="text-xl text-foreground/60 leading-[1.85]">
              This form is a brief, not a contact form. The more you tell us about where
              your brand is and where you want it to go, the more useful our response
              will be — and the more quickly we can establish whether we're the right
              people to help you get there.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ── MAIN ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

            {/* ── LEFT PANEL ──────────────────────────────── */}
            <FadeIn className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-14">

                {/* Who this is for */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-5">
                    Who This Is For
                  </p>
                  <p className="text-foreground/55 text-sm leading-relaxed mb-5">
                    We are best placed to help brands that:
                  </p>
                  <ul className="space-y-3">
                    {IDEAL_CLIENT_TRAITS.map((trait, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2" />
                        <span className="text-foreground/60 text-sm leading-relaxed">
                          {trait}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What happens after */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                    What Happens After You Submit
                  </p>
                  <div className="space-y-6">
                    {PROCESS_STEPS.map((step) => (
                      <div key={step.num} className="flex gap-4">
                        <span className="text-[10px] font-bold text-primary/40 tracking-widest shrink-0 mt-0.5">
                          {step.num}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-foreground mb-1">
                            {step.label}
                          </p>
                          <p className="text-foreground/45 text-xs leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact + social */}
                <div className="pt-2 space-y-8">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                      Direct Contact
                    </p>
                    <div className="space-y-3">
                      <a
                        href="mailto:hello@myink.com"
                        className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors"
                      >
                        <Mail className="w-4 h-4 shrink-0" />
                        hello@myink.com
                      </a>
                      <div className="flex items-center gap-3 text-sm text-foreground/40">
                        <MapPin className="w-4 h-4 shrink-0" />
                        Nassau, Bahamas
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                      Follow
                    </p>
                    <div className="flex gap-2">
                      {[
                        { icon: <Instagram size={16} />, label: "Instagram", href: "#" },
                        { icon: <Linkedin size={16} />, label: "LinkedIn", href: "#" },
                        { icon: <Twitter size={16} />, label: "Twitter", href: "#" },
                      ].map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          aria-label={s.label}
                          className="w-9 h-9 border border-border flex items-center justify-center text-foreground/40 hover:border-primary hover:text-primary transition-colors"
                        >
                          {s.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>

            {/* ── FORM ────────────────────────────────────── */}
            <FadeIn delay={0.15} className="lg:col-span-8">
              <ContactForm />
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── CLOSING REASSURANCE ───────────────────────────── */}
      <section className="py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Before You Submit
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight max-w-2xl">
              What you can expect from us.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
            {REASSURANCES.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="group p-8 lg:p-10 hover:bg-background transition-colors">
                  <div className="mb-5">{item.icon}</div>
                  <h3 className="text-lg font-display font-bold mb-3 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-foreground/50 text-sm leading-[1.85]">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM STRIP ──────────────────────────────────── */}
      <section className="py-14 bg-secondary text-secondary-foreground dark border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="font-display font-bold text-xl text-white mb-1">
                  M.Y. INK Marketing
                </p>
                <p className="text-secondary-foreground/40 text-sm">
                  Strategic Marketing · Nassau, Bahamas · Caribbean &amp; Beyond
                </p>
              </div>
              <div className="flex flex-col md:items-end gap-1">
                <p className="text-secondary-foreground/35 text-xs uppercase tracking-widest font-bold">
                  Direct Enquiry
                </p>
                <a
                  href="mailto:hello@myink.com"
                  className="text-white hover:text-primary transition-colors text-sm font-medium"
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
