import type { BlogPost } from "../types"
import { quienesSomos } from "./quienes-somos"

// New posts: import above and add to this array. Sorted by date desc below,
// so insertion order here doesn't matter.
export const blogPosts: BlogPost[] = [quienesSomos].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
)

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
