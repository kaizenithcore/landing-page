import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { blogPosts, getBlogPost } from "@/lib/blog/posts"
import { BlogPostView } from "@/components/blog/blog-post-view"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  const title = `${post.title} | Kaizenith Blog`

  return {
    title,
    description: post.excerpt,
    alternates: {
      canonical: `https://kaizenith.es/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `https://kaizenith.es/blog/${post.slug}`,
      images: post.coverImage ? [{ url: post.coverImage, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    ...(post.coverImage ? { image: `https://kaizenith.es${post.coverImage}` } : {}),
    author: {
      "@type": "Organization",
      name: "Kaizenith",
      url: "https://kaizenith.es",
    },
    publisher: {
      "@type": "Organization",
      name: "Kaizenith",
      url: "https://kaizenith.es",
    },
    mainEntityOfPage: `https://kaizenith.es/blog/${post.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogPostView post={post} />
    </>
  )
}
