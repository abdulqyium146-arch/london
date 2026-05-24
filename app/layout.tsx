import type { Metadata } from "next";
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

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${BUSINESS.name}`,
    default: `${BUSINESS.name} | Professional Locksmith in Dulwich`,
  },
  description: BUSINESS.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: BUSINESS.name,
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} — Professional Locksmith Services in Dulwich`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@trustlocksmith",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="color-scheme" content="light" />
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
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
