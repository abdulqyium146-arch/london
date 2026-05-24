import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { services } from "@/lib/data/services";

interface Props {
  currentSlug?: string;
  heading?: string;
}

// Compact sidebar list of all 9 services — used on service pages so every
// service page links to all other service pages regardless of topical cluster.
export function AllServicesNav({ currentSlug, heading = "All Services" }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5">
      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
        {heading}
      </h3>
      <ul className="space-y-1.5" role="list">
        {services.map((service) => {
          const isCurrent = service.slug === currentSlug;
          return (
            <li key={service.slug}>
              {isCurrent ? (
                <span className="flex items-center gap-2 text-sm font-semibold text-gold-600 py-1 px-2 bg-gold-50 rounded-lg">
                  <ChevronRight size={11} className="text-gold-500 shrink-0" aria-hidden="true" />
                  {service.shortTitle}
                </span>
              ) : (
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-gold-600 transition-colors group py-1 px-2 rounded-lg hover:bg-gold-50"
                >
                  <ChevronRight
                    size={11}
                    className="text-slate-300 group-hover:text-gold-500 shrink-0 transition-colors"
                    aria-hidden="true"
                  />
                  {service.shortTitle}
                  <span className="ml-auto text-xs text-slate-300 group-hover:text-slate-400">
                    {service.priceFrom}
                  </span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      <div className="mt-4 pt-3 border-t border-slate-100">
        <Link
          href="/services"
          className="text-xs font-semibold text-gold-600 hover:text-gold-500 transition-colors flex items-center gap-1"
        >
          View all services <ChevronRight size={11} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
