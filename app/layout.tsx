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
  title: 'Kaizenith | Software, games, and brands',
  description: 'Kaizenith is a group of independent studios: Studio (games), Works (software and SaaS), and Vision (design and branding), built with the same method.',
  generator: 'v0.app',
  keywords: ['Kaizenith', 'Kaizen', 'Kaizenith Studio', 'Kaizenith Works', 'Game studio', 'SaaS', 'Branding', 'Product development'],
  openGraph: {
    title: 'Kaizenith | Software, games, and brands',
    description: 'Kaizenith is a group of independent studios: Studio (games), Works (software and SaaS), and Vision (design and branding), built with the same method.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kaizenith',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaizenith | Software, games, and brands',
    description: 'Kaizenith is a group of independent studios: Studio (games), Works (software and SaaS), and Vision (design and branding), built with the same method.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon_io/favicon-16x16.png',

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
