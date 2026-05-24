import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: number;
  image?: string;
  featured?: boolean;
  className?: string;
  compact?: boolean;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  category,
  publishedAt,
  readingTime,
  image,
  featured,
  className,
  compact = false,
}: BlogCardProps) {
  const href = `/blog/${slug}`;

  if (compact) {
    return (
      <Link
        href={href}
        className={cn(
          "group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors",
          className
        )}
        aria-label={`Read: ${title}`}
      >
        <div className="flex-1 min-w-0">
          <span className="text-xs font-semibold text-gold-600 uppercase tracking-wide">
            {category}
          </span>
          <p className="text-sm font-semibold text-navy-900 mt-1 leading-snug line-clamp-2 group-hover:text-gold-700 transition-colors">
            {title}
          </p>
          <p className="text-xs text-slate-400 mt-1.5">{formatDate(publishedAt)}</p>
        </div>
        <ArrowRight
          size={16}
          className="text-slate-300 group-hover:text-gold-500 shrink-0 mt-1 group-hover:translate-x-1 transition-all"
          aria-hidden="true"
        />
      </Link>
    );
  }

  return (
    <article className={cn("group card-hover flex flex-col h-full", className)}>
      {image && (
        <div className="aspect-[16/9] bg-slate-100 overflow-hidden rounded-t-2xl">
          <div className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
            <span className="text-white/30 text-sm">Image</span>
          </div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="badge-gold">
            <Tag size={10} aria-hidden="true" />
            {category}
          </span>
          {featured && (
            <span className="badge badge-navy text-[10px]">Featured</span>
          )}
        </div>
        <h3 className="text-lg font-bold text-navy-900 mb-2 leading-snug group-hover:text-gold-700 transition-colors line-clamp-2">
          <Link href={href} aria-label={`Read: ${title}`}>
            {title}
          </Link>
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 flex-1 mb-4">
          {excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span>{formatDate(publishedAt)}</span>
            <span className="flex items-center gap-1">
              <Clock size={12} aria-hidden="true" />
              {readingTime} min read
            </span>
          </div>
          <Link
            href={href}
            className="flex items-center gap-1 text-sm font-semibold text-gold-600 hover:text-gold-500 group-hover:gap-2 transition-all"
            aria-label={`Read full article: ${title}`}
          >
            Read
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
