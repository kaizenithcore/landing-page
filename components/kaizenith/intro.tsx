"use client"

import React from "react"
import { Lightbulb, LineChart, Zap } from "lucide-react"
import { useLocale } from "@/lib/i18n/locale-context"

export function IntroSection() {
  const { t } = useLocale()

  return (
    <section id="about" className="py-24 md:py-32 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Philosophy */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
              {t.intro.title}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t.intro.p1}</p>
              <p>{t.intro.p2}</p>
              <p>{t.intro.p3}</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-6">
            <BenefitCard
              icon={<Lightbulb className="w-5 h-5" />}
              title={t.intro.buildLogs}
              description={t.intro.buildLogsDesc}
            />
            <BenefitCard
              icon={<LineChart className="w-5 h-5" />}
              title={t.intro.realNumbers}
              description={t.intro.realNumbersDesc}
            />
            <BenefitCard
              icon={<Zap className="w-5 h-5" />}
              title={t.intro.earlyAccess}
              description={t.intro.earlyAccessDesc}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl bg-card border border-border">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
