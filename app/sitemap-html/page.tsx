import type { Metadata } from "next";
import Link from "next/link";
import { AREAS, BUSINESS } from "@/lib/constants";
import { getServiceBySlug } from "@/lib/data/services";
import { blogPosts } from "@/lib/data/blog";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = genMeta({
  title: "Site Map | TrustLock Locksmith Dulwich",
  description: `Complete index of all pages on the ${BUSINESS.name} website — services, areas covered, guides and contact information.`,
  path: "/sitemap-html",
});

const serviceGroups = [
  {
    label: "Emergency & Repair",
    slugs: ["emergency-locksmith", "burglary-repair", "lock-repair", "upvc-door-lock-repair"],
  },
  {
    label: "Residential & Security",
    slugs: ["residential-locksmith", "lock-installation", "smart-lock-installation"],
  },
  {
    label: "Commercial & Automotive",
    slugs: ["commercial-locksmith", "automotive-locksmith"],
  },
];

export default function HtmlSitemapPage() {

  return (
    <>
      <section className="bg-hero-gradient text-white py-12">
        <div className="container">
          <Breadcrumbs items={[{ label: "Sitemap", href: "/sitemap-html" }]} light className="mb-6" />
          <h1 className="text-3xl font-extrabold tracking-tight">Site Map</h1>
          <p className="text-white/60 mt-2 text-sm">
            Every page on {BUSINESS.name} — organised for easy browsing.
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container max-w-4xl mx-auto space-y-12">

          {/* Core pages */}
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-4 pb-2 border-b border-slate-200">
              Main Pages
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2" role="list">
              {[
                { label: "Home", href: "/" },
                { label: "About TrustLock", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "FAQ — Locksmith Questions Answered", href: "/faq" },
                { label: "All Services", href: "/services/emergency-locksmith" },
                { label: "Areas We Cover", href: "/areas" },
                { label: "Blog & Security Guides", href: "/blog" },
              ].map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-slate-700 hover:text-gold-600 transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services grouped by cluster */}
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-4 pb-2 border-b border-slate-200">
              Locksmith Services
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {serviceGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                    {group.label}
                  </h3>
                  <ul className="space-y-1.5" role="list">
                    {group.slugs.map((slug) => {
                      const svc = getServiceBySlug(slug as Parameters<typeof getServiceBySlug>[0]);
                      if (!svc) return null;
                      return (
                        <li key={slug}>
                          <Link
                            href={`/services/${slug}`}
                            className="text-sm text-slate-700 hover:text-gold-600 transition-colors"
                          >
                            {svc.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-4 pb-2 border-b border-slate-200">
              Areas We Cover
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2" role="list">
              <li>
                <Link href="/areas" className="text-sm text-slate-700 hover:text-gold-600 transition-colors font-medium">
                  All Areas — Overview
                </Link>
              </li>
              {AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-sm text-slate-700 hover:text-gold-600 transition-colors"
                  >
                    Locksmith in {area.name} ({area.postcode})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          {blogPosts.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-4 pb-2 border-b border-slate-200">
                Blog & Security Guides
              </h2>
              <ul className="space-y-2" role="list">
                {blogPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm text-slate-700 hover:text-gold-600 transition-colors"
                    >
                      {post.title}
                      <span className="text-xs text-slate-400 ml-2">— {post.category}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Legal */}
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-4 pb-2 border-b border-slate-200">
              Legal
            </h2>
            <ul className="space-y-2" role="list">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "XML Sitemap", href: "/sitemap.xml" },
              ].map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-slate-700 hover:text-gold-600 transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
