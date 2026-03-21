import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Mail, Phone, ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

/* ───────────────────────────── SCHEMA ─────────────────────────── */

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Please tell us a bit about your brand and goals"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

/* ─────────────────────────── HELPERS ─────────────────────────── */

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const inputClass = (hasError?: boolean) =>
  `w-full bg-background border ${
    hasError ? "border-destructive" : "border-border"
  } px-5 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors text-base`;

const selectClass = (hasError?: boolean) =>
  `${inputClass(hasError)} appearance-none cursor-pointer`;

/* ──────────────────────────── PAGE ───────────────────────────── */

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    toast({
      title: "Inquiry received.",
      description: "We'll be in touch within 48 business hours.",
    });
    reset();
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <PageLayout>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-28 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-px h-full bg-primary/20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            className="text-xs font-bold uppercase tracking-widest text-primary mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            Get in Touch
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-[80px] font-display font-bold leading-[1.04] max-w-4xl mb-8"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            Let's build something{" "}
            <span className="text-primary italic">worth talking about.</span>
          </motion.h1>

          <motion.p
            className="text-xl text-foreground/60 max-w-2xl leading-[1.85]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            We take a limited number of new clients each quarter — not as a positioning
            tactic, but because depth of attention is how we protect the quality of our
            work. Fill in the form below. We review every inquiry personally.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

            {/* ── LEFT: Info ── */}
            <FadeIn className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-12">

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

                <div className="border border-border p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground/35 mb-3">
                    What to Expect
                  </p>
                  <p className="text-foreground/65 text-sm leading-relaxed">
                    We review every inquiry ourselves — no automated responses. A real person
                    will read what you've written and reply within{" "}
                    <span className="font-bold text-foreground">48 business hours</span>.
                    If there is a genuine fit, you'll know it from the first call.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* ── RIGHT: Form ── */}
            <FadeIn delay={0.15} className="lg:col-span-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-primary/30 bg-primary/5 p-12 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <div className="w-5 h-5 rounded-full bg-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">Inquiry Received</h3>
                  <p className="text-foreground/60 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out. We'll review your inquiry and respond
                    within 48 business hours. If there's a fit, we'll say so directly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-bold uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        {...register("name")}
                        className={inputClass(!!errors.name)}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-destructive text-xs">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                        Company / Brand
                      </label>
                      <input
                        {...register("company")}
                        className={inputClass()}
                        placeholder="Your company or brand name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className={inputClass(!!errors.email)}
                        placeholder="Your business email"
                      />
                      {errors.email && (
                        <p className="text-destructive text-xs">{errors.email.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                        Phone Number
                      </label>
                      <input
                        {...register("phone")}
                        className={inputClass()}
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                        Service of Interest <span className="text-primary">*</span>
                      </label>
                      <select
                        {...register("service")}
                        className={selectClass(!!errors.service)}
                      >
                        <option value="">Select a service...</option>
                        <option value="brand_strategy">Brand & Marketing Strategy</option>
                        <option value="campaigns">Campaign Development & Execution</option>
                        <option value="editorial">Content, Messaging & Editorial</option>
                        <option value="press">Publicity & Communications</option>
                        <option value="digital">Digital Presence & Growth</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="other">Not Sure — Let's Talk</option>
                      </select>
                      {errors.service && (
                        <p className="text-destructive text-xs">{errors.service.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                        Estimated Budget <span className="text-primary">*</span>
                      </label>
                      <select
                        {...register("budget")}
                        className={selectClass(!!errors.budget)}
                      >
                        <option value="">Select a range...</option>
                        <option value="under_5k">Under $5,000</option>
                        <option value="5k_15k">$5,000 – $15,000</option>
                        <option value="15k_50k">$15,000 – $50,000</option>
                        <option value="50k_plus">$50,000+</option>
                        <option value="tbd">To Be Discussed</option>
                      </select>
                      {errors.budget && (
                        <p className="text-destructive text-xs">{errors.budget.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                      Your Brand & Goals <span className="text-primary">*</span>
                    </label>
                    <textarea
                      {...register("message")}
                      rows={6}
                      className={`${inputClass(!!errors.message)} resize-none leading-relaxed`}
                      placeholder="Tell us where your brand is today, the challenge you're facing, and what you're trying to build or change. The more specific you are, the more useful our response will be..."
                    />
                    {errors.message && (
                      <p className="text-destructive text-xs">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="px-10 group"
                    >
                      {isSubmitting ? "Sending..." : "Send Inquiry"}
                      {!isSubmitting && (
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      )}
                    </Button>
                    <p className="text-xs text-foreground/35 leading-relaxed max-w-xs">
                      Your information is kept strictly confidential and is not shared
                      with any third party.
                    </p>
                  </div>
                </form>
              )}
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── BOTTOM STRIP ─────────────────────────────────────── */}
      <section className="py-16 bg-secondary text-secondary-foreground dark border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="font-display font-bold text-2xl text-white mb-1">M.Y. INK Marketing</p>
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
