import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { Chatbot } from "@/components/portfolio/Chatbot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aniket Kondhalkar — AI Engineer & ML Engineer Portfolio" },
      { name: "description", content: "AI Engineer, Machine Learning Engineer, and Data Analyst from Pune. Projects in ML, Deep Learning, Generative AI, Computer Vision, and BI." },
      { property: "og:title", content: "Aniket Kondhalkar — AI Engineer & ML Engineer" },
      { property: "og:description", content: "Designing intelligent systems that transform data into actionable insights and real-world AI solutions." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "https://aniket.ai/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
      <Chatbot />
    </main>
  );
}
