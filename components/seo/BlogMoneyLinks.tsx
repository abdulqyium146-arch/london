import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";
import { getServiceBySlug } from "@/lib/data/services";
import type { ServiceSlug } from "@/lib/constants";

interface Props {
  serviceSlugs: ServiceSlug[];
  heading?: string;
}

// Sidebar / inline block that funnels blog post readers to service money pages.
// This is the blog → money page authority pipeline.
export function BlogMoneyLinks({ serviceSlugs, heading = "Related Services" }: Props) {
  const linkedServices = serviceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  if (linkedServices.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5">
      <div className="flex items-center gap-2 mb-4">
        <Wrench size={14} className="text-gold-500" aria-hidden="true" />
        <h3 className="font-bold text-navy-900 text-sm">{heading}</h3>
      </div>
      <ul className="space-y-2.5" role="list">
        {linkedServices.map((service) => (
          <li key={service!.slug}>
            <Link
              href={`/services/${service!.slug}`}
              className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-navy-900 transition-colors group"
            >
              <span className="leading-snug">{service!.shortTitle}</span>
              <ArrowRight
                size={12}
                className="text-slate-300 group-hover:text-gold-500 shrink-0 transition-colors"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-4 border-t border-slate-100">
        <Link
          href="/services/emergency-locksmith"
          className="text-xs font-semibold text-gold-600 hover:text-gold-500 transition-colors"
        >
          View all locksmith services →
        </Link>
      </div>
    </div>
  );
}
