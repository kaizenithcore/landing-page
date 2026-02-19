# Guía de Lead Magnets Reutilizables

Esta guía explica cómo usar los componentes de lead magnet configurables para diferentes recursos.

## Componentes Disponibles

### 1. `LeadMagnet`
Componente con modal de signup. Ideal para capturar emails antes de dar acceso.

### 2. `LeadMagnetPreview`
Componente que redirige directamente a la página del recurso. Ideal para vista previa sin signup.

## Configuración de Lead Magnets

Los lead magnets se configuran en `/lib/lead-magnets.ts`:

```typescript
export const LEAD_MAGNETS = {
  errorsMarketing: {
    es: {
      badge: "Guía Gratuita",
      title: "7 Errores Fatales del Marketing Indie",
      description: "Los errores que hemos cometido...",
      cta: "Obtener la guía",
      url: "/internal/errors-marketing"
    },
    en: { ... }
  },
  ctasGamedev: {
    es: {
      badge: "Recurso Gratuito",
      title: "50 CTAs para Desarrolladores Indie",
      description: "Llamadas a la acción específicas...",
      cta: "Ver las CTAs",
      url: "/internal/ctas-gamedev"
    },
    en: { ... }
  }
}
```

## Uso en Páginas

### Ejemplo 1: Usando configuración predefinida

```tsx
import { LeadMagnetPreview } from "@/components/kaizenith/lead-magnet-preview"
import { getLeadMagnetData } from "@/lib/lead-magnets"
import { useLocale } from "@/lib/i18n/locale-context"

function MyPage() {
  const { locale } = useLocale()
  const leadMagnetData = getLeadMagnetData('errorsMarketing', locale)
  
  return <LeadMagnetPreview data={leadMagnetData} />
}
```

### Ejemplo 2: Configuración personalizada inline

```tsx
import { LeadMagnetPreview } from "@/components/kaizenith/lead-magnet-preview"

function MyPage() {
  return (
    <LeadMagnetPreview 
      data={{
        badge: "Nuevo Recurso",
        title: "Mi Lead Magnet Personalizado",
        description: "Descripción del recurso",
        cta: "Descargar ahora",
        url: "/internal/mi-recurso"
      }}
    />
  )
}
```

### Ejemplo 3: Usando LeadMagnet con modal de signup

```tsx
import { LeadMagnet } from "@/components/kaizenith/lead-magnet"
import { getLeadMagnetData } from "@/lib/lead-magnets"
import { useLocale } from "@/lib/i18n/locale-context"
import { useState } from "react"

function MyPage() {
  const { locale } = useLocale()
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  const leadMagnetData = getLeadMagnetData('ctasGamedev', locale)
  
  return (
    <>
      <LeadMagnet 
        onOpenSignup={() => setIsSignupOpen(true)} 
        data={leadMagnetData}
      />
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)} 
      />
    </>
  )
}
```

## Agregar un Nuevo Lead Magnet

### Paso 1: Crear la página del recurso
Crea una nueva página en `/app/internal/mi-recurso/page.tsx`

### Paso 2: Agregar configuración
Edita `/lib/lead-magnets.ts` y agrega tu nuevo lead magnet:

```typescript
export const LEAD_MAGNETS = {
  // ... existentes ...
  miRecurso: {
    es: {
      badge: "Badge en español",
      title: "Título del recurso",
      description: "Descripción del recurso",
      cta: "Texto del botón",
      url: "/internal/mi-recurso"
    },
    en: {
      badge: "Badge in english",
      title: "Resource title",
      description: "Resource description",
      cta: "Button text",
      url: "/internal/mi-recurso"
    }
  }
}
```

### Paso 3: Actualizar el tipo
La configuración ya incluye el tipado automático, así que TypeScript sugerirá tu nuevo lead magnet cuando uses `getLeadMagnetData()`.

### Paso 4: Usar en la página
```tsx
const leadMagnetData = getLeadMagnetData('miRecurso', locale)
return <LeadMagnetPreview data={leadMagnetData} />
```

## Lead Magnets Actuales

### 1. Errores del Marketing (`errorsMarketing`)
- **Página:** `/internal/errors-marketing`
- **Descripción:** Guía sobre 7 errores fatales del marketing indie
- **Formato:** Acordeón interactivo con checklist y casos de estudio

### 2. CTAs GameDev (`ctasGamedev`)
- **Página:** `/internal/ctas-gamedev`
- **Descripción:** 50 CTAs específicas para desarrolladores indie de videojuegos
- **Formato:** Lista categorizada con función de copiar

## Props de los Componentes

### LeadMagnet Props
```typescript
interface LeadMagnetProps {
  onOpenSignup: () => void
  data?: LeadMagnetData  // Opcional, usa traducciones por defecto si no se proporciona
}
```

### LeadMagnetPreview Props
```typescript
interface LeadMagnetPreviewProps {
  data?: LeadMagnetData  // Opcional, usa traducciones por defecto si no se proporciona
}
```

### LeadMagnetData Type
```typescript
type LeadMagnetData = {
  badge: string         // Texto del badge (ej: "Guía Gratuita")
  title: string         // Título principal
  description: string   // Descripción del recurso
  cta: string          // Texto del botón
  url?: string         // URL de destino (solo para preview)
}
```

## Modo Fallback

Si no se proporcionan las props `data`, los componentes usarán las traducciones por defecto de `t.leadMagnet` del sistema de i18n. Esto permite compatibilidad hacia atrás con código existente.

## Consejos

1. **Mantén las URLs consistentes:** Usa el prefijo `/internal/` para recursos internos
2. **Traduce todo:** Siempre proporciona versiones en español e inglés
3. **CTAs claros:** El botón debe indicar claramente qué obtendrá el usuario
4. **Descripciones concisas:** Máximo 2-3 líneas para mantener el diseño limpio
5. **Badges apropiados:** Usa "Guía Gratuita", "Recurso Gratuito", "Descargar", etc.

## FAQ

**¿Puedo usar el mismo lead magnet en varias páginas?**
Sí, simplemente importa y usa el componente donde lo necesites con los mismos datos.

**¿Qué pasa si no paso datos al componente?**
Usará las traducciones por defecto del sistema de i18n (`t.leadMagnet`).

**¿Puedo mezclar LeadMagnet y LeadMagnetPreview para el mismo recurso?**
Sí, dependiendo del contexto puedes usar uno u otro. Preview es mejor para tráfico directo, LeadMagnet para captura de emails.

**¿Cómo trackeo analytics para diferentes lead magnets?**
Cada página de lead magnet ya incluye llamadas a `trackEvent()` con identificadores únicos.
