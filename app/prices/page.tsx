import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle2, ArrowRight, Shield, Clock, Info } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";
import { SchemaScript } from "@/components/common/SchemaScript";

export const metadata: Metadata = genMeta({
  title: "Locksmith Prices Dulwich & South London 2025 — Full Price Guide",
  description: `Complete locksmith pricing for Dulwich & South London. Emergency lockout from £65, window locks from £45, smart locks from £120, commercial security from £85. Fixed quotes confirmed before work starts. Call ${BUSINESS.phone}.`,
  path: "/prices",
  keywords: [
    "locksmith prices dulwich",
    "locksmith cost south london",
    "emergency locksmith price dulwich",
    "window lock prices dulwich",
    "smart lock installation cost dulwich",
    "commercial locksmith prices south london",
    "lock replacement cost dulwich",
    "home security prices dulwich",
    "wide range locksmith prices",
    "24 hour locksmith cost",
  ],
});

const priceGroups = [
  {
    id: "emergency",
    heading: "Emergency Lockout Prices",
    subheading: "24/7 emergency response across Dulwich and South London — same fixed price, any time of day.",
    href: "/services/emergency-locksmith",
    items: [
      { service: "Residential lockout — standard", price: "from £65" },
      { service: "Residential lockout — high-security lock", price: "from £85" },
      { service: "Commercial lockout (office/retail)", price: "from £85" },
      { service: "Snapped key extraction", price: "from £75" },
      { service: "Lock picking / bypass entry", price: "from £65" },
    ],
    note: "No additional charge for evenings, weekends or bank holidays. Price confirmed before we travel.",
    included: [
      "Arrival in 15–30 minutes across SE22",
      "Non-destructive entry as first option",
      "Fixed price before we start",
      "Signed invoice for insurance",
    ],
  },
  {
    id: "window-locks",
    heading: "Window Lock Prices",
    subheading: "Window lock fitting, repair and replacement across Dulwich period properties and modern builds.",
    href: "/services/lock-installation",
    items: [
      { service: "Sash window fitch latch (per window)", price: "from £45" },
      { service: "Sash window screw lock (per window)", price: "from £35" },
      { service: "Casement window espagnolette lock", price: "from £55" },
      { service: "Window handle lock with key (each)", price: "from £40" },
      { service: "Child window restrictor (safety, each)", price: "from £35" },
      { service: "Sliding window security lock", price: "from £30" },
    ],
    note: "Dulwich Victorian sash windows often need specific lock types. We assess and recommend on-site before fitting.",
    included: [
      "Free security assessment with any fitting",
      "Sourced from Yale, ERA and Avocet",
      "Installed and tested on the day",
      "Written quote before work starts",
    ],
  },
  {
    id: "home-security",
    heading: "Home Security Prices",
    subheading: "Anti-snap cylinders, door reinforcement and whole-door security upgrades for Dulwich homes.",
    href: "/services/residential-locksmith",
    items: [
      { service: "Anti-snap cylinder (TS007 3-star, fitted)", price: "from £55" },
      { service: "Anti-snap cylinder — Ultion by Brisant", price: "from £85" },
      { service: "Box keep / reinforced strike plate", price: "from £65" },
      { service: "Hinge bolts (pair, fitted)", price: "from £45" },
      { service: "Door chain or limiter", price: "from £40" },
      { service: "Full front door security package", price: "from £180" },
      { service: "BS3621 mortice deadlock (fitted)", price: "from £85" },
    ],
    note: "Most South London home insurers require a BS3621 deadlock and TS007 cylinder on final-exit doors. We confirm compliance in writing.",
    included: [
      "Free security review on every visit",
      "Parts from Ultion, Yale, ERA, ABS",
      "BS3621 compliance documentation",
      "TS007:2012 certified cylinders",
    ],
  },
  {
    id: "smart-locks",
    heading: "Smart Lock Installation Prices",
    subheading: "Smart lock fitting, configuration and app setup for UPVC, composite and timber doors across SE22.",
    href: "/services/smart-lock-installation",
    items: [
      { service: "Ultion Smart cylinder (supply & install)", price: "from £150" },
      { service: "Yale Linus Smart Lock (supply & install)", price: "from £190" },
      { service: "Nuki Smart Lock Pro 4th gen (supply & install)", price: "from £200" },
      { service: "Tedee smart lock (supply & install)", price: "from £175" },
      { service: "August Smart Lock Pro (supply & install)", price: "from £180" },
      { service: "Smart lock fitting only (customer-supplied)", price: "from £75" },
    ],
    note: "All installations include full app configuration, access code setup and connectivity testing. We confirm compatibility with your door before ordering.",
    included: [
      "Compatibility check before fitting",
      "Full app setup and testing",
      "TS007-rated mechanical security",
      "Advice on connectivity options",
    ],
  },
  {
    id: "commercial",
    heading: "Commercial Locksmith Prices",
    subheading: "Office, retail and business security across South London — master key systems, restricted cylinders, access control.",
    href: "/services/commercial-locksmith",
    items: [
      { service: "Commercial lockout (office/retail)", price: "from £85" },
      { service: "Euro cylinder replacement (commercial grade)", price: "from £65" },
      { service: "Restricted profile cylinder (per door)", price: "from £85" },
      { service: "Master key system (per cylinder, planned)", price: "from £110" },
      { service: "High-security deadlock, commercial spec", price: "from £120" },
      { service: "Emergency boarding (post break-in)", price: "from £150" },
    ],
    note: "Restricted cylinders prevent key duplication without the business owner's authorisation card — essential for key control when staff change.",
    included: [
      "24/7 availability for commercial clients",
      "Mul-T-Lock, Abloy and DOM cylinders",
      "Key management documentation",
      "Same-day service in most cases",
    ],
  },
  {
    id: "lock-repair",
    heading: "Lock Repair Prices",
    subheading: "Lock servicing, repair and adjustment — most repairs completed on the first visit.",
    href: "/services/lock-repair",
    items: [
      { service: "Euro cylinder adjustment / re-alignment", price: "from £55" },
      { service: "Mortice lock service and adjustment", price: "from £65" },
      { service: "Jammed lock mechanism repair", price: "from £55" },
      { service: "Lock lubrication and maintenance", price: "from £45" },
      { service: "UPVC gearbox / multipoint mechanism", price: "from £95" },
      { service: "UPVC door alignment and adjustment", price: "from £65" },
    ],
    note: "Repair is always assessed before replacement is recommended. If a repair will last, we say so rather than upselling a new lock.",
    included: [
      "Diagnostic assessment on arrival",
      "Parts sourced same visit where possible",
      "ERA, Avocet, Fullex UPVC parts",
      "1-year workmanship guarantee",
    ],
  },
  {
    id: "lock-replacement",
    heading: "Lock Replacement & Change Prices",
    subheading: "Lock changes for new tenants, security upgrades or post-break-in replacement across Dulwich SE22.",
    href: "/services/lock-installation",
    items: [
      { service: "Euro cylinder replacement (standard)", price: "from £65" },
      { service: "Euro cylinder — anti-snap upgrade (TS007)", price: "from £85" },
      { service: "5-lever mortice deadlock (BS3621)", price: "from £85" },
      { service: "UPVC multipoint gearbox replacement", price: "from £95" },
      { service: "UPVC cylinder change", price: "from £65" },
      { service: "Full door set (cylinder + deadlock)", price: "from £165" },
      { service: "Whole property rekey (per cylinder)", price: "from £55" },
    ],
    note: "Moving into a new property? We recommend rekeying all external doors on move-in day — it costs less than one lockout call and removes uncertainty about who holds keys.",
    included: [
      "Measurement and assessment included",
      "Parts from Ultion, Yale, ERA, Chubb",
      "Key cutting on-site",
      "Insurance documentation if required",
    ],
  },
  {
    id: "upvc",
    heading: "UPVC Door Lock Repair Prices",
    subheading: "Gearbox replacements, cylinder changes and multipoint mechanism repairs for UPVC doors across SE22.",
    href: "/services/upvc-door-lock-repair",
    items: [
      { service: "UPVC gearbox replacement (parts + labour)", price: "from £95" },
      { service: "UPVC handle and spindle replacement", price: "from £65" },
      { service: "Multipoint mechanism replacement", price: "from £110" },
      { service: "UPVC cylinder change", price: "from £65" },
      { service: "UPVC door strip / seal replacement", price: "from £55" },
      { service: "Door alignment and adjustment", price: "from £65" },
    ],
    note: "A dropped UPVC handle almost always means a failed gearbox — continuing to force it causes spindle damage. Book a repair before it becomes a replacement.",
    included: [
      "ERA, Fullex and Avocet gearboxes stocked",
      "Most mechanisms available same day",
      "Handle and spindle replacement included",
      "Tested under load before we leave",
    ],
  },
  {
    id: "burglary",
    heading: "Burglary Repair Prices",
    subheading: "Post break-in lock replacement, door repair and security upgrade — priority response across South London.",
    href: "/services/burglary-repair",
    items: [
      { service: "Emergency lock change (post break-in)", price: "from £85" },
      { service: "Door frame repair / reinforce", price: "from £120" },
      { service: "Emergency boarding (timber or aluminium)", price: "from £150" },
      { service: "Full security audit and upgrade", price: "from £180" },
      { service: "Anti-snap upgrade (all external doors)", price: "from £165" },
    ],
    note: "Insurance claim documentation — signed invoice with parts, labour, British Standard ratings and engineer details — is provided on every burglary repair job.",
    included: [
      "Priority response within 1 hour",
      "Insurance-grade documentation",
      "TS007 anti-snap as standard on replacements",
      "Security audit included at no extra cost",
    ],
  },
];

