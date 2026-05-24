import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";

interface Props {
  areaName: string;
  areaSlug: string;
}

// Mirror of ServiceAreaLinks — shown on area pages to cross-link all 9 services.
// Uses area-specific anchor text for keyword-rich contextual links.
export function AreaServiceLinks({ areaName, areaSlug }: Props) {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby={`area-services-heading-${areaSlug}`}
    >
      <div className="container">
        <div className="mb-6">
          <p className="section-label">
            <span className="w-6 h-px bg-gold-500" aria-hidden="true" />
            Services Available
          </p>
          <h2
            id={`area-services-heading-${areaSlug}`}
            className="text-2xl font-bold text-navy-900"
          >
            Locksmith Services in {areaName}
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            The full range of TrustLock services is available across {areaName} — same team, same
            pricing.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" role="list">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="flex items-center justify-between gap-3 px-5 py-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-gold-200 hover:bg-white hover:shadow-elegant text-sm transition-all group"
              >
                <div>
                  <span className="font-semibold text-navy-900 group-hover:text-gold-700 transition-colors block leading-snug">
                    {service.shortTitle} in {areaName}
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5 block">
                    from {service.priceFrom}
                  </span>
                </div>
                <ArrowRight
                  size={14}
                  className="text-slate-300 group-hover:text-gold-500 shrink-0 transition-colors"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
