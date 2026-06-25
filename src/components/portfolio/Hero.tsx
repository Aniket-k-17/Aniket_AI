import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, MapPin, ArrowDown } from "lucide-react";
import portraitImg from "@/assets/aniket-portrait.jpg";
import { ParticleBackground } from "./ParticleBackground";

const floatingBadgeVariants = {
  animate: (custom: { yStart: number; yEnd: number; duration: number }) => ({
    y: [custom.yStart, custom.yEnd, custom.yStart],
    transition: {
      duration: custom.duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-36 pb-24 md:py-36">
      <div className="absolute inset-0 bg-radial-glow" aria-hidden />
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <ParticleBackground />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur shadow-[0_0_15px_-3px_rgba(16,185,129,0.25)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to AI / ML / Data Science / Analyst roles
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight">
            Aniket Shantaram
            <br />
            <span className="text-gradient">Kondhalkar</span>
          </h1>

          <div className="mt-6 space-y-2">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
              AI & Machine Learning Engineer
            </h2>
            <p className="text-sm font-semibold tracking-wide uppercase text-primary/80 sm:text-base">
              Data Analytics Enthusiast <span className="mx-2 text-muted-foreground/30">|</span> Building Intelligent Data-Driven Solutions
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Pune, Maharashtra, India
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Passionate about Machine Learning, Data Analytics, and Generative AI. I build intelligent systems that transform raw data into actionable insights and real-world solutions through practical AI applications.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="/Aniket_Kondhalkar_Resume.pdf"
              download="Aniket_Kondhalkar_Resume.pdf"
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
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/aniket-kondhalkar-174a0a258/" target="_blank" rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/40 backdrop-blur transition-colors hover:bg-muted">
                <Linkedin className="h-4 w-4" />
              </a>
              <a aria-label="GitHub" href="https://github.com/Aniket-k-17" target="_blank" rel="noopener noreferrer"
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
            <div className="absolute -inset-4 rounded-[1.7rem] bg-gradient-to-br from-primary/30 via-cyan/20 to-violet/30 blur-2xl" aria-hidden />
            
            <div className="relative animate-float rounded-[1.7rem] p-[3px] bg-gradient-to-br from-primary/80 via-cyan/60 to-violet/80 shadow-glow">
              <div className="overflow-hidden rounded-[1.6rem] bg-background/90 p-1.5 backdrop-blur-3xl">
                <img
                  src={portraitImg}
                  alt="Aniket Shantaram Kondhalkar — AI / ML Engineer"
                  width={720}
                  height={960}
                  loading="eager"
                  className="h-[340px] w-full max-w-[260px] rounded-[1.25rem] object-cover sm:h-[390px] sm:w-[290px]"
                />
              </div>
            </div>

            {/* Absolute Floating Badges */}
            <motion.div
              custom={{ yStart: 0, yEnd: -12, duration: 5 }}
              variants={floatingBadgeVariants}
              animate="animate"
              className="hidden md:flex items-center gap-1.5 absolute -left-12 top-1/4 glass rounded-xl px-3 py-1.5 text-xs font-semibold shadow-card border border-primary/20 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
              Python
            </motion.div>

            <motion.div
              custom={{ yStart: 6, yEnd: -8, duration: 5.5 }}
              variants={floatingBadgeVariants}
              animate="animate"
              className="hidden md:flex items-center gap-1.5 absolute -left-16 bottom-1/4 glass rounded-xl px-3 py-1.5 text-xs font-semibold shadow-card border border-violet/20 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
              Power BI
            </motion.div>

            <motion.div
              custom={{ yStart: -6, yEnd: 8, duration: 6 }}
              variants={floatingBadgeVariants}
              animate="animate"
              className="hidden md:flex items-center gap-1.5 absolute -right-16 top-20 glass rounded-xl px-3 py-1.5 text-xs font-semibold shadow-card border border-cyan/20 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              Machine Learning
            </motion.div>

            <motion.div
              custom={{ yStart: -4, yEnd: 8, duration: 4.8 }}
              variants={floatingBadgeVariants}
              animate="animate"
              className="hidden md:flex items-center gap-1.5 absolute -right-12 bottom-1/4 glass rounded-xl px-3 py-1.5 text-xs font-semibold shadow-card border border-primary/20 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_8px_#8b5cf6]" />
              Gen AI
            </motion.div>

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
