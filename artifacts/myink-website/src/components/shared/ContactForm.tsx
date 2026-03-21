import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

/* ─── Schema ────────────────────────────────────────────── */

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().min(1, "Please enter your company or brand name"),
  email: z.string().email("Please enter a valid business email"),
  website: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  goals: z
    .string()
    .min(40, "Please describe your goals in a bit more detail — the more context you share, the more useful our response will be"),
  timeline: z.string().min(1, "Please select an intended timeline"),
  investment: z.string().min(1, "Please indicate your investment range"),
});

type FormValues = z.infer<typeof schema>;

/* ─── Shared field styles ───────────────────────────────── */

const field = (err?: boolean) =>
  `w-full bg-transparent border-b ${
    err ? "border-destructive" : "border-border"
  } px-0 py-3.5 text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-primary transition-colors duration-200 text-base leading-relaxed`;

const select = (err?: boolean) =>
  `${field(err)} appearance-none cursor-pointer`;

/* ─── Section divider ───────────────────────────────────── */

function FormSection({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4 pt-4 pb-1">
      <span className="text-[10px] font-bold tracking-[0.2em] text-primary/60 shrink-0">
        {num}
      </span>
      <div className="flex-grow h-px bg-border" />
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30 shrink-0">
        {label}
      </span>
    </div>
  );
}

/* ─── Field wrapper ─────────────────────────────────────── */

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/40">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-[11px] text-destructive pt-0.5"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Success state ─────────────────────────────────────── */

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="py-16"
    >
      {/* Accent line */}
      <div className="w-12 h-0.5 bg-primary mb-10" />

      <h3 className="text-3xl md:text-4xl font-display font-bold mb-5 leading-tight">
        Your brief has been received.
      </h3>

      <p className="text-foreground/60 leading-[1.9] text-lg max-w-xl mb-8">
        We review every submission personally. If we believe there is a genuine strategic
        fit, a member of our senior team will be in touch within{" "}
        <span className="text-foreground font-semibold">48 business hours</span> to
        schedule an introductory conversation.
      </p>

      <p className="text-foreground/40 text-sm leading-relaxed max-w-md mb-12">
        We do not follow up with a pitch deck or a capabilities deck. If we reach out, it
        means we have read what you've written, identified something specific we can help
        with, and want to discuss it directly.
      </p>

      {/* Guarantees */}
      <div className="space-y-3 mb-12">
        {[
          "Confidential by default — your brief is read by our senior team and no one else",
          "No mass emails, no automated follow-ups",
          "If there isn't a clear fit, we'll say so honestly",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span className="text-foreground/55 text-sm leading-relaxed">{item}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onReset}
        className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/30 hover:text-primary transition-colors"
      >
        Submit another inquiry →
      </button>
    </motion.div>
  );
}

/* ─── Main form component ───────────────────────────────── */

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormValues) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    toast({
      title: "Brief received.",
      description:
        "We'll review it and be in touch within 48 business hours if there's a clear fit.",
    });
    reset();
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return <SuccessState onReset={() => setSubmitted(false)} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7" noValidate>

      {/* ── Section 01: About You ───────────────────────── */}
      <FormSection num="01" label="About You" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
        <Field label="Full Name" required error={errors.name?.message}>
          <input
            {...register("name")}
            className={field(!!errors.name)}
            placeholder="Your full name"
            autoComplete="name"
          />
        </Field>

        <Field label="Company or Brand" required error={errors.company?.message}>
          <input
            {...register("company")}
            className={field(!!errors.company)}
            placeholder="The brand you're building"
          />
        </Field>

        <Field label="Business Email" required error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            className={field(!!errors.email)}
            placeholder="Your business email address"
            autoComplete="email"
          />
        </Field>

        <Field label="Website or Social" error={errors.website?.message}>
          <input
            {...register("website")}
            type="url"
            className={field(!!errors.website)}
            placeholder="https://yourbrand.com"
          />
        </Field>
      </div>

      {/* ── Section 02: The Work ────────────────────────── */}
      <FormSection num="02" label="The Work" />

      <Field label="Service of Interest" required error={errors.service?.message}>
        <select {...register("service")} className={select(!!errors.service)}>
          <option value="">Select the area where you need help...</option>
          <optgroup label="Core Services">
            <option value="brand_strategy">Brand &amp; Marketing Strategy</option>
            <option value="campaigns">Campaign Development &amp; Execution</option>
            <option value="editorial">Content, Messaging &amp; Editorial Support</option>
            <option value="press">Publicity &amp; Communications</option>
            <option value="digital">Digital Presence &amp; Growth</option>
          </optgroup>
          <optgroup label="Other">
            <option value="multiple">Multiple Services — We'll Discuss</option>
            <option value="unsure">Not Sure Yet — Let's Talk</option>
          </optgroup>
        </select>
      </Field>

      <Field
        label="Project Goals &amp; Context"
        required
        error={errors.goals?.message}
      >
        <textarea
          {...register("goals")}
          rows={7}
          className={`${field(!!errors.goals)} resize-none`}
          placeholder={`Tell us:
· Where your brand is today and where you're trying to take it
· The specific challenge, gap, or opportunity you're working with
· Any constraints, context, or timing that's relevant

The more specific you are, the more useful our response will be.`}
        />
        <p className="text-[10px] text-foreground/25 pt-1 tracking-wide">
          We read every submission in full. Specificity earns a faster, sharper reply.
        </p>
      </Field>

      {/* ── Section 03: Scope & Timeline ───────────────── */}
      <FormSection num="03" label="Scope &amp; Timeline" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
        <Field label="Investment Range" required error={errors.investment?.message}>
          <select
            {...register("investment")}
            className={select(!!errors.investment)}
          >
            <option value="">What range are you working within?</option>
            <option value="under_5k">Under $5,000</option>
            <option value="5k_15k">$5,000 – $15,000</option>
            <option value="15k_30k">$15,000 – $30,000</option>
            <option value="30k_75k">$30,000 – $75,000</option>
            <option value="75k_plus">$75,000+</option>
            <option value="tbd">To Be Discussed — I Have a Budget</option>
          </select>
        </Field>

        <Field label="Intended Timeline" required error={errors.timeline?.message}>
          <select
            {...register("timeline")}
            className={select(!!errors.timeline)}
          >
            <option value="">When are you looking to begin?</option>
            <option value="immediate">Immediately — This Quarter</option>
            <option value="next_quarter">Next Quarter</option>
            <option value="within_6mo">Within 6 Months</option>
            <option value="planning">Planning — No Hard Deadline Yet</option>
          </select>
        </Field>
      </div>

      {/* ── Submit ──────────────────────────────────────── */}
      <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="px-10 h-14 text-base group shrink-0"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-3">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Submitting Brief...
            </span>
          ) : (
            <span className="flex items-center gap-3">
              Submit Your Brief
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </Button>

        <p className="text-xs text-foreground/30 leading-relaxed max-w-xs">
          Reviewed personally by our senior team. Your information is never shared, sold,
          or used for anything beyond evaluating this engagement.
        </p>
      </div>
    </form>
  );
}
