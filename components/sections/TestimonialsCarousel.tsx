"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { formatDate } from "@/lib/utils";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={14}
          className={s <= rating ? "fill-gold-400 text-gold-400" : "text-slate-200 fill-slate-200"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      className="section-padding bg-slate-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="section-label">
              <span className="w-6 h-px bg-gold-500" aria-hidden="true" />
              Real Customers
            </p>
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl font-extrabold text-navy-900"
            >
              What South Londoners Say
              <br />
              <span className="text-gold-500">About TrustLock</span>
            </h2>
          </div>
          {/* Carousel controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border-2 border-navy-900 flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white hover:bg-navy-800 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden"
          ref={emblaRef}
          aria-label="Testimonials carousel"
          role="region"
        >
          <div className="flex gap-5 -ml-1 pl-1">
            {testimonials.map((review) => (
              <div
                key={review.id}
                className="flex-none w-[90%] sm:w-[48%] lg:w-[31%] min-w-0"
                role="group"
                aria-label={`Review from ${review.name}`}
              >
                <div className="bg-white rounded-2xl p-6 shadow-elegant border border-slate-100 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center text-sm font-bold shrink-0">
                        {review.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-navy-900 text-sm">{review.name}</p>
                        <p className="text-xs text-slate-400">{review.location}</p>
                      </div>
                    </div>
                    <Quote
                      size={20}
                      className="text-gold-200 shrink-0"
                      aria-hidden="true"
                    />
                  </div>

                  <StarRating rating={review.rating} />

                  <blockquote className="flex-1 mt-3 text-slate-600 text-sm leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                    <span className="badge-gold text-[10px]">{review.service}</span>
                    <div className="flex items-center gap-2">
                      {review.verified && (
                        <span className="text-[10px] text-green-600 font-medium flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" aria-hidden="true" />
                          Verified
                        </span>
                      )}
                      <time
                        dateTime={review.date}
                        className="text-[10px] text-slate-400"
                      >
                        {formatDate(review.date)}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
