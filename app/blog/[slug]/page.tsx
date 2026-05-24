import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import { getBlogBySlug, blogPosts, getRecentPosts } from "@/lib/data/blog";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BlogCard } from "@/components/common/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { SchemaScript } from "@/components/common/SchemaScript";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";
import { formatDate } from "@/lib/utils";
import { BUSINESS, SITE_URL } from "@/lib/constants";
import type { ServiceSlug } from "@/lib/constants";
import { BlogMoneyLinks } from "@/components/seo/BlogMoneyLinks";
import { BLOG_TO_SERVICES, BLOG_TO_AREAS } from "@/lib/data/internal-links";
import { AREAS } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return genMeta({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${slug}`,
    keywords: post.tags,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = getRecentPosts(3).filter((p) => p.slug !== slug).slice(0, 3);
  const linkedServiceSlugs = (BLOG_TO_SERVICES[slug] ?? []) as ServiceSlug[];
  const linkedAreaSlugs = BLOG_TO_AREAS[slug] ?? [];
  const linkedAreas = linkedAreaSlugs
    .map((s) => AREAS.find((a) => a.slug === s))
    .filter(Boolean) as typeof AREAS[number][];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Organization",
      name: BUSINESS.name,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: SITE_URL,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    url: `${SITE_URL}/blog/${slug}`,
    articleBody: post.content.replace(/#{1,6}\s/g, "").replace(/\*\*/g, ""),
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <SchemaScript schema={articleSchema} />

      {/* Hero */}
      <section className="bg-hero-gradient text-white py-12 md:py-16">
        <div className="container max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.category, href: "/blog" },
            ]}
            light
            className="mb-6"
          />
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="badge badge-gold">
              <Tag size={10} aria-hidden="true" />
              {post.category}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-5 leading-snug">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} aria-hidden="true" />
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} aria-hidden="true" />
              {post.readingTime} min read
            </span>
            <span>{BUSINESS.name}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {/* Article */}
            <article className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-10 shadow-elegant">
                <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                  {post.excerpt}
                </p>
                <div className="divider mb-8" />
                <div className="prose-custom">
                  {post.content
                    .trim()
                    .split("\n")
                    .map((line, i) => {
                      if (line.startsWith("## ")) {
                        return (
                          <h2 key={i} className="text-2xl font-bold text-navy-900 mt-10 mb-4 first:mt-0">
                            {line.replace("## ", "")}
                          </h2>
                        );
                      }
                      if (line.startsWith("### ")) {
                        return (
                          <h3 key={i} className="text-xl font-bold text-navy-900 mt-8 mb-3">
                            {line.replace("### ", "")}
                          </h3>
                        );
                      }
                      if (line.startsWith("**") && line.endsWith("**")) {
                        return (
                          <p key={i} className="font-semibold text-navy-900 mt-4 mb-2">
                            {line.replace(/\*\*/g, "")}
                          </p>
                        );
                      }
                      if (line.startsWith("- ")) {
                        return (
                          <li key={i} className="text-slate-600 leading-relaxed ml-4 mb-1.5">
                            {line.replace("- ", "")}
                          </li>
                        );
                      }
                      if (line.trim() === "") return <div key={i} className="h-2" />;
                      return (
                        <p key={i} className="text-slate-600 leading-relaxed mb-4">
                          {line}
                        </p>
                      );
                    })}
                </div>

                <div className="divider mt-8 mb-6" />

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6">
                <Link
                  href="/blog"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-navy-900 transition-colors"
                >
                  <ArrowLeft size={14} aria-hidden="true" />
                  Back to Blog
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-500 transition-colors"
                >
                  Have a question? Contact us
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-5" aria-label="Article sidebar">
              <div className="bg-navy-900 rounded-2xl p-5 text-white sticky top-24">
                <h3 className="font-bold mb-3">Need a Locksmith?</h3>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  Available {BUSINESS.hours.shortFormatted} across South London.
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-all text-sm"
                  aria-label={`Call: ${BUSINESS.phone}`}
                >
                  {BUSINESS.phone}
                </a>
              </div>

              {/* Blog → money page funnel */}
              {linkedServiceSlugs.length > 0 && (
                <BlogMoneyLinks serviceSlugs={linkedServiceSlugs} />
              )}

              {/* Blog → area pages (local SEO co-citation) */}
              {linkedAreas.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-100 p-5">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                    Areas We Cover
                  </h3>
                  <ul className="space-y-2" role="list">
                    {linkedAreas.map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={`/areas/${area.slug}`}
                          className="text-sm text-slate-600 hover:text-gold-600 transition-colors"
                        >
                          Locksmith in {area.name} ({area.postcode})
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section-padding bg-white" aria-labelledby="related-posts-heading">
          <div className="container max-w-5xl mx-auto">
            <h2 id="related-posts-heading" className="text-2xl font-bold text-navy-900 mb-6">
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((p) => (
                <BlogCard
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  excerpt={p.excerpt}
                  category={p.category}
                  publishedAt={p.publishedAt}
                  readingTime={p.readingTime}
                  compact
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection variant="navy" />
    </>
  );
}
