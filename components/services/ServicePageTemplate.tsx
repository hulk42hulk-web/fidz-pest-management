"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { ServiceItem } from "@/lib/services";
import { COMPANY_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ServicePageTemplateProps {
  service: ServiceItem;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenFAQIndex(openFAQIndex === idx ? null : idx);
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative bg-mesh-hero pt-8 sm:pt-14 pb-16 sm:pb-24 border-b border-slate-200/80 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#16A765]/6 rounded-full blur-3xl pointer-events-none" />

        <Container>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#5A6E85] mb-6 font-medium">
            <Link href="/" className="hover:text-[#0B2345] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#0B2345] transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#16A765] font-bold">{service.shortTitle}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant={service.isEmergency ? "red" : "green"} size="md">
                  {service.isEmergency ? "24/7 EMERGENCY RESPONSE" : "TARGETED PEST MANAGEMENT"}
                </Badge>
                <span className="text-xs text-[#087F4E] bg-[#E8F8EF] px-3 py-1 rounded-full border border-[#16A765]/20 font-bold flex items-center gap-1.5 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#16A765]" />
                  NEA Reg: {COMPANY_INFO.neaReg}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0B2345] font-heading leading-[1.1]">
                {service.headline}
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed font-normal max-w-xl">
                {service.subheadline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="text-base font-extrabold uppercase tracking-wide shadow-lg shadow-[#16A765]/20"
                >
                  Book Inspection
                </Button>

                <Button
                  href={COMPANY_INFO.whatsappUrl}
                  isExternal
                  variant="secondary"
                  size="lg"
                  leftIcon={<MessageCircle className="w-5 h-5 text-[#16A765]" />}
                  className="text-base font-bold text-[#087F4E] border-[#16A765]/25 bg-white hover:bg-[#E8F8EF]"
                >
                  WhatsApp Us
                </Button>

                <Button
                  href={COMPANY_INFO.phoneTel}
                  variant="ghost"
                  size="lg"
                  leftIcon={<Phone className="w-4 h-4 text-[#16A765]" />}
                  className="text-base font-bold text-[#0B2345] hover:bg-white"
                >
                  Call {COMPANY_INFO.phone}
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[26px] sm:rounded-[30px] overflow-hidden p-2.5 sm:p-3 bg-white/75 backdrop-blur-md border border-white/90 shadow-[0_20px_50px_-10px_rgba(16,42,67,0.08)] group">
                <div className="aspect-[4/3] w-full rounded-[20px] sm:rounded-[24px] overflow-hidden relative bg-slate-100">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2345]/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. THE PROBLEM & RISKS */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5">
              <Badge variant="navy" size="md">
                UNDERSTANDING THE THREAT
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] font-heading leading-tight">
                The Problem
              </h2>
              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                {service.theProblem.description}
              </p>
              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
                {service.overview}
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#F8FBFD] border border-slate-200/90 rounded-[24px] p-6 sm:p-8 space-y-4 shadow-2xs">
                <h3 className="text-lg font-bold text-[#0B2345] font-heading flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#E5394F]" />
                  <span>Key Risks & Consequences</span>
                </h3>
                <div className="space-y-3">
                  {service.theProblem.risks.map((risk, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                      <div className="w-5 h-5 rounded-full bg-[#FEECEF] text-[#E5394F] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                        ✕
                      </div>
                      <span className="text-sm font-semibold text-[#102A43] leading-snug">
                        {risk}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. WHAT TO LOOK FOR (SIGNS) */}
      <section className="py-16 sm:py-24 bg-[#F8FBFD] border-b border-slate-200/80">
        <Container>
          <SectionHeading
            eyebrow="IDENTIFICATION"
            eyebrowVariant="green"
            title={service.whatToLookFor.title}
            subtitle="Look out for these common warning signs across your property before the colony expands."
            align="center"
            className="mb-12 sm:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.whatToLookFor.signs.map((sign, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-[22px] p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between hover:border-[#16A765]/40"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E8F8EF] text-[#087F4E] flex items-center justify-center font-extrabold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2345] font-heading mb-2">
                    {sign.name}
                  </h3>
                  <p className="text-sm text-[#5A6E85] leading-relaxed">
                    {sign.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. OUR APPROACH (METHODOLOGY) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-slate-200/80">
        <Container>
          <SectionHeading
            eyebrow="SCIENTIFIC PROTOCOL"
            eyebrowVariant="green"
            title="Our Targeted Eradication Approach"
            subtitle={service.ourApproach.description}
            align="center"
            className="mb-12 sm:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {service.ourApproach.methodologies.map((method, idx) => (
              <div
                key={idx}
                className="bg-[#F8FBFD] border border-slate-200/90 rounded-[22px] p-7 flex flex-col justify-between hover:border-[#16A765]/40 hover:bg-white hover:shadow-sm transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F8EF] border border-[#16A765]/20 text-[#16A765] flex items-center justify-center mb-5 shadow-2xs">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B2345] font-heading mb-3">
                    {method.title}
                  </h3>
                  <p className="text-sm text-[#5A6E85] leading-relaxed">
                    {method.description}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-200 text-xs font-extrabold text-[#087F4E] flex items-center gap-1.5 uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#16A765]" />
                  <span>NEA Approved Formulations</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. TREATMENT PROCESS */}
      <section className="py-16 sm:py-24 bg-[#F1F7FA]/70 border-b border-slate-200/80">
        <Container>
          <SectionHeading
            eyebrow="STEP-BY-STEP"
            eyebrowVariant="green"
            title="The Treatment Process"
            subtitle="From initial assessment through to final warranty verification."
            align="center"
            className="mb-12 sm:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.treatmentProcess.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-slate-200/90 rounded-[22px] p-6 flex flex-col items-start hover:border-[#16A765]/40 transition-all shadow-2xs"
              >
                <div className="w-11 h-11 rounded-full bg-[#E8F8EF] text-[#087F4E] font-extrabold text-base flex items-center justify-center mb-4 font-heading shadow-xs">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-[#0B2345] font-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#5A6E85] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. WHO IT'S FOR */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-slate-200/80">
        <Container size="narrow">
          <div className="bg-[#F8FBFD] border border-slate-200/90 rounded-[24px] p-8 sm:p-10 shadow-sm space-y-6 text-center">
            <Badge variant="green" size="md">
              PROPERTY TYPES
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2345] font-heading">
              Who Is This Service For?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-2">
              {service.whoItsFor.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-[#16A765] shrink-0" />
                  <span className="text-sm font-bold text-[#0B2345]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 7. SERVICE FAQ */}
      <section className="py-16 sm:py-24 bg-[#F8FBFD] border-b border-slate-200/80">
        <Container size="narrow">
          <SectionHeading
            eyebrow="SERVICE QUESTIONS"
            eyebrowVariant="green"
            title={`${service.shortTitle} FAQ`}
            subtitle="Common questions specifically regarding our eradication and safety procedures."
            align="center"
            className="mb-12"
          />

          <div className="space-y-3.5">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFAQIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white hover:border-[#16A765]/40 transition-all shadow-2xs"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-base sm:text-lg text-[#0B2345] font-heading">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-[#E8F8EF] text-[#087F4E]" : "bg-[#F8FBFD] text-slate-500 border border-slate-200"}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 pt-1 text-sm sm:text-base text-[#5A6E85] leading-relaxed border-t border-slate-100 bg-[#FBFBFC]">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 8. BOTTOM CTA */}
      <section className="py-16 sm:py-24 bg-mesh-cta text-center border-t border-slate-200/80">
        <Container size="narrow" className="space-y-6">
          <Badge variant="green" size="md">
            SOLVE YOUR PEST PROBLEM
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2345] font-heading">
            Ready to Schedule Your {service.shortTitle} Inspection?
          </h2>
          <p className="text-base sm:text-lg text-[#5A6E85] max-w-xl mx-auto">
            Contact our licensed technicians for prompt islandwide scheduling or 24/7 emergency dispatch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="text-base font-extrabold uppercase tracking-wide shadow-md shadow-[#16A765]/20"
            >
              Book An Inspection
            </Button>
            <Button
              href={COMPANY_INFO.whatsappUrl}
              isExternal
              variant="secondary"
              size="lg"
              leftIcon={<MessageCircle className="w-5 h-5 text-[#16A765]" />}
              className="bg-white hover:bg-[#E8F8EF] text-[#087F4E] border-[#16A765]/25 text-base font-bold"
            >
              WhatsApp Us
            </Button>
            <Button
              href={COMPANY_INFO.phoneTel}
              variant="ghost"
              size="lg"
              leftIcon={<Phone className="w-4 h-4 text-[#16A765]" />}
              className="text-base font-bold text-[#0B2345] hover:bg-white"
            >
              Call {COMPANY_INFO.phone}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
