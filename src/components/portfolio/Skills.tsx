import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { 
  BarChart3, Brain, Network, BookOpen, LayoutDashboard,
  LineChart, PieChart, FileSpreadsheet, MessageSquare
} from "lucide-react";
import { 
  PythonOriginal, MysqlOriginal, PandasOriginal, NumpyOriginal, OpencvOriginal,
  DockerOriginal, FastapiOriginal, GitOriginal, GithubOriginal, 
  AmazonwebservicesOriginalWordmark, JupyterOriginal 
} from "devicons-react";

// The categories: "All", "Languages", "Frameworks", "Data & AI", "Cloud & Tools"
const filters = ["All", "Languages", "Frameworks", "Data & AI", "Cloud & Tools"];

const skillsData = [
  { name: "Python", category: "Languages", icon: PythonOriginal },
  { name: "SQL", category: "Languages", icon: MysqlOriginal },
  
  { name: "FastAPI", category: "Frameworks", icon: FastapiOriginal },
  { name: "Streamlit", category: "Frameworks", icon: LayoutDashboard, color: "#ff4b4b" },
  { name: "LangChain", category: "Frameworks", icon: Network, color: "#14a37f" },
  
  { name: "Pandas", category: "Data & AI", icon: PandasOriginal },
  { name: "NumPy", category: "Data & AI", icon: NumpyOriginal },
  { name: "Matplotlib", category: "Data & AI", icon: LineChart, color: "#11557c" },
  { name: "Seaborn", category: "Data & AI", icon: PieChart, color: "#4c72b0" },
  { name: "Scikit-Learn", category: "Data & AI", icon: Brain, color: "#f9a03f" },
  { name: "OpenCV", category: "Data & AI", icon: OpencvOriginal },
  { name: "NLP", category: "Data & AI", icon: MessageSquare, color: "#9b59b6" },
  { name: "RAG", category: "Data & AI", icon: BookOpen, color: "#ff007f" },
  
  { name: "MS Excel", category: "Data & AI", icon: FileSpreadsheet, color: "#217346" },
  
  { name: "Docker", category: "Cloud & Tools", icon: DockerOriginal },
  { name: "Git", category: "Cloud & Tools", icon: GitOriginal },
  { name: "GitHub", category: "Cloud & Tools", icon: GithubOriginal },
  { name: "Jupyter", category: "Cloud & Tools", icon: JupyterOriginal },
  { name: "AWS", category: "Cloud & Tools", icon: AmazonwebservicesOriginalWordmark },
  { name: "Power BI", category: "Cloud & Tools", icon: BarChart3, color: "#f2c811" },
];

export function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills = skillsData.filter(
    (skill) => activeFilter === "All" || skill.category === activeFilter
  );

  return (
    <Section id="skills" eyebrow="MY ARSENAL" title="Tools of the Trade" subtitle="">
      <div className="flex flex-wrap items-center gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`rounded-full px-5 py-2 text-[11px] font-mono tracking-wide transition-all ${
              activeFilter === f 
                ? "bg-primary/10 text-primary border border-primary/50 shadow-[0_0_15px_-3px_rgba(0,240,255,0.2)]"
                : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              key={skill.name}
              className="flex flex-col items-center justify-center gap-4 p-5 rounded-3xl bg-card border border-border/40 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(0,240,255,0.3)] transition-all group aspect-square"
            >
              <div className="h-10 w-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <skill.icon size={40} className="w-10 h-10 drop-shadow-md" style={skill.color ? { color: skill.color } : {}} />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground text-center leading-tight">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
