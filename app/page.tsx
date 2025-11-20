"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Tools from "@/components/tools"
import Contact from "@/components/contact"

const Projects = dynamic(() => import("@/components/projects"), {
  loading: () => (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="h-4 w-24 rounded-full bg-muted animate-pulse" />
        <div className="h-10 w-64 rounded-full bg-muted animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="aspect-[4/5] rounded-2xl border border-border bg-card/70 dark:bg-card/60 animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  ),
})

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
      <Tools />
      <Projects portfolioFilter={portfolioFilter} setPortfolioFilter={setPortfolioFilter} />
      <Services />
      <Contact />
    </main>
  )
}
