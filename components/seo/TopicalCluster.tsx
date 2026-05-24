import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getServiceBySlug } from "@/lib/data/services";
import type { ServiceSlug } from "@/lib/constants";

interface Props {
  heading: string;
  serviceSlugs: ServiceSlug[];
  currentSlug?: ServiceSlug;
}

// Compact text-link cluster for semantic cross-linking within a service silo.
// Appears in the sidebar of service pages to reinforce topical authority.
export function TopicalCluster({ heading, serviceSlugs, currentSlug }: Props) {
  const linked = serviceSlugs
    .filter((s) => s !== currentSlug)
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  if (linked.length === 0) return null;

  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5">
      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
        {heading}
      </h3>
      <ul className="space-y-2" role="list">
        {linked.map((service) => (
          <li key={service!.slug}>
            <Link
              href={`/services/${service!.slug}`}
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-gold-600 transition-colors group"
            >
              <ChevronRight
                size={12}
                className="text-gold-400/50 group-hover:text-gold-500 shrink-0"
                aria-hidden="true"
              />
              {service!.shortTitle}
              {service!.priceFrom && (
                <span className="ml-auto text-xs text-slate-400">
                  from {service!.priceFrom}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
