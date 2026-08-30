"use client"

import { useState, useEffect } from "react"
import { KaizenithLogo } from "./logo"
import { SettingsToggles } from "./settings-toggle"
import { useLocale } from "@/lib/i18n/locale-context"

export type Area = "root" | "studio" | "works" | "design" | "blog"

interface SiteNavProps {
  area: Area
}

export function SiteNav({ area }: SiteNavProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLocale()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const areas: Array<{ key: Area; href: string; label: string }> = [
    { key: "studio", href: "/studio", label: t.common.nav.studio },
    { key: "works", href: "/works", label: t.common.nav.works },
    { key: "design", href: "/design", label: t.common.nav.design },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <a href="/" className="focus-visible-ring rounded-lg shrink-0" aria-label="Kaizenith home">
            <KaizenithLogo size="md" orientation="horizontal" dontShowWordmark />
          </a>

          {/* Area switcher — always accessible, current area highlighted */}
          <div className="flex items-center gap-0.5 sm:gap-1 p-1 rounded-full border border-border bg-card/60 overflow-x-auto max-w-full">
            {areas.map((a) => (
              <a
                key={a.key}
                href={a.href}
                className={`px-2.5 sm:px-3.5 py-3 rounded-full text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-colors focus-visible-ring ${
                  area === a.key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {a.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href="/blog"
              className={`hidden sm:inline text-xs transition-colors focus-visible-ring rounded px-2 py-1 uppercase tracking-wider ${
                area === "blog" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.common.nav.blog}
            </a>
            <a
              href={area === "blog" ? "/#contact" : "#contact"}
              className="hidden sm:inline text-xs text-muted-foreground hover:text-foreground transition-colors focus-visible-ring rounded px-2 py-1 uppercase tracking-wider"
            >
              {t.common.nav.contact}
            </a>
            <SettingsToggles />
          </div>
        </div>
      </nav>
    </header>
  )
}
