"use client"

import { ArrowUp } from "lucide-react"

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/atcc-logo-n.png" alt="ATCC Logo" className="h-8 w-auto" />
              <span className="text-foreground font-bold text-lg tracking-tight">ATCC</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Afkar Al-TatWeer Contracting Co. Building Excellence Beyond Premium
              Quality. Delivering world-class construction solutions across
              Saudi Arabia.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} AFKAR ALBARMAJAH FOR IT. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            0096877520520 / 00966530041212 | Saudi Arabia
          </p>
        </div>
      </div>
    </footer>
  )
}
