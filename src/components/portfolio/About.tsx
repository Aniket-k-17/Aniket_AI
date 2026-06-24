import { motion } from "framer-motion";
import { Section } from "./Section";
import { Brain, ChartLine, Cpu, Sparkles } from "lucide-react";

const stats = [
  { icon: Brain, label: "AI / ML Projects", value: "10+" },
  { icon: ChartLine, label: "Dashboards Built", value: "5+" },
  { icon: Cpu, label: "Models Deployed", value: "8+" },
  { icon: Sparkles, label: "Certifications", value: "7" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Building intelligence into every dataset">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 shadow-card"
        >
          <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
            Aniket is an aspiring <span className="font-semibold text-foreground">AI Engineer and Data Analyst</span> with hands-on
            experience in Machine Learning, Deep Learning, Generative AI, Data Analytics, and Business Intelligence. He has built
            real-world projects involving AI-powered analytics, recommendation systems, computer vision, and interactive business
            dashboards.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Through practical implementation of predictive analytics, machine learning models, and data visualization tools,
            he focuses on solving real-world problems using data-driven approaches. Currently pursuing opportunities to contribute
            to innovative AI and analytics solutions while continuously expanding technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 shadow-card"
            >
              <s.icon className="h-6 w-6 text-primary" />
              <div className="mt-4 font-display text-3xl font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
