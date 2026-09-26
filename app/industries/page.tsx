import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/industries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/glass/GlassCard";
import { BookingSection } from "@/components/home/BookingSection";

export const metadata: Metadata = {
  title: "Industry Pest Control Solutions Singapore | Fidz Pest Management",
  description:
    "Sector-specific pest control for F&B, healthcare, education, commercial offices, industrial plants, and residential properties across Singapore. SFA and NEA compliant.",
};

export default function IndustriesPage() {
  return (
    <div className="pt-6 sm:pt-10">
      <section className="py-12 sm:py-16 relative overflow-hidden text-center">
        <div className="orb-emerald -top-20 left-1/4 opacity-15" />
        <div className="orb-blue top-10 right-1/4 opacity-15" />

        <Container className="relative z-10">
          <SectionHeading
            eyebrow="COMMERCIAL & SECTOR EXPERTISE"
            eyebrowVariant="green"
            title="Industry-Specific Vector Control Programs"
            subtitle="Tailored regulatory compliance and IPM protocols for Singapore Food Agency (SFA), ECDA, MOH, and NEA audit environments."
            align="center"
            className="mb-8"
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => (
              <GlassCard
                key={industry.slug}
                variant="medium"
                interactive
                className="overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={industry.cardImage}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09264A]/60 via-transparent to-transparent" />
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5">
                  <div className="space-y-2.5">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#09264A] font-heading group-hover:text-[#0FA968] transition-colors leading-tight">
                      {industry.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-[#087A4A]">
                      {industry.headline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {industry.overview}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/60">
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="inline-flex items-center justify-between w-full text-xs font-bold text-[#09264A] group-hover:text-[#0FA968] transition-colors"
                    >
                      <span>Explore Sector Protocols</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#0FA968]" />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <BookingSection />
    </div>
  );
}
