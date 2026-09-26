import React from "react";
import { Clock, SearchCheck, Building, MapPin, ShieldCheck, Cog, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/glass/GlassCard";

export function WhyFidz() {
  const pillars = [
    {
      title: "24/7 Emergency Dispatch",
      description: "Immediate islandwide response for acute infestations, commercial emergencies, and urgent safety concerns at any hour.",
      icon: Clock,
      highlight: "Round-the-clock",
    },
    {
      title: "Inspection-Led Protocol",
      description: "We identify exact species and harborage vectors before applying targeted treatments, avoiding ineffective surface sprays.",
      icon: SearchCheck,
      highlight: "Science-based",
    },
    {
      title: "Residential & Commercial",
      description: "Proven expertise across private residences, landed estates, F&B establishments, healthcare, and industrial hubs.",
      icon: Building,
      highlight: "Tailored programs",
    },
    {
      title: "Singapore-Wide Coverage",
      description: "Dedicated mobile units servicing Central, East, West, North, North-East, Sentosa, and Jurong Industrial zones.",
      icon: MapPin,
      highlight: "Islandwide reach",
    },
    {
      title: "NEA Registered Operator",
      description: `Officially licensed Vector Control Operator (${COMPANY_INFO.neaReg}) adhering strictly to Singapore public health standards.`,
      icon: ShieldCheck,
      highlight: "Official license",
    },
    {
      title: "Documentation & Compliance",
      description: "Clear reporting, transparent recommendations, child/pet-safe formulations, and full SFA/NEA audit compliance records.",
      icon: Cog,
      highlight: "Compliance ready",
    },
  ];

  return (
    <section id="why-fidz" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="orb-blue -top-24 right-1/4 opacity-15" />
      <div className="orb-emerald -bottom-24 left-1/4 opacity-15" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="WHY CHOOSE FIDZ"
          eyebrowVariant="green"
          title="Professional Pest Management Built Around Your Premises"
          subtitle="Precision pest eradication designed for Singapore's tropical climate, high-density residential layouts, and strict commercial compliance."
          align="center"
          className="mb-14 sm:mb-18"
        />

        {/* 6 Glass Feature Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <GlassCard
                key={pillar.title}
                variant="medium"
                interactive
                className="p-7 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#DDF7EA] text-[#0FA968] flex items-center justify-center border border-[#0FA968]/20 shadow-2xs">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#087A4A] bg-[#DDF7EA]/90 px-3 py-1 rounded-full border border-[#0FA968]/20">
                      {pillar.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#09264A] font-heading mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/60 flex items-center gap-2 text-xs font-bold text-[#09264A]">
                  <CheckCircle2 className="w-4 h-4 text-[#0FA968]" />
                  <span>Licensed & Certified Standards</span>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
