"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useLocale } from "@/lib/i18n/locale-context"
import { SiteNav } from "@/components/kaizenith/site-nav"
import { SiteFooter } from "@/components/kaizenith/site-footer"
import { PostBody } from "@/components/blog/post-body"
import { categoryHeadingClass } from "@/lib/blog/category-style"
import type { BlogPost } from "@/lib/blog/types"

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })
}

export function BlogPostView({ post }: { post: BlogPost }) {
  const { t } = useLocale()

  return (
    <>
      <SiteNav area="blog" />

      <main>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.blog.back}
          </Link>
        </div>

        <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <header className="space-y-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                {t.blog.categoryLabels[post.category]}
              </span>
              <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
            </div>
            <h1
              className={`text-3xl md:text-5xl text-foreground text-balance ${categoryHeadingClass(post.category)}`}
            >
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
          </header>

          {post.coverImage && (
            <div className="aspect-[16/9] relative rounded-2xl overflow-hidden border border-border bg-muted mb-10">
              <Image src={post.coverImage} alt={post.title} fill priority className="object-cover" />
            </div>
          )}

          <PostBody blocks={post.content} />

          <div className="mt-12 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-8 text-center space-y-3">
            <h2 className="font-semibold text-lg text-foreground text-balance">
              {t.design.portfolio.detail.ctaTitle}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              {t.design.portfolio.detail.ctaDescription}
            </p>
            <Link
              href="/design#contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              {t.design.portfolio.detail.ctaButton}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </main>

      <SiteFooter area="blog" tagline={t.blog.footerTagline} />
    </>
  )
}
