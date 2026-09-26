import React from "react";
import type { Metadata } from "next";
import { ShieldCheck, Award, Users, Clock, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/glass/GlassCard";
import { GlassButton } from "@/components/glass/GlassButton";
import { BookingSection } from "@/components/home/BookingSection";

export const metadata: Metadata = {
  title: "About Fidz Pest Management | NEA Registered Singapore Operator",
  description:
    "Learn about Fidz Pest Management, our vector control licenses, experienced technicians, safe low-toxicity methodologies, and commitment to Singapore homes and businesses.",
};

export default function AboutPage() {
  const credentials = [
    {
      title: "Licensed Vector Control Operator",
      desc: `Officially registered with the National Environment Agency of Singapore under registration ${COMPANY_INFO.neaReg}.`,
      icon: ShieldCheck,
    },
    {
      title: "Child & Pet Safe Philosophy",
      desc: "We prioritize targeted baiting, non-aerosol gel formulations, and thermal steam to protect family health.",
      icon: Award,
    },
    {
      title: "24/7 Islandwide Mobile Fleet",
      desc: "Our rapid-response technicians are stationed across Singapore to provide urgent emergency containment.",
      icon: Clock,
    },
    {
      title: "Science & Inspection Led",
      desc: "We diagnose species biology and root harborage nests before prescribing treatment to ensure permanent eradication.",
      icon: Users,
    },
  ];

  return (
    <div className="pt-6 sm:pt-10">
      <section className="py-12 sm:py-20 relative overflow-hidden">
        <div className="orb-emerald -top-24 left-1/4 opacity-15" />
        <div className="orb-blue top-10 right-1/4 opacity-15" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold text-[#087A4A] bg-[#DDF7EA] px-3.5 py-1.5 rounded-full border border-[#0FA968]/30 flex items-center gap-1.5 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0FA968]" />
                  ABOUT FIDZ PEST MANAGEMENT
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#09264A] font-heading tracking-tight leading-[1.08]">
                Professional Pest Control Built on Precision & Science
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Fidz Pest Management is a premier Singapore vector control company dedicated to protecting residential homes, high-density condominiums, F&B establishments, and industrial facilities from structural and hygienic pest infestations.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Unlike traditional pest contractors who rely on superficial chemical sprays that disperse pests deeper into carpentry, our approach is forensic: identify entry vectors, locate the queen or core nest, deploy targeted insect growth regulators, and verify eradication.
              </p>

              <div className="pt-2">
                <GlassButton
                  href="/book-inspection"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Schedule Premises Inspection
                </GlassButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <GlassCard variant="strong" className="p-3 shadow-2xl">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src="/images/hero-technician-composition.png"
                    alt="Fidz Pest Management Technician"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09264A]/40 via-transparent to-transparent" />
                </div>
              </GlassCard>
            </div>
          </div>
        </Container>
      </section>

      {/* 4 Pillars */}
      <section className="py-14 sm:py-20 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred) => {
              const Icon = cred.icon;
              return (
                <GlassCard key={cred.title} variant="medium" className="p-7 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#DDF7EA] text-[#0FA968] flex items-center justify-center border border-[#0FA968]/20">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#09264A] font-heading">
                    {cred.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {cred.desc}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </section>

      <BookingSection />
    </div>
  );
}
