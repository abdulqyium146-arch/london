import { BUSINESS, SITE_URL } from "@/lib/constants";
import type { Service } from "@/lib/data/services";

export function generateServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    description: service.metaDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "Locksmith",
      "@id": `${SITE_URL}/#business`,
      name: BUSINESS.name,
    },
    areaServed: {
      "@type": "City",
      name: "London",
    },
    serviceType: service.shortTitle,
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: service.priceFrom.replace("£", ""),
        priceCurrency: "GBP",
      },
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/services/${service.slug}`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.shortTitle} Services`,
      itemListElement: service.features.map((feature, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
        position: index + 1,
      })),
    },
  };
}
