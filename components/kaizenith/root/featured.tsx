"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLocale } from "@/lib/i18n/locale-context"

export function FeaturedSection() {
  const { t } = useLocale()
  const f = t.root.featured

  const items = [
    { href: "/studio", image: "/images/GifGameplay1.gif", isGif: true, ...f.studio },
    { href: "/works", image: "/images/proyects/workspaceCaptura.png", isGif: false, ...f.works },
    { href: "/design", image: "/images/portfolio/zenkyu.png", isGif: false, ...f.design },
  ]

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">{f.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{f.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/30 hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="aspect-[4/3] relative bg-muted overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {item.isGif ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col">
                <p className="text-xs font-medium text-primary uppercase tracking-wider">{item.label}</p>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary pt-1">
                  {item.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
