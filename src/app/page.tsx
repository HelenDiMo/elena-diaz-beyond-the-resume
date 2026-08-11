import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Evolution from "@/components/sections/Evolution";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Evolution />
      <Skills />
    </main>
  );
}
