import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  { name: "Machine Learning Training", id: "M5900" },
  { name: "Advanced Python", id: "P3755" },
  { name: "Data Science", id: "D3330" },
  { name: "SQL Training", id: "S2530" },
  { name: "Power BI", id: "B1720" },
  { name: "Deep Learning Training", id: "L5320" },
  { name: "Generative AI Training", id: "G3070" },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Verified credentials" subtitle="AI Adventures ML & Data Science Training Program">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.a
            key={c.id}
            href={`https://www.aiadventures.in/certificate/?certificate=${c.id}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
            className="group glass flex items-start gap-4 rounded-2xl p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 via-cyan/20 to-violet/20 text-primary">
              <Award className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="truncate font-semibold">{c.name}</h3>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">ID: {c.id}</p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary opacity-80 group-hover:opacity-100">
                Verify <ExternalLink className="h-3 w-3" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
