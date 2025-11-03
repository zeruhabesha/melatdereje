"use client"

import { useEffect, useState } from "react"

export default function About() {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsInView(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="about" className="relative py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-10 sm:mb-12 leading-tight text-balance">
            Creating Spaces That Tell Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 2 years of experience in architecture and digital design, I've developed a unique approach
                that merges physical and digital design principles. My passion lies in creating environments and
                experiences that are both visually stunning and functionally brilliant.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe great design is about understanding people, their needs, and their aspirations. Whether
                designing a building or an interface, I focus on creating intuitive, beautiful solutions that enhance
                everyday life.
              </p>

              <div className="space-y-3 pt-6 border-t border-border/70 dark:border-primary/25">
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Education</h4>
                <div>
                  <p className="font-semibold text-foreground">Architecture & Design Degree</p>
                  <p className="text-sm text-muted-foreground">Unity University, Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground font-medium">Architectural Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-foreground font-medium">UI/UX Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-foreground font-medium">Digital Strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground font-medium">Brand Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-foreground font-medium">Graphics Design</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="group rounded-2xl p-6 transition-all duration-300 border border-border/70 bg-white/60 dark:bg-secondary/30 backdrop-blur-sm hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Architecture
                </h3>
                <p className="text-muted-foreground">
                  Designing sustainable and innovative structures that blend with their environment
                </p>
              </div>

              <div className="group rounded-2xl p-6 transition-all duration-300 border border-border/70 bg-white/60 dark:bg-secondary/30 backdrop-blur-sm hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 dark:hover:shadow-accent/20">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  Digital Design
                </h3>
                <p className="text-muted-foreground">
                  Creating user-centered interfaces that are beautiful, intuitive, and accessible
                </p>
              </div>

              <div className="group rounded-2xl p-6 transition-all duration-300 border border-border/70 bg-white/60 dark:bg-secondary/30 backdrop-blur-sm hover:border-secondary/60 hover:shadow-lg hover:shadow-secondary/10 dark:hover:shadow-secondary/20">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  Strategy
                </h3>
                <p className="text-muted-foreground">
                  Developing comprehensive design strategies aligned with business goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
