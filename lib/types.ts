/**
 * Signup Context
 * Defines the contextual information passed with signup events
 * for proper tagging and attribution in Mailchimp
 */
export type SignupContext = {
  /** Functional origin (landing, lead-magnet-main, lead-magnet-secondary, etc) */
  source: string
  /** Brand/section (core, labs, studio, works) */
  section?: string
  /** Variant or experiment (A, B, etc) */
  variant?: string
}

/**
 * Lead Magnet Data
 * Defines the content for lead magnet components
 */
export type LeadMagnetData = {
  /** Badge text (e.g., "Free Guide") */
  badge: string
  /** Main title */
  title: string
  /** Description text */
  description: string
  /** CTA button text */
  cta: string
  /** URL for preview (where to redirect on click) */
  url?: string
}
