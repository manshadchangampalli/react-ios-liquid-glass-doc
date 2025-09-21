import React from 'react'
import { Metadata } from 'next'
import Template from './_generate-code/components/template/Template'

export const metadata: Metadata = {
  title: 'React iOS Liquid Glass Editor - Interactive Glassmorphism Generator',
  description: 'Create stunning glassmorphism effects with our interactive React iOS Liquid Glass editor. Real-time preview, drag-and-drop functionality, and instant code generation for modern web design.',
  keywords: [
    'react',
    'ios liquid glass',
    'glassmorphism',
    'glass effect',
    'css generator',
    'interactive editor',
    'web design',
    'ui components',
    'react components',
    'css effects',
    'modern design',
    'frontend tools'
  ],
  authors: [{ name: 'React iOS Liquid Glass Editor' }],
  creator: 'React iOS Liquid Glass Editor',
  publisher: 'React iOS Liquid Glass Editor',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://react-ios-liquid-glass-editor.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'React iOS Liquid Glass Editor - Interactive Glassmorphism Generator',
    description: 'Create stunning glassmorphism effects with our interactive React iOS Liquid Glass editor. Real-time preview, drag-and-drop functionality, and instant code generation.',
    url: 'https://react-ios-liquid-glass-editor.vercel.app',
    siteName: 'React iOS Liquid Glass Editor',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'React iOS Liquid Glass Editor - Interactive Glassmorphism Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React iOS Liquid Glass Editor - Interactive Glassmorphism Generator',
    description: 'Create stunning glassmorphism effects with our interactive React iOS Liquid Glass editor. Real-time preview, drag-and-drop functionality, and instant code generation.',
    images: ['/og-image.png'],
    creator: '@reactiosliquidglass',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
  classification: 'Web Development Tools',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Liquid Glass Editor',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
  },
}

const page = () => {
  return (
    <div>
      <Template />
    </div>
  )
}

export default page
