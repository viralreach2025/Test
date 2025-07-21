import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: {
    default: 'ViralReach - Performance-Based Influencer Marketing Platform',
    template: '%s | ViralReach'
  },
  description: 'Connect beauty and skincare brands with authentic creators. Choose from 3 flexible payment models: Fixed Payments, Hybrid, or Commission. Pay only for real results, not just posts. AI-powered matching, escrow protection, and performance-based payments.',
  keywords: [
    'influencer marketing', 
    'beauty influencers', 
    'skincare marketing', 
    'performance marketing', 
    'creator marketplace', 
    'brand collaboration', 
    'social media marketing',
    'influencer platform',
    'brand marketing',
    'content creator platform',
    'performance-based payments',
    'commission-based marketing',
    'hybrid payment model',
    'fixed payment influencer marketing',
    'influencer marketing platform',
    'social media influencers',
    'brand partnerships',
    'content creation',
    'digital marketing',
    'social media campaigns'
  ],
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
    description: 'Connect beauty and skincare brands with authentic creators. Choose from 3 flexible payment models and pay only for real results, not just posts.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ViralReach - Performance-Based Influencer Marketing Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ViralReach - Performance-Based Influencer Marketing Platform',
    description: 'Connect beauty and skincare brands with authentic creators. Choose from 3 flexible payment models and pay only for real results, not just posts.',
    images: ['/og-image.jpg'],
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
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'ViralReach',
    'application-name': 'ViralReach',
    'msapplication-TileColor': '#8B5CF6',
    'msapplication-TileImage': '/icon-192x192.png',
    'theme-color': '#8B5CF6',
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
              send_page_view: true,
              anonymize_ip: true,
              allow_google_signals: true,
              allow_ad_personalization_signals: true,
              custom_map: {
                'custom_parameter_1': 'user_type',
                'custom_parameter_2': 'page_category'
              }
            });

            // Enhanced event tracking
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              page_category: window.location.pathname === '/' ? 'home' : 
                           window.location.pathname === '/brand' ? 'brand' :
                           window.location.pathname === '/creator' ? 'creator' :
                           window.location.pathname === '/contact' ? 'contact' : 'other'
            });

            // Track form submissions
            document.addEventListener('submit', function(e) {
              if (e.target.tagName === 'FORM') {
                gtag('event', 'form_submit', {
                  form_name: e.target.getAttribute('id') || 'contact_form',
                  page_location: window.location.href
                });
              }
            });

            // Track button clicks
            document.addEventListener('click', function(e) {
              if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
                const buttonText = e.target.textContent?.trim();
                const buttonHref = e.target.href;
                
                if (buttonText && buttonText.length > 0) {
                  gtag('event', 'button_click', {
                    button_text: buttonText,
                    button_href: buttonHref,
                    page_location: window.location.href
                  });
                }
              }
            });

            // Track scroll depth
            let maxScroll = 0;
            window.addEventListener('scroll', function() {
              const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
              if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                if (maxScroll >= 25 && maxScroll < 50) {
                  gtag('event', 'scroll', { scroll_depth: '25%' });
                } else if (maxScroll >= 50 && maxScroll < 75) {
                  gtag('event', 'scroll', { scroll_depth: '50%' });
                } else if (maxScroll >= 75 && maxScroll < 100) {
                  gtag('event', 'scroll', { scroll_depth: '75%' });
                } else if (maxScroll >= 100) {
                  gtag('event', 'scroll', { scroll_depth: '100%' });
                }
              }
            });

            // Track time on page
            let startTime = Date.now();
            window.addEventListener('beforeunload', function() {
              const timeOnPage = Math.round((Date.now() - startTime) / 1000);
              gtag('event', 'timing_complete', {
                name: 'page_view_time',
                value: timeOnPage,
                page_location: window.location.href
              });
            });
          `}
        </Script>

        {/* Google Search Console */}
        <meta name="google-site-verification" content="your-google-search-console-verification-code" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ViralReach",
              "url": "https://viralreach.com",
              "logo": "https://viralreach.com/logo.png",
              "description": "Performance-based influencer marketing platform connecting beauty and skincare brands with authentic creators.",
              "sameAs": [
                "https://twitter.com/viralreach",
                "https://linkedin.com/company/viralreach",
                "https://instagram.com/viralreach"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://viralreach.com/contact",
                "email": "support@viralreach.ca"
              },
              "foundingDate": "2025",
              "industry": "Marketing",
              "serviceType": "Influencer Marketing Platform"
            })
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ViralReach",
              "url": "https://viralreach.com",
              "description": "Performance-based influencer marketing platform",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://viralreach.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Influencer Marketing Platform",
              "provider": {
                "@type": "Organization",
                "name": "ViralReach"
              },
              "description": "Connect beauty and skincare brands with authentic creators through flexible payment models",
              "serviceType": "Influencer Marketing",
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Payment Models",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Fixed Payment Model"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hybrid Payment Model"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commission Payment Model"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="ViralReach" />
        <meta name="application-name" content="ViralReach" />
        <meta name="msapplication-TileImage" content="/icon-192x192.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
} 