import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Evolution from "@/components/sections/Evolution";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Dashboard from "@/components/sections/Dashboard";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Evolution />
      <Skills />
      <Projects />
      <Dashboard />
      <Contact />
    </main>
  );
}
