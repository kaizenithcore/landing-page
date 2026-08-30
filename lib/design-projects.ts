import type { TranslationKeys } from "@/lib/i18n/translations"

export type DesignProjectId = keyof TranslationKeys["design"]["portfolio"]["items"]

export interface DesignProjectMeta {
  slug: string
  id: DesignProjectId
  image: string
}

// Single source of truth for the Vision (design) portfolio's slugs and images.
// Translated copy (client, category, description) lives in lib/i18n/translations.ts
// under design.portfolio.items, keyed by `id`. Used by both the portfolio grid
// and the individual /design/[slug] project pages so they can't drift apart.
export const designProjects: DesignProjectMeta[] = [
  { slug: "seis-sentidos", id: "seisSentidos", image: "/images/portfolio/seis-sentidos.jpg" },
  { slug: "moratalaz", id: "moratalaz", image: "/images/portfolio/moratalaz.png" },
  { slug: "teresa-de-la-rosa", id: "teresaDeLaRosa", image: "/images/portfolio/teresa-de-la-rosa.jpg" },
  { slug: "aeda", id: "aeda", image: "/images/portfolio/aeda.png" },
  { slug: "mar-de-posibilidades", id: "marDePosibilidades", image: "/images/portfolio/mar-de-posibilidades.png" },
  { slug: "babilonia-world", id: "babiloniaWorld", image: "/images/portfolio/babilonia-world.png" },
  { slug: "maymol", id: "maymol", image: "/images/portfolio/maymol.jpg" },
  { slug: "graficas-illescas", id: "graficasIllescas", image: "/images/portfolio/graficas-illescas.jpg" },
  { slug: "zenkyu", id: "zenkyu", image: "/images/portfolio/zenkyu.png" },
  { slug: "carlos-sotomayor", id: "carlosSotomayor", image: "/images/portfolio/carlos-sotomayor.jpg" },
  { slug: "ayto-grinon", id: "aytoGrinon", image: "/images/portfolio/ayto-grinon.jpg" },
  { slug: "anthique", id: "anthique", image: "/images/portfolio/antique.jpg" },
  { slug: "reiki-mille-grazie", id: "reikiMilleGrazie", image: "/images/portfolio/reikimillegrazie.jpg" },
  { slug: "danzante", id: "danzante", image: "/images/portfolio/danzante.jpg" },
]

export function getDesignProject(slug: string): DesignProjectMeta | undefined {
  return designProjects.find((p) => p.slug === slug)
}
