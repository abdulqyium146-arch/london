"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown, Shield } from "lucide-react";
import { BUSINESS, NAVIGATION } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Emergency top bar */}
      <div className="bg-navy-900 text-white py-2 text-center text-xs sm:text-sm font-medium">
        <div className="container flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <span className="flex items-center gap-1.5">
            <Shield size={12} className="text-gold-400" aria-hidden="true" />
            Fully Insured &amp; Insurance Approved
          </span>
          <span className="text-white/30 hidden sm:block">|</span>
          <span>Available{" "}
            <strong className="text-gold-400">{BUSINESS.hours.shortFormatted}</strong>
          </span>
          <span className="text-white/30 hidden sm:block">|</span>
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-1.5 text-gold-400 font-bold hover:text-gold-300 transition-colors"
            aria-label={`Call us: ${BUSINESS.phone}`}
          >
            <Phone size={12} aria-hidden="true" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-elegant border-b border-slate-100"
            : "bg-white border-b border-slate-100"
        )}
        role="banner"
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0"
              aria-label={`${BUSINESS.name} — Home`}
            >
              <div className="w-9 h-9 rounded-lg bg-navy-900 flex items-center justify-center">
                <Shield size={18} className="text-gold-400" aria-hidden="true" />
              </div>
              <div className="leading-none">
                <span className="block text-base font-extrabold text-navy-900 tracking-tight">
                  TrustLock
                </span>
                <span className="block text-[10px] font-medium text-slate-400 tracking-widest uppercase">
                  Locksmith Dulwich
                </span>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAVIGATION.map((item) => {
                if ("children" in item) {
                  return (
                    <div key={item.label} className="relative group">
                      <button
                        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-navy-900 rounded-lg hover:bg-slate-50 transition-colors"
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                        onClick={() => setServicesOpen(!servicesOpen)}
                        onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className="transition-transform group-hover:rotate-180"
                          aria-hidden="true"
                        />
                      </button>

                      {/* Mega dropdown */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[520px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="bg-white rounded-2xl shadow-elegant-xl border border-slate-100 p-4 grid grid-cols-2 gap-1">
                          {"children" in item &&
                            item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-navy-900 hover:bg-gold-50 transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" aria-hidden="true" />
                                {child.label}
                              </Link>
                            ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-navy-900 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 px-4 py-2 bg-navy-900 text-white rounded-xl font-semibold text-sm hover:bg-navy-800 transition-colors"
                aria-label={`Call us: ${BUSINESS.phone}`}
              >
                <Phone size={15} aria-hidden="true" />
                {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-1 px-4 py-2 border-2 border-gold-500 text-gold-700 rounded-xl font-semibold text-sm hover:bg-gold-500 hover:text-navy-900 transition-all"
              >
                Free Quote
              </Link>
            </div>

            {/* Mobile CTAs */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold-500 text-navy-900 hover:bg-gold-400 active:bg-gold-600 transition-colors"
                aria-label={`Call us: ${BUSINESS.phone}`}
              >
                <Phone size={18} aria-hidden="true" />
              </a>
              <button
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-40 w-80 max-w-[90vw] bg-white shadow-elegant-xl transition-transform duration-300 lg:hidden overflow-y-auto",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2"
            aria-label={`${BUSINESS.name} — Home`}
          >
            <div className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center">
              <Shield size={16} className="text-gold-400" aria-hidden="true" />
            </div>
            <span className="font-extrabold text-navy-900">TrustLock</span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <nav className="p-4 space-y-1" aria-label="Mobile navigation">
          {NAVIGATION.map((item) => {
            if ("children" in item) {
              return (
                <div key={item.label}>
                  <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-widest mt-2">
                    {item.label}
                  </p>
                  <div className="space-y-0.5">
                    {"children" in item &&
                      item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-navy-900 hover:bg-gold-50 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" aria-hidden="true" />
                          {child.label}
                        </Link>
                      ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:text-navy-900 hover:bg-slate-50 transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100 space-y-2 mt-2">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center justify-center gap-2 w-full py-3 bg-navy-900 text-white rounded-xl font-bold text-sm hover:bg-navy-800 transition-colors"
            aria-label={`Call us: ${BUSINESS.phone}`}
          >
            <Phone size={16} aria-hidden="true" />
            {BUSINESS.phone}
          </a>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 border-2 border-gold-500 text-gold-700 rounded-xl font-bold text-sm hover:bg-gold-500 hover:text-navy-900 transition-all"
          >
            Request a Free Quote
          </Link>
        </div>
      </div>
    </>
  );
}
