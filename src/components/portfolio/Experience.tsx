import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I'm building">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-2xl p-6 shadow-card sm:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary via-cyan to-violet text-primary-foreground">
                <Briefcase className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-semibold">Machine Learning & Data Science Intern</h3>
                <p className="text-sm text-muted-foreground">AI Adventures</p>
              </div>
            </div>
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Feb 2026 – Present
            </span>
          </div>

          <ul className="mt-6 space-y-2.5 text-sm text-foreground/90">
            {[
              "Built machine learning solutions using Python and Scikit-Learn",
              "Performed data preprocessing and exploratory data analysis",
              "Developed interactive dashboards using Power BI and Streamlit",
              "Worked on predictive analytics and reporting workflows",
              "Implemented business intelligence and data visualization solutions",
            ].map((line) => (
              <li key={line} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-cyan" />
                {line}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
