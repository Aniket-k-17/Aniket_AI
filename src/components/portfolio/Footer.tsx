import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { toast } from "sonner";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30 py-10">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#top" className="flex items-center gap-2 font-display font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary via-cyan to-violet text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            Aniket<span className="text-gradient">.AI</span>
          </a>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Designing intelligent systems that transform data into actionable AI solutions.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Navigate</h4>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#projects" className="hover:text-foreground">Projects</a></li>
            <li><a href="#experience" className="hover:text-foreground">Experience</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Connect</h4>
          <div className="mt-3 flex gap-2">
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/aniket-kondhalkar-174a0a258/" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-muted">
              <Linkedin className="h-4 w-4" />
            </a>
            <a aria-label="GitHub" href="https://github.com/Aniket-k-17" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-muted">
              <Github className="h-4 w-4" />
            </a>
            <a
              aria-label="Email"
              href="mailto:Aniketkondhalkar4717@gmail.com"
              onClick={() => {
                navigator.clipboard.writeText("Aniketkondhalkar4717@gmail.com");
                toast.success("Email copied to clipboard!");
              }}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-muted"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl px-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aniket Shantaram Kondhalkar. Crafted with care in Pune.
      </div>
    </footer>
  );
}
