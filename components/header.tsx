"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

interface HeaderProps {
  isLoaded: boolean
}

export default function Header({ isLoaded }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-secondary/40 backdrop-blur-md border-b border-border/70 dark:border-primary/30 transition-all duration-500 ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
        >
          MD
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 font-medium">
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden flex flex-col gap-1.5 relative w-6 h-6">
          <span
            className={`h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span className={`h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 dark:bg-secondary/50 backdrop-blur-md border-b border-border/70 dark:border-primary/30 md:hidden animate-slideInDown">
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium">
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
