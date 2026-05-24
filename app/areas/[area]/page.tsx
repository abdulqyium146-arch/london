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
import type { AreaSlug } from "@/lib/constants";
import { NearbyAreaLinks } from "@/components/seo/NearbyAreaLinks";
import { AreaServiceLinks } from "@/components/seo/AreaServiceLinks";

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
    intro: `TrustLock is based in Dulwich — 46 Grove Vale, SE22 — which means when you call us, we're already in your neighbourhood. Our average arrival time for addresses in Dulwich Village (SE21) and the surrounding SE22 streets is 20–30 minutes. Whether you're locked out of a Victorian terrace on Croxted Road, need an anti-snap cylinder upgrade in Dulwich Village, or have a UPVC door that won't close on Gallery Road, we carry the parts and the expertise to resolve it cleanly on the same visit.`,
    localDetail: `Dulwich is one of South London's most distinctive residential areas — wide, tree-lined streets, conservation area restrictions, and a high proportion of Victorian and Edwardian terraces with original or early-modified wooden doors. These properties present specific lock requirements. Door frames have often settled over 120+ years, creating misalignments that affect how multipoint locks engage. Original front doors frequently have letter boxes at lock height, which creates a vulnerability addressed by specific letter-box-height reinforcement products we carry. We've worked in Dulwich long enough to know which property types have which characteristics — and we bring the right hardware the first time.`,
    faqs: [
      {
        question: "Which parts of Dulwich does TrustLock cover?",
        answer: "We cover all of Dulwich — Dulwich Village (SE21), West Dulwich (SE21), and the broader SE22 postcode. Our base at 46 Grove Vale, SE22 means we reach most Dulwich addresses within 20–30 minutes. We also cover adjoining areas including Herne Hill, East Dulwich and Camberwell.",
      },
      {
        question: "How quickly can you reach me in Dulwich?",
        answer: "TrustLock is based in Dulwich (SE22), so our typical arrival time for SE21 and SE22 addresses is 20–30 minutes from the time you call. This is our fastest-response area across all the postcodes we cover.",
      },
      {
        question: "Do you install anti-snap locks in Dulwich Village's period properties?",
        answer: "Yes. We regularly upgrade Dulwich Village properties from standard euro cylinders to TS007:2012-rated anti-snap cylinders (Ultion, Yale Platinum, ABS Master). We measure door thickness carefully to ensure flush cylinder fitting — which is essential for anti-snap protection to work correctly on older, thicker period doors.",
      },
    ],
  },
  "east-dulwich": {
    intro: `East Dulwich (SE22) is our most frequently served area by call volume. Because TrustLock is based on Grove Vale in SE22, our average response time to East Dulwich addresses is consistently under 30 minutes. We respond to lockouts, UPVC repairs, anti-snap upgrades and lock installations across the full SE22 postcode — from Lordship Lane and Peckham Rye to Goose Green and the streets around East Dulwich station.`,
    localDetail: `East Dulwich has a diverse housing mix that covers almost every lock type we work with: Victorian terraces on roads like Underhill Road and Ondine Road with original timber frames; 1960s and 70s purpose-built flats with aluminium-framed doors; 1990s and 2000s new-build properties with UPVC or composite doors; and converted period properties with a mix of door types across individual floors. We carry the appropriate cylinders, mechanisms and hardware for all of them. UPVC multipoint failures and anti-snap cylinder upgrades are our two most common East Dulwich jobs.`,
    faqs: [
      {
        question: "Does TrustLock cover the full SE22 postcode?",
        answer: "Yes. SE22 (East Dulwich) is our primary service area and our most frequently attended postcode. We reach most SE22 addresses within 25–30 minutes and carry a comprehensive stock of hardware for the property types common to this area.",
      },
      {
        question: "My UPVC door won't lock properly in East Dulwich — can you help?",
        answer: "Yes. UPVC multipoint failures — dropped handles, bolts that won't extend, mechanisms that require excessive force — are our most common repair call in East Dulwich. We carry ERA, Fullex and Avocet gearboxes and mechanisms to resolve most faults on a single same-day visit.",
      },
      {
        question: "Do you cover Lordship Lane and the surrounding streets?",
        answer: "Yes — Lordship Lane and all residential streets on either side (Ondine Road, Underhill Road, Elsie Road, Pellatt Road, Barry Road and more) are well within our service area. We're familiar with the property types throughout this part of SE22.",
      },
    ],
  },
  peckham: {
    intro: `TrustLock provides locksmith services throughout Peckham and the SE15 postcode — from the residential streets around Peckham Rye and Bellenden Road to the commercial properties on Rye Lane. Emergency lockouts, residential security upgrades, UPVC repairs and commercial locksmith work are all available from the same local, insured service. Our typical arrival time for SE15 addresses is 30–40 minutes from your call.`,
    localDetail: `Peckham's housing stock is varied and dense. Victorian terraces around Bellenden Road and Lyndhurst Way sit alongside purpose-built 1970s blocks on larger estates, modern flat conversions throughout the area, and an active commercial district along Rye Lane and Peckham High Street. Each property type has different lock requirements — older terrace doors often need the same anti-snap upgrades as Dulwich properties, while flat entrance doors on managed estates frequently have specific cylinder types specified by the managing agent. We're experienced with all of these and navigate the area efficiently, which keeps our response times competitive even for the southern edges of SE15.`,
    faqs: [
      {
        question: "Does TrustLock cover Peckham (SE15)?",
        answer: "Yes. Peckham (SE15) is within our standard service area. Our typical arrival time is 30–40 minutes from the time you call, depending on exact location within SE15 and current traffic.",
      },
      {
        question: "Can you respond to a commercial lockout in Peckham?",
        answer: "Yes. Commercial lockouts on Rye Lane, Peckham High Street and surrounding business streets are treated as priority calls. We aim to reach commercial premises as quickly as possible to minimise disruption to your operations.",
      },
      {
        question: "Do you fit anti-snap locks in Peckham?",
        answer: "Yes. Anti-snap cylinder upgrades (TS007:2012-rated) are one of our most requested services in the SE15 postcode. We carry Ultion, Yale Platinum and ABS Master cylinders in all common sizes and can fit them the same day you call.",
      },
    ],
  },
  camberwell: {
    intro: `TrustLock covers all of Camberwell and the SE5 postcode with fast, professional locksmith services. Emergency lockouts near Burgess Park, lock upgrades on the characterful streets around Camberwell Grove, UPVC repairs in newer builds closer to Camberwell Green — we serve the full range of properties across SE5. Our typical arrival time from our Dulwich base is 25–35 minutes.`,
    localDetail: `Camberwell has some of the most architecturally rich housing in South London — Georgian and early Victorian properties on Camberwell Grove and Denmark Hill, dense mid-Victorian terracing throughout the SE5 grid streets, and substantial purpose-built blocks from the 1960s and 1970s. The older properties frequently have original or early-modified mortice cases, often fitted with non-standard cylinders that require careful measurement before replacement. The purpose-built blocks often have communal entrance systems alongside individual flat door locks. We carry the hardware and knowledge for both contexts and approach every assessment without assumptions about what we'll find.`,
    faqs: [
      {
        question: "How quickly can TrustLock reach Camberwell?",
        answer: "From our base at 46 Grove Vale in SE22, Camberwell (SE5) is typically a 15–25 minute drive. Our average arrival time for SE5 addresses is under 35 minutes.",
      },
      {
        question: "Do you install BS3621 locks in Camberwell?",
        answer: "Yes. We fit BS3621:2007+A2:2012 five-lever mortice deadlocks regularly across SE5. We carry Yale, ERA and Chubb BS3621 locks and can advise on the correct backset for your door type before purchasing anything.",
      },
      {
        question: "Can you help with a lockout at a Camberwell flat or apartment?",
        answer: "Yes. We handle flat entrance door lockouts — including communal entrance locks and individual flat doors — regularly across Camberwell. We bring the appropriate tools and can replace communal lock cylinders where we have verification that the caller is a resident.",
      },
    ],
  },
  brixton: {
    intro: `TrustLock provides locksmith services across Brixton and the SW2 and SW9 postcodes. Emergency lockouts, residential anti-snap upgrades, break-in repairs and UPVC door lock repairs — all carried out by DBS-checked, fully insured engineers. Our typical arrival time for Brixton addresses is 35–45 minutes from our SE22 base. We serve the streets around Brixton Market, Coldharbour Lane, Acre Lane and the residential areas behind Brixton Hill.`,
    localDetail: `Brixton's residential streets encompass a wide range of property types and therefore a wide range of lock types. Victorian and Edwardian terraces on roads like Effra Road, Tulse Hill and Leeson Road require the same anti-snap cylinder focus as Dulwich's period properties. The area has also seen substantial new-build development alongside older converted stock, meaning modern composite doors with multipoint mechanisms sit alongside original timber doors on the same street. Anti-snap cylinder upgrades are particularly popular with Brixton homeowners, as the cylinder snapping attack method is responsible for a significant proportion of burglary entries in SW2 and SW9.`,
    faqs: [
      {
        question: "Does TrustLock cover Brixton (SW2/SW9)?",
        answer: "Yes. Brixton (SW2 and SW9) is within our regular service area. Our typical arrival time is 35–45 minutes from our Dulwich base, depending on traffic and exact location.",
      },
      {
        question: "Can you replace my locks after a break-in in Brixton?",
        answer: "Yes. Post-break-in lock replacement and security assessment is one of our most common services in SW2 and SW9. We replace compromised cylinders with TS007 anti-snap variants, reinforce strike plates with box keeps, and provide a signed written report for your home insurance claim.",
      },
      {
        question: "What anti-snap cylinders do you recommend for Brixton properties?",
        answer: "For most Brixton properties with euro cylinder doors, we recommend the Ultion three-star (TS007:2012) or Yale Platinum as the primary upgrade. Both are independently tested to the highest cylinder security rating available and cost from £55 fitted.",
      },
    ],
  },
  "herne-hill": {
    intro: `TrustLock serves Herne Hill and the SE24 postcode with the same fast, professional locksmith service trusted by residents across Dulwich and South London. Herne Hill sits between our home base in SE22 and Brixton, meaning our typical arrival time here is 25–35 minutes — some of our fastest for any area outside SE22 itself. Emergency lockouts, lock upgrades and UPVC repairs all covered 24 hours a day, seven days a week.`,
    localDetail: `Herne Hill is characterised by densely built Victorian and Edwardian terracing along roads like Norwood Road, Railton Road, Dulwich Road and the streets surrounding Brockwell Park. These properties share many of the same lock characteristics as Dulwich's period housing — original wooden frames with euro cylinder locks that benefit enormously from an anti-snap upgrade, sash windows requiring specialist restrictors, and door frames that have often settled and shifted over a century of use. We've worked extensively in Herne Hill and know the area well enough to navigate efficiently and arrive with the right hardware for the most likely property type at the address we're attending.`,
    faqs: [
      {
        question: "Does TrustLock cover Herne Hill (SE24)?",
        answer: "Yes. SE24 is a regular service area for us. Our typical arrival time is 25–35 minutes from our Dulwich (SE22) base, making Herne Hill one of our faster-response areas.",
      },
      {
        question: "Do you work near Brockwell Park?",
        answer: "Yes. The residential streets surrounding Brockwell Park — including Tulse Hill, Norwood Road, Dulwich Road and Effra Road — are all within our Herne Hill coverage area.",
      },
      {
        question: "Can you fit anti-snap locks on Victorian terrace doors in Herne Hill?",
        answer: "Yes, and it's one of our most frequent jobs in SE24. We measure door thickness carefully to size cylinders precisely — critical for anti-snap protection — and carry Ultion, Yale Platinum and ABS Master cylinders in all standard sizes for period door frames.",
      },
    ],
  },
  southwark: {
    intro: `TrustLock provides professional locksmith services across Southwark and the SE1 postcode. From emergency lockouts near London Bridge and Borough Market to residential lock upgrades in the Victorian terraces south of the borough, we cover the full range of Southwark's diverse property types. Our typical arrival time for SE1 addresses is 35–50 minutes from our SE22 base, reflecting the distance and central London traffic. We operate 24 hours a day, seven days a week.`,
    localDetail: `Southwark encompasses one of the most varied property landscapes in Inner London — riverside apartment developments near the Thames, converted warehouse flats, Victorian and Georgian terracing in residential Southwark, and a dense commercial sector around London Bridge and Borough. The lock requirements reflect this variety: modern composite and timber doors in residential conversions, commercial-grade deadlocks and access control in business premises, and a significant proportion of older properties with original lock hardware that needs careful assessment before any work. We carry hardware for all of these contexts and provide a security assessment as standard before recommending any products.`,
    faqs: [
      {
        question: "Does TrustLock cover SE1 (Southwark)?",
        answer: "Yes. SE1 is within our service area, though arrival times for central Southwark are typically 35–50 minutes from our SE22 base, reflecting distance and central London traffic. We confirm an arrival time when you call.",
      },
      {
        question: "Can you help with a commercial lockout in Southwark?",
        answer: "Yes. Commercial lockouts in SE1 — including offices, shops and business premises near London Bridge and Borough Market — are treated as priority calls. We aim to reach you as quickly as possible to minimise disruption.",
      },
      {
        question: "Do you install high-security locks for Southwark flats and apartments?",
        answer: "Yes. We fit TS007:2012 anti-snap cylinders, BS3621 mortice deadlocks and Mul-T-Lock high-security cylinders across SE1 residential properties. For managed buildings, we coordinate with managing agents where required for communal entrance work.",
      },
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

              <NearbyAreaLinks currentSlug={areaSlug as AreaSlug} />
            </aside>
          </div>
        </div>
      </section>

      {/* Service × Area cross-links */}
      <AreaServiceLinks areaName={areaData.name} areaSlug={areaSlug} />

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
