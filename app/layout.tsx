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
  title: 'Kaizenith — We build in public',
  description: 'Kaizenith documents experiments, failures and lessons — short, useful updates and early access to our projects.',
  generator: 'v0.app',
  keywords: ['Kaizenith', 'Kaizen', 'Build in public', 'Product development', 'Startups', 'Indie hackers', 'Tech experiments'],
  openGraph: {
    title: 'Kaizenith — We build in public',
    description: 'Kaizenith documents experiments, failures and lessons — short, useful updates and early access to our projects.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kaizenith - We build in public',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaizenith — We build in public',
    description: 'Kaizenith documents experiments, failures and lessons — short, useful updates and early access to our projects.',
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
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
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
