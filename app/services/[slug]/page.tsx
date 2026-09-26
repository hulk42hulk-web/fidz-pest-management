import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, ShieldCheck, ArrowRight, AlertCircle, Sparkles } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { COMPANY_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/glass/GlassCard";
import { GlassButton } from "@/components/glass/GlassButton";
import { BookingSection } from "@/components/home/BookingSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Fidz Pest Management",
    };
  }

  return {
    title: `${service.title} Singapore | Fidz Pest Management`,
    description: service.metaDescription,
    openGraph: {
      title: `${service.title} Singapore | Fidz Pest Management`,
      description: service.headline,
      images: [service.heroImage],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
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
                {service.isEmergency && (
                  <span className="text-xs font-bold text-white bg-[#E5394F] px-3.5 py-1.5 rounded-full shadow-2xs animate-pulse">
                    24/7 IMMEDIATE DISPATCH
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#09264A] font-heading tracking-tight leading-[1.08]">
                {service.title}
              </h1>

              <p className="text-base sm:text-xl font-bold text-[#087A4A] leading-relaxed">
                {service.headline}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                {service.overview}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <GlassButton
                  href="/book-inspection"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Book On-Site Inspection
                </GlassButton>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/90 hover:bg-white border border-slate-200 text-[#09264A] font-bold px-6 py-3.5 shadow-2xs transition-all flex items-center gap-2 text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4 text-[#0FA968]" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={COMPANY_INFO.phoneTel}
                  className="rounded-full bg-white/90 hover:bg-white border border-slate-200 text-[#09264A] font-bold px-6 py-3.5 shadow-2xs transition-all flex items-center gap-2 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Featured Image Frame */}
            <div className="lg:col-span-5">
              <GlassCard variant="strong" className="p-3 overflow-hidden shadow-2xl">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09264A]/40 via-transparent to-transparent" />
                </div>
              </GlassCard>
            </div>
          </div>
        </Container>
      </section>

      {/* The Problem & Signs */}
      <section className="py-14 sm:py-20 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The Problem */}
            <GlassCard variant="medium" className="p-7 sm:p-10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#FEECEF] text-[#E5394F] flex items-center justify-center border border-[#E5394F]/20">
                <AlertCircle className="w-6 h-6 stroke-[2]" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09264A] font-heading">
                  The Problem & Risks
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.theProblem.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#09264A]">
                  Key Vulnerabilities:
                </div>
                {service.theProblem.risks.map((risk, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5394F] mt-2 shrink-0" />
                    <span>{risk}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* What to look for */}
            <GlassCard variant="medium" className="p-7 sm:p-10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#DDF7EA] text-[#0FA968] flex items-center justify-center border border-[#0FA968]/20">
                <Sparkles className="w-6 h-6 stroke-[2]" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09264A] font-heading">
                  {service.whatToLookFor.title}
                </h2>
                <p className="text-sm text-slate-600">
                  Common signs and physical evidence our technicians identify on-site:
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {service.whatToLookFor.signs.map((sign, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-sm font-extrabold text-[#09264A]">
                      {sign.name}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {sign.description}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* Treatment Process */}
      <section className="py-14 sm:py-20 relative overflow-hidden">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09264A] font-heading">
              Our Step-by-Step Eradication Protocol
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Standardized scientific procedure compliant with Singapore vector control regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.treatmentProcess.map((step) => (
              <GlassCard key={step.step} variant="medium" className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#0FA968] text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                  {step.step}
                </div>
                <h3 className="text-lg font-extrabold text-[#09264A] font-heading">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Service FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-14 sm:py-20 relative overflow-hidden">
          <Container size="narrow">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09264A] font-heading">
                Questions About {service.shortTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <GlassCard key={idx} variant="medium" className="p-6 space-y-2">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#09264A] font-heading">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-white/60">
                    {faq.answer}
                  </p>
                </GlassCard>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Booking Form */}
      <BookingSection />
    </div>
  );
}
