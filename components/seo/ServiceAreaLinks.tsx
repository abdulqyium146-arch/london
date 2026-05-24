import Link from "next/link";
import { MapPin } from "lucide-react";
import { AREAS } from "@/lib/constants";
import type { ServiceSlug } from "@/lib/constants";
import { SERVICE_AREA_ANCHORS } from "@/lib/data/internal-links";

interface Props {
  serviceSlug: ServiceSlug;
  serviceShortTitle: string;
}

// Renders the full service × area mesh on every service page.
// Each link uses a rotated anchor text variant (position % 3) for natural distribution.
export function ServiceAreaLinks({ serviceSlug, serviceShortTitle }: Props) {
  const anchorFn = SERVICE_AREA_ANCHORS[serviceSlug];

  return (
    <section
      className="section-padding bg-slate-50"
      aria-labelledby="service-areas-heading"
    >
      <div className="container">
        <div className="mb-6">
          <p className="section-label">
            <span className="w-6 h-px bg-gold-500" aria-hidden="true" />
            Coverage
          </p>
          <h2
            id="service-areas-heading"
            className="text-2xl font-bold text-navy-900"
          >
            {serviceShortTitle} Across South London
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            We provide {serviceShortTitle.toLowerCase()} services throughout Dulwich and the surrounding South London area.
          </p>
        </div>

        <ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          role="list"
        >
          {AREAS.map((area, i) => {
            const anchors = anchorFn(area.name);
            const anchor = anchors[i % anchors.length];
            return (
              <li key={area.slug}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-slate-100 hover:border-gold-200 hover:shadow-elegant text-sm text-slate-700 hover:text-navy-900 transition-all group"
                >
                  <MapPin
                    size={13}
                    className="text-gold-500 shrink-0 group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  />
                  <span className="capitalize">{anchor}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="mt-5 text-xs text-slate-400">
          Don&apos;t see your area?{" "}
          <Link href="/contact" className="text-gold-600 hover:text-gold-500 font-medium">
            Contact us
          </Link>{" "}
          — we cover all of South London.
        </p>
      </div>
    </section>
  );
}
