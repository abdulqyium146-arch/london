import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { SchemaScript } from "@/components/common/SchemaScript";
import { generateFAQSchema } from "@/lib/schema/faq";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";
import { faqs, faqCategories, getFAQsByCategory } from "@/lib/data/faqs";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = genMeta({
  title: "FAQ | Locksmith Questions Answered – TrustLock Dulwich",
  description:
    "Answers to the most common locksmith questions. Pricing, response times, anti-snap locks, UPVC repairs, emergencies and more — all answered honestly.",
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
                  {categoryFAQs.map((faq, i) => (
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
