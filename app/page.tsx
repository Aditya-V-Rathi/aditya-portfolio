import Navbar from "@/components/sections/Navbar"
import Hero from "@/components/sections/Hero"
import Experience from "@/components/sections/Experience"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}