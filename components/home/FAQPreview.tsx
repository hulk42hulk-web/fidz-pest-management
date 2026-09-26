"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const PREVIEW_FAQS = [
  {
    question: "Is Fidz Pest Management registered with the National Environment Agency (NEA)?",
    answer: "Yes. Fidz Pest Management is an officially registered Vector Control Operator with the National Environment Agency (NEA Reg: NEA53397893M). All our technicians hold relevant vector control licenses and follow strict safety guidelines.",
  },
  {
    question: "How does 24/7 Emergency Pest Control work?",
    answer: "You can call our 24/7 emergency line at 67146711 or WhatsApp 97820482 at any time. Our duty team will assess the urgency, advise immediate safety containment, and dispatch an on-call mobile technician directly to your premises.",
  },
  {
    question: "Are your treatments safe for young children, elderly individuals, and pets?",
    answer: "Yes. We use NEA-approved, low-toxicity, water-based formulations and discreet baiting methods that avoid airborne contamination in living and dining spaces.",
  },
  {
    question: "Why is termite baiting better than drilling and surface spraying?",
    answer: "Surface spraying only scatters foraging worker termites while leaving the reproductive queen unharmed. Our bait stations utilize insect growth regulators that workers carry directly into the nest, eliminating the entire colony at its source.",
  },
  {
    question: "Do you provide documentation for SFA and NEA hygiene audits for F&B outlets?",
    answer: "Yes. All commercial pest management visits include digital service vouchers, treatment logs, pesticide dosage records, and trap trend analysis compliant with SFA audit guidelines.",
  },
  {
    question: "How do I book an inspection for my home or business?",
    answer: "You can submit an enquiry via our website form, call 67146711, or WhatsApp 97820482. We will arrange a convenient time for an on-site evaluation and provide a clear, no-obligation quotation.",
  },
];

export function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#FFFFFF] border-b border-slate-200/80">
      <Container size="narrow">
        <SectionHeading
          eyebrow="COMMON QUESTIONS"
          eyebrowVariant="green"
          title="Frequently Asked Questions"
          subtitle="Clear answers about our licensing, safety standards, emergency response, and treatment procedures."
          align="center"
          className="mb-12 sm:mb-16"
        />

        {/* Accordion List */}
        <div className="space-y-3.5">
          {PREVIEW_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-200 bg-[#F8FBFD] hover:border-[#16A765]/40 shadow-2xs"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-[#0B2345] font-heading flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-[#16A765]" : "text-slate-400"}`} />
                    <span>{faq.question}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-[#E8F8EF] text-[#087F4E]" : "bg-white text-slate-500 border border-slate-200"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#5A6E85] leading-relaxed border-t border-slate-200/60 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All FAQ CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <Button
            href="/faq"
            variant="secondary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4 text-[#16A765]" />}
            className="text-sm sm:text-base font-extrabold uppercase tracking-wide border-slate-200/90 hover:border-[#16A765]"
          >
            View All FAQ →
          </Button>
        </div>
      </Container>
    </section>
  );
}
