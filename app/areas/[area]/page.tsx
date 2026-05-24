import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, CheckCircle2, ArrowRight, Clock, Shield } from "lucide-react";
import { AREAS, BUSINESS, SITE_URL } from "@/lib/constants";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ServiceCard } from "@/components/common/ServiceCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { SchemaScript } from "@/components/common/SchemaScript";
import { services } from "@/lib/data/services";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";

interface Props {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  return AREAS.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const areaData = AREAS.find((a) => a.slug === areaSlug);
  if (!areaData) return {};
  return genMeta({
    title: `Locksmith in ${areaData.name} | Fast Response – TrustLock`,
    description: `Professional locksmith services in ${areaData.name}, ${areaData.postcode}. Emergency lockouts, lock changes, UPVC repairs. From ${BUSINESS.name}. Call ${BUSINESS.phone}.`,
    path: `/areas/${areaSlug}`,
    keywords: [
      `locksmith ${areaData.name}`,
      `emergency locksmith ${areaData.name}`,
      `locksmith ${areaData.postcode}`,
      `locked out ${areaData.name}`,
      `lock change ${areaData.name}`,
    ],
  });
}

const areaContent: Record<string, { intro: string; localDetail: string; faqs: { question: string; answer: string }[] }> = {
  dulwich: {
    intro: `TrustLock is based in the heart of Dulwich — so when you call us, we're already in your neighbourhood. Whether you're locked out of a Victorian terrace on Lordship Lane, need a lock upgrade in Dulwich Village, or require an emergency response in SE21, we're typically on your doorstep within 30 minutes.`,
    localDetail: `Dulwich is a predominantly residential area of some of London's most beautiful period properties. We understand the particular requirements of Victorian and Edwardian doors, letterboxes at lock height, and original sash windows — and carry the right hardware to work sensitively with these properties.`,
    faqs: [
      { question: "Which parts of Dulwich do you cover?", answer: "We cover all of Dulwich including Dulwich Village, West Dulwich (SE21), and East Dulwich (SE22). We also cover nearby areas including Herne Hill, Peckham and Camberwell." },
      { question: "How quickly can you reach me in Dulwich?", answer: "Being based in Dulwich, we typically arrive within 20–30 minutes for most addresses in the SE21 and SE22 postcodes." },
      { question: "Do you work near Dulwich Park and the Village?", answer: "Yes — Dulwich Village and the surrounding streets are one of our most common service areas. We know the area well." },
    ],
  },
  "east-dulwich": {
    intro: `East Dulwich is one of our most frequently served areas. We respond to lockouts, lock repairs and security upgrades across the SE22 postcode regularly — and because we're based locally, our average response time here is among the fastest in South London.`,
    localDetail: `From Lordship Lane to Peckham Rye, East Dulwich is home to a mix of Victorian terraces, converted flats and newer builds. Each presents its own lock requirements. We carry a comprehensive stock of euro cylinders, UPVC mechanisms and British Standard locks to handle the full range.`,
    faqs: [
      { question: "Do you cover the SE22 postcode?", answer: "Yes, SE22 (East Dulwich) is one of our primary service areas. We're typically able to reach most SE22 addresses within 30 minutes." },
      { question: "Can you help if my UPVC door won't lock in East Dulwich?", answer: "Absolutely. UPVC door lock failures are one of the most common calls we receive across East Dulwich. We carry replacement multipoint mechanisms and gearboxes to resolve most issues on the same visit." },
      { question: "Do you cover Lordship Lane?", answer: "Yes, including all residential streets on and around Lordship Lane and the wider East Dulwich area." },
    ],
  },
  peckham: {
    intro: `From the residential streets around Peckham Rye to the busy thoroughfares near Rye Lane, we provide professional locksmith services throughout Peckham and the SE15 postcode. Emergency lockouts, residential security upgrades and commercial locksmith work all covered.`,
    localDetail: `Peckham has a diverse mix of housing — from Victorian terraces to modern apartment blocks. Each type has different lock requirements, and our locksmiths carry the appropriate hardware for all of them. We regularly serve the area around Peckham Rye Park, Bellenden Road and the surrounding streets.`,
    faqs: [
      { question: "Do you cover SE15 (Peckham)?", answer: "Yes. Peckham (SE15) is within our standard service area. We aim to be with you within 30–40 minutes from the time you call." },
      { question: "Can you help with a commercial lockout in Peckham?", answer: "Yes. Commercial lockouts are a priority service. We attend business premises across Peckham and surrounding areas and aim to respond quickly to minimise disruption to your operations." },
    ],
  },
  camberwell: {
    intro: `Serving Camberwell and the SE5 postcode with fast, professional locksmith services. Whether you need an emergency lockout response near Burgess Park or a full residential security review in one of Camberwell's period properties, TrustLock provides reliable, fairly priced service.`,
    localDetail: `Camberwell has some of South London's most characterful Victorian housing stock. We have extensive experience with the older door furniture and lock mechanisms found in these properties, and can advise sensitively on modern security upgrades that respect the character of your home.`,
    faqs: [
      { question: "How far is TrustLock from Camberwell?", answer: "We're based in SE22, which means Camberwell (SE5) is typically a 15–25 minute drive. Our average arrival time across Camberwell is under 35 minutes." },
      { question: "Do you do lock upgrades in Camberwell?", answer: "Yes. We carry out lock upgrades — including anti-snap cylinder installation and BS3621 lock fitting — regularly across Camberwell and the SE5 postcode." },
    ],
  },
  brixton: {
    intro: `TrustLock provides locksmith services throughout Brixton and the SW2 / SW9 area. Fast emergency response, residential lock changes, UPVC repairs and commercial locksmith work — all carried out by experienced, insured professionals.`,
    localDetail: `Brixton's lively urban character makes security particularly important. We regularly work in the residential streets around Brixton Market, Coldharbour Lane and the broader Lambeth area. Our anti-snap lock upgrades are especially popular with homeowners in this area.`,
    faqs: [
      { question: "Do you cover Brixton?", answer: "Yes, Brixton (SW2/SW9) is within our regular service area. We typically arrive within 35–45 minutes." },
      { question: "Can you change my locks after a break-in in Brixton?", answer: "Yes. Break-in repair and lock replacement is one of our most common services. We respond quickly and can provide documentation for your insurance claim." },
    ],
  },
  "herne-hill": {
    intro: `Covering Herne Hill and the SE24 postcode with fast, professional locksmith services. Emergency lockouts, lock upgrades and UPVC repairs — handled by the same local locksmith service trusted by residents across Dulwich and South London.`,
    localDetail: `Herne Hill sits between Dulwich and Brixton, and its beautiful Victorian streets are a regular part of our service area. Brockwell Park and the surrounding roads are well within our coverage, and we know the area well.`,
    faqs: [
      { question: "Do you cover Herne Hill (SE24)?", answer: "Yes, SE24 is firmly within our service area. We typically arrive within 30–35 minutes in Herne Hill." },
      { question: "Do you work near Brockwell Park?", answer: "Yes, including all residential streets around Brockwell Park and the wider Herne Hill area." },
    ],
  },
  southwark: {
    intro: `Professional locksmith services throughout Southwark and the SE1 postcode. From emergency lockouts near London Bridge to residential security upgrades across the borough — TrustLock provides fast, insured locksmith services across all of Southwark.`,
    localDetail: `Southwark encompasses a broad range of property types from riverside developments near the Thames to Victorian terracing further south. We carry hardware appropriate for both modern high-security installations and period properties throughout the borough.`,
    faqs: [
      { question: "Do you cover SE1 (Southwark)?", answer: "Yes. SE1 is within our service area, though please note that arrival times may be slightly longer for central Southwark than for our core Dulwich area — typically 35–50 minutes." },
      { question: "Can you help with a commercial lockout in Southwark?", answer: "Yes. We handle commercial lockouts across Southwark and aim to respond as quickly as possible to minimise disruption to your business." },
    ],
  },
};

