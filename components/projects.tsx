"use client"

import { useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"

interface ProjectsProps {
  portfolioFilter: string
  setPortfolioFilter: (filter: string) => void
}

export default function Projects({ portfolioFilter, setPortfolioFilter }: ProjectsProps) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsInView(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Brand Identity Package",
      category: "Graphics Design",
      description:
        "Complete brand identity design including logo, business cards, and brand guidelines for a modern startup.",
      image: "/placeholder.jpg",
      tags: ["Branding", "Logo Design", "Print"],
    },
    {
      id: 2,
      title: "Marketing Campaign Assets",
      category: "Graphics Design",
      description: "Series of social media graphics and digital ads for a product launch campaign.",
      image: "/placeholder.jpg",
      tags: ["Digital Marketing", "Social Media", "Advertising"],
    },
    {
      id: 3,
      title: "Luxury Residential Complex",
      category: "Architecture",
      description:
        "A contemporary residential development featuring sustainable design principles and modern aesthetics.",
      image: "/modern-luxury-residential-building-with-glass-and-.jpg",
      tags: ["Residential", "Sustainable", "Modern"],
    },
    {
      id: 4,
      title: "Community Cultural Center",
      category: "Architecture",
      description: "A vibrant community space designed to foster creativity, connection, and cultural exchange.",
      image: "/contemporary-cultural-center-building-architecture.jpg",
      tags: ["Community", "Cultural", "Public Space"],
    },
    {
      id: 5,
      title: "Urban Regeneration Project",
      category: "Architecture",
      description:
        "Transforming an abandoned industrial area into a mixed-use development with retail, offices, and residences.",
      image: "/urban-regeneration-modern-architecture-development.jpg",
      tags: ["Urban Design", "Mixed-Use", "Sustainable"],
    },
    {
      id: 6,
      title: "Modern Office Complex",
      category: "Architecture",
      description: "State-of-the-art office building with open collaborative spaces and green building certification.",
      image: "/modern-office-building.png",
      tags: ["Commercial", "Office", "Green Building"],
    },
    {
      id: 7,
      title: "Residential High-Rise Tower",
      category: "Architecture",
      description: "Iconic residential tower with panoramic views, luxury amenities, and sustainable infrastructure.",
      image: "/modern-high-rise-residential-tower-architecture.jpg",
      tags: ["Residential", "High-Rise", "Luxury"],
    },
    {
      id: 8,
      title: "Museum & Exhibition Space",
      category: "Architecture",
      description: "Contemporary museum building with innovative architectural design and flexible exhibition spaces.",
      image: "/modern-museum-architecture-design.jpg",
      tags: ["Cultural", "Exhibition", "Contemporary"],
    },
    {
      id: 9,
      title: "E-Commerce Platform Redesign",
      category: "UI/UX",
      description:
        "Complete redesign of a major e-commerce platform improving user experience and conversion rates by 45%.",
      image: "/modern-ecommerce-website-interface-design.jpg",
      tags: ["E-Commerce", "Web Design", "Responsive"],
    },
    {
      id: 10,
      title: "Mobile App Design System",
      category: "UI/UX",
      description: "Comprehensive design system for a fintech mobile application ensuring consistency and scalability.",
      image: "/fintech-mobile-app-design-interface.jpg",
      tags: ["Mobile", "Design System", "Fintech"],
    },
    {
      id: 11,
      title: "SaaS Dashboard Interface",
      category: "UI/UX",
      description: "Intuitive analytics dashboard for a SaaS platform with real-time data visualization and reporting.",
      image: "/analytics-dashboard-saas-interface-ui-design.jpg",
      tags: ["Dashboard", "SaaS", "Analytics"],
    },
  ]

  // Add Graphics Design to the filter options
  const filterOptions = ["all", "Architecture", "UI/UX", "Graphics Design"]
  
  const filteredProjects =
    portfolioFilter === "all"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === portfolioFilter.toLowerCase())

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight text-balance">
            Featured Projects
          </h2>

          <div className="flex flex-wrap gap-2 mb-8">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setPortfolioFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  portfolioFilter === filter
                    ? "bg-primary text-white"
                    : "bg-muted/50 hover:bg-muted"
                }`}
              >
                {filter === "all" ? "All Work" : filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="group bg-white/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 animate-fadeInScale"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 bg-white text-foreground p-3 rounded-full transition-all duration-300 hover:scale-110">
                      <ExternalLink size={24} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
