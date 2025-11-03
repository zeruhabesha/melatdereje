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
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] bg-white/98 dark:bg-[hsl(var(--card))]/98 backdrop-blur-md shadow-sm border-b border-border/50 transition-all duration-500 ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            >
              MD
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  item.href === '#' ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary/90 hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* CTA Button */}
            <a href="#contact" className="hidden md:block px-5 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 font-medium text-sm">
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="flex flex-col gap-1.5 w-6 h-6">
                <span className={`h-0.5 w-6 bg-current transition-all duration-300 transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-6 bg-current transition-all duration-300 transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-secondary shadow-lg rounded-lg mx-4 mt-2 py-2 animate-slideInDown">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className={`block px-4 py-2 rounded-md text-base font-medium ${
                    item.href === '#' 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-foreground hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-border/30">
                <button className="w-full px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-md font-medium text-sm">
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