function generateAreaSchema(area: typeof AREAS[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Locksmith in ${area.name}`,
    provider: {
      "@type": "Locksmith",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        postalCode: BUSINESS.address.postcode,
        addressCountry: "GB",
      },
    },
    areaServed: {
      "@type": "Place",
      name: `${area.name}, London`,
      geo: {
        "@type": "GeoCoordinates",
        latitude: area.coordinates.lat,
        longitude: area.coordinates.lng,
      },
    },
    url: `${SITE_URL}/areas/${area.slug}`,
  };
}

export default async function AreaPage({ params }: Props) {
  const { area: areaSlug } = await params;
  const areaData = AREAS.find((a) => a.slug === areaSlug);
  if (!areaData) notFound();

  const content = areaContent[areaSlug] ?? {
    intro: `TrustLock provides professional locksmith services in ${areaData.name}. Fast response, fixed prices, fully insured.`,
    localDetail: `We serve all areas of ${areaData.name} and the ${areaData.postcode} postcode with the same high standard of service as our home base in Dulwich.`,
    faqs: [
      {
        question: `Do you cover ${areaData.name}?`,
        answer: `Yes, ${areaData.name} (${areaData.postcode}) is within our service area. Call us on ${BUSINESS.phone} to confirm and get an estimated arrival time.`,
      },
    ],
  };

  const schema = generateAreaSchema(areaData);

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-hero-gradient text-white py-14 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Areas", href: "/areas" },
              { label: areaData.name, href: `/areas/${areaSlug}` },
            ]}
            light
            className="mb-6"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-gold-400" aria-hidden="true" />
              <span className="text-gold-300 text-sm font-medium">
                {areaData.name}, {areaData.postcode}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              Locksmith in {areaData.name}
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
              {content.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 px-6 py-3.5 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-all shadow-gold"
                aria-label={`Call us: ${BUSINESS.phone}`}
              >
                <Phone size={18} aria-hidden="true" />
                {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Request a Quote <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-white border-b border-slate-100 py-5" aria-label="Service stats">
        <div className="container">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { icon: Clock, label: "Response Time", value: "30 min avg" },
              { icon: Shield, label: "Fully Insured", value: "Public Liability" },
              { icon: CheckCircle2, label: "Availability", value: BUSINESS.hours.shortFormatted },
              { icon: MapPin, label: "Based in", value: "Dulwich, SE22" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-2 text-sm">
                <Icon size={15} className="text-gold-500 shrink-0" aria-hidden="true" />
                <span className="text-slate-400">{label}:</span>
                <span className="font-semibold text-navy-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-slate-50" aria-label="Area details">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  About Our {areaData.name} Locksmith Service
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">{content.localDetail}</p>
                <p className="text-slate-600 leading-relaxed">
                  All our work is carried out by fully trained, insured locksmiths. We provide a
                  fixed price before starting any work and supply documentation for insurance claims
                  where needed. Our aim is always to be the locksmith you&apos;d confidently recommend
                  to a neighbour.
                </p>
              </div>

              {/* Services available */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">
                  Services Available in {areaData.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((s) => (
                    <ServiceCard
                      key={s.slug}
                      slug={s.slug}
                      title={s.title}
                      shortTitle={s.shortTitle}
                      intro={s.intro}
                      icon={s.icon}
                      priceFrom={s.priceFrom}
                      emergencyService={s.emergencyService}
                      variant="compact"
                    />
                  ))}
                </div>
              </div>

              {/* Local landmark context */}
              <div className="p-6 bg-white rounded-2xl border border-slate-100">
                <h3 className="font-bold text-navy-900 mb-3">
                  Serving {areaData.name} and Surrounding Streets
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We serve all residential and commercial properties throughout {areaData.name},
                  including areas near {areaData.landmark}. Our local knowledge means we know the
                  area, we know common property types, and we can navigate to you efficiently —
                  which translates directly into faster response times.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5" aria-label="Booking sidebar">
              <div className="bg-navy-900 rounded-2xl p-6 text-white sticky top-24">
                <h3 className="text-lg font-bold mb-2">
                  Locksmith in {areaData.name}
                </h3>
                <p className="text-white/60 text-sm mb-5 leading-relaxed">
                  Available {BUSINESS.hours.shortFormatted}. Call for fast response.
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-all mb-3"
                  aria-label={`Call: ${BUSINESS.phone}`}
                >
                  <Phone size={16} aria-hidden="true" />
                  {BUSINESS.phone}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all text-sm"
                >
                  Request a Quote
                </Link>
              </div>

              <div className="bg-white rounded-2xl border border-slate-100 p-5">
                <h3 className="font-bold text-navy-900 mb-4">Nearby Areas</h3>
                <ul className="space-y-2" role="list">
                  {AREAS.filter((a) => a.slug !== areaSlug).map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/areas/${a.slug}`}
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-gold-600 transition-colors"
                      >
                        <MapPin size={12} className="text-slate-300 shrink-0" aria-hidden="true" />
                        {a.name} ({a.postcode})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection
        faqs={content.faqs}
        heading={`Locksmith in ${areaData.name} — FAQs`}
        includeSchema
      />

      <CTASection
        heading={`Need a Locksmith in ${areaData.name}?`}
        subheading={`Call us now for a fast response across ${areaData.name} and South London. Fixed prices, no hidden fees.`}
        variant="navy"
      />
    </>
  );
}
