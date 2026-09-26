import React from "react";
import { Phone, Search, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/glass/GlassCard";
import { GlassButton } from "@/components/glass/GlassButton";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "CALL & DISPATCH",
      subtitle: "Share symptoms & location",
      description: "Contact our team via call or WhatsApp. Share symptoms, sightings, or urgency for prompt guidance and immediate mobile unit dispatch.",
      icon: Phone,
    },
    {
      number: "02",
      title: "ASSESSMENT",
      subtitle: "Pinpoint species & root nests",
      description: "A licensed technician performs a thorough on-site audit to identify pest species, entry vectors, and harborage points without guesswork.",
      icon: Search,
    },
    {
      number: "03",
      title: "TREATMENT",
      subtitle: "Targeted safe eradication",
      description: "We deploy NEA-approved, low-toxicity formulations, thermal steam, or targeted colony baiting engineered specifically for your premises.",
      icon: Sparkles,
    },
    {
      number: "04",
      title: "FOLLOW-UP",
      subtitle: "Audit compliance verification",
      description: "We verify total colony elimination, issue official SFA/NEA compliance documentation, and advise preventive structural proofing.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="orb-emerald top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="OUR SCIENTIFIC PROTOCOL"
          eyebrowVariant="green"
          title="How We Eliminate Pest Problems"
          subtitle="A structured, transparent 4-step vector control protocol engineered for long-term protection."
          align="center"
          className="mb-14 sm:mb-20"
        />

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-16 right-16 h-0.5 bg-gradient-to-r from-[#0FA968]/20 via-[#0FA968]/40 to-[#0FA968]/20 z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <GlassCard
                key={step.number}
                variant="medium"
                interactive
                className="relative z-10 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Top Circle Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0FA968] to-[#087A4A] text-white font-extrabold text-lg flex items-center justify-center shadow-md font-heading ring-4 ring-[#DDF7EA]">
                      {step.number}
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-[#DDF7EA] border border-[#0FA968]/20 flex items-center justify-center text-[#0FA968]">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#09264A] tracking-tight font-heading mb-1 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-xs font-bold text-[#0FA968] mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-white/60 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Step {step.number} of 04
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Bottom Process CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <GlassButton
            href="/contact"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Start With Step 01 — Contact Fidz
          </GlassButton>
        </div>
      </Container>
    </section>
  );
}
