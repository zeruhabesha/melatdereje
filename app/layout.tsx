import type React from "react"
import type { Metadata } from "next"
import { GeistSans, GeistMono } from 'geist/font'
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geistSans = GeistSans
const _geistMono = GeistMono

export const metadata: Metadata = {
  title: "MELAT DEREJE - Architect & UI Designer",
  description:
    "Portfolio of MELAT DEREJE, an architect and UI/UX designer showcasing innovative architectural designs and digital experiences.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="interactive-bg" />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
