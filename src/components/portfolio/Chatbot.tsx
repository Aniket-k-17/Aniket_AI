import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X, Sparkles } from "lucide-react";

type Msg = { role: "user" | "bot"; text: string; suggestions?: string[] };

const QUICK = [
  "Who is Aniket?",
  "Show projects",
  "Tech skills",
  "Experience",
  "Education",
  "Contact info",
];

function answer(input: string): { text: string; suggestions?: string[] } {
  const q = input.toLowerCase().trim();
  if (!q) return { text: "Ask me anything about Aniket!", suggestions: QUICK };

  if (/(hi|hello|hey|namaste)/.test(q))
    return { text: "Hey there! 👋 I'm Aniket's AI assistant. Ask me about his projects, skills, or experience.", suggestions: QUICK };

  if (/(who|about|introduce|yourself)/.test(q))
    return {
      text: "Aniket Shantaram Kondhalkar is an AI / Machine Learning Engineer and Data Analyst based in Satara, Maharashtra. He builds intelligent systems across ML, Deep Learning, Generative AI, Computer Vision, and BI analytics.",
      suggestions: ["Projects", "Skills", "Experience"],
    };

  if (/(project|work|portfolio|build)/.test(q))
    return {
      text: "He has shipped 4 ML/AI projects (InsightAI, CineMatch, YOLO Person Detection, Predictive Modeling), 4 BI dashboards, and 3 deployed live apps. Scroll to the Projects section to explore each one.",
      suggestions: ["YOLO project", "InsightAI", "Dashboards"],
    };

  if (/yolo|detection|computer vision|opencv/.test(q))
    return {
      text: "YOLO Person Detection System — real-time CV using YOLOv8 + OpenCV. Auto-saves images on detection, records clips with pre/post event buffers, and runs an automatic memory cleanup loop for 24/7 edge deployment.",
    };

  if (/insight|analytics|streamlit/.test(q))
    return {
      text: "InsightAI is an AI-powered analytics platform: upload a dataset and get automated EDA, visualizations, predictive analytics, and business-ready insights. Built with Python, Streamlit, Pandas, and Scikit-Learn. Live: <a href=\"https://insightgen-ai-by-aniket.streamlit.app/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline text-primary hover:text-violet transition-colors\">insightgen-ai-by-aniket.streamlit.app</a>",
    };

  if (/cinematch|movie|recommend/.test(q))
    return { text: "CineMatch is a content-based movie recommendation system using similarity techniques in Scikit-Learn, deployed on HuggingFace Spaces. Live: <a href=\"https://huggingface.co/spaces/aniket17k/Cinematch\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline text-primary hover:text-violet transition-colors\">HuggingFace Spaces</a>" };

  if (/dashboard|power ?bi|bi|kpi/.test(q))
    return {
      text: "4 dashboards: Retail Marketing Analytics, Sales/Revenue KPIs, Customer Segmentation, and Campaign Effectiveness — built with Power BI, Streamlit, and Python.",
    };

  if (/deploy|live|hosted/.test(q))
    return { text: "3 deployed apps: <a href=\"https://insightgen-ai-by-aniket.streamlit.app/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline text-primary hover:text-violet transition-colors\">InsightAI</a> (Streamlit), <a href=\"https://retail-marketing-analytics-dashboard-by-aniket.streamlit.app/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline text-primary hover:text-violet transition-colors\">Retail Marketing Dashboard</a> (Streamlit), and <a href=\"https://huggingface.co/spaces/aniket17k/Cinematch\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline text-primary hover:text-violet transition-colors\">CineMatch</a> (HuggingFace Spaces). All publicly accessible." };

  if (/skill|tech|stack|language|tool/.test(q))
    return {
      text: "Python, SQL, Scikit-Learn, Pandas, NumPy, OpenCV, YOLOv8, Streamlit, Power BI, FastAPI, Docker, Git/GitHub, AWS (EC2, S3, IAM, CLI), and Generative AI / MLOps fundamentals.",
    };

  if (/experience|intern|job|work history/.test(q))
    return {
      text: "Currently a Machine Learning & Data Science Intern at AI Adventures (Feb 2026 – Present), building ML and analytics solutions, predictive models, and interactive Power BI / Streamlit dashboards.",
    };

  if (/education|college|degree|study/.test(q))
    return { text: "BCA (Bachelor of Computer Applications), Dhananjayrao Gadgil College of Commerce, Satara — 2022 to 2025, CGPA 7.83." };

  if (/cert|certificate|credential/.test(q))
    return { text: "7 verified certifications from AI Adventures: Machine Learning, Advanced Python, Data Science, SQL, Power BI, Deep Learning, and Generative AI." };

  if (/contact|email|phone|reach|hire/.test(q))
    return {
      text: "📧 <a href=\"mailto:Aniketkondhalkar4717@gmail.com\" class=\"underline text-primary hover:text-violet transition-colors\">Aniketkondhalkar4717@gmail.com</a>  ·  📱 <a href=\"tel:+919322813103\" class=\"underline text-primary hover:text-violet transition-colors\">+91 9322813103</a>  ·  LinkedIn: <a href=\"https://www.linkedin.com/in/aniket-kondhalkar-174a0a258/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline text-primary hover:text-violet transition-colors\">aniket-kondhalkar-174a0a258</a>  ·  GitHub: <a href=\"https://github.com/Aniket-k-17\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline text-primary hover:text-violet transition-colors\">Aniket-k-17</a>",
      suggestions: ["Open contact form"],
    };

  if (/resume|cv|download/.test(q))
    return { text: "You can download Aniket's resume from the hero section — the 'Download Resume' button at the top of the page." };

  if (/location|where|based|city/.test(q))
    return { text: "Satara, Maharashtra, India — open to remote and relocation across India and worldwide." };

  if (/thank|thanks|ty/.test(q)) return { text: "Anytime! 🚀 Best of luck — and feel free to reach out via the Contact section." };

  return {
    text: "I can help with projects, skills, experience, education, certifications, or contact info. What would you like to know?",
    suggestions: QUICK,
  };
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hi! I'm Aniket's AI assistant 🤖 — ask me anything about his projects, skills, or experience.",
      suggestions: QUICK,
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text) return;
    const reply = answer(text);
    setMessages((m) => [...m, { role: "user", text }, { role: "bot", text: reply.text, suggestions: reply.suggestions }]);
    setInput("");
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat with Aniket's AI assistant"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary via-cyan to-violet text-primary-foreground shadow-glow transition-transform hover:scale-110"
      >
        {open ? <X className="h-5 w-5" /> : <Bot className="h-6 w-6" />}
        {!open && (
          <span className="absolute -right-1 -top-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 flex h-[520px] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl glass shadow-glow"
          >
            <div className="flex items-center gap-3 border-b border-border/50 bg-gradient-to-r from-primary/15 via-cyan/10 to-violet/15 p-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary via-cyan to-violet text-primary-foreground">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="text-sm font-bold">Aniket's AI Assistant</div>
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Online · Ready to help
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="grid h-8 w-8 place-items-center rounded-lg hover:bg-muted">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="max-w-[85%] space-y-2">
                    <div
                      className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        m.role === "user"
                          ? "rounded-br-sm bg-gradient-to-br from-primary to-violet text-primary-foreground"
                          : "rounded-bl-sm bg-muted text-foreground"
                      }`}
                      {...(m.role === "bot"
                        ? { dangerouslySetInnerHTML: { __html: m.text } }
                        : { children: m.text }
                      )}
                    />
                    {m.suggestions && (
                      <div className="flex flex-wrap gap-1.5">
                        {m.suggestions.map((s) => (
                          <button
                            key={s}
                            onClick={() => send(s)}
                            className="rounded-full border border-border bg-card/50 px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2 border-t border-border/50 bg-background/40 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, skills…"
                maxLength={200}
                className="flex-1 rounded-xl border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="submit"
                aria-label="Send"
                className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-violet text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
