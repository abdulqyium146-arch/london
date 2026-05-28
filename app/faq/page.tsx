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
};

export const metadata: Metadata = genMeta({
  title: "FAQ | 30 Locksmith Questions Answered Honestly – TrustLock Dulwich",
  description:
    "30 locksmith questions answered directly — pricing from £65, response times by postcode, anti-snap cylinders, BS3621 locks, UPVC repairs, automotive, commercial and smart locks. TrustLock SE22.",
  path: "/faq",
  keywords: ["locksmith FAQ", "locksmith questions", "how much does a locksmith cost", "emergency locksmith"],
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
