import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';  // Make sure this line exists

// Configure Inter font
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter'
});

/**
 * Metadata configuration for the application
 * Includes SEO optimization and social media meta tags
 */
export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    title: 'OneLot - Working Capital Loans & Digital Tools for Dealerships',
    description: 'Grow your dealership with working capital loans and digital tools from OneLot. Access funding, manage inventory, and streamline operations with our comprehensive platform built for automotive dealers.',
    keywords: [
        'working capital loans',
        'dealership financing',
        'automotive loans',
        'car dealership software',
        'inventory management',
        'dealer financing',
        'auto dealership tools',
        'OneLot'
    ],
    authors: [{ name: 'OneLot' }],
    creator: 'OneLot',
    publisher: 'OneLot',
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
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://onelot.com',
        title: 'OneLot - Working Capital Loans & Digital Tools for Dealerships',
        description: 'Grow your dealership with working capital loans and digital tools from OneLot. Access funding, manage inventory, and streamline operations.',
        siteName: 'OneLot',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'OneLot - Dealership Growth Platform',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'OneLot - Working Capital Loans & Digital Tools for Dealerships',
        description: 'Grow your dealership with working capital loans and digital tools from OneLot.',
        images: ['/og-image.jpg'],
        creator: '@OneLot',
    },
    alternates: {
        canonical: 'https://onelot.com',
    },
    verification: {
        google: 'your-google-verification-code',
        // Add other verification codes as needed
    },
    other: {
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'black-translucent',
    },
};

/**
 * Root Layout Component
 *
 * This is the root layout that wraps all pages in the application.
 * It provides:
 * 1. Basic HTML structure
 * 2. Font configuration
 * 3. Global CSS imports
 * 4. Viewport and meta tag configuration
 * 5. Accessibility features
 */
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <html lang="en" className={inter.variable}>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
            {/* Viewport meta tag for responsive design */}
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            {/* Theme color for mobile browsers */}
            <meta name="theme-color" content="#7c3aed"/>

            {/* Apple touch icon */}
            <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

            {/* Web app manifest */}
            <link rel="manifest" href="/site.webmanifest"/>

            {/* Preconnect to external domains for performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link rel="preconnect" href="https://images.unsplash.com"/>

            {/* DNS prefetch for better performance */}
            <link rel="dns-prefetch" href="https://fonts.googleapis.com"/>
            <link rel="dns-prefetch" href="https://fonts.gstatic.com"/>

            {/* Structured data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "OneLot",
                        "description": "Working capital loans and digital tools for automotive dealerships",
                        "url": "https://onelot.com",
                        "logo": "https://onelot.com/logo.png",
                        "sameAs": [
                            "https://www.facebook.com/onelot",
                            "https://www.twitter.com/onelot",
                            "https://www.linkedin.com/company/onelot"
                        ],
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+1-555-123-4567",
                            "contactType": "customer service",
                            "availableLanguage": "English"
                        }
                    })
                }}
            />
        </head>
        <body
            className={`${inter.className} antialiased bg-white text-gray-900`}
            suppressHydrationWarning={true}
        >
        {/* Skip to main content link for accessibility */}
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50 transition-all duration-200"
        >
            Skip to main content
        </a>

        {/* Main content wrapper */}
        <div id="main-content" className="min-h-screen flex flex-col">
            {children}
        </div>

        {/* Analytics and tracking scripts would go here */}
        {/* Google Analytics, Facebook Pixel, etc. */}

        {/* Performance monitoring */}
        <script
            dangerouslySetInnerHTML={{
                __html: `
              // Basic performance monitoring
              if (typeof window !== 'undefined') {
                window.addEventListener('load', function() {
                  // Track page load time
                  const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                  console.log('Page load time:', loadTime + 'ms');
                });
              }
            `
            }}
        />
        </body>
        </html>
    );
}