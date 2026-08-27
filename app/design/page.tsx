"use client"

import { useLocale } from "@/lib/i18n/locale-context"
import { SiteNav } from "@/components/kaizenith/site-nav"
import { SiteFooter } from "@/components/kaizenith/site-footer"
import { Hero } from "@/components/kaizenith/design/hero"
import { TrustSection } from "@/components/kaizenith/design/trust"
import { ServicesSection } from "@/components/kaizenith/design/services"
import { PortfolioSection } from "@/components/kaizenith/design/portfolio"
import { ClientsSection } from "@/components/kaizenith/design/clients"
import { ObjectionSection } from "@/components/kaizenith/design/objection"
import { RatesSection } from "@/components/kaizenith/design/rates"
import { ProcessSection } from "@/components/kaizenith/design/process"
import { ContactSection } from "@/components/kaizenith/contact-section"

export default function DesignPage() {
  const { t } = useLocale()

  return (
    <>
      <SiteNav area="design" />

      <main>
        <Hero />
        <TrustSection />
        <ServicesSection />
        <PortfolioSection />
        <ClientsSection />
        <ObjectionSection />
        <RatesSection />
        <ProcessSection />
        <ContactSection area="design" />
      </main>

      <SiteFooter area="design" tagline={t.design.footer.tagline} />
    </>
  )
}
