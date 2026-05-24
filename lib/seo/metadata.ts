import type { Metadata } from "next";
import { BUSINESS, SITE_URL } from "@/lib/constants";

interface GenerateMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
}

export function generateMetadata({
  title,
  description,
  path = "/",
  image = "/opengraph-image.png",
  noIndex = false,
  keywords = [],
}: GenerateMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title,
    description,
    keywords: [
      "locksmith Dulwich",
      "locksmith South London",
      "emergency locksmith",
      "locksmith near me",
      ...keywords,
    ].join(", "),
    authors: [{ name: BUSINESS.name }],
    creator: BUSINESS.name,
    publisher: BUSINESS.name,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: {
      canonical: url,
      languages: {
        "en-GB": url,
      },
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: BUSINESS.name,
      locale: "en_GB",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@trustlocksmith",
      site: "@trustlocksmith",
    },
    other: {
      "geo.region": "GB-ENG",
      "geo.placename": "Dulwich, London",
      "geo.position": `${BUSINESS.coordinates.lat};${BUSINESS.coordinates.lng}`,
      "ICBM": `${BUSINESS.coordinates.lat}, ${BUSINESS.coordinates.lng}`,
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${BUSINESS.name}`,
    default: `${BUSINESS.name} | Professional Locksmith Services`,
  },
  description: BUSINESS.description,
  applicationName: BUSINESS.name,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};
