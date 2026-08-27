"use client"

import { useLocale } from "@/lib/i18n/locale-context"
import { SiteNav } from "@/components/kaizenith/site-nav"
import { SiteFooter } from "@/components/kaizenith/site-footer"
import { Hero } from "@/components/kaizenith/root/hero"
import { WhyUsSection } from "@/components/kaizenith/root/why-us"
import { FeaturedSection } from "@/components/kaizenith/root/featured"
import { AboutSection } from "@/components/kaizenith/root/about"
import { ContactSection } from "@/components/kaizenith/contact-section"

export default function Home() {
  const { t } = useLocale()

  return (
    <>
      <SiteNav area="root" />

      <main>
        <Hero />
        <WhyUsSection />
        <FeaturedSection />
        <AboutSection />
        <ContactSection area="root" />
      </main>

      <SiteFooter area="root" tagline={t.root.footer.tagline} />
    </>
  )
}
