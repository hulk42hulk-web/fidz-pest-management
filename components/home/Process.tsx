import React from "react";
import { Phone, Search, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Process() {
  const steps = [
    {
      number: "01",
      title: "CALL",
      subtitle: "Tell us what you're experiencing",
      description: "Contact our team via call or WhatsApp. Share symptoms, pest sightings, or urgency for prompt guidance.",
      icon: Phone,
    },
    {
      number: "02",
      title: "INSPECTION",
      subtitle: "Assess the pest problem and premises",
      description: "A licensed technician performs a thorough on-site audit to identify species, entry vectors, and harborage points.",
      icon: Search,
    },
    {
      number: "03",
      title: "TREATMENT",
      subtitle: "Recommend and perform targeted treatment",
      description: "We deploy NEA-approved, low-toxicity formulations, thermal steam, or colony baiting tailored to your premises.",
      icon: Sparkles,
    },
    {
      number: "04",
      title: "FOLLOW-UP",
      subtitle: "Discuss ongoing requirements",
      description: "We verify total colony elimination, issue compliance documentation, and advise preventive structural proofing.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#F1F7FA]/70 border-b border-slate-200/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#16A765]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="OUR METHODOLOGY"
          eyebrowVariant="green"
          title="How We Eliminate Pest Problems"
          subtitle="A structured, transparent 4-step vector control protocol engineered for long-term protection."
          align="center"
          className="mb-14 sm:mb-20"
        />

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-16 right-16 h-0.5 bg-gradient-to-r from-[#16A765]/20 via-[#16A765]/40 to-[#16A765]/20 z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative z-10 flex flex-col items-start bg-white/85 backdrop-blur-md border border-slate-200/90 hover:border-[#16A765]/40 rounded-[22px] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(16,42,67,0.04)] hover:shadow-[0_15px_35px_rgba(16,42,67,0.08)]"
              >
                {/* Header with Green Numbered Circle */}
                <div className="flex items-center justify-between w-full mb-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#16A765] to-[#087F4E] text-white font-extrabold text-lg flex items-center justify-center shadow-md font-heading ring-4 ring-[#E8F8EF]">
                    {step.number}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#E8F8EF] border border-[#16A765]/20 flex items-center justify-center text-[#16A765]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B2345] tracking-tight font-heading mb-1 uppercase">
                  {step.title}
                </h3>
                <p className="text-sm font-bold text-[#16A765] mb-3">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-[#5A6E85] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="text-base font-extrabold uppercase tracking-wide shadow-md shadow-[#16A765]/20"
          >
            Start With Step 01 — Contact Fidz
          </Button>
        </div>
      </Container>
    </section>
  );
}
