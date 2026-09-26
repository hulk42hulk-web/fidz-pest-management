import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShieldCheck, CheckCircle2, ArrowRight, AlertCircle, FileCheck, MessageCircle } from "lucide-react";
import { INDUSTRIES } from "@/lib/industries";
import { COMPANY_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/glass/GlassCard";
import { GlassButton } from "@/components/glass/GlassButton";
import { BookingSection } from "@/components/home/BookingSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  if (!industry) {
    return {
      title: "Industry Not Found | Fidz Pest Management",
    };
  }

  return {
    title: `${industry.title} Singapore | Fidz Pest Management`,
    description: industry.metaDescription,
    openGraph: {
      title: `${industry.title} Singapore | Fidz Pest Management`,
      description: industry.headline,
      images: [industry.heroImage],
    },
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="pt-6 sm:pt-10">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 relative overflow-hidden">
        <div className="orb-emerald -top-24 left-1/4 opacity-15" />
        <div className="orb-blue top-10 right-1/4 opacity-15" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold text-[#087A4A] bg-[#DDF7EA] px-3.5 py-1.5 rounded-full border border-[#0FA968]/30 flex items-center gap-1.5 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0FA968]" />
                  NEA REGISTERED • {COMPANY_INFO.neaReg}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#09264A] font-heading tracking-tight leading-[1.08]">
                {industry.title}
              </h1>

              <p className="text-base sm:text-xl font-bold text-[#087A4A] leading-relaxed">
                {industry.headline}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                {industry.overview}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <GlassButton
                  href="/book-inspection"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Site Audit & Proposal
                </GlassButton>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/90 hover:bg-white border border-slate-200 text-[#09264A] font-bold px-6 py-3.5 shadow-2xs transition-all flex items-center gap-2 text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4 text-[#0FA968]" />
                  <span>WhatsApp Consultant</span>
                </a>
              </div>
            </div>

            {/* Right Featured Image Frame */}
            <div className="lg:col-span-5">
              <GlassCard variant="strong" className="p-3 overflow-hidden shadow-2xl">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={industry.heroImage}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09264A]/40 via-transparent to-transparent" />
                </div>
              </GlassCard>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-14 sm:py-20 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Key Challenges */}
            <GlassCard variant="medium" className="p-7 sm:p-10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#FEECEF] text-[#E5394F] flex items-center justify-center border border-[#E5394F]/20">
                <AlertCircle className="w-6 h-6 stroke-[2]" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09264A] font-heading">
                  Unique Sector Challenges
                </h2>
                <p className="text-sm text-slate-600">
                  Specific pest pressures and regulatory compliance friction points in this industry:
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {industry.keyChallenges.map((challenge, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-sm font-extrabold text-[#09264A]">
                      {challenge.title}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {challenge.description}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Our Solutions */}
            <GlassCard variant="medium" className="p-7 sm:p-10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#DDF7EA] text-[#0FA968] flex items-center justify-center border border-[#0FA968]/20">
                <FileCheck className="w-6 h-6 stroke-[2]" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09264A] font-heading">
                  Our Engineered Solutions
                </h2>
                <p className="text-sm text-slate-600">
                  Targeted non-disruptive protocols customized for operational compliance:
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {industry.ourSolutions.map((sol, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-sm font-extrabold text-[#09264A]">
                      {sol.title}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {sol.description}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* Compliance Standards & Suitable For */}
      <section className="py-14 sm:py-20 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GlassCard variant="medium" className="p-7 sm:p-8 space-y-4">
              <h3 className="text-xl font-extrabold text-[#09264A] font-heading">
                Regulatory Standards Complied With:
              </h3>
              <div className="space-y-2">
                {industry.complianceStandards.map((std, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0FA968] shrink-0" />
                    <span>{std}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard variant="medium" className="p-7 sm:p-8 space-y-4">
              <h3 className="text-xl font-extrabold text-[#09264A] font-heading">
                Suitable Facilities & Premises:
              </h3>
              <div className="space-y-2">
                {industry.suitableFor.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0FA968] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </Container>
      </section>

      <BookingSection />
    </div>
  );
}
