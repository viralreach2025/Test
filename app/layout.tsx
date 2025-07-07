import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'ViralReach - Performance-Based Influencer Marketing Platform',
    template: '%s | ViralReach'
  },
  description: 'Connect beauty and skincare brands with authentic creators. Pay only for real results, not just posts. AI-powered matching, escrow protection, and performance-based payments.',
  keywords: ['influencer marketing', 'beauty influencers', 'skincare marketing', 'performance marketing', 'creator marketplace', 'brand collaboration', 'social media marketing'],
  authors: [{ name: 'ViralReach Team' }],
  creator: 'ViralReach',
  publisher: 'ViralReach',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://viralreach.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en-GB': '/en-GB',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://viralreach.com',
    siteName: 'ViralReach',
    title: 'ViralReach - Performance-Based Influencer Marketing Platform',
    description: 'Connect beauty and skincare brands with authentic creators. Pay only for real results, not just posts.',
    images: [
      {
        url: '/favicon.svg',
        width: 32,
        height: 32,
        alt: 'ViralReach - Influencer Marketing Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ViralReach - Performance-Based Influencer Marketing Platform',
    description: 'Connect beauty and skincare brands with authentic creators. Pay only for real results, not just posts.',
    images: ['/favicon.svg'],
    creator: '@viralreach',
    site: '@viralreach',
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
    google: 'your-google-search-console-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z4PVDEXF5T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z4PVDEXF5T', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>

        {/* Google Search Console */}
        <meta name="google-site-verification" content="your-google-search-console-verification-code" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ViralReach",
              "url": "https://viralreach.com",
              "logo": "https://viralreach.com/favicon.svg",
              "description": "Performance-based influencer marketing platform connecting beauty and skincare brands with authentic creators.",
              "sameAs": [
                "https://twitter.com/viralreach",
                "https://linkedin.com/company/viralreach",
                "https://instagram.com/viralreach"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://viralreach.com/contact"
              },
              "foundingDate": "2024",
              "industry": "Marketing",
              "serviceType": "Influencer Marketing Platform"
            })
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ViralReach" />
        <meta name="application-name" content="ViralReach" />
        <meta name="msapplication-TileImage" content="/favicon.svg" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 