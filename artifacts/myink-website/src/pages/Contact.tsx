import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Mail, Phone } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Please provide a brief description"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1000));
    
    toast({
      title: "Inquiry Sent",
      description: "Thank you for reaching out. We will get back to you within 48 business hours.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <PageLayout>
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-16 max-w-4xl">
            Let's Build Something <span className="text-primary italic">Worth</span> Talking About.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-12">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-foreground/50 w-6 h-6 shrink-0" />
                    <div>
                      <p className="font-bold mb-1">M.Y. INK Headquarters</p>
                      <p className="text-foreground/70">Nassau, Bahamas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-foreground/50 w-6 h-6 shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Email Us</p>
                      <a href="mailto:hello@myink.com" className="text-foreground/70 hover:text-primary transition-colors">hello@myink.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-foreground/50 w-6 h-6 shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Call Us</p>
                      <a href="tel:+12420000000" className="text-foreground/70 hover:text-primary transition-colors">+1 (242) 000-0000</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-card border border-border">
                <h4 className="font-display font-bold text-xl mb-3">Response Time</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  We typically review and respond to all inquiries within 48 business hours. We review every application to ensure we are the right strategic fit for your brand.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider">Full Name *</label>
                    <input 
                      {...register("name")}
                      className={`w-full bg-card border ${errors.name ? 'border-destructive' : 'border-border'} px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors`}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider">Company / Brand</label>
                    <input 
                      {...register("company")}
                      className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider">Email Address *</label>
                    <input 
                      {...register("email")}
                      type="email"
                      className={`w-full bg-card border ${errors.email ? 'border-destructive' : 'border-border'} px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors`}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider">Phone Number</label>
                    <input 
                      {...register("phone")}
                      className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider">Service of Interest *</label>
                    <select 
                      {...register("service")}
                      className={`w-full bg-card border ${errors.service ? 'border-destructive' : 'border-border'} px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none`}
                    >
                      <option value="">Select a service...</option>
                      <option value="brand_strategy">Brand Strategy</option>
                      <option value="campaigns">Campaign Execution</option>
                      <option value="ghostwriting">Ghostwriting</option>
                      <option value="digital">Digital Marketing</option>
                      <option value="press">Press Events / PR</option>
                      <option value="other">Other / Multiple</option>
                    </select>
                    {errors.service && <p className="text-destructive text-xs">{errors.service.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider">Estimated Budget *</label>
                    <select 
                      {...register("budget")}
                      className={`w-full bg-card border ${errors.budget ? 'border-destructive' : 'border-border'} px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none`}
                    >
                      <option value="">Select budget range...</option>
                      <option value="under_5k">Under $5K</option>
                      <option value="5k_15k">$5K - $15K</option>
                      <option value="15k_50k">$15K - $50K</option>
                      <option value="50k_plus">$50K+</option>
                    </select>
                    {errors.budget && <p className="text-destructive text-xs">{errors.budget.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Project Brief *</label>
                  <textarea 
                    {...register("message")}
                    rows={5}
                    className={`w-full bg-card border ${errors.message ? 'border-destructive' : 'border-border'} px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none`}
                    placeholder="Tell us about your brand, your goals, and what you're looking to achieve..."
                  />
                  {errors.message && <p className="text-destructive text-xs">{errors.message.message}</p>}
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
