import React from "react";
import { Clock, SearchCheck, Building, MapPin, ShieldCheck, Cog, Check } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyFidz() {
  const pillars = [
    {
      title: "24/7 Support",
      description: "Immediate islandwide response for acute infestations, commercial emergencies, and urgent safety concerns at any hour.",
      icon: Clock,
      highlight: "Round-the-clock",
    },
    {
      title: "Inspection-Led",
      description: "We identify exact species and harboring roots before applying targeted treatments, avoiding ineffective surface sprays.",
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
      title: "Singapore-Wide",
      description: "Dedicated mobile units servicing Central, East, West, North, North-East, Sentosa, and Jurong Industrial zones.",
      icon: MapPin,
      highlight: "Islandwide reach",
    },
    {
      title: "NEA Registered",
      description: `Officially licensed Vector Control Operator (${COMPANY_INFO.neaReg}) adhering strictly to Singapore public health standards.`,
      icon: ShieldCheck,
      highlight: "Official license",
    },
    {
      title: "Professional Process",
      description: "Clear reporting, transparent recommendations, child/pet-safe formulations, and full SFA/NEA audit compliance records.",
      icon: Cog,
      highlight: "Compliance ready",
    },
  ];

  return (
    <section id="why-fidz" className="py-16 sm:py-24 lg:py-28 bg-[#FFFFFF] border-b border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow="WHY CHOOSE FIDZ"
          eyebrowVariant="green"
          title="Professional Pest Management Built Around Your Premises"
          subtitle="Precision pest eradication designed for Singapore's tropical climate, high-density residential layouts, and strict commercial compliance."
          align="center"
          className="mb-14 sm:mb-18"
        />

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#F8FBFD] border border-slate-200/90 rounded-[22px] sm:rounded-[26px] p-7 sm:p-8 flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(16,42,67,0.06)] transition-all duration-300 hover:border-[#16A765]/40 hover:bg-white group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#E8F8EF] text-[#16A765] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#087F4E] bg-[#E8F8EF] px-3 py-1 rounded-full border border-[#16A765]/20">
                      {pillar.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B2345] font-heading mb-3 group-hover:text-[#16A765] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0B2345] uppercase tracking-wider">
                  <Check className="w-4 h-4 text-[#16A765]" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
