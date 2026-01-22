"use client"

import { useState, useEffect } from "react"
import { KaizenithLogo } from "./logo"
import { Button } from "@/components/ui/button"
import { SettingsToggles } from "./settings-toggle"
import { useLocale } from "@/lib/i18n/locale-context"

interface NavigationProps {
  onOpenSignup: () => void
}

export function Navigation({ onOpenSignup }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLocale()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="focus-visible-ring rounded-lg" aria-label="Kaizenith home">
            <KaizenithLogo size="sm" dontShowWordmark/>
          </a>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#roadmap"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible-ring rounded px-2 py-1 uppercase tracking-wider"
            >
              {t.nav.roadmap}
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible-ring rounded px-2 py-1 uppercase tracking-wider"
            >
              {t.nav.about}
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible-ring rounded px-2 py-1 uppercase tracking-wider"
            >
              {t.nav.projects}
            </a>
          </div>

          {/* Right side: Settings + CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex">
              <SettingsToggles />
            </div>
            {/* <Button
              onClick={onOpenSignup}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
            >
              {t.nav.joinBuild}
            </Button> */}
          </div>
        </div>
      </nav>
    </header>
  )
}
