"use client"

import { useEffect, useState } from "react"
import { ExternalLink, X } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Image from "next/image"

interface ProjectsProps {
  portfolioFilter: string
  setPortfolioFilter: (filter: string) => void
}

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  tags: string[]
}

export default function Projects({ portfolioFilter, setPortfolioFilter }: ProjectsProps) {
  const [isInView, setIsInView] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsInView(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent scrolling when modal is open
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'unset' // Re-enable scrolling
    // Small delay to allow the modal to close before resetting the selected project
    setTimeout(() => setSelectedProject(null), 300)
  }

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
      image: "/modern-luxury-residential-building-with-glass-and-.png",
      tags: ["Residential", "Sustainable", "Modern"],
    },
    {
      id: 4,
      title: "Community Cultural Center",
      category: "Architecture",
      description: "A vibrant community space designed to foster creativity, connection, and cultural exchange.",
      image: "/contemporary-cultural-center-building-architecture.png",
      tags: ["Community", "Cultural", "Public Space"],
    },
    {
      id: 5,
      title: "Urban Regeneration Project",
      category: "Architecture",
      description:
        "Transforming an abandoned industrial area into a mixed-use development with retail, offices, and residences.",
      image: "/urban-regeneration-modern-architecture-development.png",
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
      image: "/modern-high-rise-residential-tower-architecture.png",
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
                className="group bg-card/70 dark:bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-300 animate-fadeInScale"
                style={{ animationDelay: `${idx * 0.1}s`, perspective: 1000 }}
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
                <div 
                  className="relative h-64 bg-gradient-to-br from-primary/15 to-accent/15 overflow-hidden cursor-pointer will-change-transform transition-transform duration-300"
                  onClick={() => openModal(project)}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 bg-white/95 dark:bg-black/70 text-foreground p-3 rounded-full transition-all duration-300 hover:scale-110">
                      <ExternalLink size={20} />
                    </div>
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

      {/* Enhanced Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[calc(100%-1rem)] sm:w-full max-w-6xl p-0 bg-white/95 dark:bg-[hsl(var(--card))]/95 rounded-xl shadow-2xl backdrop-blur border border-border/50">
          {selectedProject && (
            <div className="relative w-full h-full">
              {/* Accessible Title (visually hidden) */}
              <DialogTitle className="sr-only">
                {selectedProject.title} - Project Details
              </DialogTitle>
              <DialogDescription className="sr-only">
                {selectedProject.description}
              </DialogDescription>
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white hover:text-primary transition-all duration-300 transform hover:scale-110"
                aria-label="Close dialog"
              >
                <X size={28} />
              </button>
              
              {/* Image Container */}
              <div className="relative w-full h-[85vh] max-h-[90vh] overflow-hidden rounded-xl bg-black/5 dark:bg-white/5">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={1600}
                  height={900}
                  className="w-full h-full object-contain p-4 md:p-8"
                  priority
                  quality={100}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center',
                  }}
                />
                
                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 pt-12">
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h3>
                    <p className="text-white/80 text-sm md:text-base">{selectedProject.category}</p>
                    
                    {/* Project Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {selectedProject.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs md:text-sm px-3 py-1 bg-primary/20 text-primary rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows (Placeholder for future implementation) */}
              {/* <button className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all z-10">
                <ChevronLeft size={24} />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all z-10">
                <ChevronRight size={24} />
              </button> */}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
