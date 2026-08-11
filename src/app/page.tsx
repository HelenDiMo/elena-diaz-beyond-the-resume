import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Evolution from "@/components/sections/Evolution";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Evolution />
      <Skills />
      <Projects />
    </main>
  );
}
