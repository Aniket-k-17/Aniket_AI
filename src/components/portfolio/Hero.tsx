import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, MapPin, ArrowDown } from "lucide-react";
import portrait from "@/assets/aniket-photo.webp.asset.json";
import { ParticleBackground } from "./ParticleBackground";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 bg-radial-glow" aria-hidden />
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <ParticleBackground />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs font-medium backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to AI / ML / Data Science roles
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Aniket Shantaram
            <br />
            <span className="text-gradient">Kondhalkar</span>
          </h1>

          <p className="mt-5 text-base font-medium text-muted-foreground sm:text-lg">
            AI Engineer · Machine Learning Engineer · Data Analyst
          </p>

          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Satara, Maharashtra, India
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Designing intelligent systems that transform data into actionable insights and real-world AI solutions.
            Passionate about Machine Learning, Deep Learning, Generative AI, and Analytics.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/Aniket_Kondhalkar_Resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary via-primary to-violet px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/40 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-muted"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <div className="flex items-center gap-2 pl-1">
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/aniket-kondhalkar-174a0a258/" target="_blank" rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/40 backdrop-blur transition-colors hover:bg-muted">
                <Linkedin className="h-4 w-4" />
              </a>
              <a aria-label="GitHub" href="https://github.com/Aniket-k-17" target="_blank" rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/40 backdrop-blur transition-colors hover:bg-muted">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-2 text-xs text-muted-foreground">
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" /> Scroll to explore
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/40 via-cyan/30 to-violet/40 blur-2xl" aria-hidden />
            <div className="relative animate-float overflow-hidden rounded-[2rem] glass p-2 shadow-glow">
              <img
                src={portrait.url}
                alt="Aniket Shantaram Kondhalkar — AI / ML Engineer"
                width={720}
                height={960}
                loading="eager"
                className="h-[420px] w-[320px] rounded-[1.5rem] object-cover sm:h-[480px] sm:w-[360px]"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 text-xs font-mono shadow-card">
              <span className="text-gradient font-bold">model.train()</span> →  AI/ML
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 text-xs font-mono shadow-card">
              accuracy: <span className="text-gradient font-bold">98.2%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
