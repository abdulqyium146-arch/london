import Link from "next/link";
import { MapPin } from "lucide-react";
import { AREAS } from "@/lib/constants";
import type { AreaSlug } from "@/lib/constants";
import { AREA_NEIGHBORS } from "@/lib/data/internal-links";

interface Props {
  currentSlug: AreaSlug;
}

// Replaces the generic "all areas" list with true geographic neighbors.
// Geographically relevant links carry stronger local SEO co-citation signals.
export function NearbyAreaLinks({ currentSlug }: Props) {
  const neighborSlugs = AREA_NEIGHBORS[currentSlug] ?? [];
  const neighbors = neighborSlugs
    .map((slug) => AREAS.find((a) => a.slug === slug))
    .filter(Boolean) as typeof AREAS[number][];

  if (neighbors.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5">
      <h3 className="font-bold text-navy-900 mb-1">Nearby Areas</h3>
      <p className="text-xs text-slate-400 mb-4">
        We also cover these neighbouring areas
      </p>
      <ul className="space-y-2" role="list">
        {neighbors.map((area) => (
          <li key={area.slug}>
            <Link
              href={`/areas/${area.slug}`}
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-gold-600 transition-colors group"
            >
              <MapPin
                size={12}
                className="text-slate-300 group-hover:text-gold-500 shrink-0 transition-colors"
                aria-hidden="true"
              />
              <span>
                Locksmith in {area.name}{" "}
                <span className="text-slate-400 text-xs">({area.postcode})</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/areas"
        className="mt-4 flex items-center gap-1 text-xs font-semibold text-gold-600 hover:text-gold-500 transition-colors"
      >
        View all areas →
      </Link>
    </div>
  );
}
