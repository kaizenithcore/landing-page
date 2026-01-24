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
