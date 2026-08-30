import type { MetadataRoute } from "next"

const BASE_URL = "https://kaizenith.es"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/internal/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
