import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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

const inputClass = (hasError?: boolean) =>
  `w-full bg-background border ${
    hasError ? "border-destructive" : "border-border"
  } px-5 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors text-base`;

const selectClass = (hasError?: boolean) =>
  `${inputClass(hasError)} appearance-none cursor-pointer`;

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

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

  if (submitted) {
    return (
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
          Thank you for reaching out. We'll review your inquiry and respond within 48
          business hours. If there's a fit, we'll say so directly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm font-bold uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors"
        >
          Submit another inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      {/* Row 1 */}
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

      {/* Row 2 */}
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

      {/* Row 3 */}
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

      {/* Message */}
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

      {/* Submit */}
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
          Your information is kept strictly confidential and is not shared with any
          third party.
        </p>
      </div>
    </form>
  );
}
