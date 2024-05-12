import "./globals.css";
import Hero from "@/views/Hero/Hero";
import About from "@/views/About/About";
import Contact from "@/views/Contact/Contact";
import Projects from "@/views/Projects/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
