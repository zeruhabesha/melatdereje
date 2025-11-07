"use client"

import { useEffect, useState } from "react"
import { Building2, Palette, Smartphone, Lightbulb, Paintbrush } from "lucide-react"

export default function Services() {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsInView(true), 400)
    return () => clearTimeout(timer)
  }, [])

  const services = [
    {
      icon: Building2,
      title: "Architectural Design",
      description:
        "From conceptual design to detailed specifications, creating innovative and sustainable architectural solutions.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered digital design that combines aesthetics with functionality and accessibility.",
    },
    {
      icon: Paintbrush,
      title: "Graphics Design",
      description: "Creating visually stunning graphics, branding materials, and marketing assets that tell your story.",
    },
    {
      icon: Smartphone,
      title: "Digital Products",
      description: "End-to-end design of digital products including web applications, mobile apps, and design systems.",
    },
    {
      icon: Lightbulb,
      title: "Design Strategy",
      description: "Strategic design consulting to align your brand vision with business objectives and user needs.",
    },
  ]

  return (
    <section id="services" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 leading-tight text-balance">
            What I Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="group bg-card/70 dark:bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-300 animate-fadeInScale"
                  style={{ 
                    animationDelay: `${idx * 0.1}s`,
                    perspective: 1000 
                  }}
                  onMouseMove={(e) => {
                    const card = e.currentTarget as HTMLDivElement
                    const rect = card.getBoundingClientRect()
                    const x = (e.clientX - rect.left) / rect.width
                    const y = (e.clientY - rect.top) / rect.height
                    const rotateY = (x - 0.5) * 10
                    const rotateX = (0.5 - y) * 10
                    card.style.transform = `translateZ(0) scale(1.02)`
                    ;(card.firstElementChild as HTMLElement).style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget as HTMLDivElement
                    card.style.transform = ''
                    ;(card.firstElementChild as HTMLElement).style.transform = ''
                  }}
                >
                  <div className="p-8 h-full flex flex-col transition-transform duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
                    <div className="mt-6 pt-4 border-t border-border/20">
                      <span className="inline-flex items-center text-sm text-accent font-medium">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
