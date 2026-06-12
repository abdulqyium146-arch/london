import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { SchemaScript } from "@/components/common/SchemaScript";
import { generateFAQSchema } from "@/lib/schema/faq";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";
import { faqs, faqCategories, getFAQsByCategory } from "@/lib/data/faqs";

// Maps FAQ IDs to relevant service pages — contextual cross-links below each answer
const faqServiceLinks: Record<string, { label: string; href: string }[]> = {
  "faq-1":  [{ label: "View areas we cover", href: "/areas" }],
  "faq-3":  [{ label: "Emergency locksmith service", href: "/services/emergency-locksmith" }],
  "faq-5":  [
    { label: "Emergency locksmith from £65", href: "/services/emergency-locksmith" },
    { label: "UPVC door lock repair from £75", href: "/services/upvc-door-lock-repair" },
  ],
  "faq-9":  [{ label: "Emergency locksmith service", href: "/services/emergency-locksmith" }],
  "faq-10": [{ label: "Emergency locksmith Dulwich", href: "/services/emergency-locksmith" }],
  "faq-11": [{ label: "Emergency locksmith — non-destructive entry", href: "/services/emergency-locksmith" }],
  "faq-12": [{ label: "Lock repair and key extraction", href: "/services/lock-repair" }],
  "faq-13": [
    { label: "Lock installation — anti-snap cylinders", href: "/services/lock-installation" },
    { label: "Residential locksmith service", href: "/services/residential-locksmith" },
  ],
  "faq-14": [
    { label: "Lock installation — BS3621 locks", href: "/services/lock-installation" },
    { label: "Residential locksmith service", href: "/services/residential-locksmith" },
  ],
  "faq-15": [
    { label: "Lock installation service", href: "/services/lock-installation" },
    { label: "Burglary repair and security upgrade", href: "/services/burglary-repair" },
  ],
  "faq-16": [
    { label: "Residential locksmith — new property rekeying", href: "/services/residential-locksmith" },
  ],
  "faq-17": [{ label: "UPVC door lock repair service", href: "/services/upvc-door-lock-repair" }],
  "faq-18": [{ label: "UPVC door lock repair — gearbox replacement", href: "/services/upvc-door-lock-repair" }],
  "faq-19": [{ label: "Automotive locksmith service", href: "/services/automotive-locksmith" }],
  "faq-20": [{ label: "Automotive locksmith — key programming", href: "/services/automotive-locksmith" }],
  "faq-21": [{ label: "Automotive locksmith — lost key replacement", href: "/services/automotive-locksmith" }],
  "faq-22": [
    { label: "Commercial locksmith service", href: "/services/commercial-locksmith" },
    { label: "Lock installation — master key systems", href: "/services/lock-installation" },
  ],
  "faq-23": [{ label: "Commercial locksmith — 24/7 service", href: "/services/commercial-locksmith" }],
  "faq-24": [
    { label: "Commercial locksmith service", href: "/services/commercial-locksmith" },
    { label: "Lock installation — restricted cylinders", href: "/services/lock-installation" },
  ],
  "faq-25": [{ label: "Smart lock installation service", href: "/services/smart-lock-installation" }],
  "faq-26": [{ label: "Smart lock installation — security guide", href: "/services/smart-lock-installation" }],
  "faq-27": [{ label: "Smart lock installation service", href: "/services/smart-lock-installation" }],
  "faq-28": [
    { label: "Residential locksmith service", href: "/services/residential-locksmith" },
    { label: "Lock repair — cylinder inspection", href: "/services/lock-repair" },
  ],
  "faq-29": [
    { label: "Burglary repair and door reinforcement", href: "/services/burglary-repair" },
    { label: "Lock installation — period properties", href: "/services/lock-installation" },
  ],
  "faq-30": [{ label: "Lock installation service", href: "/services/lock-installation" }],
  // Pricing extended
  "faq-31": [
    { label: "Emergency locksmith pricing", href: "/services/emergency-locksmith" },
    { label: "Full price guide", href: "/prices" },
  ],
  "faq-32": [
    { label: "Lock installation — cylinder upgrades", href: "/services/lock-installation" },
    { label: "Residential locksmith service", href: "/services/residential-locksmith" },
  ],
  "faq-33": [
    { label: "Lock installation service", href: "/services/lock-installation" },
    { label: "Full price guide", href: "/prices" },
  ],
  "faq-34": [{ label: "About TrustLock — honest pricing", href: "/about" }],
  "faq-35": [
    { label: "Lock installation service", href: "/services/lock-installation" },
    { label: "Full price guide", href: "/prices" },
  ],
  "faq-36": [
    { label: "Emergency locksmith from £65", href: "/services/emergency-locksmith" },
    { label: "Full price guide", href: "/prices" },
  ],
  "faq-37": [
    { label: "Lock installation — front door cylinders", href: "/services/lock-installation" },
    { label: "Full price guide", href: "/prices" },
  ],
  "faq-38": [
    { label: "Lock installation service", href: "/services/lock-installation" },
    { label: "Full price guide", href: "/prices" },
  ],
  // General extended
  "faq-39": [
    { label: "Emergency locksmith service", href: "/services/emergency-locksmith" },
    { label: "Residential locksmith service", href: "/services/residential-locksmith" },
  ],
  "faq-40": [{ label: "Contact TrustLock", href: "/contact" }],
  "faq-41": [
    { label: "All services", href: "/services" },
    { label: "Areas we cover", href: "/areas" },
  ],
  // Security extended
  "faq-42": [
    { label: "Lock installation — anti-snap cylinders", href: "/services/lock-installation" },
    { label: "Residential locksmith service", href: "/services/residential-locksmith" },
  ],
  "faq-43": [
    { label: "Lock installation — security-rated locks", href: "/services/lock-installation" },
    { label: "Residential locksmith service", href: "/services/residential-locksmith" },
  ],
  "faq-44": [{ label: "Lock repair and inspection", href: "/services/lock-repair" }],
  // Automotive extended
  "faq-45": [{ label: "Automotive locksmith service", href: "/services/automotive-locksmith" }],
  // Lock Knowledge
  "faq-46": [
    { label: "Lock installation — anti-bump cylinders", href: "/services/lock-installation" },
    { label: "Residential locksmith service", href: "/services/residential-locksmith" },
  ],
  "faq-47": [{ label: "Lock installation — restricted key cylinders", href: "/services/lock-installation" }],
  "faq-48": [{ label: "Lock installation — restricted key systems", href: "/services/lock-installation" }],
  "faq-50": [{ label: "Lock installation — high-security cylinders", href: "/services/lock-installation" }],
  "faq-51": [
    { label: "Emergency locksmith service", href: "/services/emergency-locksmith" },
    { label: "Lock repair service", href: "/services/lock-repair" },
  ],
  "faq-53": [
    { label: "Lock installation — deadbolts and deadlocks", href: "/services/lock-installation" },
    { label: "Residential locksmith service", href: "/services/residential-locksmith" },
  ],
  "faq-54": [
    { label: "All services", href: "/services" },
    { label: "Emergency locksmith service", href: "/services/emergency-locksmith" },
  ],
  // Pricing PAA additions
  "faq-55": [
    { label: "Emergency locksmith from £65", href: "/services/emergency-locksmith" },
    { label: "Full price guide", href: "/prices" },
  ],
  "faq-56": [
    { label: "Lock installation service", href: "/services/lock-installation" },
    { label: "Full price guide", href: "/prices" },
  ],
  "faq-57": [
    { label: "Full price guide — safe opening", href: "/prices" },
    { label: "Emergency locksmith service", href: "/services/emergency-locksmith" },
  ],
  // General PAA additions
  "faq-58": [
    { label: "About TrustLock", href: "/about" },
    { label: "Contact TrustLock", href: "/contact" },
  ],
  // Automotive PAA additions
  "faq-59": [{ label: "Automotive locksmith service", href: "/services/automotive-locksmith" }],
  // Lock Knowledge PAA additions
  "faq-60": [{ label: "Lock installation — restricted key cylinders", href: "/services/lock-installation" }],
  "faq-61": [
    { label: "Lock installation — anti-cut cylinder guards", href: "/services/lock-installation" },
    { label: "Burglary repair service", href: "/services/burglary-repair" },
  ],
  // Security PAA additions
  "faq-62": [
    { label: "Lock installation — full door security", href: "/services/lock-installation" },
    { label: "Residential locksmith service", href: "/services/residential-locksmith" },
  ],
};

