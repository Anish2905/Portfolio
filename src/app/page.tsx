import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Terminal from "@/components/sections/Terminal";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Skills Matrix */}
      <Skills />

      {/* Featured Projects */}
      <Projects />

      {/* Interactive Terminal */}
      <Terminal />
    </div>
  );
}
