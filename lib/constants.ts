export const BUSINESS = {
  name: "TrustLock Locksmith Dulwich",
  shortName: "TrustLock",
  tagline: "Dulwich's Most Trusted Locksmith",
  description:
    "Professional emergency, residential, commercial and automotive locksmith services in Dulwich and South London. Available 24 hours a day, 7 days a week.",
  phone: "07984 547185",
  phoneHref: "tel:07984547185",
  email: "info@trustlocklocksmithdulwich.com",
  emailHref: "mailto:info@trustlocklocksmithdulwich.com",
  address: {
    street: "46 Grove Vale",
    city: "London",
    postcode: "SE22 8DY",
    area: "Dulwich",
    full: "46 Grove Vale, London, SE22 8DY",
    country: "United Kingdom",
    countryCode: "GB",
  },
  coordinates: {
    lat: 51.4571,
    lng: -0.0937,
  },
  hours: {
    open: "00:00",
    close: "23:59",
    days: "Monday – Sunday",
    formatted: "24 hours a day, 7 days a week",
    shortFormatted: "24/7",
  },
  website: "https://trustlocklocksmithdulwich.com",
  googleMapsUrl:
    "https://maps.google.com/?q=46+Grove+Vale+London+SE22+8DY",
  socialMedia: {
    facebook: "https://facebook.com/trustlocklocksmith",
    twitter: "https://twitter.com/trustlocksmith",
    instagram: "https://instagram.com/trustlocklocksmith",
    google: "https://g.page/trustlocklocksmith",
  },
  trustSignals: {
    yearsExperience: "10+",
    jobsCompleted: "5,000+",
    responseTime: "30",
    rating: "4.9",
    reviewCount: "247",
    insuranceApproved: true,
    checkatrade: true,
    tradesperson: true,
  },
} as const;

export const SITE_URL = "https://trustlocklocksmithdulwich.com";

export const NAVIGATION = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Emergency Locksmith", href: "/services/emergency-locksmith" },
      { label: "Residential Locksmith", href: "/services/residential-locksmith" },
      { label: "Commercial Locksmith", href: "/services/commercial-locksmith" },
      { label: "Automotive Locksmith", href: "/services/automotive-locksmith" },
      { label: "Lock Repair", href: "/services/lock-repair" },
      { label: "Lock Installation", href: "/services/lock-installation" },
      { label: "UPVC Door Lock Repair", href: "/services/upvc-door-lock-repair" },
      { label: "Burglary Repair", href: "/services/burglary-repair" },
      { label: "Smart Lock Installation", href: "/services/smart-lock-installation" },
    ],
  },
  { label: "Areas", href: "/areas" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const AREAS = [
  {
    name: "Dulwich",
    slug: "dulwich",
    postcode: "SE21",
    description: "Our home area — serving all of Dulwich Village and surroundings.",
    landmark: "Dulwich Picture Gallery",
    coordinates: { lat: 51.4521, lng: -0.0884 },
  },
  {
    name: "East Dulwich",
    slug: "east-dulwich",
    postcode: "SE22",
    description: "Fast response across East Dulwich and the SE22 postcode.",
    landmark: "East Dulwich Station",
    coordinates: { lat: 51.4571, lng: -0.0714 },
  },
  {
    name: "Peckham",
    slug: "peckham",
    postcode: "SE15",
    description: "Covering all of Peckham including Rye Lane and surrounds.",
    landmark: "Peckham Rye Park",
    coordinates: { lat: 51.4732, lng: -0.0690 },
  },
  {
    name: "Camberwell",
    slug: "camberwell",
    postcode: "SE5",
    description: "Serving Camberwell and the SE5 area with fast professional response.",
    landmark: "Burgess Park",
    coordinates: { lat: 51.4740, lng: -0.0920 },
  },
  {
    name: "Brixton",
    slug: "brixton",
    postcode: "SW2",
    description: "Reliable locksmith services throughout Brixton and surroundings.",
    landmark: "Brixton Market",
    coordinates: { lat: 51.4613, lng: -0.1143 },
  },
  {
    name: "Herne Hill",
    slug: "herne-hill",
    postcode: "SE24",
    description: "Covering Herne Hill and the surrounding SE24 postcode.",
    landmark: "Brockwell Park",
    coordinates: { lat: 51.4534, lng: -0.1027 },
  },
  {
    name: "Southwark",
    slug: "southwark",
    postcode: "SE1",
    description: "Serving central Southwark and nearby areas throughout the day.",
    landmark: "Southwark Cathedral",
    coordinates: { lat: 51.5056, lng: -0.0878 },
  },
] as const;

export const SERVICE_SLUGS = [
  "emergency-locksmith",
  "residential-locksmith",
  "commercial-locksmith",
  "automotive-locksmith",
  "lock-repair",
  "lock-installation",
  "upvc-door-lock-repair",
  "burglary-repair",
  "smart-lock-installation",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];
export type AreaSlug = (typeof AREAS)[number]["slug"];
