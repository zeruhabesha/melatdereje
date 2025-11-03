"use client"

import React from "react"
import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function About() {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)
  const isVisible = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    const timer = setTimeout(() => setIsInView(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section 
      id="about" 
      className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 animate-blob animation-delay-6000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={container}
          className="relative"
        >
          <motion.span 
            variants={item}
            className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 border border-primary/20 shadow-sm"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/75 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            About Me
          </motion.span>
          
          <motion.h2 
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 mb-12 leading-tight"
          >
            Creating Spaces <span className="text-primary">That Tell</span> Stories
          </motion.h2>

          <motion.div 
            variants={container}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative"
          >
            <motion.div 
              variants={item}
              className="lg:col-span-7 space-y-6 bg-background/80 dark:bg-background/90 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-sm"
            >
              <div className="space-y-6">
                <motion.p 
                  variants={item}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  With over 2 years of experience in architecture and digital design, I've developed a unique approach
                  that merges physical and digital design principles. My passion lies in creating environments and
                  experiences that are both visually stunning and functionally brilliant.
                </motion.p>
                <motion.p 
                  variants={item}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  I believe great design is about understanding people, their needs, and their aspirations. Whether
                  designing a building or an interface, I focus on creating intuitive, beautiful solutions that enhance
                  everyday life.
                </motion.p>
              </div>

              <motion.div 
                variants={item}
                className="space-y-3 pt-6 mt-6 border-t border-border/30"
              >
                <div className="flex items-center gap-2">
                  <div className="h-px w-6 bg-gradient-to-r from-primary to-primary/0"></div>
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">Education</h4>
                </div>
                <div className="pl-2">
                  <p className="font-medium text-foreground">Architecture & Design Degree</p>
                  <p className="text-sm text-muted-foreground">Unity University, Addis Ababa, Ethiopia</p>
                </div>
              </motion.div>

              <motion.div 
                variants={item}
                className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-border/30"
              >
                <div className="flex items-center gap-3 group">
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">Architectural Design</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform" />
                  <span className="text-foreground font-medium group-hover:text-accent transition-colors">UI/UX Design</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-2 h-2 bg-secondary rounded-full group-hover:scale-125 transition-transform" />
                  <span className="text-foreground font-medium group-hover:text-secondary transition-colors">Digital Strategy</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">Brand Experience</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform" />
                  <span className="text-foreground font-medium group-hover:text-accent transition-colors">Graphics Design</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={item}
              className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-2xl border border-border/50 bg-background/80 dark:bg-background/90 backdrop-blur-sm hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/20 transition-all duration-300 h-full flex flex-col"
              >
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white">
                  01
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  Architecture
                </h3>
                <p className="text-muted-foreground mb-4">
                  Designing sustainable and innovative structures that blend with their environment
                </p>
                <div className="mt-auto pt-4 border-t border-border/20">
                  <span className="inline-flex items-center text-sm text-primary font-medium">
                    Explore my work
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-2xl border border-border/50 bg-background/80 dark:bg-background/90 backdrop-blur-sm hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 dark:hover:shadow-accent/20 transition-all duration-300 h-full flex flex-col"
              >
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-white">
                  02
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  Digital Design
                </h3>
                <p className="text-muted-foreground mb-4">
                  Creating user-centered interfaces that are beautiful, intuitive, and accessible
                </p>
                <div className="mt-auto pt-4 border-t border-border/20">
                  <span className="inline-flex items-center text-sm text-accent font-medium">
                    View projects
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-2xl border border-border/50 bg-background/80 dark:bg-background/90 backdrop-blur-sm hover:border-secondary/60 hover:shadow-lg hover:shadow-secondary/10 dark:hover:shadow-secondary/20 transition-all duration-300 h-full flex flex-col"
              >
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-white">
                  03
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                  Strategy
                </h3>
                <p className="text-muted-foreground mb-4">
                  Developing comprehensive design strategies aligned with business goals
                </p>
                <div className="mt-auto pt-4 border-t border-border/20">
                  <span className="inline-flex items-center text-sm text-secondary font-medium">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
