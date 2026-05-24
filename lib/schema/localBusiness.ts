import { BUSINESS, SITE_URL } from "@/lib/constants";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: `${SITE_URL}/images/og-image.jpg`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.png`,
      width: 300,
      height: 80,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      postalCode: BUSINESS.address.postcode,
      addressCountry: BUSINESS.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.coordinates.lat,
      longitude: BUSINESS.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: BUSINESS.hours.open,
        closes: BUSINESS.hours.close,
      },
    ],
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
    areaServed: [
      {
        "@type": "City",
        name: "London",
        "@id": "https://www.wikidata.org/wiki/Q84",
      },
      { "@type": "Place", name: "Dulwich" },
      { "@type": "Place", name: "East Dulwich" },
      { "@type": "Place", name: "Peckham" },
      { "@type": "Place", name: "Camberwell" },
      { "@type": "Place", name: "Brixton" },
      { "@type": "Place", name: "Herne Hill" },
      { "@type": "Place", name: "Southwark" },
    ],
    hasMap: BUSINESS.googleMapsUrl,
    sameAs: [
      BUSINESS.socialMedia.facebook,
      BUSINESS.socialMedia.twitter,
      BUSINESS.socialMedia.instagram,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.trustSignals.rating,
      reviewCount: BUSINESS.trustSignals.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    knowsAbout: [
      "Emergency locksmith services",
      "Residential locksmith services",
      "Commercial locksmith services",
      "Automotive locksmith services",
      "Lock installation",
      "Lock repair",
      "UPVC door lock repair",
      "Burglary repair",
      "Smart lock installation",
      "Anti-snap lock cylinders",
      "BS3621 locks",
      "Key cutting",
      "Lockout services",
    ],
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone,
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "English",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: BUSINESS.hours.open,
        closes: BUSINESS.hours.close,
      },
    },
    sameAs: [
      BUSINESS.socialMedia.facebook,
      BUSINESS.socialMedia.twitter,
      BUSINESS.socialMedia.instagram,
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    description: BUSINESS.description,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
