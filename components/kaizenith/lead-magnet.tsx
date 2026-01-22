"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n/locale-context"

interface LeadMagnetProps {
  onOpenSignup: () => void
}

export function LeadMagnet({ onOpenSignup }: LeadMagnetProps) {
  const { t } = useLocale()

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 md:p-12">
          {/* Decorative diagonal pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
              <path d="M0 100 L50 50 L100 100" stroke="#854CAD" strokeWidth="2" />
              <path d="M0 80 L50 30 L100 80" stroke="#854CAD" strokeWidth="2" />
              <path d="M0 60 L50 10 L100 60" stroke="#854CAD" strokeWidth="2" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            {/* Icon */}
            <div className="shrink-0 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <Download className="w-8 h-8 text-primary" />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-primary font-medium">{t.leadMagnet.badge}</span>
                <h3 className="text-xl md:text-2xl font-bold text-foreground text-balance">
                  {t.leadMagnet.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.leadMagnet.description}
                </p>
              </div>
            </div>

            {/* CTA */}
            <Button
              onClick={onOpenSignup}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              {t.leadMagnet.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
