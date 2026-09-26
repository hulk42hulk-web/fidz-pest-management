"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "@/lib/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#F1F7FA]/70 border-b border-slate-200/80 relative overflow-hidden">
      {/* Ambient background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#16A765]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="CLIENT REVIEWS"
          eyebrowVariant="green"
          title="Trusted Across Singapore Homes & Businesses"
          subtitle="Real experiences from property owners and commercial operators who rely on Fidz."
          align="center"
          className="mb-12 sm:mb-16"
        />

        {/* Featured Testimonial Glass Card */}
        <div className="max-w-4xl mx-auto bg-white/85 backdrop-blur-xl border border-white/95 rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(16,42,67,0.06)] relative">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* 5 Stars with Soft Gold */}
            <div className="flex items-center gap-1.5 text-[#D9B65D]">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D9B65D]" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-2xl lg:text-[23px] font-medium text-[#0B2345] leading-relaxed max-w-3xl italic">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author & Service Meta */}
            <div className="pt-4 border-t border-slate-100 w-full flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="font-extrabold text-[#0B2345] text-base sm:text-lg font-heading">
                  {current.author}
                </div>
                <div className="text-xs sm:text-sm text-[#087F4E] font-bold">
                  {current.role} • {current.propertyType}
                </div>
                <div className="text-xs text-[#5A6E85]">
                  {current.location}
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F8EF] border border-[#16A765]/20 text-xs text-[#087F4E] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#16A765]" />
                <span>Service: <strong className="text-[#0B2345]">{current.serviceUsed}</strong></span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-100">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-xl bg-white border border-slate-200 hover:border-[#16A765] text-[#0B2345] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex
                      ? "w-8 bg-[#16A765]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-xl bg-white border border-slate-200 hover:border-[#16A765] text-[#0B2345] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
