import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  Phone,
  ArrowRight,
  Clock,
  Shield,
  BadgePoundSterling,
  AlertCircle,
} from "lucide-react";
import { getServiceBySlug, getAllServiceSlugs, services } from "@/lib/data/services";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/common/ServiceCard";
import { SchemaScript } from "@/components/common/SchemaScript";
import { generateServiceSchema } from "@/lib/schema/service";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";
import { BUSINESS } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return genMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const schema = generateServiceSchema(service);
  const relatedServices = services.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-hero-gradient text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services/emergency-locksmith" },
              { label: service.shortTitle, href: `/services/${slug}` },
            ]}
            light
            className="mb-6"
          />

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              {service.emergencyService && (
                <span className="badge badge-gold text-xs">
                  <AlertCircle size={11} aria-hidden="true" /> Emergency Service
                </span>
              )}
              <span className="text-xs text-white/50 font-mono">{BUSINESS.address.postcode} + South London</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              {service.headline}
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
              {service.intro}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
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
                Request a Quote
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-5 text-sm text-white/60">
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-gold-400" aria-hidden="true" />
                <span>Response: <strong className="text-white">{service.responseTime}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <BadgePoundSterling size={14} className="text-gold-400" aria-hidden="true" />
                <span>From: <strong className="text-white">{service.priceFrom}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield size={14} className="text-gold-400" aria-hidden="true" />
                <span><strong className="text-white">Fully Insured</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-white border-b border-slate-100 py-5" aria-label="Service features">
        <div className="container">
          <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-1.5 text-sm text-slate-600">
                <CheckCircle2 size={14} className="text-gold-500 shrink-0" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-slate-50" aria-label="Service details">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  {service.content.section1.heading}
                </h2>
                <div className="prose-custom">
                  {service.content.section1.body.split("\n\n").map((para, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">
                  Why Choose TrustLock for {service.shortTitle}?
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {service.benefits.map((benefit) => (
                    <div
                      key={benefit.title}
                      className="p-5 bg-white rounded-2xl border border-slate-100 hover:border-gold-200 hover:shadow-elegant transition-all"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-gold-500 mb-3"
                        aria-hidden="true"
                      />
                      <h3 className="font-bold text-navy-900 mb-2">{benefit.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  {service.content.section2.heading}
                </h2>
                <div>
                  {service.content.section2.body.split("\n\n").map((para, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">How It Works</h2>
                <ol className="space-y-5" role="list">
                  {service.process.map((step) => (
                    <li key={step.step} className="flex gap-4">
                      <div className="shrink-0 w-9 h-9 rounded-full bg-navy-900 text-white flex items-center justify-center text-sm font-black">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-900 mb-1">{step.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  {service.content.section3.heading}
                </h2>
                <div>
                  {service.content.section3.body.split("\n\n").map((para, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6" aria-label="Service sidebar">
              {/* CTA box */}
              <div className="bg-navy-900 rounded-2xl p-6 text-white sticky top-24">
                <h3 className="text-lg font-bold mb-2">Get Help Now</h3>
                <p className="text-white/60 text-sm mb-5 leading-relaxed">
                  Available {BUSINESS.hours.shortFormatted}. Fixed prices, fast response.
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-all mb-3"
                  aria-label={`Call us: ${BUSINESS.phone}`}
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

                <div className="mt-5 pt-5 border-t border-white/10 space-y-2.5">
                  {[
                    { label: "Response time", value: service.responseTime },
                    { label: "Starting from", value: service.priceFrom },
                    { label: "Availability", value: BUSINESS.hours.shortFormatted },
                    { label: "Coverage", value: "Dulwich & South London" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-sm">
                      <span className="text-white/50">{item.label}</span>
                      <span className="text-white font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency scenarios */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6">
                <h3 className="font-bold text-navy-900 mb-4">Common Scenarios</h3>
                <ul className="space-y-2" role="list">
                  {service.emergencyScenarios.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={service.faqs}
        heading={`${service.shortTitle} FAQs`}
        subheading="Answers to the questions we hear most often."
        includeSchema
      />

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-white" aria-labelledby="related-services-heading">
          <div className="container">
            <h2 id="related-services-heading" className="text-2xl font-bold text-navy-900 mb-6">
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedServices.map((s) => (
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
        </section>
      )}

      <CTASection
        heading={`Need ${service.shortTitle} in Dulwich?`}
        subheading="Call us now for a fixed price and fast response across South London."
        variant="navy"
      />
    </>
  );
}
