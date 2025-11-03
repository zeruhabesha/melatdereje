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
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 leading-tight text-balance">
            What I Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="group bg-white/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:scale-105"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
