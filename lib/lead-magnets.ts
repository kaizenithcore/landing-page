import type { LeadMagnetData } from "./types"

/**
 * Lead Magnet Configurations
 * 
 * Define your lead magnets here with their content and URLs.
 * These can be used with LeadMagnet and LeadMagnetPreview components.
 */

export const LEAD_MAGNETS = {
  errorsMarketing: {
    es: {
      badge: "Guía Gratuita",
      title: "7 Errores Fatales del Marketing Indie",
      description: "Los errores que hemos cometido (y visto repetirse). Directos, sin rodeos. Descárgala al unirte.",
      cta: "Obtener la guía",
      url: "/internal/errors-marketing"
    },
    en: {
      badge: "Free Guide",
      title: "7 Fatal Indie Marketing Mistakes",
      description: "Mistakes we've made (and seen repeated). Direct, no sugarcoating. Download when you join.",
      cta: "Get the guide",
      url: "/internal/errors-marketing"
    }
  },
  ctasGamedev: {
    es: {
      badge: "Recurso Gratuito",
      title: "50 CTAs para Desarrolladores Indie",
      description: "Llamadas a la acción específicas para videojuegos. Ganar seguidores, conseguir testers, y vender.",
      cta: "Ver las CTAs",
      url: "/internal/ctas-gamedev"
    },
    en: {
      badge: "Free Resource",
      title: "50 CTAs for Indie Developers",
      description: "Specific calls to action for video games. Gain followers, get testers, and sell.",
      cta: "View CTAs",
      url: "/internal/ctas-gamedev"
    }
  }
} as const

export type LeadMagnetKey = keyof typeof LEAD_MAGNETS

/**
 * Get lead magnet data by key and locale
 */
export function getLeadMagnetData(
  key: LeadMagnetKey,
  locale: "es" | "en"
): LeadMagnetData {
  return LEAD_MAGNETS[key][locale]
}
