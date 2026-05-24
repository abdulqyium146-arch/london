import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { AREAS, BUSINESS } from "@/lib/constants";
import { AreaCard } from "@/components/common/AreaCard";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";

export const metadata: Metadata = genMeta({
  title: "Areas We Cover | Locksmith Services Across South London – TrustLock",
  description:
    "TrustLock covers Dulwich, East Dulwich, Peckham, Camberwell, Brixton, Herne Hill, Southwark and surrounding South London areas. Fast locksmith response across SE & SW postcodes.",
  path: "/areas",
  keywords: ["locksmith South London", "locksmith areas covered", "locksmith SE22", "locksmith near me South London"],
});

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient text-white py-14 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: "Areas", href: "/areas" }]} light className="mb-6" />
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-gold-400" aria-hidden="true" />
              <span className="text-gold-300 text-sm font-medium">South London Coverage</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              Areas We Cover
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Based in Dulwich (SE22), we provide fast locksmith services across South London.
              Here&apos;s where we operate regularly — but if you&apos;re nearby and not listed, give us a
              call.
            </p>
          </div>
        </div>
      </section>

      {/* Areas grid */}
      <section className="section-padding bg-slate-50" aria-labelledby="areas-list-heading">
        <div className="container">
          <h2 id="areas-list-heading" className="sr-only">
            All areas covered
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {AREAS.map((area) => (
              <AreaCard
                key={area.slug}
                name={area.name}
                slug={area.slug}
                postcode={area.postcode}
                description={area.description}
                landmark={area.landmark}
              />
            ))}
          </div>

          {/* Coverage explainer */}
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-slate-500 leading-relaxed mb-4">
              Our listed areas represent where we operate most regularly, but our coverage extends
              to a wide arc of South and South East London. If you&apos;re not on this list, please
              call us on{" "}
              <a href={BUSINESS.phoneHref} className="phone-link">
                {BUSINESS.phone}
              </a>{" "}
              and we&apos;ll confirm whether we can help and give you an honest arrival estimate.
            </p>
            <p className="text-sm text-slate-400">
              We always aim to give you a realistic time estimate — not the shortest possible number
              just to get the call.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Can't See Your Area?"
        subheading="Call us and we'll confirm straight away whether we cover your postcode and how quickly we can be with you."
        variant="navy"
      />
    </>
  );
}
