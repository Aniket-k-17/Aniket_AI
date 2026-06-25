import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink, Sparkles, BarChart3, Film, Eye } from "lucide-react";

const projects = [
  {
    icon: Sparkles,
    title: "InsightAI – AI-Powered Data Analytics Platform",
    description:
      "AI platform that automates dataset analysis, visualization, exploratory analysis, and predictive analytics. Upload a dataset and get ML-driven business insights end-to-end through a scalable Streamlit interface.",
    tech: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-Learn"],
    features: [
      "Automated dataset analysis",
      "Intelligent insight generation",
      "Predictive analytics workflows",
      "Interactive dashboards",
    ],
    github: "https://github.com/Aniket-k-17/InsightGen-AI",
    demo: "https://insightgen-ai-by-aniket.streamlit.app/",
    badge: "Flagship",
    renderVisual: () => (
      <div className="mb-4 overflow-hidden rounded-xl border border-border/80 bg-muted/20 p-4 font-mono text-[10px] select-none">
        <div className="flex items-center justify-between border-b border-border/40 pb-2">
          <span className="text-muted-foreground">dataset_explorer.py</span>
          <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-emerald-400 font-bold">READY</span>
        </div>
        <div className="mt-2 space-y-1.5 text-muted-foreground">
          <div><span className="text-primary font-bold">&gt;&gt;&gt;</span> df.describe()</div>
          <div className="grid grid-cols-4 gap-1 text-[8.5px] text-foreground/80">
            <span>rows: 15.2k</span>
            <span>columns: 12</span>
            <span>nulls: 0%</span>
            <span>acc: 94.6%</span>
          </div>
          <div className="flex items-end gap-1 pt-2 h-10">
            <span className="h-5 w-full rounded bg-primary/20" />
            <span className="h-7 w-full rounded bg-cyan/20" />
            <span className="h-9 w-full rounded bg-violet/20" />
            <span className="h-4 w-full rounded bg-primary/30" />
            <span className="h-6 w-full rounded bg-cyan/30" />
          </div>
        </div>
      </div>
    )
  },
  {
    icon: BarChart3,
    title: "Retail Marketing Analytics Dashboard",
    description:
      "Business analytics dashboard to analyze retail sales, customer behavior, and campaign performance. Customer segmentation and KPI analysis with Python and Power BI, visualizing revenue trends and campaign ROI.",
    tech: ["Python", "Power BI", "Streamlit", "Pandas"],
    features: [
      "Customer segmentation",
      "KPI analysis",
      "Revenue trend tracking",
      "Campaign performance",
    ],
    github: "https://github.com/Aniket-k-17/retail-marketing-analytics-dashboard",
    demo: "https://retail-marketing-analytics-dashboard-by-aniket.streamlit.app/",
    renderVisual: () => (
      <div className="mb-4 overflow-hidden rounded-xl border border-border/80 bg-muted/20 p-4 font-mono text-[10px] select-none">
        <div className="flex items-center justify-between border-b border-border/40 pb-2">
          <span className="text-muted-foreground">kpi_metrics_dashboard</span>
          <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-amber-400 font-bold">ACTIVE</span>
        </div>
        <div className="mt-2.5 grid grid-cols-3 gap-2">
          <div className="rounded border border-border bg-card/40 p-2 text-center">
            <span className="text-muted-foreground text-[7.5px] uppercase">Sales</span>
            <div className="font-bold text-foreground text-[10.5px] mt-0.5">$1.2M</div>
            <span className="text-emerald-400 text-[8px] font-semibold">+14.2%</span>
          </div>
          <div className="rounded border border-border bg-card/40 p-2 text-center">
            <span className="text-muted-foreground text-[7.5px] uppercase">CAC</span>
            <div className="font-bold text-foreground text-[10.5px] mt-0.5">$42.50</div>
            <span className="text-rose-400 text-[8px] font-semibold">-8.3%</span>
          </div>
          <div className="rounded border border-border bg-card/40 p-2 text-center">
            <span className="text-muted-foreground text-[7.5px] uppercase">ROI</span>
            <div className="font-bold text-foreground text-[10.5px] mt-0.5">3.8x</div>
            <span className="text-emerald-400 text-[8px] font-semibold">+18.5%</span>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: Film,
    title: "CineMatch – Movie Recommendation System",
    description:
      "Machine learning-based movie recommendation system built on a dataset of 5,000 movies. Computes cosine similarity to find matching recommendations, fetching movie posters dynamically via an IMDb API integration.",
    tech: ["Python", "Scikit-Learn", "Pandas", "IMDb API"],
    features: [
      "Matches across 5,000+ movie entries",
      "Cosine similarity matching engine",
      "Dynamic poster fetching via IMDb API",
      "Interactive search & recommendation flow",
    ],
    github: "https://github.com/Aniket-k-17/Cinematch",
    demo: "https://huggingface.co/spaces/aniket17k/Cinematch",
    renderVisual: () => (
      <div className="mb-4 overflow-hidden rounded-xl border border-border/80 bg-muted/20 p-4 font-mono text-[10px] select-none">
        <div className="flex items-center justify-between border-b border-border/40 pb-2">
          <span className="text-muted-foreground">similarity_matching_engine (5,000 movies)</span>
          <span className="rounded bg-blue-500/10 px-1.5 py-0.5 text-blue-400 font-bold">IMDb API</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded border border-border bg-card/40 p-1.5 flex flex-col justify-between h-24">
            <div className="h-10 w-full rounded bg-primary/20 flex items-center justify-center text-[7.5px] font-bold text-primary/70">POSTER</div>
            <div className="text-[7.5px] truncate font-bold text-foreground/90 mt-1">Donnie Brasco</div>
            <div className="text-[7px] text-emerald-400 font-bold mt-0.5">Sim: 0.435</div>
          </div>
          <div className="rounded border border-border bg-card/40 p-1.5 flex flex-col justify-between h-24">
            <div className="h-10 w-full rounded bg-cyan/20 flex items-center justify-center text-[7.5px] font-bold text-cyan/70">POSTER</div>
            <div className="text-[7.5px] truncate font-bold text-foreground/90 mt-1">Walking Tall</div>
            <div className="text-[7px] text-emerald-400 font-bold mt-0.5">Sim: 0.393</div>
          </div>
          <div className="rounded border border-border bg-card/40 p-1.5 flex flex-col justify-between h-24">
            <div className="h-10 w-full rounded bg-violet/20 flex items-center justify-center text-[7.5px] font-bold text-violet/70">POSTER</div>
            <div className="text-[7.5px] truncate font-bold text-foreground/90 mt-1">Devils Wings</div>
            <div className="text-[7px] text-emerald-400 font-bold mt-0.5">Sim: 0.313</div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: Eye,
    title: "YOLO Person Detection & Smart Recording System",
    description:
      "Real-time computer-vision system built with YOLOv8 and OpenCV. Detects people from live video streams, auto-saves snapshots on detection, records clips with pre- and post-event video buffering, and runs an automatic memory cleanup loop so the system can run continuously on edge hardware.",
    tech: ["YOLOv8", "OpenCV", "Python", "NumPy"],
    features: [
      "Real-time person detection",
      "Auto image capture on detect",
      "Pre & post event video buffering",
      "Automatic memory / storage cleanup",
    ],
    github: null,
    demo: null,
    badge: "Computer Vision",
    renderVisual: () => (
      <div className="mb-4 overflow-hidden rounded-xl border border-border/80 bg-muted/20 p-4 font-mono text-[10px] select-none">
        <div className="flex items-center justify-between border-b border-border/40 pb-2">
          <span className="text-muted-foreground">live_camera_feed_01</span>
          <span className="rounded bg-rose-500/10 px-1.5 py-0.5 text-rose-400 font-bold animate-pulse">REC</span>
        </div>
        <div className="relative mt-2 h-14 rounded bg-black/60 border border-border/30 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:10px_10px]" />
          <div className="absolute left-1/4 top-1/6 w-28 h-8 border border-rose-500 bg-rose-500/10 rounded flex flex-col justify-center px-1">
            <span className="text-[6.5px] text-rose-400 font-bold bg-black/50 px-1 py-0.2 rounded w-fit leading-none">person: 96.4%</span>
          </div>
          <div className="absolute right-4 bottom-1 text-[6.5px] text-muted-foreground/60">FPS: 30.2</div>
        </div>
      </div>
    )
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Projects that ship intelligence"
      subtitle="Production-grade AI, analytics, and computer-vision systems."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl glass card-glow p-6 shadow-card"
          >
            <div
              className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-primary/20 via-cyan/10 to-transparent blur-2xl"
              aria-hidden
            />
            <div className="relative">
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary via-cyan to-violet text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </span>
                {p.badge && (
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {p.badge}
                  </span>
                )}
              </div>

              {p.renderVisual()}

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
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/50 px-3 py-2 text-xs font-semibold transition-colors hover:bg-muted"
                    >
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-violet px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
