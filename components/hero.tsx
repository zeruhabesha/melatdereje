"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface HeroProps {
  isLoaded: boolean
}

export default function Hero({ isLoaded }: HeroProps) {
  const [displayText, setDisplayText] = useState("")
  const [profession, setProfession] = useState("")
  const fullText = "MELAT DEREJE"
  const professions = ["Graphics Designer", "Architect", "UI/UX Designer"]
  const longestProfessionCh = Math.max(...professions.map((p) => p.length))
  let professionIndex = 0
  let charIndex = 0
  let isDeleting = false
  let typingSpeed = 100

  // Name typing effect
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  // Profession typing effect
  useEffect(() => {
    const type = () => {
      const currentProfession = professions[professionIndex]
      
      if (isDeleting) {
        setProfession(currentProfession.substring(0, charIndex - 1))
        charIndex--
        typingSpeed = 50
      } else {
        setProfession(currentProfession.substring(0, charIndex + 1))
        charIndex++
        typingSpeed = 100
      }

      if (!isDeleting && charIndex === currentProfession.length) {
        typingSpeed = 2000 // Pause at the end of the word
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        professionIndex = (professionIndex + 1) % professions.length
      }

      setTimeout(type, typingSpeed)
    }

    const timer = setTimeout(type, 1000) // Start after name animation
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 pt-28 pb-20 sm:pb-24">
      {/* Interactive Background Elements */}
      <div className="floating-shapes">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center relative z-10">
        {/* Left Content */}
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Welcome to My Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-3 leading-tight min-h-[3rem] sm:min-h-[3.5rem] lg:min-h-[5rem]">
            {displayText}
            <span className="text-primary animate-pulse">_</span>
          </h1>

          <div className="typing-container mb-6 h-[3rem] md:h-[3.5rem] flex items-center">
            <p className="text-2xl md:text-3xl font-medium text-muted-foreground w-full" aria-live="polite">
              <span className="relative inline-block">
                {profession}
                <span className="text-primary animate-pulse ml-1">|</span>
              </span>
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Architect & UI Designer crafting beautiful spaces both physical and digital. I blend timeless design
            principles with modern innovation to create experiences that inspire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              View My Work
              <ArrowRight size={20} />
            </button>
            <a
              href="https://drive.google.com/file/d/1PRkLGEMIo1fIXxuVigdU21lyhbdB94pl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/5 transition-all duration-300"
            >
              View CV
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-border/70">
            <div className="animate-slideInUp" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="animate-slideInUp" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl font-bold text-accent mb-2">2+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="animate-slideInUp" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>

        <div
          className={`relative h-[28rem] sm:h-[32rem] lg:h-full min-h-[24rem] transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-accent/15 to-secondary/25 dark:from-primary/35 dark:via-accent/25 dark:to-secondary/35 rounded-3xl blur-3xl animate-float" />
          <div className="relative h-full bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/15 rounded-3xl border border-primary/20 dark:border-primary/40 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                {/* Profile Picture Container */}
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full mx-auto mb-6 bg-gradient-to-br from-primary/30 to-accent/30 border-4 border-primary/50 overflow-hidden shadow-2xl animate-pulse">
                  <Image
                    src="/professional-female-architect-portrait.jpg"
                    alt="MELAT DEREJE - Architect & UI Designer"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <p className="text-foreground font-semibold text-lg">Architecture × Design × Innovation</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div
              className="absolute top-12 right-12 w-20 h-20 bg-secondary/30 rounded-lg animate-float"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-20 left-12 w-16 h-16 bg-accent/30 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute top-1/3 right-1/4 w-12 h-12 bg-primary/30 rounded-lg animate-float"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
