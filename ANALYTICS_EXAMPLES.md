# Analytics Usage Examples

## Opción 1: Usar el Hook `useAnalytics`

El hook `useAnalytics` es la forma más recomendada de usar analytics en componentes React.

### Ejemplo Básico - Rastrear un Click

```tsx
"use client"

import { useAnalytics } from '@/hooks/use-analytics'
import { Button } from '@/components/ui/button'

export function SignupButton() {
  const { trackSignup } = useAnalytics()

  const handleClick = () => {
    trackSignup('hero')
    // ... lógica del botón
  }

  return (
    <Button onClick={handleClick}>
      Subscribe
    </Button>
  )
}
```

### Ejemplo - Rastrear Descarga de Lead Magnet

```tsx
"use client"

import { useAnalytics } from '@/hooks/use-analytics'
import { Button } from '@/components/ui/button'

export function LeadMagnetDownload() {
  const { trackDownload } = useAnalytics()

  const handleDownload = async () => {
    trackDownload('kaizen-framework-guide')
    
    // Descargar archivo
    const response = await fetch('/api/download/guide')
    const blob = await response.blob()
    // ... manejar descarga
  }

  return (
    <Button onClick={handleDownload}>
      Download Guide
    </Button>
  )
}
```

### Ejemplo - Rastrear Scroll de Secciones

```tsx
"use client"

import { useEffect } from 'react'
import { useAnalytics } from '@/hooks/use-analytics'

export function FeaturesSection() {
  const { trackSection } = useAnalytics()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          trackSection('features')
          observer.unobserve(entry.target)
        }
      })
    })

    const element = document.getElementById('features')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [trackSection])

  return (
    <section id="features">
      {/* Contenido */}
    </section>
  )
}
```

### Ejemplo - Rastrear Envío de Formulario

```tsx
"use client"

import { useAnalytics } from '@/hooks/use-analytics'
import { Button } from '@/components/ui/button'

export function NewsletterForm() {
  const { trackForm } = useAnalytics()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Enviar formulario
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        body: new FormData(e.currentTarget),
      })

      if (response.ok) {
        trackForm('newsletter', true)
      } else {
        trackForm('newsletter', false, 'Server error')
      }
    } catch (error) {
      trackForm('newsletter', false, error instanceof Error ? error.message : 'Unknown error')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos */}
      <Button type="submit">Subscribe</Button>
    </form>
  )
}
```

## Opción 2: Importar Funciones Directamente

Si prefieres no usar el hook, puedes importar las funciones directamente:

```tsx
"use client"

import { trackEvent, trackNewsletterSignup } from '@/lib/analytics/events'

export function MyComponent() {
  return (
    <button
      onClick={() => {
        trackNewsletterSignup('sidebar')
        trackEvent('custom_event', {
          category: 'engagement',
          label: 'Custom action',
        })
      }}
    >
      Do Something
    </button>
  )
}
```

## Opción 3: Rastrear Links Externos

```tsx
"use client"

import { useAnalytics } from '@/hooks/use-analytics'

export function SocialLinks() {
  const { trackLink } = useAnalytics()

  return (
    <div className="flex gap-4">
      <a
        href="https://twitter.com/kaizenith"
        onClick={() => trackLink('https://twitter.com/kaizenith', 'Twitter')}
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      <a
        href="https://github.com/kaizenith"
        onClick={() => trackLink('https://github.com/kaizenith', 'GitHub')}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  )
}
```

## Rastrear Propiedades de Usuario

```tsx
"use client"

import { useEffect } from 'react'
import { useAnalytics } from '@/hooks/use-analytics'
import { useLocale } from '@/lib/i18n/locale-context'

export function TrackUserProperties() {
  const { setUser } = useAnalytics()
  const { locale } = useLocale()

  useEffect(() => {
    // Rastrear propiedades del usuario
    setUser(undefined, {
      locale,
      theme: localStorage.getItem('theme') || 'system',
    })
  }, [locale, setUser])

  return null
}
```

## Rastrear Page Views (En Layout o Route)

