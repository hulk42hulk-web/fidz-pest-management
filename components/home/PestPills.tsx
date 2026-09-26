import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/glass/GlassCard";

export function PestPills() {
  const pests = [
    {
      name: "Subterranean Termites",
      desc: "Concealed structural mud tubes & wood destruction. Non-toxic baiting & thermal mapping.",
      link: "/services/termite-inspection-control",
      tag: "Structural Risk",
      urgency: "High",
    },
    {
      name: "Bed Bugs",
      desc: "Night-time mattress bites & harborages. High-heat steam & micro-crack residual eradication.",
      link: "/services/bed-bug-treatment",
      tag: "Residential & Hotel",
      urgency: "Urgent",
    },
    {
      name: "German & American Cockroaches",
      desc: "Kitchen cabinets, pantries, and bin chutes. Targeted gel baiting & crack-and-crevice barrier.",
      link: "/services/cockroach-control",
      tag: "F&B / Hygiene",
      urgency: "Immediate",
    },
    {
      name: "Rats & Rodents",
      desc: "False ceiling runs, gnawing damage & health risks. Tamper-proof stations & proofing grids.",
      link: "/services/rodent-rat-control",
      tag: "SFA Audit Focus",
      urgency: "Urgent",
    },
    {
      name: "Pharaoh & Carpenter Ants",
      desc: "Pantry trails and electrical void nesting. Worker-carried slow-acting colony elimination.",
      link: "/services/ant-control",
      tag: "Colony Eradication",
      urgency: "Moderate",
    },
    {
      name: "Flies & Flying Pests",
      desc: "Grease-trap breeding & dining room intrusion. Bio-drain digestion & glueboard defense.",
      link: "/services/fly-flying-insect-control",
      tag: "F&B Compliance",
      urgency: "Immediate",
    },
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="orb-emerald -top-20 right-10 opacity-15" />
      <div className="orb-blue bottom-10 left-10 opacity-15" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="TARGETED SPECIES ERADICATION"
          eyebrowVariant="green"
          title="Common Singapore Infestation Profiles"
          subtitle="Precision eradication protocols tailored to Singapore's tropical climate, high-rise buildings, and strict hygiene regulations."
          align="center"
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pests.map((pest) => (
            <GlassCard
              key={pest.name}
              variant="medium"
              interactive
              className="p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0FA968] bg-[#DDF7EA] px-3 py-1 rounded-full border border-[#0FA968]/20">
                    {pest.tag}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    Response: <strong className="text-[#09264A]">{pest.urgency}</strong>
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#09264A] font-heading mb-2.5">
                  {pest.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {pest.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/60">
                <Link
                  href={pest.link}
                  className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0FA968] hover:text-[#087A4A] group"
                >
                  <span>Inspection & Treatment Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
