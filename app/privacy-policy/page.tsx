import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = genMeta({
  title: "Privacy Policy | TrustLock Locksmith Dulwich",
  description: "Privacy Policy for TrustLock Locksmith Dulwich. How we collect, use and protect your personal data.",
  path: "/privacy-policy",
  noIndex: false,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white py-12">
        <div className="container">
          <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} light className="mb-6" />
          <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
          <p className="text-white/60 mt-2 text-sm">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto">
          <article className="prose-custom space-y-8">
            <section>
              <h2>1. Who We Are</h2>
              <p>
                {BUSINESS.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is a
                locksmith business based at {BUSINESS.address.full}. We are the data controller for
                personal data collected via this website.
              </p>
              <p>
                Contact: <a href={BUSINESS.emailHref}>{BUSINESS.email}</a> /{" "}
                <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
              </p>
            </section>

            <section>
              <h2>2. Data We Collect</h2>
              <p>We collect personal data you provide directly when you:</p>
              <ul>
                <li>Contact us via our website contact form (name, phone, email, address, message)</li>
                <li>Call or email us directly</li>
                <li>Engage us to carry out work at your property</li>
              </ul>
              <p>
                We also collect limited technical data via our website hosting and analytics (IP
                address, browser type, pages visited) using privacy-respecting tools.
              </p>
            </section>

            <section>
              <h2>3. How We Use Your Data</h2>
              <p>We use your personal data to:</p>
              <ul>
                <li>Respond to your enquiry</li>
                <li>Provide the locksmith services you have requested</li>
                <li>Issue invoices and process payments</li>
                <li>Comply with legal obligations</li>
                <li>Improve our service and website</li>
              </ul>
              <p>
                We do not use your data for marketing purposes without your explicit consent, and we
                never sell your data to third parties.
              </p>
            </section>

            <section>
              <h2>4. Legal Basis for Processing</h2>
              <p>We process your data on the following legal bases under UK GDPR:</p>
              <ul>
                <li><strong>Contract performance</strong> — to provide the services you&apos;ve requested</li>
                <li><strong>Legitimate interests</strong> — to respond to enquiries and improve our service</li>
                <li><strong>Legal obligation</strong> — to comply with applicable laws</li>
              </ul>
            </section>

            <section>
              <h2>5. Data Retention</h2>
              <p>
                We retain customer data for a maximum of 6 years in line with standard UK business
                record-keeping requirements. Enquiry data from prospective customers who did not
                instruct us is deleted within 12 months.
              </p>
            </section>

            <section>
              <h2>6. Your Rights</h2>
              <p>Under UK GDPR you have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request erasure of your data (subject to legal obligations)</li>
                <li>Object to processing</li>
                <li>Data portability</li>
                <li>Lodge a complaint with the ICO (ico.org.uk)</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>.
              </p>
            </section>

            <section>
              <h2>7. Cookies</h2>
              <p>
                Our website uses essential cookies required for the site to function. We use minimal
                analytics cookies to understand how visitors use our site; these do not track you
                personally. You can disable cookies in your browser settings.
              </p>
            </section>

            <section>
              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Material changes will be noted
                at the top of this page with an updated date.
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
