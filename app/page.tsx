"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Services from "@/components/services"
import Contact from "@/components/contact"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [portfolioFilter, setPortfolioFilter] = useState("all")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="relative min-h-screen">
      <Header isLoaded={isLoaded} />
      <Hero isLoaded={isLoaded} />
      <About />
      <Projects portfolioFilter={portfolioFilter} setPortfolioFilter={setPortfolioFilter} />
      <Services />
      <Contact />
    </main>
  )
}
