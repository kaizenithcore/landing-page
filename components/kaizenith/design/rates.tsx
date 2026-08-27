"use client"

import { useState } from "react"
import { Check, ChevronDown, Star } from "lucide-react"
import { useLocale } from "@/lib/i18n/locale-context"

export function RatesSection() {
  const { t } = useLocale()
  const [alaCarteOpen, setAlaCarteOpen] = useState(false)

  const tiers = [
    { ...t.design.rates.tier1, recommended: false },
    { ...t.design.rates.tier2, recommended: true },
    { ...t.design.rates.tier3, recommended: false },
  ]

  return (
    <section id="rates" className="py-24 md:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display-vision)] font-semibold text-foreground">
            {t.design.rates.title}
          </h2>
          <p className="text-muted-foreground">{t.design.rates.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 items-start mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 rounded-2xl border flex flex-col gap-4 ${
                tier.recommended ? "bg-primary/5 border-primary/30 sm:-translate-y-2 shadow-lg" : "bg-card border-border"
              }`}
            >
              {tier.recommended && (
                <span className="self-start inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30">
                  <Star className="w-3 h-3 fill-current" />
                  {t.design.rates.recommendedLabel}
                </span>
              )}
              <div>
                <h3 className="font-semibold text-foreground">{tier.name}</h3>
                <p className="text-3xl font-extrabold text-foreground mt-1">{tier.price}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{tier.description}</p>
              <ul className="space-y-2 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* À la carte catalog, collapsed by default */}
        <div className="max-w-2xl mx-auto rounded-2xl border border-border bg-card overflow-hidden">
          <button
            onClick={() => setAlaCarteOpen((prev) => !prev)}
            className="w-full p-5 flex items-center justify-between text-left hover:bg-card/80 transition-colors"
            aria-expanded={alaCarteOpen}
          >
            <span className="font-semibold text-foreground">{t.design.rates.alaCarteTitle}</span>
            <span className="flex items-center gap-2 text-sm text-primary font-medium">
              {t.design.rates.alaCarteToggle}
              <ChevronDown className={`w-4 h-4 transition-transform ${alaCarteOpen ? "rotate-180" : ""}`} />
            </span>
          </button>

          {alaCarteOpen && (
            <div className="px-5 pb-5 border-t border-border pt-4">
              <ul className="divide-y divide-border">
                {t.design.rates.alaCarteItems.map((item) => (
                  <li key={item.name} className="flex items-center justify-between py-2.5 text-sm">
                    <span className="text-foreground/80">{item.name}</span>
                    <span className="font-medium text-foreground whitespace-nowrap ml-4">{item.price}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">{t.design.rates.alaCarteNote}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
