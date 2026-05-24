"use client";

import Link from "next/link";
import { Phone, Star, Shield, Clock, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export function Hero() {
  return (
    <section
      className="relative bg-hero-gradient text-white overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient accent blobs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.06] rounded-full blur-[100px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.04] rounded-full blur-[80px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }}
      />

      <div className="container relative z-10">
        <div className="py-20 md:py-28 lg:py-32 max-w-4xl mx-auto text-center">
          {/* Label */}
          <motion.div
            className="flex items-center justify-center gap-2 mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <Shield size={14} className="text-gold-400" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-300">
                Dulwich&apos;s Most Trusted Locksmith
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.1}
          >
            Locked Out?{" "}
            <span className="text-gold-400">We&apos;re On</span>
            <br className="hidden sm:block" />
            <span className="text-gold-400"> Our Way.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
          >
            Fast, professional locksmith services across Dulwich, East Dulwich, Peckham and South
            London. Fixed prices, no hidden fees, fully insured.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.3}
          >
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-3 px-8 py-4 bg-gold-500 text-navy-900 font-bold text-lg rounded-2xl hover:bg-gold-400 active:scale-[0.98] transition-all shadow-gold-lg animate-pulse-gold"
              aria-label={`Call us now: ${BUSINESS.phone}`}
            >
              <Phone size={20} aria-hidden="true" />
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/10 hover:border-white/50 active:scale-[0.98] transition-all"
            >
              Get a Free Quote
            </Link>
          </motion.div>

          {/* Trust indicators row */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.4}
          >
            <div className="flex items-center gap-2 text-sm text-white/60">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={12} className="fill-gold-400 text-gold-400" aria-hidden="true" />
                ))}
              </div>
              <span>
                <strong className="text-white">{BUSINESS.trustSignals.rating}</strong> on Google
              </span>
            </div>
            <span className="text-white/20" aria-hidden="true">|</span>
            <div className="flex items-center gap-1.5 text-sm text-white/60">
              <Clock size={14} className="text-gold-400" aria-hidden="true" />
              <span>
                <strong className="text-white">{BUSINESS.trustSignals.responseTime} min</strong>{" "}
                avg. response
              </span>
            </div>
            <span className="text-white/20" aria-hidden="true">|</span>
            <div className="flex items-center gap-1.5 text-sm text-white/60">
              <Shield size={14} className="text-gold-400" aria-hidden="true" />
              <span>
                <strong className="text-white">Fully Insured</strong> &amp; DBS Checked
              </span>
            </div>
            <span className="text-white/20 hidden sm:block" aria-hidden="true">|</span>
            <div className="text-sm text-white/60">
              <strong className="text-white">{BUSINESS.trustSignals.jobsCompleted}</strong> jobs completed
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 animate-float">
        <ChevronDown size={24} aria-hidden="true" />
      </div>
    </section>
  );
}
