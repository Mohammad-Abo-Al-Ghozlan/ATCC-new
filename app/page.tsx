"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Projects from "@/components/projects"
import WhyATCC from "@/components/why-atcc"
import Values from "@/components/values"
import Partners from "@/components/partners"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyATCC />
        <Values />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
