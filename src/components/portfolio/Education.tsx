import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass flex flex-wrap items-start gap-5 rounded-2xl p-6 shadow-card sm:p-8"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary via-cyan to-violet text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold">Bachelor of Computer Applications (BCA)</h3>
            <p className="mt-1 text-sm text-muted-foreground">Dhananjayrao Gadgil College of Commerce, Satara</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium">2022 – 2025</span>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">CGPA: 7.83</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
