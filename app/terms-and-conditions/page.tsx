import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = genMeta({
  title: "Terms & Conditions | TrustLock Locksmith Dulwich",
  description: "Terms and Conditions for TrustLock Locksmith Dulwich services.",
  path: "/terms-and-conditions",
  noIndex: false,
});

export default function TermsPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white py-12">
        <div className="container">
          <Breadcrumbs items={[{ label: "Terms & Conditions", href: "/terms-and-conditions" }]} light className="mb-6" />
          <h1 className="text-3xl font-extrabold">Terms &amp; Conditions</h1>
          <p className="text-white/60 mt-2 text-sm">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto">
          <article className="prose-custom space-y-8">
            <section>
              <h2>1. Service Provider</h2>
              <p>
                These terms govern the provision of locksmith services by {BUSINESS.name}, based at{" "}
                {BUSINESS.address.full} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;the
                company&rdquo;).
              </p>
            </section>

            <section>
              <h2>2. Quotes and Pricing</h2>
              <p>
                All quotes are provided in good faith based on the information available at the time.
                We always provide a fixed price before commencing work. The quoted price will not be
                exceeded without your explicit agreement.
              </p>
              <p>
                Where additional unforeseen work is identified during a job, we will advise you and
                obtain your agreement before proceeding and incurring additional cost.
              </p>
            </section>

            <section>
              <h2>3. Service Standards</h2>
              <p>
                We will perform all services with reasonable skill and care, using appropriate
                materials and techniques. We aim to use non-destructive entry techniques wherever
                practicable and will advise you if this is not possible before using any destructive
                method.
              </p>
            </section>

            <section>
              <h2>4. Customer Responsibilities</h2>
              <p>By instructing us to carry out work, you confirm that:</p>
              <ul>
                <li>You are the owner or authorised occupier of the property</li>
                <li>You have the right to authorise the work to be carried out</li>
                <li>You will provide accurate information about the property and the situation</li>
              </ul>
              <p>
                We reserve the right to refuse to carry out work if we have reasonable grounds to
                suspect the property is not the customer&apos;s or if we cannot verify authorisation.
              </p>
            </section>

            <section>
              <h2>5. Liability</h2>
              <p>
                Our liability for any damage caused during the performance of our services is limited
                to the cost of repairing or replacing the damaged item. We are not liable for
                consequential losses.
              </p>
              <p>
                We carry full public liability insurance. Details available on request.
              </p>
            </section>

            <section>
              <h2>6. Warranty</h2>
              <p>
                Parts and materials supplied by us carry the manufacturer&apos;s warranty. Our labour is
                warranted for 12 months from the date of work, subject to normal use and no
                subsequent modification by third parties.
              </p>
            </section>

            <section>
              <h2>7. Payment</h2>
              <p>
                Payment is due on completion of works unless otherwise agreed in writing. We accept
                cash, card and bank transfer.
              </p>
            </section>

            <section>
              <h2>8. Cancellation</h2>
              <p>
                If you need to cancel a scheduled appointment, please give us as much notice as
                possible. Cancellations with less than 2 hours notice for non-emergency appointments
                may incur a cancellation fee equivalent to our standard call-out charge.
              </p>
            </section>

            <section>
              <h2>9. Governing Law</h2>
              <p>
                These terms are governed by the laws of England and Wales. Any disputes will be
                subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2>10. Contact</h2>
              <p>
                For any queries regarding these terms, contact us at{" "}
                <a href={BUSINESS.emailHref}>{BUSINESS.email}</a> or call{" "}
                <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>.
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
