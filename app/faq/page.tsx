"use client";

import React, { useState, useMemo } from "react";
import { Search, ChevronDown, HelpCircle, Phone, ArrowRight, MessageCircle } from "lucide-react";
import { FAQ_DATA } from "@/lib/faqData";
import { COMPANY_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "general-0": true,
    "emergency-0": true,
  });

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const categories = [
    { id: "all", label: "All Questions" },
    ...FAQ_DATA.map((c) => ({ id: c.id, label: c.category })),
  ];

  const filteredCategories = useMemo(() => {
    return FAQ_DATA.map((cat) => {
      const matchesCategory = selectedCategory === "all" || selectedCategory === cat.id;
      if (!matchesCategory) return null;

      const filteredQuestions = cat.questions.filter((q) => {
        if (!searchQuery.trim()) return true;
        const query = searchQuery.toLowerCase();
        return (
          q.question.toLowerCase().includes(query) ||
          q.answer.toLowerCase().includes(query)
        );
      });

      if (filteredQuestions.length === 0) return null;

      return {
        ...cat,
        questions: filteredQuestions,
      };
    }).filter(Boolean);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-mesh-hero pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-slate-200/80 text-center">
        <Container size="narrow">
          <div className="space-y-6">
            <Badge variant="green" size="md">
              KNOWLEDGE BASE & FAQ
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0B2345] font-heading tracking-tight leading-[1.08]">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-[#5A6E85] max-w-xl mx-auto leading-relaxed">
              Find instant answers about our NEA licensing, 24/7 emergency dispatch, treatment safety, and service procedures across Singapore.
            </p>

            {/* Live Search Bar */}
            <div className="max-w-xl mx-auto relative pt-4">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-[#16A765] absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search questions (e.g. termites, emergency, SFA audit)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 rounded-2xl bg-white border-2 border-slate-200 text-base text-[#102A43] placeholder:text-slate-400 focus:outline-none focus:border-[#16A765] shadow-sm transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 text-xs font-bold text-slate-400 hover:text-[#0B2345] uppercase cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main FAQ Content */}
      <section className="py-16 sm:py-24 bg-[#F8FBFD] border-b border-slate-200/80">
        <Container size="narrow">
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#16A765] text-white shadow-md shadow-[#16A765]/20 border border-[#16A765]"
                    : "bg-white text-[#5A6E85] hover:bg-slate-100 hover:text-[#0B2345] border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Categorized Question Lists */}
          <div className="space-y-12">
            {filteredCategories.length === 0 ? (
              <div className="bg-white border border-slate-200/90 rounded-2xl p-12 text-center space-y-4 shadow-sm">
                <HelpCircle className="w-12 h-12 text-[#16A765] mx-auto" />
                <h3 className="text-xl font-bold text-[#0B2345] font-heading">
                  No questions match &ldquo;{searchQuery}&rdquo;
                </h3>
                <p className="text-sm text-[#5A6E85]">
                  Have a specific enquiry? Speak with our team directly.
                </p>
                <Button
                  href={COMPANY_INFO.whatsappUrl}
                  isExternal
                  variant="primary"
                  size="md"
                  leftIcon={<MessageCircle className="w-4 h-4 fill-white" />}
                >
                  Ask On WhatsApp
                </Button>
              </div>
            ) : (
              filteredCategories.map((cat) => {
                if (!cat) return null;
                return (
                  <div key={cat.id} className="space-y-4">
                    <div className="border-b border-slate-200 pb-3">
                      <h2 className="text-2xl font-extrabold text-[#0B2345] font-heading">
                        {cat.category}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#5A6E85] mt-1">
                        {cat.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {cat.questions.map((q, idx) => {
                        const itemKey = `${cat.id}-${idx}`;
                        const isOpen = !!openItems[itemKey];

                        return (
                          <div
                            key={idx}
                            className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs hover:border-[#16A765]/40 transition-all"
                          >
                            <button
                              onClick={() => toggleItem(itemKey)}
                              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                              aria-expanded={isOpen}
                            >
                              <span className="font-bold text-base sm:text-lg text-[#0B2345] font-heading leading-snug flex items-center gap-3">
                                <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-[#16A765]" : "text-slate-400"}`} />
                                <span>{q.question}</span>
                              </span>
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-[#E8F8EF] text-[#087F4E]" : "bg-[#F8FBFD] text-slate-500 border border-slate-200"}`}>
                                <ChevronDown className="w-4 h-4" />
                              </div>
                            </button>

                            {isOpen && (
                              <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#5A6E85] leading-relaxed border-t border-slate-100 bg-[#FBFBFC]">
                                <p>{q.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </Container>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 sm:py-20 bg-mesh-cta border-b border-slate-200/80 text-center">
        <Container size="narrow">
          <div className="bg-white/90 backdrop-blur-xl rounded-[28px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(16,42,67,0.06)] space-y-5 border border-white/95">
            <Badge variant="green" size="md">
              DIRECT CONSULTATION
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#0B2345]">
              Didn&apos;t find your answer?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] max-w-md mx-auto">
              Our vector control team is available 24 hours daily to assist you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="text-sm sm:text-base font-extrabold uppercase tracking-wide shadow-md shadow-[#16A765]/20"
              >
                Request An Inspection
              </Button>
              <Button
                href={COMPANY_INFO.phoneTel}
                variant="secondary"
                size="lg"
                leftIcon={<Phone className="w-4 h-4 text-[#16A765]" />}
                className="text-sm sm:text-base font-bold"
              >
                Call 67146711
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
