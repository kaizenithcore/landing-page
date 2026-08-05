'use client'

import { useLocale } from '@/lib/i18n/locale-context'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { EyebrowBadge } from './eyebrow-badge'
import { STEAM_WISHLIST_URL, PATREON_URL, KOFI_URL } from '@/lib/site-links'

export function CTABanner() {
  const { t } = useLocale()

  return (
    <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient background, consistent with Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <EyebrowBadge>{t.hero.badge}</EyebrowBadge>
        </div>

        <h2 className="text-display text-foreground text-balance">{t.ctaBanner.headline}</h2>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t.ctaBanner.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          {/* Primary CTA - Steam Wishlist */}
          <Button
            size="lg"
            className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all text-base font-semibold px-8 py-6 sm:py-auto"
            asChild
          >
            <a
              href={STEAM_WISHLIST_URL}
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
            className="w-full sm:w-auto rounded-full border border-border text-foreground hover:bg-secondary transition-all bg-transparent font-semibold px-8 py-6 sm:py-auto"
            asChild
          >
            <a
              href={PATREON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              {t.ctaBanner.ctaSecondary}
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>

          {/* Tertiary CTA - Ko-fi Support */}
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto rounded-full border border-border text-foreground hover:bg-secondary transition-all bg-transparent font-semibold px-8 py-6 sm:py-auto"
            asChild
          >
            <a
              href={KOFI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              {t.ctaBanner.ctaTertiary}
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
