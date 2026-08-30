import type { BlogCategory } from "./types"

// Each category borrows the typographic voice already established for that
// part of the site (Vision's serif, Works' industrial caps), so a blog post
// reads as belonging to that area rather than introducing a fourth style.
export function categoryHeadingClass(category: BlogCategory): string {
  switch (category) {
    case "design":
      return "font-[family-name:var(--font-display-vision)] font-semibold"
    case "development":
      return "font-bold uppercase tracking-tight"
    case "general":
    default:
      return "font-extrabold tracking-tight"
  }
}
