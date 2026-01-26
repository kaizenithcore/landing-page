/**
 * Analytics Event Tracking Utilities
 * 
 * Use these functions to track user interactions with Google Analytics
 * 
 * Example:
 * import { trackEvent, trackPageView } from '@/lib/analytics/events'
 * 
 * trackEvent('signup_click', {
 *   'section': 'hero',
 *   'button_text': 'Subscribe'
 * })
 */

// Common event types
export type AnalyticsEvent = 
  | 'signup_click'
  | 'lead_magnet_download'
  | 'project_view'
  | 'section_scroll'
  | 'link_click'
  | 'form_submit'
  | 'newsletter_subscribe'
  | 'page_view'

interface EventParams {
  [key: string]: string | number | boolean
}

/**
 * Track a custom event in Google Analytics
 * 
 * @param eventName - Name of the event
 * @param eventData - Additional event data/parameters
 * 
 * @example
 * trackEvent('signup_click', {
 *   section: 'hero',
 *   button_text: 'Subscribe'
 * })
 */
export function trackEvent(
  eventName: AnalyticsEvent | string,
  eventData?: EventParams
): void {
  if (typeof window === 'undefined') return
  
  if (window.gtag) {
    window.gtag('event', eventName, eventData || {})
  } else {
    console.warn(`[Analytics] gtag not loaded. Event "${eventName}" not tracked.`)
  }
}

/**
 * Track page view (usually called from layout/route changes)
 * 
 * @param pagePath - Path of the page
 * @param pageTitle - Title of the page
 * 
 * @example
 * trackPageView('/privacy', 'Privacy Policy')
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  if (typeof window === 'undefined') return
  
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    })
  }
}

/**
 * Track newsletter signup
 * 
 * @param source - Where the signup came from (e.g., 'hero', 'lead-magnet')
 * 
 * @example
 * trackNewsletterSignup('hero')
 */
export function trackNewsletterSignup(source?: string): void {
  trackEvent('newsletter_subscribe', {
    source: source || 'unknown',
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track lead magnet download
 * 
 * @param magnetName - Name/ID of the lead magnet
 * 
 * @example
 * trackLeadMagnetDownload('kaizen-framework')
 */
export function trackLeadMagnetDownload(magnetName: string): void {
  trackEvent('lead_magnet_download', {
    magnet_name: magnetName,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track project/case study view
 * 
 * @param projectName - Name of the project
 * 
 * @example
 * trackProjectView('My Amazing App')
 */
export function trackProjectView(projectName: string): void {
  trackEvent('project_view', {
    project_name: projectName,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track section scroll/view
 * 
 * @param sectionName - Name of the section
 * 
 * @example
 * trackSectionView('features')
 */
export function trackSectionView(sectionName: string): void {
  trackEvent('section_scroll', {
    section_name: sectionName,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track external link click
 * 
 * @param url - URL of the external link
 * @param label - Label or name of the link
 * 
 * @example
 * trackExternalLink('https://twitter.com/kaizenith', 'Twitter')
 */
export function trackExternalLink(url: string, label?: string): void {
  trackEvent('link_click', {
    link_url: url,
    link_text: label || url,
    is_external: true,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track form submission
 * 
 * @param formName - Name/ID of the form
 * @param success - Whether the form was submitted successfully
 * @param errorMessage - If failed, the error message
 * 
 * @example
 * trackFormSubmit('newsletter-signup', true)
 */
export function trackFormSubmit(
  formName: string,
  success: boolean = true,
  errorMessage?: string
): void {
  trackEvent('form_submit', {
    form_name: formName,
    success,
    error_message: errorMessage || 'none',
    timestamp: new Date().toISOString(),
  })
}

/**
 * Set user properties (for identifying users)
 * 
 * @param userId - Unique user identifier
 * @param properties - User properties
 * 
 * @example
 * setUserProperties('user_123', {
 *   locale: 'es',
 *   signup_source: 'hero'
 * })
 */
export function setUserProperties(
  userId?: string,
  properties?: EventParams
): void {
  if (typeof window === 'undefined') return
  
  if (window.gtag) {
    const config: any = {
      ...properties,
    }
    
    if (userId) {
      config.user_id = userId
    }
    
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', config)
  }
}

/**
 * Check if Google Analytics has been initialized and user has consented
 * 
 * @returns True if analytics is available and user has consented
 * 
 * @example
 * if (isAnalyticsAvailable()) {
 *   trackEvent('custom_event')
 * }
 */
export function isAnalyticsAvailable(): boolean {
  return typeof window !== 'undefined' && !!window.gtag
}
