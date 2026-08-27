"use client"

import { useLocale } from "@/lib/i18n/locale-context"

export function ClientsSection() {
  const { t } = useLocale()
  const names = t.design.clients.names

  return (
    <section className="py-16 bg-card/30 border-y border-border overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider text-center">
          {t.design.clients.label}
        </p>
      </div>

      {/* Infinite marquee — content duplicated for a seamless loop, pauses on hover */}
      <div className="marquee-pause relative">
        <div className="flex w-max animate-marquee">
          {[...names, ...names].map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="text-lg font-semibold text-foreground/50 whitespace-nowrap px-8"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
