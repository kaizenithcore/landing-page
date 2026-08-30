import type { ContentBlock } from "@/lib/blog/types"

export function PostBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="text-base md:text-lg text-foreground/90 leading-relaxed">
                {block.text}
              </p>
            )
          case "heading":
            return (
              <h2 key={index} className="text-xl md:text-2xl font-bold text-foreground pt-4">
                {block.text}
              </h2>
            )
          case "list":
            return (
              <ul key={index} className="space-y-2 list-disc list-inside marker:text-primary">
                {block.items.map((item, i) => (
                  <li key={i} className="text-base text-foreground/90 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            )
          case "quote":
            return (
              <blockquote key={index} className="border-l border-primary pl-5 italic text-foreground/80">
                {block.text}
              </blockquote>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
