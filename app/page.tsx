import Navbar from "@/components/sections/Navbar"
import Hero from "@/components/sections/Hero"
import Projects from "@/components/sections/Projects"
import Experience from "@/components/sections/Experience"
import Skills from "@/components/sections/Skills"
import Contact from "@/components/sections/Contact"
import Education from "@/components/sections/Education"
import Footer from "@/components/sections/Footer"
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}