import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Brain, Network, BarChart3, Layers, Sparkles } from "lucide-react";
import { PythonOriginal, MysqlOriginal } from "devicons-react";

const certs = [
  { name: "Machine Learning Training", id: "M5900", icon: Brain, color: "#f9a03f" },
  { name: "Advanced Python", id: "P3755", icon: PythonOriginal },
  { name: "Data Science", id: "D3330", icon: Network, color: "#14a37f" },
  { name: "SQL Training", id: "S2530", icon: MysqlOriginal },
  { name: "Power BI", id: "B1720", icon: BarChart3, color: "#f2c811" },
  { name: "Deep Learning Training", id: "L5320", icon: Layers, color: "#9b59b6" },
  { name: "Generative AI Training", id: "G3070", icon: Sparkles, color: "#ff007f" },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="ACHIEVEMENTS" title="Verified Credentials" subtitle="AI Adventures ML & Data Science Training Program">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.a
            key={c.id}
            href={`https://www.aiadventures.in/certificate/?certificate=${c.id}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
            className="group card-glow flex items-start gap-5 p-6"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-card text-primary transition-transform group-hover:scale-110 border border-border/50">
              <c.icon size={24} className="h-6 w-6 drop-shadow-md" style={c.color ? { color: c.color } : {}} />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="truncate font-sans font-medium text-foreground text-sm sm:text-base">{c.name}</h3>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground uppercase tracking-wider">ID: {c.id}</p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-sans tracking-wide text-primary opacity-80 group-hover:opacity-100 transition-colors">
                VERIFY <ExternalLink className="h-3 w-3" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
