import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name || !email || !message) {
      toast.error("Please fill all fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }
    if (name.length > 100 || email.length > 255 || message.length > 1500) {
      toast.error("Please shorten your input");
      return;
    }

    setSubmitting(true);
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:Aniketkondhalkar4717@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
    setTimeout(() => setSubmitting(false), 800);
    form.reset();
  };

  const channels = [
    { icon: Mail, label: "Email", value: "Aniketkondhalkar4717@gmail.com", href: "mailto:Aniketkondhalkar4717@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9322813103", href: "tel:+919322813103" },
    { icon: MapPin, label: "Location", value: "Pune, Maharashtra, India" },
    { icon: Linkedin, label: "LinkedIn", value: "aniket-kondhalkar", href: "https://www.linkedin.com/in/aniket-kondhalkar-174a0a258/" },
    { icon: Github, label: "GitHub", value: "Aniket-k-17", href: "https://github.com/Aniket-k-17" },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something intelligent" subtitle="Open to internships, full-time roles, and AI/ML collaborations.">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass flex flex-col gap-4 rounded-2xl p-6 shadow-card sm:p-7"
        >
          {channels.map((c) => {
            const Inner = (
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 via-cyan/20 to-violet/20 text-primary">
                  <c.icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="truncate text-sm font-medium">{c.value}</div>
                </div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="rounded-xl p-2 transition-colors hover:bg-muted">
                {Inner}
              </a>
            ) : (
              <div key={c.label} className="p-2">{Inner}</div>
            );
          })}
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-6 shadow-card sm:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium">Name</span>
              <input name="name" required maxLength={100} className="rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30" placeholder="Your name" />
            </label>
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium">Email</span>
              <input name="email" type="email" required maxLength={255} className="rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30" placeholder="you@company.com" />
            </label>
          </div>
          <label className="mt-4 flex flex-col gap-1.5 text-sm">
            <span className="font-medium">Message</span>
            <textarea name="message" required rows={6} maxLength={1500} className="resize-none rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30" placeholder="Tell me about your role or project…" />
          </label>
          <button
            type="submit"
            disabled={submitting}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary via-primary to-violet px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            <Send className="h-4 w-4" /> {submitting ? "Sending…" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
