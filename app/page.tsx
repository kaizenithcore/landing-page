"use client"

import { useState } from "react"
import { ThemeProvider } from "@/lib/theme/theme-context"
import { LocaleProvider, useLocale } from "@/lib/i18n/locale-context"
import { Navigation } from "@/components/kaizenith/navigation"
import { Hero } from "@/components/kaizenith/hero"
import { IntroSection } from "@/components/kaizenith/intro"
import { LeadMagnet } from "@/components/kaizenith/lead-magnet"
import { LeadMagnetPreview } from "@/components/kaizenith/lead-magnet-preview"
import { Roadmap } from "@/components/kaizenith/roadmap"
import { ProjectsSection } from "@/components/kaizenith/projects"
import { PrinciplesSection } from "@/components/kaizenith/principles"
import { SignupForm } from "@/components/kaizenith/signup-form"
import { SignupModal } from "@/components/kaizenith/signup-modal"
import { Footer } from "@/components/kaizenith/footer"
import { CTABanner } from "@/components/kaizenith/cta-banner"
import { getLeadMagnetData } from "@/lib/lead-magnets"

function HomeContent() {
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  const { locale } = useLocale()

  const openSignup = () => setIsSignupOpen(true)
  const closeSignup = () => setIsSignupOpen(false)
  
  // Get lead magnet data for the current locale
  // Change the key to switch between different lead magnets:
  // - 'errorsMarketing' -> 7 Errores Fatales del Marketing Indie
  // - 'ctasGamedev' -> 50 CTAs para Desarrolladores Indie
  // See /lib/lead-magnets.ts for all available lead magnets
  const leadMagnetData = getLeadMagnetData('ctasGamedev', locale)

  return (
    <>
      <Navigation onOpenSignup={openSignup} />

      <main>
        <Hero onOpenSignup={openSignup} />
        <IntroSection />
        
        {/* Lead Magnet Options:
            1. LeadMagnet: Opens signup modal (good for email capture)
            2. LeadMagnetPreview: Direct link to resource (good for preview/teaser)
            
            Both components accept the same 'data' prop for configuration.
            To switch lead magnets, change the key in getLeadMagnetData() above.
        */}
        {/* <LeadMagnet onOpenSignup={openSignup} data={leadMagnetData} /> */}
        <LeadMagnetPreview data={leadMagnetData} />
        
        <Roadmap />
        <ProjectsSection onOpenSignup={openSignup} />
        <PrinciplesSection />
        
        {/* Inline signup form */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SignupForm />
          </div>
        </section>

        <CTABanner />

      </main>

      <Footer />

      <SignupModal isOpen={isSignupOpen} onClose={closeSignup} />
    </>
  )
}

export default function Home() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <HomeContent />
      </LocaleProvider>
    </ThemeProvider>
  )
}
