# Lead Magnets - Referencia Rápida

## Cambiar el Lead Magnet en la Página Principal

En [app/page.tsx](app/page.tsx#L16-L22), cambia la clave del lead magnet:

```tsx
// Mostrar "7 Errores del Marketing"
const leadMagnetData = getLeadMagnetData('errorsMarketing', locale)

// Mostrar "50 CTAs para GameDev"
const leadMagnetData = getLeadMagnetData('ctasGamedev', locale)
```

## Usar Diferentes Componentes

### Preview (sin modal, link directo)
```tsx
<LeadMagnetPreview data={leadMagnetData} />
```

### Con Modal de Signup
```tsx
<LeadMagnet onOpenSignup={openSignup} data={leadMagnetData} />
```

## Crear un Nuevo Lead Magnet

### 1. Agrega la configuración en `/lib/lead-magnets.ts`:
```typescript
myNewResource: {
  es: {
    badge: "Recurso Nuevo",
    title: "Título del Recurso",
    description: "Descripción corta y atractiva",
    cta: "Obtener recurso",
    url: "/internal/my-new-resource"
  },
  en: {
    badge: "New Resource",
    title: "Resource Title",
    description: "Short and attractive description",
    cta: "Get resource",
    url: "/internal/my-new-resource"
  }
}
```

### 2. Crea la página en `/app/internal/my-new-resource/page.tsx`

### 3. Úsalo:
```tsx
const data = getLeadMagnetData('myNewResource', locale)
<LeadMagnetPreview data={data} />
```

## URLs de los Lead Magnets Existentes

- **Errores del Marketing:** [/internal/errors-marketing](http://localhost:3000/internal/errors-marketing)
- **CTAs GameDev:** [/internal/ctas-gamedev](http://localhost:3000/internal/ctas-gamedev)

## Props Disponibles

### LeadMagnetData
```typescript
{
  badge: string         // "Guía Gratuita", "Recurso Gratuito", etc.
  title: string         // Título principal del lead magnet
  description: string   // Descripción de 1-2 líneas
  cta: string          // Texto del botón: "Obtener", "Descargar", "Ver"
  url?: string         // URL de destino (solo para LeadMagnetPreview)
}
```

## Estructura de Archivos

```
/app
  /internal
    /errors-marketing     → Página del lead magnet 1
    /ctas-gamedev        → Página del lead magnet 2
  page.tsx               → Página principal (usa los componentes)

/components/kaizenith
  lead-magnet.tsx        → Componente con modal de signup
  lead-magnet-preview.tsx → Componente con link directo

/lib
  lead-magnets.ts        → Configuración de todos los lead magnets
  types.ts              → Tipos TypeScript
```

## Ver la Guía Completa

Para más detalles, consulta [LEAD_MAGNETS_GUIDE.md](LEAD_MAGNETS_GUIDE.md)
