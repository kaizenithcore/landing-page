"use client"

import { useLocale } from "@/lib/i18n/locale-context"
import { SiteNav } from "@/components/kaizenith/site-nav"
import { SiteFooter } from "@/components/kaizenith/site-footer"
import { Hero } from "@/components/kaizenith/studio/hero"
import { IntroSection } from "@/components/kaizenith/studio/intro"
// "El Sistema" (studio-wide roadmap) is deactivated in favor of GameRoadmap below.
// Kept for reference/reactivation, not deleted.
// import { Roadmap } from "@/components/kaizenith/studio/roadmap"
import { GameRoadmap } from "@/components/kaizenith/studio/game-roadmap"
import { Trajectory } from "@/components/kaizenith/studio/trajectory"
import { ProjectsSection } from "@/components/kaizenith/studio/projects"
import { CTABanner } from "@/components/kaizenith/studio/cta-banner"
import { ContactSection } from "@/components/kaizenith/contact-section"

export default function StudioPage() {
  const { t } = useLocale()

  return (
    <>
      <SiteNav area="studio" />

      <main>
        <Hero />
        <IntroSection />
        <GameRoadmap />
        <Trajectory />
        <ProjectsSection />
        <CTABanner />
        <ContactSection area="studio" />
      </main>

      <SiteFooter area="studio" tagline={t.studio.footer.tagline} />
    </>
  )
}
