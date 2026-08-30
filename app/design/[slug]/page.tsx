import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { designProjects, getDesignProject } from "@/lib/design-projects"
import { translations } from "@/lib/i18n/translations"
import { ProjectDetail } from "@/components/kaizenith/design/project-detail"

export function generateStaticParams() {
  return designProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const meta = getDesignProject(slug)
  if (!meta) return {}

  const item = translations.es.design.portfolio.items[meta.id]
  const title = `${item.client} — ${item.category} | Kaizenith Vision`
  const description = item.description

  return {
    title,
    description,
    alternates: {
      canonical: `https://kaizenith.es/design/${meta.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://kaizenith.es/design/${meta.slug}`,
      images: [{ url: meta.image, alt: `${item.client} — ${item.category}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [meta.image],
    },
  }
}

export default async function DesignProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const meta = getDesignProject(slug)
  if (!meta) notFound()

  const item = translations.es.design.portfolio.items[meta.id]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${item.client} — ${item.category}`,
    description: item.description,
    image: `https://kaizenith.es${meta.image}`,
    creator: {
      "@type": "Organization",
      name: "Kaizenith Vision",
      url: "https://kaizenith.es/design",
    },
    about: item.category,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectDetail id={meta.id} />
    </>
  )
}
