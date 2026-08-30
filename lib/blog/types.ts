// Blog content lives outside lib/i18n/translations.ts on purpose: posts are
// Spanish-only for now (see PRODUCT.md / project decisions), so there is no
// per-locale pair to keep in sync. Only the surrounding chrome (nav, index
// labels, "read more"/"back") is bilingual, via t.blog in translations.ts.

export type BlogCategory = "general" | "design" | "development"

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: BlogCategory
  date: string // ISO date, e.g. "2026-08-28"
  coverImage?: string
  content: ContentBlock[]
}
