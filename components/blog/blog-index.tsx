"use client"

import Link from "next/link"
import { useLocale } from "@/lib/i18n/locale-context"
import { SiteNav } from "@/components/kaizenith/site-nav"
import { SiteFooter } from "@/components/kaizenith/site-footer"
import { blogPosts } from "@/lib/blog/posts"
import { categoryHeadingClass } from "@/lib/blog/category-style"

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })
}

export function BlogIndex() {
  const { t } = useLocale()

  return (
    <>
      <SiteNav area="blog" />

      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance">
              {t.blog.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.blog.subtitle}</p>
          </div>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {t.blog.categoryLabels[post.category]}
                  </span>
                  <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
                </div>
                <h2
                  className={`text-2xl md:text-3xl text-foreground text-balance mb-3 group-hover:text-primary transition-colors ${categoryHeadingClass(post.category)}`}
                >
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <span className="inline-block mt-4 text-sm font-medium text-primary">{t.blog.readMore} →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter area="blog" tagline={t.blog.footerTagline} />
    </>
  )
}
