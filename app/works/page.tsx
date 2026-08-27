"use client"

import { useLocale } from "@/lib/i18n/locale-context"
import { SiteNav } from "@/components/kaizenith/site-nav"
import { SiteFooter } from "@/components/kaizenith/site-footer"
import { Hero } from "@/components/kaizenith/works/hero"
import { TrustSection } from "@/components/kaizenith/works/trust"
import { ServicesSection } from "@/components/kaizenith/works/services"
import { CatalogSection } from "@/components/kaizenith/works/catalog"
import { ProcessSection } from "@/components/kaizenith/works/process"
import { ContactSection } from "@/components/kaizenith/contact-section"

export default function WorksPage() {
  const { t } = useLocale()

  return (
    <>
      <SiteNav area="works" />

      <main>
        <Hero />
        <TrustSection />
        <ServicesSection />
        <CatalogSection />
        <ProcessSection />
        <ContactSection area="works" />
      </main>

      <SiteFooter area="works" tagline={t.works.footer.tagline} />
    </>
  )
}
