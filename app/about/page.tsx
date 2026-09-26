import React from "react";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Clock,
  CheckCircle2,
  SearchCheck,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ClientLogos } from "@/components/home/ClientLogos";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About Us | NEA Registered Vector Control | Fidz Pest Management",
  description:
    "Learn about Fidz Pest Management, an NEA-registered vector control operator based in Midview City, Singapore. Discover our mission, scientific approach, and 24/7 emergency commitment.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="bg-mesh-hero pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-slate-200/80 text-center">
        <Container size="narrow">
          <div className="space-y-6">
            <Badge variant="green" size="md">
              ABOUT FIDZ PEST MANAGEMENT
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0B2345] font-heading tracking-tight leading-[1.08]">
              Professional Pest Management{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A765] via-[#087F4E] to-[#16A765]">
                Across Singapore
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#5A6E85] max-w-2xl mx-auto leading-relaxed">
              Founded on the principles of precision, safety, and rapid response, Fidz delivers high-performance vector control solutions for homes, commercial complexes, and industrial sites throughout Singapore.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. About Fidz & Mission */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5">
              <Badge variant="navy" size="md">
                OUR STORY & MISSION
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] font-heading leading-tight">
                Rooted in Singapore, Dedicated to Public Health
              </h2>
              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Headquartered at Midview City (Sin Ming), Fidz Pest Management operates with a simple mandate: eliminate pests quickly and scientifically while maintaining complete safety for families, employees, and the environment.
              </p>
              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
                Singapore&apos;s urban density and year-round tropical humidity create rapid breeding cycles for subterranean termites, German cockroaches, and rodents. Rather than relying on superficial chemical sprays that cause pests to scatter, we deploy integrated pest management (IPM) methodologies that destroy colonies at the root.
              </p>

              <div className="pt-2 space-y-2.5">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16A765] shrink-0" />
                  <span className="font-bold text-[#0B2345] text-sm sm:text-base">
                    NEA Registered Vector Control Operator ({COMPANY_INFO.neaReg})
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16A765] shrink-0" />
                  <span className="font-bold text-[#0B2345] text-sm sm:text-base">
                    Strict adherence to Singapore Standards & SFA hygiene protocols
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16A765] shrink-0" />
                  <span className="font-bold text-[#0B2345] text-sm sm:text-base">
                    Transparent, itemized pricing with zero hidden charges
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] overflow-hidden border border-slate-200 shadow-lg bg-slate-100 aspect-[4/3] p-2 bg-white/80">
                <div className="w-full h-full rounded-[22px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
                    alt="Fidz Pest Management licensed vector control operations in Singapore"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Key Pillars (24/7, NEA, Science) */}
      <section className="py-16 sm:py-24 bg-[#F8FBFD] border-b border-slate-200/80">
        <Container>
          <SectionHeading
            eyebrow="OPERATIONAL EXCELLENCE"
            eyebrowVariant="green"
            title="What Sets Fidz Apart"
            subtitle="Engineered for maximum efficacy and accountability across all 28 Singapore postal districts."
            align="center"
            className="mb-12 sm:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white border border-slate-200/90 rounded-[24px] p-8 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8EF] text-[#16A765] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2345] font-heading">
                24/7 Immediate Availability
              </h3>
              <p className="text-sm text-[#5A6E85] leading-relaxed">
                Pest emergencies don&apos;t wait for Monday morning. Our mobile dispatch teams operate 24 hours daily, 365 days a year across Singapore.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-[24px] p-8 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8EF] text-[#16A765] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2345] font-heading">
                NEA Licensed & Certified
              </h3>
              <p className="text-sm text-[#5A6E85] leading-relaxed">
                All treatments are executed by licensed vector control technicians utilizing strictly NEA-registered, low-mammalian-toxicity chemical formulations.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-[24px] p-8 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8EF] text-[#16A765] flex items-center justify-center">
                <SearchCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2345] font-heading">
                Inspection-Led Science
              </h3>
              <p className="text-sm text-[#5A6E85] leading-relaxed">
                We perform comprehensive harborage, moisture, and vector mapping to determine the exact species before administering calibrated treatments.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Testimonials & Client Logos */}
      <Testimonials />
      <ClientLogos />

      {/* 5. Final CTA */}
      <FinalCTA />
    </div>
  );
}
