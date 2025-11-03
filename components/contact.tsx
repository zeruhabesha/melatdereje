"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Mail, Linkedin, Instagram, ArrowUp, Send } from "lucide-react"
import { sendEmail } from "@/app/actions"

export default function Contact() {
  const [isInView, setIsInView] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsInView(true), 500)
    
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socials = [
    { icon: Mail, href: "mailto:Derejemelat28@gmail.com", label: "Email" },
    { icon: Send, href: "https://t.me/Futureplanet1", label: "Telegram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ]

  const contactDetails = [
    { label: "Phone", value: "+251 92 939 7215" },
    { label: "Email", value: "Derejemelat28@gmail.com" },
    { label: "Telegram", value: "@Futureplanet1" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const result = await sendEmail(formData)
      if (result.success) {
        setSubmitMessage("✓ Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitMessage(""), 5000)
      } else {
        setSubmitMessage("✗ Failed to send. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("✗ An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 px-6 mt-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight text-balance">
            Let's Create Something Beautiful Together
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-6 py-3 bg-card/50 dark:bg-card/30 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-6 py-3 bg-card/50 dark:bg-card/30 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-6 py-3 bg-card/50 dark:bg-card/30 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {submitMessage && (
                  <p
                    className={`text-center font-semibold ${submitMessage.includes("✓") ? "text-green-600" : "text-red-600"}`}
                  >
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new projects and design challenges. Whether you have a question
                  or just want to say hello, feel free to get in touch!
                </p>
              </div>

              <div className="space-y-4">
                {contactDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    {detail.label === "Email" ? (
                      <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                    ) : detail.label === "Telegram" ? (
                      <Send className="text-primary mt-1 flex-shrink-0" size={24} />
                    ) : (
                      <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                    )}
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{detail.label}</h4>
                      <p className="text-primary hover:text-accent transition-colors cursor-pointer">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socials.map((social, idx) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={idx}
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-card/50 dark:bg-card/30 border border-border rounded-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
                      >
                        <Icon size={20} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row items-center justify-center pt-12 pb-4 border-t border-border">
            <p className="text-sm text-muted-foreground">© 2025 MELAT DEREJE. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-accent text-white rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-110 ${
          showScrollButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </section>
  )
}
