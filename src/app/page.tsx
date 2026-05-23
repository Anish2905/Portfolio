import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Terminal from "@/components/sections/Terminal";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Intro Section */}
      <Hero />

      {/* Skills Matrix */}
      <Skills />

      {/* Work Timeline Experience */}
      <Experience />

      {/* Selected Featured Projects */}
      <Projects />

      {/* Interactive Zsh Terminal */}
      <Terminal />

      {/* Connect & Contact Card */}
      <Contact />
    </div>
  );
}
