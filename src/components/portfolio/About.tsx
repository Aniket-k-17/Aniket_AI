import { motion } from "framer-motion";
import { Section } from "./Section";
import { Brain, ChartLine, Cpu, Sparkles } from "lucide-react";

const stats = [
  { icon: Brain, label: "AI / ML Projects", value: "4" },
  { icon: ChartLine, label: "Dashboards Built", value: "4" },
  { icon: Cpu, label: "Apps Deployed", value: "3" },
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
            I am an AI Engineer and Data Analyst passionate about building intelligent systems that transform data into meaningful insights and real-world solutions. My experience spans Machine Learning, Deep Learning, Generative AI, Data Analytics, and Business Intelligence through hands-on projects and practical implementations.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            I have developed AI-powered analytics platforms, recommendation systems, computer vision applications, and interactive business dashboards using modern tools and technologies. I enjoy solving complex problems with data-driven approaches and continuously exploring new advancements in AI and machine learning.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Currently, I am seeking opportunities where I can apply my skills, contribute to impactful projects, and grow as an AI and Machine Learning professional.
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
