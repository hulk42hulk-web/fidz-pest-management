import React from "react";
import Link from "next/link";
import { ArrowRight, Flame, ShieldAlert, BedDouble, Bug, Sparkles, ShieldCheck, Eye, Layers } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/glass/GlassCard";

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

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" id="services">
      {/* Layered Atmospheric Glows */}
      <div className="orb-emerald top-1/4 -left-20 opacity-20" />
      <div className="orb-blue bottom-1/4 -right-20 opacity-20" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="TARGETED SOLUTIONS"
          eyebrowVariant="green"
          title="Complete Pest Management Solutions"
          subtitle="Precision pest control designed for Singapore homes, restaurants, commercial facilities, and industrial premises."
          align="center"
          className="mb-12 sm:mb-16"
        />

        {/* 8 Glass Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Bug;

            return (
              <GlassCard
                key={service.slug}
                variant="medium"
                interactive
                className="overflow-hidden flex flex-col justify-between group"
              >
                {/* Image Frame with Glass Treatment */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.cardImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09264A]/50 via-transparent to-transparent" />

                  {/* Icon Container */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md border border-white flex items-center justify-center text-[#0FA968] shadow-sm">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Emergency Badge */}
                  {service.isEmergency && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E5394F] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm animate-pulse">
                        <Flame className="w-3 h-3" />
                        24/7 Hotline
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-[#09264A] font-heading group-hover:text-[#0FA968] transition-colors leading-tight">
                      {service.shortTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                      {service.headline}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-white/60">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-between w-full text-xs font-bold text-[#09264A] group-hover:text-[#0FA968] transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#0FA968]" />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Bottom Hub CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[#09264A] hover:text-[#0FA968] uppercase tracking-wider transition-colors pb-1 border-b-2 border-[#0FA968]"
          >
            <span>View All Services & Methodologies</span>
            <ArrowRight className="w-4 h-4 text-[#0FA968]" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
