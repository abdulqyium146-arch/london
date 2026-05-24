import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { SchemaScript } from "@/components/common/SchemaScript";
import { generateBreadcrumbSchema } from "@/lib/schema/breadcrumb";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  light?: boolean;
}

export function Breadcrumbs({ items, className = "", light = false }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];
  const schema = generateBreadcrumbSchema(allItems);

  return (
    <>
      <SchemaScript schema={schema} />
      <nav aria-label="Breadcrumb" className={className}>
        <ol
          className={`flex flex-wrap items-center gap-1 text-sm ${
            light ? "text-white/70" : "text-slate-500"
          }`}
        >
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1">
                {index === 0 ? (
                  <Home
                    size={14}
                    className={light ? "text-white/50" : "text-slate-400"}
                    aria-hidden="true"
                  />
                ) : (
                  <ChevronRight
                    size={14}
                    className={light ? "text-white/30" : "text-slate-300"}
                    aria-hidden="true"
                  />
                )}
                {isLast ? (
                  <span
                    className={`font-medium ${light ? "text-white" : "text-slate-700"}`}
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={`hover:underline transition-colors ${
                      light
                        ? "text-white/70 hover:text-white"
                        : "text-slate-500 hover:text-gold-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
