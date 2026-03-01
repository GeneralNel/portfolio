import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[--color-bg]">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Navbar />
    </main>
  );
}
