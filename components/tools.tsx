"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type Tool = {
  name: string
  icon: string
  category: string
}

export default function Tools() {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsInView(true), 600)
    return () => clearTimeout(timer)
  }, [])

  const tools: Tool[] = [
    { name: 'Autodesk Revit', icon: '📐', category: 'Architecture' },
    { name: 'Autodesk AutoCAD', icon: '✏️', category: 'Architecture' },
    { name: 'Urban Planner', icon: '🏙️', category: 'Architecture' },
    { name: 'Adobe Illustrator', icon: '🎨', category: 'Design' },
    { name: 'Adobe Photoshop', icon: '🖌️', category: 'Design' },
    { name: 'Chaos Enscape', icon: '🏗️', category: '3D Visualization' },
    { name: 'Lumion', icon: '🌆', category: '3D Visualization' },
    { name: 'Figma', icon: '🖥️', category: 'UI/UX' },
  ]

  const categories = [...new Set(tools.map(tool => tool.category))]

  return (
    <section id="tools" className="relative py-12 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-8 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground inline-flex items-center gap-3">
            <span className="h-0.5 w-8 bg-primary"></span>
            Tools & <span className="text-primary">Technologies</span>
            <span className="h-0.5 w-8 bg-primary"></span>
          </h2>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  delay: 0.05 * index,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border hover:border-primary/50 hover:shadow-sm hover:shadow-primary/10 transition-all"
                title={tool.name}
              >
                <span className="text-lg">{tool.icon}</span>
                <span className="text-sm font-medium whitespace-nowrap">
                  {tool.name.split(' ').pop()}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
