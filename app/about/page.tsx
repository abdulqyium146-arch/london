import type { Metadata } from "next";
import Image from "next/image";
import { Shield, CheckCircle2, Users, Award } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { TrustBadges } from "@/components/common/TrustBadges";
import { CTASection } from "@/components/sections/CTASection";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";

export const metadata: Metadata = genMeta({
  title: "About TrustLock | Dulwich Locksmith Since 2014 — SE22",
  description:
    "TrustLock is a Dulwich-based locksmith (46 Grove Vale, SE22) operating since 2014. DBS-checked engineers, £2m public liability insurance, BS3621 and TS007:2012 certified work across South London.",
  path: "/about",
});

const values = [
  {
    icon: Shield,
    title: "Fixed Prices, Always",
    description:
      "We confirm a fixed price before we start — on the phone for most standard jobs, on-site after a 2-minute assessment for complex repairs. The number we quote is the number on the invoice. We have never charged more than our quoted price.",
  },
  {
    icon: CheckCircle2,
    title: "Non-Destructive First",
    description:
      "Over 90% of our lockouts are resolved without drilling. We carry professional picking tools and bypass equipment and exhaust every non-destructive option before considering anything that damages the lock. This saves you the cost of a replacement you didn't need.",
  },
  {
    icon: Users,
    title: "Genuinely Local",
    description:
      "We're based at 46 Grove Vale, SE22 — which means we live in the communities we serve. Our reputation in Dulwich, East Dulwich, Peckham and Herne Hill matters to us personally. When you call us, you're calling a neighbour.",
  },
  {
    icon: Award,
    title: "Technically Trained",
    description:
      "Every engineer understands TS007:2012 cylinder grading, BS3621 mortice deadlock standards, UPVC multipoint mechanism identification, and the specific lock types common to South London's Victorian and Edwardian housing stock. We invest in training and tooling continuously.",
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
              TrustLock is a Dulwich-based locksmith service (46 Grove Vale, SE22) operating since
              2014. DBS-checked engineers, £2 million public liability insurance, and a consistent
              track record across South London&apos;s residential and commercial properties.
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
                  TrustLock was founded in Dulwich in 2014 with a straightforward intention: build
                  a locksmith service that earns trust through consistent, transparent work — not
                  through advertising promises. We&apos;re based at 46 Grove Vale, SE22, and our
                  engineers live and work in the same South London postcodes we serve every day.
                </p>
                <p>
                  We started after spending years in the industry watching otherwise capable
                  locksmiths undermine customer confidence through unnecessary drilling, inflated
                  parts pricing, and pressure selling on security upgrades people didn&apos;t need. The
                  locksmith industry has a reputation problem that isn&apos;t hard to understand — and
                  we set out to be an exception to it.
                </p>
                <p>
                  Over {BUSINESS.trustSignals.jobsCompleted} jobs later, the approach is the same:
                  a fixed price confirmed before we start, the least invasive technique available,
                  quality parts from Ultion, Yale, ERA, Mul-T-Lock and Avocet, and honest advice
                  about what you genuinely need. We work to TS007:2012 and BS3621:2007+A2:2012
                  standards and carry £2 million public liability insurance on every job.
                </p>
                <p>
                  We know Dulwich&apos;s period properties — the Victorian terraces on Croxted Road and
                  Lordship Lane, the Edwardian semis around Dulwich Village, the purpose-built
                  blocks across East Dulwich. We know which locks common to these properties need
                  anti-snap upgrades, which UPVC mechanism families cover most South London doors,
                  and how to work sensitively with older door frames that don&apos;t tolerate a heavy-
                  handed approach. That local knowledge makes us faster, and it makes us better.
                </p>
              </div>
            </div>

            {/* Team photo + stats */}
            <div className="lg:col-span-2 space-y-5">
              {/* Team photo — E-E-A-T: real engineers, branded van, SE22 street sign */}
              <figure className="rounded-2xl overflow-hidden shadow-elegant">
                <Image
                  src="/images/trustlock-locksmiths-dulwich-se22-team.webp"
                  alt="TrustLock Locksmith Dulwich — two DBS-checked engineers in branded uniform standing beside their TrustLock service van on a Dulwich SE22 street, South London period properties in background"
                  width={800}
                  height={560}
                  className="w-full h-auto object-cover"
                  priority
                />
                <figcaption className="bg-navy-900 text-white/60 text-xs px-4 py-2.5 flex items-center justify-between">
                  <span>TrustLock team — Dulwich SE22</span>
                  <span className="text-gold-400 font-semibold">Since 2014</span>
                </figcaption>
              </figure>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: BUSINESS.trustSignals.yearsExperience, label: "Years in Dulwich" },
                  { value: BUSINESS.trustSignals.jobsCompleted, label: "Jobs Completed" },
                  { value: `${BUSINESS.trustSignals.rating}★`, label: "Google Rating" },
                  { value: BUSINESS.trustSignals.reviewCount, label: "Verified Reviews" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center"
                  >
                    <p className="text-2xl font-extrabold text-navy-900 mb-0.5">{stat.value}</p>
                    <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-navy-900 rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Shield size={20} className="text-gold-400" aria-hidden="true" />
                  <h3 className="font-bold">Our Guarantees</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Fixed price confirmed before we touch anything",
                    "£2m public liability insurance — every job",
                    "TS007:2012 & BS3621:2007+A2:2012 certified work",
                    "Non-destructive entry — drilling only as last resort",
                    "Signed invoice and documentation for insurance",
                    "DBS-checked engineers on every call",
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
