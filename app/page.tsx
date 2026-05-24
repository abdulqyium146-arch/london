import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { AreasCoverage } from "@/components/sections/AreasCoverage";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { BlogCard } from "@/components/common/BlogCard";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";
import { getFeaturedPosts } from "@/lib/data/blog";
import { faqs } from "@/lib/data/faqs";
import { BUSINESS } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = genMeta({
  title: `${BUSINESS.name} | Emergency & Residential Locksmith in Dulwich`,
  description: `${BUSINESS.name} — fast, professional locksmith services in Dulwich, East Dulwich, Peckham and South London. Emergency lockouts, lock changes, UPVC repairs. Call ${BUSINESS.phone}.`,
  path: "/",
  keywords: [
    "locksmith Dulwich",
    "emergency locksmith Dulwich",
    "locksmith near me",
    "locksmith SE22",
    "lock change Dulwich",
  ],
});

const homepageFaqs = faqs.slice(0, 8);
const featuredPosts = getFeaturedPosts(3);

export default function HomePage() {
  return (
    <>
      <Hero />
      <EmergencyBanner message="Locked out or need an emergency locksmith in South London?" />
      <TrustIndicators />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessTimeline />
      <AreasCoverage />

      {/* SEO content block — AI/GEO optimised */}
      <section className="section-padding bg-white" aria-labelledby="about-content-heading">
        <div className="container max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <p className="section-label">
                <span className="w-6 h-px bg-gold-500" aria-hidden="true" />
                About TrustLock
              </p>
              <h2
                id="about-content-heading"
                className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-6"
              >
                Dulwich&apos;s Professional
                <br />
                <span className="text-gold-500">Locksmith Service</span>
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  TrustLock has been serving homes and businesses across Dulwich and South London
                  for over ten years. We&apos;re based in SE22, which means when you call us, we&apos;re
                  already nearby — not driving in from another part of London.
                </p>
                <p>
                  Every locksmith on our team is fully trained, DBS checked, and carries public
                  liability insurance. We work to British Standard specifications and stock
                  insurance-approved BS3621 locks as standard.
                </p>
                <p>
                  Our approach is straightforward: we give you a fixed price before we start, we
                  arrive when we say we will, and we do the job properly. No hidden charges, no
                  pressure selling, no cutting corners on parts.
                </p>
                <p>
                  Whether you&apos;re locked out at 7pm on a Sunday, you&apos;ve moved into a new property
                  and want the locks changed, or your UPVC door has been playing up for months —
                  we&apos;re the people to call.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/about" className="btn-secondary">
                  About Us
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Key facts sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-2xl p-6 space-y-5">
                <h3 className="text-lg font-bold text-navy-900">Quick Facts</h3>
                {[
                  {
                    label: "Business Name",
                    value: BUSINESS.name,
                  },
                  {
                    label: "Address",
                    value: BUSINESS.address.full,
                  },
                  {
                    label: "Phone",
                    value: BUSINESS.phone,
                    href: BUSINESS.phoneHref,
                  },
                  {
                    label: "Hours",
                    value: BUSINESS.hours.formatted,
                  },
                  {
                    label: "Response Time",
                    value: `${BUSINESS.trustSignals.responseTime} minutes (average)`,
                  },
                  {
                    label: "Areas Covered",
                    value: "Dulwich, East Dulwich, Peckham, Camberwell, Brixton, Herne Hill, Southwark",
                  },
                ].map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      {fact.label}
                    </span>
                    {fact.href ? (
                      <a
                        href={fact.href}
                        className="text-sm font-semibold text-gold-600 hover:text-gold-500 transition-colors"
                      >
                        {fact.value}
                      </a>
                    ) : (
                      <span className="text-sm text-navy-900 font-medium">{fact.value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-4 rounded-2xl overflow-hidden bg-slate-100 h-40 flex items-center justify-center border border-slate-200">
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-slate-400 hover:text-gold-600 transition-colors"
                  aria-label="View our location on Google Maps"
                >
                  <MapPin size={28} aria-hidden="true" />
                  <span className="text-xs font-medium">View on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <FAQSection
        faqs={homepageFaqs}
        heading="Common Locksmith Questions"
        subheading="Everything you need to know before you call — or while you're waiting for us."
      />

      {/* Blog section */}
      {featuredPosts.length > 0 && (
        <section className="section-padding bg-white" aria-labelledby="blog-section-heading">
          <div className="container">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <p className="section-label">
                  <span className="w-6 h-px bg-gold-500" aria-hidden="true" />
                  Security Advice
                </p>
                <h2
                  id="blog-section-heading"
                  className="text-3xl font-extrabold text-navy-900"
                >
                  From the TrustLock Blog
                </h2>
              </div>
              <Link
                href="/blog"
                className="flex items-center gap-1 text-sm font-semibold text-gold-600 hover:text-gold-500 transition-colors"
                aria-label="View all blog posts"
              >
                View all articles
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  publishedAt={post.publishedAt}
                  readingTime={post.readingTime}
                  featured={post.featured}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading="Need a Locksmith in Dulwich?"
        subheading={`Call us on ${BUSINESS.phone} for a fast response — or send us a message and we'll be back in touch within the hour.`}
        variant="navy"
      />
    </>
  );
}
