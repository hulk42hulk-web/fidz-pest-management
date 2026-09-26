"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_DATA } from "@/lib/faqData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/glass/GlassCard";
import { BookingSection } from "@/components/home/BookingSection";
import { cn } from "@/lib/utils";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "general-0": true,
  });

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="pt-6 sm:pt-10">
      <section className="py-12 sm:py-16 relative overflow-hidden text-center">
        <div className="orb-emerald -top-20 left-1/4 opacity-15" />
        <div className="orb-blue top-10 right-1/4 opacity-15" />

        <Container className="relative z-10">
          <SectionHeading
            eyebrow="CLEAR QUESTIONS & ANSWERS"
            eyebrowVariant="green"
            title="Pest Management FAQs & Safety Standards"
            subtitle="Detailed guidance on chemical safety for children and pets, NEA licensing, response times, warranty policies, and commercial inspection protocols."
            align="center"
            className="mb-8"
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container size="narrow">
          <div className="space-y-12">
            {FAQ_DATA.map((cat) => (
              <div key={cat.id} className="space-y-4">
                <div className="pb-2 border-b border-slate-200/80">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#09264A] font-heading">
                    {cat.category} Questions
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-3.5">
                  {cat.questions.map((faq, idx) => {
                    const key = `${cat.id}-${idx}`;
                    const isOpen = !!openItems[key];

                    return (
                      <GlassCard
                        key={key}
                        variant="medium"
                        className={cn(
                          "overflow-hidden transition-all duration-300",
                          isOpen ? "border-[#0FA968]/50 shadow-md bg-white/75" : "hover:border-white"
                        )}
                      >
                        <button
                          onClick={() => toggleItem(key)}
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

                        {isOpen && (
                          <div className="px-5 sm:px-6 pb-6 text-sm sm:text-[15px] text-slate-600 leading-relaxed pt-2 border-t border-white/60">
                            {faq.answer}
                          </div>
                        )}
                      </GlassCard>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <BookingSection />
    </div>
  );
}
