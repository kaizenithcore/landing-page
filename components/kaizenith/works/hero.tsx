"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n/locale-context"

export function Hero() {
  const { t } = useLocale()

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h1 className="text-display-caps text-foreground text-balance">{t.works.hero.title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {t.works.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Button
            size="lg"
            asChild
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all"
          >
            <a href="#contact" className="flex items-center gap-2">
              {t.works.hero.ctaPrimary}
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="rounded-full bg-transparent">
            <a href="#projects">{t.works.hero.ctaSecondary}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
