# Google Analytics Setup Guide

## Overview
Este proyecto está configurado para cargar Google Analytics de forma consentida. Los usuarios deben aceptar las cookies de análisis antes de que se recopilen datos.

## Pasos para Configurar Google Analytics

### 1. Crear una Propiedad en Google Analytics

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en **"Admin"** en la esquina inferior izquierda
4. En la sección **"Account"**, haz clic en **"Create"** para crear una nueva cuenta
5. Completa la información básica:
   - Account name: `Kaizenith`
   - Property name: `Kaizenith Landing Page`
   - Timezone: `Europe/Madrid` (o tu zona horaria)
   - Currency: `EUR`

### 2. Obtener tu Google Analytics ID

1. Una vez creada la propiedad, ve a **"Data streams"**
2. Selecciona tu stream web
3. Busca tu **Measurement ID** (comienza con `G-`)
4. Copia este ID

### 3. Configurar Variables de Entorno

1. Copia el archivo `.env.example` a `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Abre `.env.local` y reemplaza el valor con tu Google Analytics ID:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### 4. Reiniciar el Servidor

```bash
npm run dev
# o
pnpm dev
```

## Cómo Funciona el Sistema

### Consentimiento de Cookies
- El banner de consentimiento aparece en la parte inferior del sitio
- Los usuarios pueden:
  - **Aceptar todo**: Habilita analytics
  - **Rechazar no esenciales**: Solo cookies esenciales
  - **Configurar**: Personalizar preferencias

### Almacenamiento de Preferencias
- Las preferencias se guardan en `localStorage` con la clave `kaizenith-cookie-consent`
- Las preferencias expiran después de 365 días
- El sistema respeta el consentimiento del usuario

### Consentimiento por Defecto
- Por defecto, **NO se carga** Google Analytics
- Analytics solo se carga si el usuario lo acepta
- El consentimiento se respeta incluso si el usuario recarga la página

## Eventos Personalizados (Opcional)

Una vez configurado Google Analytics, puedes rastrear eventos personalizados en tu código:

```typescript
import { useEffect } from 'react'

export function MyComponent() {
  useEffect(() => {
    if (window.gtag) {
      // Rastrear un evento personalizado
      window.gtag('event', 'custom_event_name', {
        'category': 'engagement',
        'label': 'Newsletter signup',
      })
    }
  }, [])

  return <div>My Component</div>
}
```

## Eventos Recomendados para el Sitio

- `signup_click`: Cuando el usuario hace clic para registrarse
- `lead_magnet_download`: Descargas de materiales gratuitos
- `project_view`: Visualización de proyectos
- `section_scroll`: Scroll a secciones específicas

## Verificar que Funciona

1. Abre el sitio en tu navegador
2. Acepta las cookies en el banner
3. Abre **DevTools** (F12)
4. Ve a la pestaña **Network**
5. Actualiza la página
6. Busca peticiones a `googletagmanager.com`
7. Si encuentras peticiones, Google Analytics está funcionando

## Environment Variables Documentados

```env
# Google Analytics ID
# Obtén tu ID en: https://analytics.google.com/
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Nota: Esta es una variable pública (NEXT_PUBLIC_)
# Es segura exponerla en el navegador
```

## Troubleshooting

### Analytics no se está cargando
- Verifica que `NEXT_PUBLIC_GA_ID` esté configurado correctamente
- Asegúrate de que el usuario ha aceptado las cookies
- Revisa la consola del navegador para errores

### El ID de Google Analytics está incorrecto
- Copia el ID exacto de Google Analytics
- Debe tener el formato `G-` seguido de 10 caracteres
- Reinicia tu servidor de desarrollo

### Las preferencias de cookies no se guardan
- Verifica que localStorage esté habilitado en el navegador
- Comprueba que no hay conflictos con otras cookies
- Abre DevTools → Application → LocalStorage

## URLs Útiles

- [Google Analytics](https://analytics.google.com/)
- [Google Analytics 4 Help](https://support.google.com/analytics/topic/12154439)
- [gtag.js Documentation](https://developers.google.com/analytics/devguides/collection/gtagjs)
- [Google Consent Mode](https://support.google.com/analytics/answer/9976101)
