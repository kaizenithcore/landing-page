import React from "react"
import type { Metadata, Viewport } from 'next'
import { Sora, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Providers from '@/components/Providers'
import './globals.css'
import Head from 'next/head'

const sora = Sora({ 
  subsets: ["latin"],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kaizenith.es'),
  title: 'Kaizenith | Software, games, and brands',
  description: 'Kaizenith is a group of independent studios: Studio (games), Works (software and SaaS), and Vision (design and branding), built with the same method.',
  keywords: ['Kaizenith', 'Kaizen', 'Kaizenith Studio', 'Kaizenith Works', 'Kaizenith Vision', 'Game studio', 'SaaS', 'Branding', 'Diseño de marca', 'Desarrollo de software a medida'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Kaizenith | Software, games, and brands',
    description: 'Kaizenith is a group of independent studios: Studio (games), Works (software and SaaS), and Vision (design and branding), built with the same method.',
    type: 'website',
    url: 'https://kaizenith.es',
    siteName: 'Kaizenith',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaizenith | Software, games, and brands',
    description: 'Kaizenith is a group of independent studios: Studio (games), Works (software and SaaS), and Vision (design and branding), built with the same method.',
  },
  manifest: '/favicon_io/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicon_io/apple-touch-icon.png',
    shortcut: '/favicon_io/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#111216',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Kaizenith',
              url: 'https://kaizenith.es',
              logo: 'https://kaizenith.es/logos/horizontal-dark.png',
              description:
                'Kaizenith is a group of independent studios: Studio (games), Works (software and SaaS), and Vision (design and branding), built with the same method.',
              email: 'hola@kaizenith.es',
              sameAs: [
                'https://store.steampowered.com/app/4394040/Ping_Pong_Mate',
                'https://www.patreon.com/cw/kaizenithcore',
                'https://ko-fi.com/kaizenith',
                'https://github.com/kaizenith',
              ],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem('kaizenith-theme');
                  var theme = stored === 'light' || stored === 'dark'
                    ? stored
                    : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.classList.add(theme);
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Q54HMYXVR1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q54HMYXVR1');
            `,
          }}
        />
      </head>
      <body className={`${sora.variable} ${inter.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
