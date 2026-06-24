import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code2, ChartBar, Brain, Layers, Sparkles, Cloud, Lightbulb } from "lucide-react";

const groups = [
  { icon: Code2, title: "Programming", items: ["Python", "SQL"] },
  { icon: ChartBar, title: "Data Analytics", items: ["Power BI", "Pandas", "NumPy", "Data Cleaning", "EDA", "Feature Engineering", "Predictive Analytics"] },
  { icon: Brain, title: "Machine Learning", items: ["Scikit-Learn", "Classification", "Regression", "Recommendation Systems", "Model Evaluation"] },
  { icon: Layers, title: "Deep Learning", items: ["Neural Networks", "Computer Vision", "OpenCV"] },
  { icon: Sparkles, title: "Generative AI", items: ["LLM Fundamentals", "Generative AI Applications", "AI Analytics Workflows"] },
  { icon: Cloud, title: "Cloud & Dev Tools", items: ["AWS EC2", "AWS S3", "AWS IAM", "AWS CLI", "Docker", "FastAPI", "Git", "GitHub", "Jupyter Notebook", "Streamlit"] },
  { icon: Lightbulb, title: "Concepts", items: ["Machine Learning", "Deep Learning", "Generative AI", "MLOps", "Business Intelligence"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tech stack & expertise" subtitle="A toolbox built around shipping real AI and analytics products.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group glass rounded-2xl p-6 shadow-card transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/20 via-cyan/20 to-violet/20 text-primary">
                <g.icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold">{g.title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="rounded-lg border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
