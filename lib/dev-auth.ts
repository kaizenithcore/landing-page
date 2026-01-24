/**
 * Development auth helper
 * Simulates signup state using localStorage for quick testing
 */

const KEY = "kaizenith-leadmagnet-signup"

interface SigninOptions {
  context?: {
    source: string
    variant?: string
    section?: string
  }
  utm?: {
    source: string
    medium: string
    campaign: string
  }
}

/**
 * Generate Mailchimp tags based on context and UTM params
 * Mirrors the backend logic in /api/signup
 */
function generateTags(options?: SigninOptions): string[] {
  const tags: string[] = ["website", "newsletter"]

  // Add UTM tags
  if (options?.utm?.source) tags.push(`utm-source:${options.utm.source}`)
  if (options?.utm?.medium) tags.push(`utm-medium:${options.utm.medium}`)
  if (options?.utm?.campaign) tags.push(`utm-campaign:${options.utm.campaign}`)

  // Add context tags
  if (options?.context?.source) tags.push(`source:${options.context.source}`)
  if (options?.context?.variant) tags.push(`variant:${options.context.variant}`)
  if (options?.context?.section) tags.push(`section:${options.context.section}`)

  return tags
}

export const DevAuth = {
  isSignedIn(): boolean {
    if (typeof window === "undefined") return false
    return localStorage.getItem(KEY) === "true"
  },

  signIn(options?: SigninOptions) {
    localStorage.setItem(KEY, "true")

    // Generate and log tags to console
    const tags = generateTags(options)
    console.group("🔐 DEV: Simulated Signup")
    console.log("📍 Context:", options?.context || "no context provided")
    console.log("📊 UTM Params:", options?.utm || "no utm params provided")
    console.group("🏷️  Tags for Mailchimp")
    tags.forEach((tag) => console.log(`  • ${tag}`))
    console.groupEnd()
    console.groupEnd()
  },

  signOut() {
    localStorage.removeItem(KEY)
    console.log("🔓 DEV: Signup state cleared")
  },
}
