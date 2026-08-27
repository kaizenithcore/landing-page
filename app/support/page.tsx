"use client"

import { SiteNav } from "@/components/kaizenith/site-nav"
import { SiteFooter } from "@/components/kaizenith/site-footer"
import { useLocale } from "@/lib/i18n/locale-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function SupportPage() {
  const { t } = useLocale()
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteNav area="root" />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                {t.affiliate.hero.headline}
              </h1>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                {t.affiliate.hero.subheadline}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {t.affiliate.hero.intro}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                {/* <Button 
                  size="lg" 
                  onClick={() => scrollToSection("recommended-tools")}
                  className="w-full sm:w-auto"
                >
                  {t.affiliate.hero.ctaPrimary}
                </Button> */}
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("how-it-works")}
                  className="w-full sm:w-auto"
                >
                  {t.affiliate.hero.ctaSecondary}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              {t.affiliate.why.title}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t.affiliate.why.p1}</p>
              <p>{t.affiliate.why.p2}</p>
              <p>{t.affiliate.why.p3}</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              {t.affiliate.how.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-4">
                    1
                  </div>
                  <CardTitle className="text-lg">{t.affiliate.how.step1Title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {t.affiliate.how.step1Desc}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-4">
                    2
                  </div>
                  <CardTitle className="text-lg">{t.affiliate.how.step2Title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {t.affiliate.how.step2Desc}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-4">
                    3
                  </div>
                  <CardTitle className="text-lg">{t.affiliate.how.step3Title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {t.affiliate.how.step3Desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <p className="text-sm text-center text-muted-foreground italic">
              {t.affiliate.how.note}
            </p>
          </div>
        </section>

        {/* What You'll Find Section */}
        <section id="recommended-tools" className="py-16 md:py-24 bg-card/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              {t.affiliate.what.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">
              {t.affiliate.what.intro}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                t.affiliate.what.item1,
                t.affiliate.what.item2,
                t.affiliate.what.item3,
                t.affiliate.what.item4,
                t.affiliate.what.item5,
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-card border border-border flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-center text-muted-foreground">
              {t.affiliate.what.footer}
            </p>

            {/* Placeholder for product grid */}
            {/* <div className="mt-12 p-8 rounded-xl border-2 border-dashed border-border bg-card/50">
              <p className="text-center text-muted-foreground">
                Curated product recommendations coming soon
              </p>
            </div> */}
          </div>
        </section>

        {/* Transparency Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              {t.affiliate.transparency.title}
            </h2>

            <div className="space-y-4 mb-12">
              {[
                t.affiliate.transparency.disclosure,
                t.affiliate.transparency.noPaidReviews,
                t.affiliate.transparency.noSponsored,
                t.affiliate.transparency.linksMarked,
                t.affiliate.transparency.editorial,
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-card border border-border flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {t.affiliate.transparency.faqTitle}
              </h3>

              {[
                { q: t.affiliate.transparency.faq1Q, a: t.affiliate.transparency.faq1A },
                { q: t.affiliate.transparency.faq2Q, a: t.affiliate.transparency.faq2A },
                { q: t.affiliate.transparency.faq3Q, a: t.affiliate.transparency.faq3A },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-card border border-border overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-card/80 transition-colors"
                  >
                    <span className="font-medium text-foreground">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        expandedFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 pb-4 text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alternative Support Section */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              {t.affiliate.alternatives.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">
              {t.affiliate.alternatives.intro}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                t.affiliate.alternatives.use,
                t.affiliate.alternatives.share,
                // t.affiliate.alternatives.newsletter,
                t.affiliate.alternatives.feedback,
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter area="root" tagline={t.root.footer.tagline} />
    </div>
  )
}
