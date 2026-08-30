import type { MetadataRoute } from "next"
import { designProjects } from "@/lib/design-projects"
import { blogPosts } from "@/lib/blog/posts"

const BASE_URL = "https://kaizenith.es"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/studio`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/works`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/design`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cookies`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/support`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/soporte`, changeFrequency: "monthly", priority: 0.4 },
  ]

  const designProjectRoutes: MetadataRoute.Sitemap = designProjects.map((project) => ({
    url: `${BASE_URL}/design/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  const blogPostRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...designProjectRoutes, ...blogPostRoutes]
}
