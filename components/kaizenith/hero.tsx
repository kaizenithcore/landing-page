"use client"

import { ExternalLink, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EyebrowBadge } from "./eyebrow-badge"
import { useLocale } from "@/lib/i18n/locale-context"
import { STEAM_WISHLIST_URL } from "@/lib/site-links"

export function Hero() {
  const { t } = useLocale()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <EyebrowBadge>{t.hero.badge}</EyebrowBadge>

            {/* Main headline */}
            <div className="space-y-5">
              <h1 className="text-display text-foreground text-balance">{t.hero.title}</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all text-base px-8"
              >
                <a
                  href={STEAM_WISHLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  {t.hero.ctaPrimary}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full border-border text-foreground hover:bg-secondary transition-all bg-transparent"
              >
                <a href="#roadmap">{t.hero.ctaSecondary}</a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">{t.hero.trust}</p>
          </div>

          {/* Hero visual - Ping Pong Mate mockup */}
          <div className="hidden lg:block">
            {/* <PingPongMockup cosmeticsLabel={t.hero.cosmeticsLabel} /> */}
            {/* Game preview trailer */}
            <div className="relative rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-card/80">
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <span className="ml-3 text-xs text-muted-foreground">Ping Pong Mate</span>
              </div>
              <video 
                src="/images/trailerPC2.mp4"
                autoPlay
                loop
                muted
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PingPongMockup({ cosmeticsLabel }: { cosmeticsLabel: string }) {
  return (
    <div className="relative">
      {/* Soft glow behind the mockup */}
      <div className="absolute inset-0 scale-90 bg-primary/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 overflow-hidden">
        {/* Fake window chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-card/80">
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-3 text-xs text-muted-foreground">Ping Pong Mate</span>
        </div>

        {/* Play area */}
        <div className="relative h-72 bg-gradient-to-br from-primary/10 via-background to-primary/5 overflow-hidden">
          {/* Paddles */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 w-2 h-14 rounded-full bg-primary/70 animate-paddle-left" />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-2 h-14 rounded-full bg-primary/70 animate-paddle-right" />

          {/* Ball */}
          <div className="absolute left-1/2 top-1/2 w-3.5 h-3.5 -ml-[7px] -mt-[7px] rounded-full bg-primary shadow-[0_0_12px_2px_rgba(133,76,173,0.5)] animate-ping-pong-bounce" />

          {/* Center divider */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-border/60 [background-image:repeating-linear-gradient(to_bottom,var(--border)_0,var(--border)_8px,transparent_8px,transparent_16px)]" />
        </div>

        {/* Cosmetics teaser */}
        <div className="flex items-center gap-2 px-4 py-3 border-t border-border bg-card/80">
          <Sparkles className="w-4 h-4 text-primary shrink-0" />
          <span className="text-xs text-muted-foreground">{cosmeticsLabel}</span>
        </div>
      </div>
    </div>
  )
}
