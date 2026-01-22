"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { KaizenithLogo } from "./logo"
import { useLocale } from "@/lib/i18n/locale-context"

interface HeroProps {
  onOpenSignup: () => void
}

export function Hero({ onOpenSignup }: HeroProps) {
  const { t, locale } = useLocale()
  const [showThankYou, setShowThankYou] = useState(false)

  function handleSignupClick() {
    setShowThankYou(true)
    onOpenSignup() // Uncomment when newsletter is ready
  }

  // Localized "who this is for" content
  const forYouContent = locale === "es" ? {
    forTitle: "Esto es para ti si:",
    forItems: ["Quieres entender qué funciona (y qué no) en desarrollo indie", "Prefieres datos sobre corazonadas", "Te interesa el proceso, no solo el resultado"],
    notForTitle: "No es para ti si:",
    notForItems: ["Buscas hacks o atajos rápidos", "Prefieres inspiración sobre información"],
  } : {
    forTitle: "This is for you if:",
    forItems: ["You want to understand what works (and what doesn't) in indie dev", "You prefer data over gut feelings", "You care about process, not just outcomes"],
    notForTitle: "Not for you if:",
    notForItems: ["You're looking for hacks or shortcuts", "You prefer inspiration over information"],
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      
      {/* Large background mark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none">
        <KaizenithLogo size="xl" className="scale-[3]" dontShowWordmark/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Main headline */}
            <div className="space-y-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] text-foreground text-balance">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleSignupClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all text-base px-8"
              >
                {t.hero.ctaCommingSoon}
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-border text-foreground hover:bg-secondary transition-all bg-transparent"
              >
                <a href="#roadmap">{t.hero.ctaSecondary}</a>
              </Button>
            </div>

            {/* Thank you message (shown after click) */}
            {showThankYou && (
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm text-foreground">{t.hero.thankYou}</p>
              </div>
            )}

            {/* Trust badges */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{t.hero.noSpam}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{t.hero.unsubscribe}</span>
              </div>
            </div>
          </div>

          {/* Hero visual - Who this is for */}
          <div className="hidden lg:block">
            <div className="space-y-6">
              {/* For you */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{forYouContent.forTitle}</h3>
                <ul className="space-y-3">
                  {forYouContent.forItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not for you */}
              <div className="p-6 rounded-xl bg-card/50 border border-border/50">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">{forYouContent.notForTitle}</h3>
                <ul className="space-y-3">
                  {forYouContent.notForItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
