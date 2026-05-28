"use client";

import Link from "next/link";
import { Phone, Star, Shield, Clock, ChevronDown, CheckCircle2, MapPin } from "lucide-react";
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

const quickServices = [
  { label: "Emergency Lockout", href: "/services/emergency-locksmith", price: "from £65" },
  { label: "Lock Change", href: "/services/lock-installation", price: "from £85" },
  { label: "UPVC Repair", href: "/services/upvc-door-lock-repair", price: "from £75" },
  { label: "Burglary Repair", href: "/services/burglary-repair", price: "from £95" },
  { label: "Smart Locks", href: "/services/smart-lock-installation", price: "from £120" },
];

const postcodes = ["SE22", "SE21", "SE15", "SE5", "SE24", "SW2", "SE1"];

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
        <div className="py-16 md:py-24 lg:py-28 max-w-4xl mx-auto text-center">

          {/* Top badges row */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2.5 mb-7"
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
            {/* Live availability indicator */}
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-sm">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-semibold text-emerald-300">Available Now — 24/7</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-5"
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
            Professional locksmith across Dulwich &amp; South London.{" "}
            <strong className="text-white">Prices from £65.</strong>{" "}
            Fixed quote before we start — no call-out fee, no hidden charges.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.3}
          >
            <div className="flex flex-col items-center gap-1.5">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-3 px-8 py-4 bg-gold-500 text-navy-900 font-bold text-lg rounded-2xl hover:bg-gold-400 active:scale-[0.98] transition-all shadow-gold-lg animate-pulse-gold"
                aria-label={`Call us now: ${BUSINESS.phone}`}
              >
                <Phone size={20} aria-hidden="true" />
                {BUSINESS.phone}
              </a>
              <p className="text-xs text-white/50">
                <span className="text-gold-400 font-bold">&#9889;</span> Avg. arrival:{" "}
                <strong className="text-white/70">30 minutes</strong>
              </p>
            </div>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/10 hover:border-white/50 active:scale-[0.98] transition-all"
            >
              Get a Free Quote
            </Link>
          </motion.div>

          {/* Service quick-links — let users self-select + SEO internal links */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.38}
          >
            {quickServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/[0.12] hover:bg-white/[0.15] hover:border-white/25 transition-all"
              >
                <CheckCircle2
                  size={11}
                  className="text-gold-400 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold text-white/80 group-hover:text-white transition-colors">
                  {s.label}
                </span>
                <span className="text-xs text-white/35 font-normal">{s.price}</span>
              </Link>
            ))}
          </motion.div>

          {/* Trust bar */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.45}
          >
            <div className="flex items-center gap-2 text-sm text-white/60">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={12} className="fill-gold-400 text-gold-400" aria-hidden="true" />
                ))}
              </div>
              <span>
                <strong className="text-white">{BUSINESS.trustSignals.rating}</strong>{" "}
                <span className="text-white/40 text-xs">
                  ({BUSINESS.trustSignals.reviewCount} Google reviews)
                </span>
              </span>
            </div>
            <span className="text-white/20" aria-hidden="true">|</span>
            <div className="flex items-center gap-1.5 text-sm text-white/60">
              <Clock size={14} className="text-gold-400" aria-hidden="true" />
              <span>
                <strong className="text-white">{BUSINESS.trustSignals.responseTime}-min</strong>{" "}
                response
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
              <strong className="text-white">{BUSINESS.trustSignals.jobsCompleted}</strong>{" "}
              jobs completed
            </div>
          </motion.div>

          {/* Postcode coverage strip */}
          <motion.div
            className="flex items-center justify-center gap-2 flex-wrap"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.52}
          >
            <MapPin size={11} className="text-white/25 shrink-0" aria-hidden="true" />
            <span className="text-xs text-white/30 font-medium mr-0.5">Covers:</span>
            {postcodes.map((pc) => (
              <span
                key={pc}
                className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-white/[0.07] text-white/50 border border-white/[0.09]"
              >
                {pc}
              </span>
            ))}
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
