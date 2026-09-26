"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { FAQ_DATA } from "@/lib/faqData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/glass/GlassCard";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  // Flatten the top 6 questions across categories
  const allQuestions = FAQ_DATA.flatMap((category) => category.questions);
  const displayQuestions = allQuestions.slice(0, 6);

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" id="faq">
      {/* Ambient background glows */}
      <div className="orb-emerald -top-24 right-10 opacity-15" />
      <div className="orb-blue bottom-10 left-10 opacity-15" />

      <Container size="narrow" className="relative z-10">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          eyebrowVariant="green"
          title="Clear Answers on Pest Treatments & Safety"
          subtitle="Everything you need to know about our response times, child/pet-safe formulations, NEA compliance, and warranty policies."
          align="center"
          className="mb-14 sm:mb-18"
        />

        {/* Glass Accordion Items */}
        <div className="space-y-4">
          {displayQuestions.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${idx}`;
            const headerId = `faq-header-${idx}`;

            return (
              <GlassCard
                key={faq.question}
                variant="medium"
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  isOpen ? "border-[#0FA968]/50 shadow-md bg-white/70" : "hover:border-white"
                )}
              >
                <h3>
                  <button
                    id={headerId}
                    aria-controls={contentId}
                    aria-expanded={isOpen}
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-extrabold text-[#09264A] font-heading">
                      {faq.question}
                    </span>
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300",
                        isOpen
                          ? "bg-[#0FA968] text-white rotate-180"
                          : "bg-white/80 text-slate-500 border border-slate-200/60"
                      )}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={cn(
                    "transition-all duration-300 ease-in-out px-5 sm:px-6",
                    isOpen ? "pb-6 max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  )}
                >
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed pt-2 border-t border-white/60">
                    {faq.answer}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* View All FAQs Link */}
        <div className="text-center mt-12">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[#09264A] hover:text-[#0FA968] uppercase tracking-wider transition-colors pb-1 border-b-2 border-[#0FA968]"
          >
            <span>Read All Questions & Safety Guidelines</span>
            <ArrowRight className="w-4 h-4 text-[#0FA968]" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
