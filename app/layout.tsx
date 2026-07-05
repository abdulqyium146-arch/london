import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/common/FloatingCallButton";
import { SchemaScript } from "@/components/common/SchemaScript";
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/schema/localBusiness";
import { BUSINESS, SITE_URL } from "@/lib/constants";
import { defaultMetadata } from "@/lib/seo/metadata";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

// Viewport export — Next.js 14+ separates theme-color from metadata
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F172A" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${BUSINESS.name}`,
    default: `${BUSINESS.name} | Professional Locksmith in Dulwich`,
  },
  description: BUSINESS.description,
  // Icons — Next.js injects all the correct <link> tags automatically
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: BUSINESS.name,
    images: [
      {
        url: `${SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} — Professional Locksmith Services in Dulwich`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@trustlocksmith",
    images: [`${SITE_URL}/opengraph-image.png`],
  },
  other: {
    // Google Search Console ownership verification
    "google-site-verification": "Ln_4KxdTJVlxAfB33B0y2bFcj4Ks8o4aQi-lLOYtsQc",
    // Windows tile
    "msapplication-TileColor": "#0F172A",
    "msapplication-config": "/browserconfig.xml",
    // Prevent iOS from auto-detecting phone numbers as links
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = [
    generateLocalBusinessSchema(),
    generateOrganizationSchema(),
    generateWebsiteSchema(),
  ];

  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        {/* DNS prefetch for Maps API — font is self-hosted via next/font, no Google Fonts fetch needed */}
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        {schemas.map((schema, i) => (
          <SchemaScript key={i} schema={schema} />
        ))}
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-gold-500 focus:text-navy-900 focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header />
        {/* pb-14 on mobile reserves space so the sticky bottom call bar never obscures content */}
        <main id="main-content" className="flex-1 pb-14 md:pb-0">
          {children}
        </main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
