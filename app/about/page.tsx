import type { Metadata } from "next";
import { Shield, CheckCircle2, Users, Award } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { TrustBadges } from "@/components/common/TrustBadges";
import { CTASection } from "@/components/sections/CTASection";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";

export const metadata: Metadata = genMeta({
  title: "About TrustLock | Dulwich's Professional Locksmith Service",
  description:
    "Learn about TrustLock Locksmith Dulwich — our background, values, and commitment to honest, professional locksmith services across South London.",
  path: "/about",
});

const values = [
  {
    icon: Shield,
    title: "Honest Pricing",
    description:
      "We quote a fixed price before starting any work. We've never charged more than our initial quote, and we never will.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Over Speed",
    description:
      "We aim to be fast, but never at the expense of doing the job properly. A repair done right the first time saves everyone time.",
  },
  {
    icon: Users,
    title: "Local First",
    description:
      "We're a small, local business rooted in South London. We care about our reputation in this community because we live here too.",
  },
  {
    icon: Award,
    title: "Genuine Expertise",
    description:
      "Every locksmith on our team is fully trained and experienced. We invest in ongoing training so we're always up to date with the latest lock technology.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient text-white py-14 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: "About", href: "/about" }]} light className="mb-6" />
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              About TrustLock
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              A local locksmith service built on honesty, real expertise, and a genuine commitment
              to the South London communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="section-padding bg-white" aria-labelledby="our-story-heading">
        <div className="container max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <p className="section-label">
                <span className="w-6 h-px bg-gold-500" aria-hidden="true" />
                Our Story
              </p>
              <h2
                id="our-story-heading"
                className="text-3xl font-extrabold text-navy-900 mb-6"
              >
                A Locksmith You&apos;d Recommend
                <br />
                <span className="text-gold-500">to Your Neighbours</span>
              </h2>

              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  TrustLock was founded in Dulwich with a straightforward idea: build a locksmith
                  service that people actually trust. Not because of a slick website, but because of
                  consistent, honest service on every job.
                </p>
                <p>
                  After years of working for larger locksmith companies and watching the industry
                  give itself a poor reputation through hidden charges, overpriced locks and
                  unnecessary drilling, we decided to do things differently.
                </p>
                <p>
                  We&apos;re based in SE22. Our team works across Dulwich, East Dulwich, Peckham,
                  Camberwell, Brixton, Herne Hill, Southwark and the wider South London area every
                  single day. We know these streets and we know these properties.
                </p>
                <p>
                  Every job we take on gets the same approach: a clear fixed price before we start,
                  the best non-destructive technique available, proper parts from reputable
                  manufacturers, and honest advice afterwards. No pressure selling, no exaggerated
                  security threats, no shortcuts.
                </p>
                <p>
                  That&apos;s how we&apos;ve built over {BUSINESS.trustSignals.reviewCount} five-star reviews
                  and how we&apos;ve completed {BUSINESS.trustSignals.jobsCompleted} jobs across South
                  London.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: BUSINESS.trustSignals.yearsExperience, label: "Years in Dulwich" },
                  { value: BUSINESS.trustSignals.jobsCompleted, label: "Jobs Completed" },
                  { value: `${BUSINESS.trustSignals.rating}★`, label: "Google Rating" },
                  { value: BUSINESS.trustSignals.reviewCount, label: "Verified Reviews" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center"
                  >
                    <p className="text-3xl font-extrabold text-navy-900 mb-1">{stat.value}</p>
                    <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-5 bg-navy-900 rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Shield size={20} className="text-gold-400" aria-hidden="true" />
                  <h3 className="font-bold">Our Guarantees</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Fixed price quoted before we start",
                    "Fully insured — every job",
                    "Insurance-approved locks available",
                    "No unnecessary drilling",
                    "Receipt and documentation provided",
                    "Honest advice, no pressure selling",
                  ].map((g) => (
                    <li key={g} className="flex items-start gap-2 text-sm text-white/70">
                      <CheckCircle2
                        size={13}
                        className="text-gold-400 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50" aria-labelledby="values-heading">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">
              <span className="w-6 h-px bg-gold-500" aria-hidden="true" />
              What We Stand For
            </p>
            <h2 id="values-heading" className="text-3xl font-extrabold text-navy-900">
              Our Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-gold-200 hover:shadow-elegant transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-gold-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="section-padding-sm bg-white border-y border-slate-100" aria-label="Credentials and accreditations">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-center text-lg font-bold text-navy-900 mb-8">
            Credentials &amp; Accreditations
          </h2>
          <TrustBadges />
        </div>
      </section>

      <CTASection
        heading="Want to Talk to Us Directly?"
        subheading="We're happy to answer any questions before you book. Call us or send a message."
        variant="navy"
      />
    </>
  );
}
