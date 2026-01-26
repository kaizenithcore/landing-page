/**
 * useAnalytics Hook
 * 
 * Use this hook to track events in React components
 * 
 * Example:
 * const { trackEvent, trackSignup } = useAnalytics()
 * trackSignup('hero')
 */

import { useCallback } from 'react'
import {
  trackEvent,
  trackPageView,
  trackNewsletterSignup,
  trackLeadMagnetDownload,
  trackProjectView,
  trackSectionView,
  trackExternalLink,
  trackFormSubmit,
  setUserProperties,
  isAnalyticsAvailable,
  type AnalyticsEvent,
} from '@/lib/analytics/events'

interface EventParams {
  [key: string]: string | number | boolean
}

export function useAnalytics() {
  // Wrap all tracking functions with useCallback to ensure stable references
  
  const track = useCallback(
    (eventName: AnalyticsEvent | string, eventData?: EventParams) => {
      trackEvent(eventName, eventData)
    },
    []
  )

  const trackView = useCallback((pagePath: string, pageTitle?: string) => {
    trackPageView(pagePath, pageTitle)
  }, [])

  const trackSignup = useCallback((source?: string) => {
    trackNewsletterSignup(source)
  }, [])

  const trackDownload = useCallback((magnetName: string) => {
    trackLeadMagnetDownload(magnetName)
  }, [])

  const trackProject = useCallback((projectName: string) => {
    trackProjectView(projectName)
  }, [])

  const trackSection = useCallback((sectionName: string) => {
    trackSectionView(sectionName)
  }, [])

  const trackLink = useCallback((url: string, label?: string) => {
    trackExternalLink(url, label)
  }, [])

  const trackForm = useCallback(
    (formName: string, success?: boolean, errorMessage?: string) => {
      trackFormSubmit(formName, success, errorMessage)
    },
    []
  )

  const setUser = useCallback(
    (userId?: string, properties?: EventParams) => {
      setUserProperties(userId, properties)
    },
    []
  )

  const isAvailable = useCallback(() => {
    return isAnalyticsAvailable()
  }, [])

  return {
    // Main tracking function
    track,
    
    // Specialized tracking functions
    trackView,
    trackSignup,
    trackDownload,
    trackProject,
    trackSection,
    trackLink,
    trackForm,
    
    // User management
    setUser,
    
    // Utility
    isAvailable,
  }
}
