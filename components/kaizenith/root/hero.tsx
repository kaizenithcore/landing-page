"use client"

import { ArrowRight, Gamepad2, Code2, PenTool, type LucideIcon } from "lucide-react"
import { useLocale } from "@/lib/i18n/locale-context"
import { KaizenithLogo } from "../logo"

interface AreaCardData {
  name: string
  tagline: string
  cta: string
}

export function Hero() {
  const { t } = useLocale()

  const areas: Array<{ href: string; icon: LucideIcon; data: AreaCardData }> = [
    { href: "/studio", icon: Gamepad2, data: t.root.hero.areaStudio },
    { href: "/works", icon: Code2, data: t.root.hero.areaWorks },
    { href: "/design", icon: PenTool, data: t.root.hero.areaDesign },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />

      {/* Large faint background mark, DICE-style */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none">
        <KaizenithLogo size="xl" className="scale-[3]" dontShowWordmark />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <h1 className="text-display-xl text-foreground text-balance">{t.root.hero.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t.root.hero.subtitle}
          </p>
        </div>

        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          {t.root.hero.areasLabel}
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {areas.map(({ href, icon: Icon, data }) => (
            <a
              key={href}
              href={href}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 transition-all flex flex-col gap-5"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-2 flex-1">
                <h2 className="text-lg font-bold text-foreground">{data.name}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{data.tagline}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                {data.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
