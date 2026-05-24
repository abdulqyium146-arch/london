"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { AREAS } from "@/lib/constants";

export function AreasCoverage() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="areas-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="section-label">
              <span className="w-6 h-px bg-gold-500" aria-hidden="true" />
              Coverage
            </p>
            <h2
              id="areas-heading"
              className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-5"
            >
              Serving Dulwich &amp; All of
              <br />
              <span className="text-gold-500">South London</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Based in the heart of Dulwich, we cover the SE22 postcode and a wide arc of
              surrounding South London neighbourhoods. Our locksmiths know these streets — which
              means faster response and no time wasted finding you.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Not sure if we cover your area? Give us a call and we&apos;ll confirm straight away.
              We&apos;d rather tell you honestly than let you wait unnecessarily.
            </p>
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors"
              aria-label="View all areas we cover"
            >
              View all areas
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Areas grid */}
          <div>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            >
              {AREAS.map((area) => (
                <motion.div
                  key={area.slug}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
                  }}
                >
                  <Link
                    href={`/areas/${area.slug}`}
                    className="group flex flex-col gap-1.5 p-4 rounded-xl border border-slate-100 bg-white hover:border-gold-200 hover:shadow-elegant transition-all duration-200"
                    aria-label={`Locksmith services in ${area.name}`}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin
                        size={14}
                        className="text-gold-500 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-bold text-navy-900 group-hover:text-gold-700 transition-colors">
                        {area.name}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono pl-5">
                      {area.postcode}
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* Catch-all tile */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
                }}
              >
                <div className="flex flex-col gap-1.5 p-4 rounded-xl border-2 border-dashed border-gold-200 bg-gold-50">
                  <span className="text-xs font-semibold text-gold-700">+ Surrounding Areas</span>
                  <span className="text-[11px] text-gold-600">Call to confirm coverage</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
