import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Flame, ShieldAlert, BedDouble, Bug, Sparkles, ShieldCheck, Eye, Layers } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/glass/GlassCard";
import { EmergencyCTA } from "@/components/home/EmergencyCTA";
import { BookingSection } from "@/components/home/BookingSection";

export const metadata: Metadata = {
  title: "Professional Pest Control Services Singapore | Fidz Pest Management",
  description:
    "Comprehensive pest control services in Singapore including emergency dispatch, termites, bed bugs, cockroaches, rodents, ants, and flying pests. NEA registered.",
};

const iconMap: Record<string, React.ElementType> = {
  Flame,
  ShieldAlert,
  BedDouble,
  Bug,
  Sparkles,
  ShieldCheck,
  Eye,
  Layers,
};

export default function ServicesPage() {
  return (
    <div className="pt-6 sm:pt-10">
      {/* Header Section */}
      <section className="py-12 sm:py-16 relative overflow-hidden text-center">
        <div className="orb-emerald -top-20 left-1/4 opacity-15" />
        <div className="orb-blue top-10 right-1/4 opacity-15" />

        <Container className="relative z-10">
          <SectionHeading
            eyebrow="TARGETED VECTOR CONTROL"
            eyebrowVariant="green"
            title="Comprehensive Pest Management Solutions"
            subtitle="Singapore-wide targeted inspection, colony eradication, and NEA-compliant preventive treatments for homes, F&B, commercial offices, and industrial hubs."
            align="center"
            className="mb-8"
          />
        </Container>
      </section>

      {/* Services Grid */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.iconName] || Bug;

              return (
                <GlassCard
                  key={service.slug}
                  variant="medium"
                  interactive
                  className="overflow-hidden flex flex-col justify-between group"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.cardImage}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09264A]/60 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md border border-white flex items-center justify-center text-[#0FA968] shadow-sm">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>

                    {service.isEmergency && (
                      <div className="absolute top-3 right-3 bg-[#E5394F] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-sm animate-pulse">
                        24/7 Response
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5">
                    <div className="space-y-2.5">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#09264A] font-heading group-hover:text-[#0FA968] transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {service.headline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/60">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center justify-between w-full text-xs font-bold text-[#09264A] group-hover:text-[#0FA968] transition-colors"
                      >
                        <span>View Treatment Protocol</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#0FA968]" />
                      </Link>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </section>

      <EmergencyCTA />
      <BookingSection />
    </div>
  );
}
