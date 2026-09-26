import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Phone,
  MessageCircle,
  FileCheck,
  Check,
} from "lucide-react";
import { IndustryItem } from "@/lib/industries";
import { COMPANY_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface IndustryPageTemplateProps {
  industry: IndustryItem;
}

export function IndustryPageTemplate({ industry }: IndustryPageTemplateProps) {
  const isResidential = industry.slug === "residential";

  return (
    <div className="w-full">
      {/* 1. HERO */}
      <section className="relative bg-mesh-hero pt-8 sm:pt-14 pb-16 sm:pb-24 border-b border-slate-200/80 overflow-hidden">
        <Container>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#5A6E85] mb-6 font-medium">
            <Link href="/" className="hover:text-[#0B2345] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-[#0B2345] transition-colors">
              Industries
            </Link>
            <span>/</span>
            <span className="text-[#16A765] font-bold">{industry.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="green" size="md">
                  SINGAPORE INDUSTRY SECTOR
                </Badge>
                <span className="text-xs text-[#087F4E] bg-[#E8F8EF] px-3 py-1 rounded-full border border-[#16A765]/20 font-bold flex items-center gap-1.5 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#16A765]" />
                  NEA Reg: {COMPANY_INFO.neaReg}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0B2345] font-heading leading-[1.1]">
                {industry.headline}
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed font-normal max-w-xl">
                {industry.subheadline}
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
                  {isResidential ? "Book Inspection" : "Request Commercial Enquiry"}
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
                    src={industry.heroImage}
                    alt={industry.title}
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

      {/* 2. OVERVIEW & COMMON PESTS */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-5">
              <Badge variant="navy" size="md">
                SECTOR OVERVIEW
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] font-heading leading-tight">
                Pest Challenges in {industry.title}
              </h2>
              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                {industry.overview}
              </p>

              <div className="pt-4">
                <h3 className="text-sm font-extrabold text-[#0B2345] uppercase tracking-wider mb-3 font-heading">
                  Primary Vectors & Pests Managed:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industry.commonPests.map((pest, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-[#E8F8EF] border border-[#16A765]/20 text-xs sm:text-sm font-bold text-[#087F4E]"
                    >
                      {pest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#F8FBFD] border border-slate-200/90 rounded-[24px] p-7 sm:p-8 space-y-5 shadow-sm">
                <h3 className="text-xl font-bold font-heading text-[#0B2345] flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[#16A765]" />
                  <span>Compliance & Standards</span>
                </h3>
                <div className="space-y-3">
                  {industry.complianceStandards.map((std, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-[#16A765] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-bold text-[#102A43]">
                        {std}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. KEY CHALLENGES & SOLUTIONS */}
      <section className="py-16 sm:py-24 bg-[#F8FBFD] border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Challenges */}
            <div className="space-y-6">
              <div>
                <Badge variant="red" size="md">
                  VULNERABILITIES
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2345] font-heading mt-2">
                  Common Sector Risks
                </h2>
              </div>

              <div className="space-y-4">
                {industry.keyChallenges.map((ch, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs">
                    <h3 className="text-lg font-bold text-[#0B2345] font-heading mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-[#E5394F] shrink-0" />
                      <span>{ch.title}</span>
                    </h3>
                    <p className="text-sm text-[#5A6E85] leading-relaxed">
                      {ch.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <div>
                <Badge variant="green" size="md">
                  FIDZ SOLUTIONS
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2345] font-heading mt-2">
                  Targeted Protection Strategy
                </h2>
              </div>

              <div className="space-y-4">
                {industry.ourSolutions.map((sol, idx) => (
                  <div key={idx} className="bg-white border border-[#16A765]/30 rounded-2xl p-6 shadow-2xs">
                    <h3 className="text-lg font-bold text-[#087F4E] font-heading mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#16A765] shrink-0" />
                      <span>{sol.title}</span>
                    </h3>
                    <p className="text-sm text-[#5A6E85] leading-relaxed">
                      {sol.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. SUITABLE PROPERTY TYPES */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-slate-200/80">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <Badge variant="green" size="md">
              TARGET PREMISES
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2345] font-heading">
              Premises Covered in {industry.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-2">
              {industry.suitableFor.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-[#F8FBFD] border border-slate-200/90 shadow-2xs">
                  <Check className="w-5 h-5 text-[#16A765] shrink-0" />
                  <span className="text-sm font-bold text-[#0B2345]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. FINAL ENQUIRY CTA */}
      <section className="py-16 sm:py-24 bg-mesh-cta text-center border-t border-slate-200/80">
        <Container size="narrow" className="space-y-6">
          <Badge variant="green" size="md">
            DISCUSS YOUR REQUIREMENTS
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2345] font-heading">
            Protect Your {industry.title} Operations
          </h2>
          <p className="text-base sm:text-lg text-[#5A6E85] max-w-xl mx-auto">
            Schedule a site audit or discuss structured pest management contracts with our corporate team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="text-base font-extrabold uppercase tracking-wide shadow-md shadow-[#16A765]/20"
            >
              {isResidential ? "Book Inspection" : "Request Commercial Enquiry"}
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
