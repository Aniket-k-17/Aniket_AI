import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink, Sparkles, BarChart3, Film, Eye } from "lucide-react";

const projects = [
  {
    icon: Sparkles,
    title: "InsightAI – AI Powered Data Analytics Platform",
    description: "AI-powered analytics platform that automates dataset analysis, visualization, insight generation, and predictive analytics. Upload a dataset and receive intelligent business insights through ML-powered workflows.",
    tech: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-Learn"],
    features: ["Automated dataset analysis", "Intelligent insight generation", "Predictive analytics", "Interactive visualizations"],
    github: "https://github.com/Aniket-k-17/InsightGen-AI",
    demo: "https://insightgen-ai-by-aniket.streamlit.app/",
  },
  {
    icon: BarChart3,
    title: "Retail Marketing Analytics Dashboard",
    description: "Business intelligence dashboard for analyzing retail sales performance, customer behavior, campaign effectiveness, and KPI monitoring.",
    tech: ["Python", "Power BI", "Streamlit", "Pandas"],
    features: ["Customer segmentation", "KPI analysis", "Revenue trend tracking", "Campaign performance"],
    github: "https://github.com/Aniket-k-17/retail-marketing-analytics-dashboard",
    demo: "https://retail-marketing-analytics-dashboard-by-aniket.streamlit.app/",
  },
  {
    icon: Film,
    title: "CineMatch – Movie Recommendation System",
    description: "Content-based movie recommendation engine that delivers personalized movie suggestions using similarity-based machine learning techniques.",
    tech: ["Python", "Scikit-Learn", "Pandas"],
    features: ["Personalized recommendations", "Content similarity engine", "Recommendation ranking"],
    github: "https://github.com/Aniket-k-17/Cinematch",
    demo: "https://huggingface.co/spaces/aniket17k/Cinematch",
  },
  {
    icon: Eye,
    title: "YOLO Object Detection System",
    description: "Real-time object detection system developed using YOLOv8 and OpenCV for computer vision applications including video stream processing.",
    tech: ["YOLOv8", "OpenCV", "Python"],
    features: ["Real-time detection", "Object localization", "Object classification", "Video stream processing"],
    github: null,
    demo: null,
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Work" title="Projects that ship intelligence" subtitle="Production-grade AI, analytics, and computer-vision systems.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl glass p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-primary/20 via-cyan/10 to-transparent blur-2xl transition-opacity group-hover:opacity-100" aria-hidden />
            <div className="relative">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary via-cyan to-violet text-primary-foreground">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <ul className="mt-4 grid grid-cols-1 gap-1.5 text-xs text-foreground/80 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" /> {f}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[11px] font-mono text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/50 px-3 py-2 text-xs font-semibold transition-colors hover:bg-muted">
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-violet px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]">
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