export const metadata: Metadata = genMeta({
  title: "FAQ | 62 Locksmith Questions Answered Honestly – TrustLock Dulwich",
  description:
    "62 locksmith questions answered directly — London pricing from £65, free lock change schemes, safe opening costs, Timpson key cutting limits, hardest locks to cut, reliable locksmith guide. TrustLock SE22.",
  path: "/faq",
  keywords: [
    "locksmith FAQ",
    "how much do locksmiths charge in London",
    "how much to change a door lock UK",
    "is it cheaper to rekey or replace locks",
    "what door locks do police recommend",
    "what is key bumping",
    "locksmith questions Dulwich",
  ],
});

export default function FAQPage() {
  const allFAQSchema = generateFAQSchema(faqs);

  return (
    <>
      <SchemaScript schema={allFAQSchema} />

      {/* Hero */}
      <section className="bg-hero-gradient text-white py-14 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} light className="mb-6" />
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Straightforward answers to the questions we hear most often. If yours isn&apos;t here,
              just give us a call.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ content by category */}
      <section className="section-padding bg-slate-50" aria-labelledby="faq-categories-heading">
        <div className="container max-w-3xl mx-auto">
          <h2 id="faq-categories-heading" className="sr-only">FAQ Categories</h2>
          {faqCategories.map((category) => {
            const categoryFAQs = getFAQsByCategory(category);
            return (
              <div key={category} className="mb-12">
                <h2 className="text-xl font-bold text-navy-900 mb-5 pb-3 border-b border-slate-200">
                  {category}
                </h2>
                <div className="space-y-3">
                  {categoryFAQs.map((faq) => (
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
                        {faqServiceLinks[faq.id] && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {faqServiceLinks[faq.id].map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="inline-flex items-center gap-1 text-xs font-semibold text-gold-600 hover:text-gold-500 transition-colors"
                              >
                                {link.label}
                                <ArrowRight size={10} aria-hidden="true" />
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        heading="Still Have a Question?"
        subheading="Call us directly or send a message and we'll get back to you quickly."
        variant="navy"
      />
    </>
  );
}
