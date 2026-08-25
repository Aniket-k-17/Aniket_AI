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
    <Section id="skills" eyebrow="TOOLS I USE" title="My Process & Toolkit" subtitle="">
      <div className="flex flex-wrap items-center gap-3 mb-10 border-b border-border/40 pb-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 text-xs font-medium uppercase tracking-widest transition-all ${
              activeFilter === f 
                ? "text-primary border-b-2 border-primary -mb-[17px]"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              key={skill.name}
              className="flex flex-col items-center justify-center gap-4 p-5 rounded-3xl bg-card border border-border/40 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(139,34,34,0.3)] transition-all group aspect-square"
            >
              <div className="h-10 w-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <skill.icon size={40} className="w-10 h-10 drop-shadow-sm" style={skill.color ? { color: skill.color } : {}} />
              </div>
              <span className="text-[11px] font-sans tracking-wide text-muted-foreground group-hover:text-foreground text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