const pricingFaqs = [
  {
    id: "pfaq-1",
    category: "Pricing",
    question: "Are these prices fixed or just estimates?",
    answer: "These are starting-from prices confirmed when you call. For standard jobs (cylinder replacement, lockout, gearbox), we quote a fixed price over the phone once you describe the situation. For more complex jobs (unfamiliar UPVC mechanism, period door with unusual hardware), we confirm the price on-site after a 2-minute assessment — before touching anything. The price we confirm is the price on the invoice.",
  },
  {
    id: "pfaq-2",
    category: "Pricing",
    question: "Do you charge more at weekends or on bank holidays?",
    answer: "No. TrustLock charges the same price regardless of day or time. The price quoted at 11pm on a bank holiday Sunday is identical to the price on a Tuesday morning. We do not apply out-of-hours, weekend or bank holiday surcharges.",
  },
  {
    id: "pfaq-3",
    category: "Pricing",
    question: "Is there a call-out fee on top of these prices?",
    answer: "There is a small call-out charge for emergency attendance. This is applied against the total job cost — it is not charged as an additional fee on top of the work. The total you pay is the price we confirm before we travel.",
  },
  {
    id: "pfaq-4",
    category: "Pricing",
    question: "Why do your prices start from a set figure rather than a fixed single price?",
    answer: "Lock prices vary based on door thickness (which determines cylinder length), the specific mechanism or gearbox required, and the brand chosen. The 'from' price reflects the minimum cost for a standard job. When you call, we ask a few quick questions and give you a specific price for your situation — not a range.",
  },
  {
    id: "pfaq-5",
    category: "Pricing",
    question: "What does a home security upgrade typically cost in Dulwich?",
    answer: "A standard front door security package for a Dulwich property (anti-snap cylinder, box keep, hinge bolts) typically costs £165–£230 fully installed. A single anti-snap cylinder change costs £55–£85 depending on the product. These are the most cost-effective security improvements available for South London period properties.",
  },
  {
    id: "pfaq-6",
    category: "Pricing",
    question: "How much does smart lock installation cost in SE22?",
    answer: "Smart lock installation in Dulwich SE22 starts from £150 (Ultion Smart cylinder, supply and fit) up to £250+ for premium flagship systems like Nuki Pro or Yale Linus with full bridge configuration. If you supply the lock, fitting-only costs from £75. All prices include app setup, access code configuration and connectivity testing.",
  },
];

function generatePricesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Locksmith Prices Dulwich & South London 2025",
    url: `${BUSINESS.website}/prices`,
    description: "Complete locksmith pricing guide for Dulwich and South London — emergency lockout, window locks, home security, smart locks, commercial and UPVC repairs.",
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
    offers: priceGroups.map((g) => ({
      "@type": "AggregateOffer",
      name: g.heading,
      priceCurrency: "GBP",
      lowPrice: g.items[0]?.price.replace(/from £/, ""),
      url: `${BUSINESS.website}${g.href}`,
    })),
  };
}

export default function PricesPage() {
  return (
    <>
      <SchemaScript schema={generatePricesSchema()} />

      {/* Hero */}
      <section className="bg-hero-gradient text-white py-14 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: "Prices", href: "/prices" }]} light className="mb-6" />
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              Locksmith Prices — Dulwich &amp; South London
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-6 max-w-2xl">
              Every price below is a starting point. When you call, we give you a{" "}
              <strong className="text-white">fixed quote</strong> for your specific job —
              confirmed before we travel. No call-out surprise, no price change on the doorstep.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 px-6 py-3.5 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-all shadow-gold"
                aria-label={`Call for a fixed quote: ${BUSINESS.phone}`}
              >
                <Phone size={18} aria-hidden="true" />
                {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Request a Written Quote <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            {/* Promise strip */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                "Same price 24/7 — no weekend surcharge",
                "Fixed quote before work starts",
                "No hidden call-out fees",
                "Fully insured, DBS-checked engineers",
              ].map((p) => (
                <span key={p} className="flex items-center gap-1.5 text-sm text-white/70">
                  <CheckCircle2 size={13} className="text-gold-400 shrink-0" aria-hidden="true" />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Price groups */}
      <section className="section-padding bg-slate-50" aria-label="Locksmith price guide">
        <div className="container max-w-5xl mx-auto space-y-16">
          {priceGroups.map((group) => (
            <div key={group.id} id={group.id}>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-1">
                    {group.heading}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
                    {group.subheading}
                  </p>
                </div>
                <Link
                  href={group.href}
                  className="shrink-0 flex items-center gap-1 text-sm font-semibold text-gold-600 hover:text-gold-500 transition-colors"
                >
                  Full service details
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Price table */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 overflow-hidden">
                  <table className="w-full text-sm" aria-label={`${group.heading} pricing`}>
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="text-left px-5 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">Service</th>
                        <th className="text-right px-5 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.items.map((item, i) => (
                        <tr
                          key={item.service}
                          className={i < group.items.length - 1 ? "border-b border-slate-50" : ""}
                        >
                          <td className="px-5 py-3 text-slate-700">{item.service}</td>
                          <td className="px-5 py-3 text-right font-bold text-navy-900 whitespace-nowrap">
                            {item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {group.note && (
                    <div className="px-5 py-3.5 bg-gold-50 border-t border-gold-100 flex items-start gap-2">
                      <Info size={13} className="text-gold-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-xs text-gold-700 leading-relaxed">{group.note}</p>
                    </div>
                  )}
                </div>

                {/* What's included */}
                <div className="bg-navy-900 rounded-2xl p-5 text-white flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold mb-4 text-white/80 uppercase tracking-wide">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-2.5 mb-6">
                      {group.included.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                          <CheckCircle2 size={13} className="text-gold-400 shrink-0 mt-0.5" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={BUSINESS.phoneHref}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-all text-sm"
                    aria-label={`Call for ${group.heading}`}
                  >
                    <Phone size={15} aria-hidden="true" />
                    Get a Fixed Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust section */}
      <section className="py-12 bg-white border-y border-slate-100" aria-label="Pricing guarantees">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-center text-2xl font-extrabold text-navy-900 mb-8">
            How TrustLock Pricing Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Fixed Quotes Only",
                body: "We do not give estimates or ranges when we arrive on-site. The price we confirm on the phone — or after a 2-minute on-site assessment — is the price on the invoice. Not a penny more.",
              },
              {
                icon: Clock,
                title: "No Out-of-Hours Premium",
                body: "Emergency at 3am on Christmas Day? Same price as a Tuesday afternoon. We apply no weekend, evening or bank holiday surcharge. Ever. This is our policy — not a marketing line.",
              },
              {
                icon: CheckCircle2,
                title: "No Upselling",
                body: "We will tell you if an existing lock is fine and needs no replacement. We will tell you if a repair will last. Our reputation in Dulwich depends on honest advice, not unnecessary work.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-5 rounded-2xl border border-slate-100 bg-slate-50">
                <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-gold-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <div className="bg-slate-50">
        <div className="container py-12 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label">
              <span className="w-6 h-px bg-gold-500" aria-hidden="true" />
              Pricing Questions
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
              Common Pricing Questions — Answered Directly
            </h2>
          </div>
          <div className="space-y-3">
            {pricingFaqs.map((faq) => (
              <details
                key={faq.id}
                className="group bg-white rounded-2xl border border-slate-100 open:border-gold-200 open:shadow-elegant transition-all"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer select-none list-none">
                  <span className="text-sm font-semibold text-navy-900">{faq.question}</span>
                  <span className="shrink-0 w-6 h-6 rounded-full bg-slate-100 group-open:bg-gold-100 flex items-center justify-center transition-colors">
                    <svg
                      className="w-3 h-3 text-slate-500 group-open:rotate-180 transition-transform group-open:text-gold-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      <CTASection
        heading="Ready for a Fixed Quote?"
        subheading={`Call ${BUSINESS.phone} and we'll give you an exact price for your specific job before we travel. Available 24/7 across Dulwich, East Dulwich, Peckham, Camberwell, Herne Hill, Brixton and Southwark.`}
        variant="navy"
      />
    </>
  );
}
