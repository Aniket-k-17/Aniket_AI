import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import {
  Github, ExternalLink, Sparkles, BarChart3, Film, Eye,
  Brain, TrendingUp, Users, Megaphone, LineChart, Rocket,
} from "lucide-react";

type Project = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github?: string | null;
  demo?: string | null;
  badge?: string;
};

const ml: Project[] = [
  {
    icon: Sparkles,
    title: "InsightAI – AI-Powered Data Analytics Platform",
    description:
      "AI platform that automates dataset analysis, visualization, insight generation, and predictive analytics. Upload a dataset and get business-ready intelligence end-to-end.",
    tech: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-Learn"],
    features: ["Automated EDA", "Predictive analytics", "Insight generation", "Interactive charts"],
    github: "https://github.com/Aniket-k-17/InsightGen-AI",
    demo: "https://insightgen-ai-by-aniket.streamlit.app/",
    badge: "Flagship",
  },
  {
    icon: Film,
    title: "CineMatch – Movie Recommendation System",
    description:
      "Content-based recommender that delivers personalized movie suggestions using similarity-based ML techniques on movie metadata.",
    tech: ["Python", "Scikit-Learn", "Pandas"],
    features: ["Personalized recs", "Content similarity engine", "Top-N ranking", "HF Spaces UI"],
    github: "https://github.com/Aniket-k-17/Cinematch",
    demo: "https://huggingface.co/spaces/aniket17k/Cinematch",
  },
  {
    icon: Eye,
    title: "YOLO Person Detection & Smart Recording System",
    description:
      "Real-time computer-vision system built with YOLOv8 + OpenCV. Detects people from live video, auto-saves snapshots on detection, records clips with pre- and post-event buffers, and runs an automatic memory-cleanup loop so the system can run 24/7 on edge hardware.",
    tech: ["YOLOv8", "OpenCV", "Python", "NumPy"],
    features: [
      "Real-time person detection",
      "Auto image capture on detect",
      "Pre & post event video buffering",
      "Automatic memory / storage cleanup",
    ],
    badge: "Computer Vision",
  },
  {
    icon: Brain,
    title: "Predictive Modeling & Customer Churn Analytics",
    description:
      "End-to-end ML workflow covering data cleaning, feature engineering, model training, evaluation, and explainability for churn and behavior prediction on real-world tabular data.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    features: ["Feature engineering", "Classification & regression", "Model evaluation", "Insight reporting"],
  },
];

const dashboards: Project[] = [
  {
    icon: BarChart3,
    title: "Retail Marketing Analytics Dashboard",
    description:
      "BI dashboard for retail sales performance, customer behavior, campaign effectiveness, and KPI monitoring.",
    tech: ["Python", "Power BI", "Streamlit", "Pandas"],
    features: ["KPI tracking", "Segmentation", "Revenue trends", "Campaign ROI"],
    github: "https://github.com/Aniket-k-17/retail-marketing-analytics-dashboard",
    demo: "https://retail-marketing-analytics-dashboard-by-aniket.streamlit.app/",
  },
  {
    icon: LineChart,
    title: "Sales Performance & Revenue KPI Dashboard",
    description:
      "Interactive dashboard surfacing monthly revenue, product mix, regional performance, and YoY growth for data-driven sales decisions.",
    tech: ["Power BI", "DAX", "SQL"],
    features: ["Revenue KPIs", "Product mix", "Region drill-down", "YoY comparison"],
  },
  {
    icon: Users,
    title: "Customer Segmentation Dashboard",
    description:
      "Cohort and RFM-style segmentation dashboard that groups customers by behavior, value, and engagement for targeted marketing.",
    tech: ["Python", "Pandas", "Power BI"],
    features: ["RFM segmentation", "Cohort analysis", "Lifetime value view", "Targeting buckets"],
  },
  {
    icon: Megaphone,
    title: "Campaign Effectiveness Dashboard",
    description:
      "Marketing analytics dashboard tracking campaign reach, conversion funnels, channel ROI, and attribution insights.",
    tech: ["Power BI", "Streamlit", "Pandas"],
    features: ["Conversion funnels", "Channel ROI", "Attribution view", "Trend monitoring"],
  },
];

const deployed: Project[] = [
  {
    icon: Rocket,
    title: "InsightAI – Live AI Analytics App",
    description: "Production Streamlit deployment of the InsightAI platform — upload any dataset and receive ML-powered insights instantly.",
    tech: ["Streamlit Cloud", "Python"],
    features: ["Public live demo", "Dataset upload", "Live ML inference"],
    demo: "https://insightgen-ai-by-aniket.streamlit.app/",
    github: "https://github.com/Aniket-k-17/InsightGen-AI",
  },
  {
    icon: Rocket,
    title: "Retail Marketing Dashboard – Live",
    description: "Hosted Streamlit dashboard showcasing retail analytics with interactive filters and KPI cards.",
    tech: ["Streamlit Cloud", "Python", "Pandas"],
    features: ["Public dashboard", "Interactive filters", "Live KPIs"],
    demo: "https://retail-marketing-analytics-dashboard-by-aniket.streamlit.app/",
    github: "https://github.com/Aniket-k-17/retail-marketing-analytics-dashboard",
  },
  {
    icon: Rocket,
    title: "CineMatch – HuggingFace Space",
    description: "Movie recommendation engine deployed on HuggingFace Spaces with an interactive recommendation UI.",
    tech: ["HuggingFace Spaces", "Python", "Scikit-Learn"],
    features: ["Hosted ML app", "Interactive UI", "Personalized output"],
    demo: "https://huggingface.co/spaces/aniket17k/Cinematch",
    github: "https://github.com/Aniket-k-17/Cinematch",
  },
];

const tabs = [
  { id: "ml", label: "ML / AI Projects", items: ml, icon: Brain },
  { id: "dash", label: "Dashboards", items: dashboards, icon: TrendingUp },
  { id: "live", label: "Deployed Apps", items: deployed, icon: Rocket },
] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("ml");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Projects that ship intelligence"
      subtitle="Production-grade AI systems, BI dashboards, and live deployments."
    >
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {tabs.map((t) => {
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                isActive
                  ? "border-transparent bg-gradient-to-r from-primary to-violet text-primary-foreground shadow-glow"
                  : "border-border bg-card/40 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <t.icon className="h-4 w-4" /> {t.label}
              <span className={`rounded-full px-1.5 text-[11px] ${isActive ? "bg-white/20" : "bg-muted"}`}>{t.items.length}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {current.items.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl glass p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div
                className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-primary/20 via-cyan/10 to-transparent blur-2xl"
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary via-cyan to-violet text-primary-foreground">
                    <p.icon className="h-5 w-5" />
                  </span>
                  {p.badge && (
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {p.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug sm:text-xl">{p.title}</h3>
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
                    <span
                      key={t}
                      className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[11px] font-mono text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {(p.github || p.demo) && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/50 px-3 py-2 text-xs font-semibold transition-colors hover:bg-muted"
                      >
                        <Github className="h-3.5 w-3.5" /> GitHub
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-violet px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
