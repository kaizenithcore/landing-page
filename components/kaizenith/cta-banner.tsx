'use client'

import { useLocale } from '@/lib/i18n/locale-context'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

export function CTABanner() {
  const { t } = useLocale()

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 rounded-2xl opacity-60" />
      
      {/* Card container */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-8 sm:p-12 md:p-16 space-y-8">
          {/* Content */}
          <div className="space-y-4 text-center">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight">
              {t.ctaBanner.headline}
            </h2>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.ctaBanner.subheadline}
            </p>
          </div>

          {/* CTA Buttons - Mobile stacked, Desktop horizontal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            {/* Primary CTA - Steam Wishlist */}
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all text-base font-semibold px-8 py-6 sm:py-auto"
              asChild
            >
              <a
                href="https://steamcommunity.com/groups/kaizenith"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                {t.ctaBanner.ctaPrimary}
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>

            {/* Secondary CTA - Patreon Support */}
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border border-border text-foreground hover:bg-secondary transition-all bg-transparent font-semibold px-8 py-6 sm:py-auto"
              asChild
            >
              <a
                href="https://patreon.com/kaizenith"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                {t.ctaBanner.ctaSecondary}
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Footer note about Kickstarter */}
          <div className="pt-4 text-center">
            <p className="text-sm text-muted-foreground">
              {t.ctaBanner.kickstarterNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
