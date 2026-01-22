"use client"

import { Button } from "@/components/ui/button"
import { KaizenithLogo } from "./logo"
import { useLocale } from "@/lib/i18n/locale-context"

interface HeroProps {
  onOpenSignup: () => void
}

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The Hero component is the main component of the landing page.
 * It displays a background gradient, a large background mark, and a hero section with a title, subtitle, CTA buttons, and trust badges.
 * The hero section is responsive and adapts to different screen sizes.
 * The component also uses the useLocale hook from the i18n library to get the translated text.
 */
/*******  95044587-18cd-4f58-a5bf-8a6b2b9d0054  *******/export function Hero({ onOpenSignup }: HeroProps) {
  const { t } = useLocale()

  var modalVisible = false;
  function handleSignupClick() {
    // onOpenSignup()
    const modal = document.getElementById("signup-modal")
    if (modalVisible === false && modal) {
      modal.classList.remove("hidden")
      console.log("Modal opened")
    }else if (modalVisible === true && modal) {
      modal.classList.add("hidden")
      console.log("Modal closed")
    }
    else console.error("Modal element not found")
    modalVisible = !modalVisible
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      
      {/* Large background mark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.04] pointer-events-none">
        <KaizenithLogo size="xl" className="scale-[3]" dontShowWordmark/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground text-balance">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {t.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleSignupClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all text-base px-8"
              >
                {/* {t.hero.ctaPrimary} */}
                {t.hero.ctaCommingSoon}
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-border text-foreground hover:bg-secondary transition-all bg-transparent"
              >
                <a href="#roadmap">{t.hero.ctaSecondary}</a>
              </Button>
            </div>

            {/* Modal button thank for interest on newsletter interest */}
            <div className="flex items-center hidden" id="signup-modal">
              <span className="text-sm text-muted-foreground">{t.hero.thankYou}</span>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{t.hero.noSpam}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{t.hero.unsubscribe}</span>
              </div>
            </div>
          </div>

          {/* Hero visual - Animated logo */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative animate-float">
              <KaizenithLogo 
                size="xxl" 
                dontShowWordmark 
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
