import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BlogCard } from "@/components/common/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";
import { blogPosts, blogCategories } from "@/lib/data/blog";

export const metadata: Metadata = genMeta({
  title: "Blog | Locksmith Advice & Home Security Tips – TrustLock",
  description:
    "Security advice, lock guides, UPVC door tips and locksmith pricing guidance from the TrustLock team in Dulwich. Practical, honest advice for South London homeowners.",
  path: "/blog",
  keywords: ["locksmith blog", "home security advice", "anti-snap locks", "UPVC door repair"],
});

export default function BlogPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white py-14 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} light className="mb-6" />
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              Security Advice &amp; Tips
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Practical, honest guidance on home security, lock maintenance, and keeping your
              South London property safe.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50" aria-labelledby="blog-list-heading">
        <div className="container">
          <h2 id="blog-list-heading" className="sr-only">All Articles</h2>

          {/* Category filter (static) */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="badge badge-navy text-xs">All</span>
            {blogCategories.map((cat) => (
              <span key={cat} className="badge badge-gold text-xs cursor-default">
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                publishedAt={post.publishedAt}
                readingTime={post.readingTime}
                featured={post.featured}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Have a Security Question?"
        subheading="Call us — we're happy to give you honest advice with no obligation to book."
        variant="navy"
      />
    </>
  );
}