```tsx
"use client"

import { useEffect } from 'react'
import { useAnalytics } from '@/hooks/use-analytics'
import { usePathname } from 'next/navigation'

export function PageViewTracker() {
  const { trackView } = useAnalytics()
  const pathname = usePathname()

  useEffect(() => {
    trackView(pathname, document.title)
  }, [pathname, trackView])

  return null
}
```

## Eventos Personalizados Avanzados

```tsx
"use client"

import { useAnalytics } from '@/hooks/use-analytics'

export function AdvancedTracking() {
  const { track } = useAnalytics()

  const handleComplexAction = () => {
    track('custom_event', {
      category: 'user_interaction',
      action: 'complex_action',
      value: 42,
      timestamp: new Date().toISOString(),
      user_segment: 'premium',
      ab_test_group: 'variant_b',
    })
  }

  return <button onClick={handleComplexAction}>Do Complex Thing</button>
}
```

## Verificar si Analytics está Disponible

```tsx
"use client"

import { useAnalytics } from '@/hooks/use-analytics'

export function ConditionalTracking() {
  const { track, isAvailable } = useAnalytics()

  const handleClick = () => {
    if (isAvailable()) {
      track('event_name')
    } else {
      console.log('Analytics no disponible - usuario no ha consentido')
    }
  }

  return <button onClick={handleClick}>Click Me</button>
}
```

## Patrón Completo: Lead Magnet Con Rastreo

```tsx
"use client"

import { useState } from 'react'
import { useAnalytics } from '@/hooks/use-analytics'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function LeadMagnetForm() {
  const { trackDownload, trackForm, setUser } = useAnalytics()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Enviar email a newsletter
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      })

      if (response.ok) {
        // Rastrear envío exitoso
        trackForm('lead-magnet-signup', true)
        
        // Rastrear que el usuario descargó el magnet
        trackDownload('free-guide-2025')
        
        // Rastrear propiedades del usuario
        setUser(undefined, {
          leads_source: 'lead-magnet',
          magnet_type: 'free-guide',
        })

        // Descargar archivo
        const downloadResponse = await fetch('/api/download/guide')
        const blob = await downloadResponse.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'guide.pdf'
        a.click()
      } else {
        trackForm('lead-magnet-signup', false, 'Server error')
      }
    } catch (error) {
      trackForm(
        'lead-magnet-signup',
        false,
        error instanceof Error ? error.message : 'Unknown error'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
      />
      <Button type="submit" disabled={loading}>
        {loading ? 'Downloading...' : 'Get Free Guide'}
      </Button>
    </form>
  )
}
```

## Mejores Prácticas

1. **Siempre verifica la disponibilidad**: Usa `isAvailable()` antes de rastrear eventos críticos
2. **Reutiliza funciones especializadas**: Usa `trackSignup()` en lugar de `track('newsletter_subscribe')`
3. **Añade contexto**: Incluye información relevante en los parámetros del evento
4. **Evita datos sensibles**: No incluyas contraseñas, tokens o información personal identificable
5. **Usa useCallback**: En componentes reutilizables, envuelve handlers con `useCallback`
6. **Timestamps**: Incluye `timestamp` en eventos importantes para análisis temporal

## Debugging

### Verificar que Google Analytics Funciona

```tsx
"use client"

import { useEffect } from 'react'

export function AnalyticsDebug() {
  useEffect(() => {
    if (window.gtag) {
      console.log('✅ Google Analytics is loaded')
      console.log('GA_ID:', process.env.NEXT_PUBLIC_GA_ID)
    } else {
      console.warn('❌ Google Analytics is not loaded')
    }

    // Verificar localStorage
    const cookieConsent = localStorage.getItem('kaizenith-cookie-consent')
    console.log('Cookie Consent:', cookieConsent)
  }, [])

  return null
}
```

### En DevTools

```javascript
// Ejecuta esto en la consola del navegador
console.log('gtag:', window.gtag)
console.log('dataLayer:', window.dataLayer)
window.gtag('event', 'test_event')
```

Luego ve a DevTools → Network → Filter por "collect" para ver las peticiones a Google Analytics.
