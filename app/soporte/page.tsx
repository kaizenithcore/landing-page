"use client"

import { Navigation } from "@/components/kaizenith/navigation"
import { Footer } from "@/components/kaizenith/footer"
import { useLocale } from "@/lib/i18n/locale-context"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { SUPPORT_EMAIL } from "@/lib/site-links"

export default function SoportePage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenSignup={() => {}} />

      <main className="pt-24">
        <section className="py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              {t.supportContact.title}
            </h1>
            <p className="text-xl text-muted-foreground">{t.supportContact.subtitle}</p>
            <p className="text-base text-muted-foreground leading-relaxed">
              {t.supportContact.description}
            </p>

            <div className="pt-4 flex flex-col items-center gap-4">
              <Button size="lg" asChild className="rounded-full px-8">
                <a href={`mailto:${SUPPORT_EMAIL}`} className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {t.supportContact.emailCta}
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">{t.supportContact.note}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
