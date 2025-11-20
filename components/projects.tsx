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
  figmaLink?: string
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
      image: "/branding.jpg",
      tags: ["Branding", "Logo Design", "Print"],
      figmaLink: "https://docs.google.com/presentation/d/18MITO5zhmuucqTf87e4yU2qizyFo8hXGHU4Av5_lV78/edit?pli=1&slide=id.g36870283a6f_0_35#slide=id.g36870283a6f_0_35"

    },
    {
      id: 2,
      title: "Marketing Campaign Assets",
      category: "Graphics Design",
      description: "Series of social media graphics and digital ads for a product launch campaign.",
      image: "/printing.jpg",
      tags: ["Digital Marketing", "Social Media", "Advertising"],
      figmaLink: "https://docs.google.com/presentation/d/1lul0Ha70K3uyw9lAnQyAi1Kl9wzuUdCq_xwr-gdYwhc/edit?pli=1&slide=id.g368710a7a34_0_0#slide=id.g368710a7a34_0_0"

    },
    {
      id: 3,
      title: "High Rise Project",
      category: "Architecture",
      description:
        "A contemporary residential development featuring sustainable design principles and modern aesthetics.",
      image: "/modern-high-rise-residential-tower-architecture.png",
      tags: ["Residential", "High-Rise", "Modern"],
    },
    {
      id: 4,
      title: "Residential House",
      category: "Architecture",
      description: "A beautiful single-family residence with modern design and sustainable features.",
      image: "/modern-luxury-residential-building-with-glass-and-.png",
      tags: ["Residential", "House", "Modern"],
    },
    {
      id: 5,
      title: "Residential House",
      category: "Architecture",
      description:
        "A modern single-family home featuring sustainable design, natural light, and seamless indoor-outdoor living spaces.",
      image: "/contemporary-cultural-center-building-architecture.png",
      tags: ["Residential", "House", "Modern"],
    },
    {
      id: 6,
      title: "Modern Office Complex",
      category: "Architecture",
      description: "State-of-the-art office building with open collaborative spaces and green building certification.",
      image: "/modernOffice.jpeg",
      tags: ["Commercial", "Office", "Green Building"],
    },
    {
      id: 7,
      title: "Indigenous Knowledge Development Center",
      category: "Architecture",
      description: "A cultural and educational hub designed to preserve and promote indigenous knowledge and traditions through innovative architectural design.",
      image: "/modern-museum-architecture-design.png",
      tags: ["Cultural", "Education", "Community"],
    },
    {
      id: 8,
      title: "Museum & Exhibition Space",
      category: "Architecture",
      description: "Contemporary museum building with innovative architectural design and flexible exhibition spaces.",
      image: "/contemporary-cultural-center-building-architecture1.jpg",
      tags: ["Cultural", "Exhibition", "Contemporary"],
    },
    {
      id: 9,
      title: "Awdamet Perfume Web Design",
      category: "UI/UX",
      description:
        "Elegant and modern web design for Awdamet Perfume, focusing on luxury aesthetics and seamless user experience.",
      image: "/modern-ecommerce-website-interface-design.jpg",
      tags: ["E-Commerce", "Luxury Brand", "Web Design"],
      figmaLink: "https://www.figma.com/design/KxIHbb2NXYR0tRibcbcjZ9/Untitled?node-id=0-1&p=f&t=nsS58onMMLIxTxqM-0"
    },
    {
      id: 10,
      title: "Mereja Tech Mobile App Design System",
      category: "UI/UX",
      description: "Comprehensive design system for a Mereja Tech mobile application ensuring consistency and scalability.",
      image: "/merejaTech.jpg",
      tags: ["Mobile", "Design System", "Fintech"],
      figmaLink: "https://www.figma.com/design/pBlVG4fUhqlMqElR8cA9tK/Meregatech?node-id=0-1&p=f&t=egg4NHSAwwRFw0ZP-0"
    },
    {
      id: 11,
      title: "Medical Jobs portal platform Mobile App Design System",
      category: "UI/UX",
      description: "Comprehensive design system for a medical Jobs portal platform mobile application ensuring consistency and scalability.",
      image: "/medical.jpg",
      tags: ["Mobile", "Design System", "Fintech"],
      figmaLink: "https://www.figma.com/design/lfqgob86I6iq3m6pcDrLa6/Health-App?node-id=0-1&p=f&t=SXwRRVosOlHZNkcz-0"
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
                  onClick={() => {
                    if (project.figmaLink) {
                      window.open(project.figmaLink, "_blank", "noopener,noreferrer")
                    } else {
                      openModal(project)
                    }
                  }}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
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
                  quality={85}
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
