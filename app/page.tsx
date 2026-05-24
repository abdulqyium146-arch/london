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
  title: `${BUSINESS.name} | Professional Locksmith in Dulwich — SE22`,
  description: `TrustLock is a Dulwich-based locksmith (SE22) serving South London since 2014. Emergency lockouts from £65, anti-snap cylinders, UPVC repairs, BS3621 locks. 30-min response, available 24/7. Call ${BUSINESS.phone}.`,
  path: "/",
  keywords: [
    "locksmith Dulwich",
    "emergency locksmith Dulwich",
    "locksmith near me SE22",
    "locksmith SE22",
    "lock change Dulwich",
    "anti-snap lock Dulwich",
    "UPVC lock repair SE22",
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

      {/* SEO content block — E-E-A-T / GEO / AEO optimised */}
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
                Dulwich&apos;s Local
                <br />
                <span className="text-gold-500">Locksmith Since 2014</span>
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  TrustLock is a locksmith service based at 46 Grove Vale,{" "}
                  <Link href="/areas/dulwich" className="text-gold-600 hover:underline font-medium">Dulwich</Link>, SE22 8DY. We&apos;ve
                  been serving homes and businesses across{" "}
                  <Link href="/areas/east-dulwich" className="text-gold-600 hover:underline font-medium">East Dulwich</Link>,{" "}
                  <Link href="/areas/peckham" className="text-gold-600 hover:underline font-medium">Peckham</Link>,{" "}
                  <Link href="/areas/camberwell" className="text-gold-600 hover:underline font-medium">Camberwell</Link>,{" "}
                  <Link href="/areas/herne-hill" className="text-gold-600 hover:underline font-medium">Herne Hill</Link>,{" "}
                  <Link href="/areas/brixton" className="text-gold-600 hover:underline font-medium">Brixton</Link> and{" "}
                  <Link href="/areas/southwark" className="text-gold-600 hover:underline font-medium">Southwark</Link>{" "}
                  since 2014 — over 2,500 jobs completed across South London, and counting.
                </p>
                <p>
                  Every engineer on our team is DBS-checked, carries £2 million public liability
                  insurance, and is trained to work with TS007:2012-rated{" "}
                  <Link href="/services/lock-installation" className="text-gold-600 hover:underline font-medium">anti-snap cylinders</Link>,{" "}
                  BS3621:2007+A2:2012 mortice deadlocks, and the full range of{" "}
                  <Link href="/services/upvc-door-lock-repair" className="text-gold-600 hover:underline font-medium">UPVC multipoint mechanisms</Link>{" "}
                  common to South London&apos;s period and modern housing stock.
                </p>
                <p>
                  Our approach hasn&apos;t changed since we started: fixed prices confirmed before we
                  touch anything, honest advice about what you need (and what you don&apos;t), and work
                  carried out to British Standard specification with quality parts. No call-out
                  surprise fees, no upselling, no temporary fixes that bring you back in six months.
                </p>
                <p>
                  Whether you&apos;re locked out at 7:30pm on a bank holiday Sunday, you&apos;ve just moved
                  into a Dulwich terrace and want every cylinder replaced before you unpack, or your
                  UPVC door handle has dropped for the second time this year — call us on{" "}
                  <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} className="text-gold-600 font-semibold hover:underline">{BUSINESS.phone}</a>.
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
        heading="Locksmith Questions — Answered Directly"
        subheading="The questions we hear most often, answered clearly. No filler, no hedging."
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
        heading="Need a Locksmith in Dulwich or South London?"
        subheading={`Call ${BUSINESS.phone} for a 30-minute response across SE22, SE21, SE15, SE5, SE24, SW2 and SE1 — or send a message and we'll reply within the hour. Fixed prices, no hidden fees.`}
        variant="navy"
      />
    </>
  );
}
