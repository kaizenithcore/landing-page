"use client"

import { useRef, useState } from "react"
import { ExternalLink, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n/locale-context"
import { STEAM_WISHLIST_URL } from "@/lib/site-links"

export function Hero() {
  const { t } = useLocale()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleVideo = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Main headline */}
            <div className="space-y-5">
              <h1 className="text-display-arcade text-foreground text-balance">{t.studio.hero.title}</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {t.studio.hero.subtitle}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all text-base px-8"
              >
                <a
                  href={STEAM_WISHLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  {t.studio.hero.ctaPrimary}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full border-border text-foreground hover:bg-secondary transition-all bg-transparent"
              >
                <a href="#roadmap">{t.studio.hero.ctaSecondary}</a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">{t.studio.hero.trust}</p>
          </div>

          {/* Hero visual - Ping Pong Mate trailer */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-card/80">
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <span className="ml-3 text-xs text-muted-foreground">Ping Pong Mate</span>
              </div>
              <div className="relative">
                <video
                  ref={videoRef}
                  src="/images/trailerPC2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-auto object-cover"
                />
                <button
                  type="button"
                  onClick={toggleVideo}
                  aria-label={isPlaying ? t.studio.hero.pauseVideo : t.studio.hero.playVideo}
                  className="absolute bottom-3 right-3 flex items-center justify-center w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
