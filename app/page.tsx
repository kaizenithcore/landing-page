"use client"

import { useState } from "react"
import { ThemeProvider } from "@/lib/theme/theme-context"
import { LocaleProvider } from "@/lib/i18n/locale-context"
import { Navigation } from "@/components/kaizenith/navigation"
import { Hero } from "@/components/kaizenith/hero"
import { IntroSection } from "@/components/kaizenith/intro"
import { LeadMagnet } from "@/components/kaizenith/lead-magnet"
import { Roadmap } from "@/components/kaizenith/roadmap"
import { ProjectsSection } from "@/components/kaizenith/projects"
import { PrinciplesSection } from "@/components/kaizenith/principles"
import { SignupForm } from "@/components/kaizenith/signup-form"
import { SignupModal } from "@/components/kaizenith/signup-modal"
import { Footer } from "@/components/kaizenith/footer"

function HomeContent() {
  const [isSignupOpen, setIsSignupOpen] = useState(false)

  const openSignup = () => setIsSignupOpen(true)
  const closeSignup = () => setIsSignupOpen(false)

  return (
    <>
      <Navigation onOpenSignup={openSignup} />

      <main>
        <Hero onOpenSignup={openSignup} />
        <IntroSection />
        {/* <LeadMagnet onOpenSignup={openSignup} /> */}
        <Roadmap />
        {/* <ProjectsSection /> */}
        <PrinciplesSection />
        
        {/* Inline signup form */}
        {/* <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SignupForm />
          </div>
        </section> */}
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
