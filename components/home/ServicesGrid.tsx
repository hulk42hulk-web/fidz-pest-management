import React from "react";
import Link from "next/link";
import { ArrowRight, Flame, ShieldAlert, BedDouble, Bug, Sparkles, ShieldCheck, Eye, Layers } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Icon mapping helper
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

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#F8FBFD] border-b border-slate-200/80">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          eyebrow="TARGETED SOLUTIONS"
          eyebrowVariant="green"
          title="Complete Pest Management Solutions"
          subtitle="Professional pest-control solutions for homes, businesses and commercial premises across Singapore."
          align="center"
          className="mb-12 sm:mb-16"
        />

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Bug;

            return (
              <div
                key={service.slug}
                className="group flex flex-col bg-white/80 backdrop-blur-md rounded-[22px] sm:rounded-[26px] border border-slate-200/90 overflow-hidden shadow-[0_10px_30px_rgba(16,42,67,0.04)] hover:shadow-[0_20px_40px_rgba(16,42,67,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#16A765]/40"
              >
                {/* Card Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.cardImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2345]/40 via-transparent to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-white flex items-center justify-center text-[#16A765] shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Emergency Pill */}
                  {service.isEmergency && (
                    <div className="absolute top-3 right-3 bg-[#E5394F] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-md animate-pulse">
                      24/7 Hotline
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-[22px] font-bold text-[#0B2345] font-heading group-hover:text-[#16A765] transition-colors leading-tight">
                      {service.shortTitle}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-[#5A6E85] leading-relaxed line-clamp-3 font-normal">
                      {service.headline}
                    </p>
                  </div>

                  {/* Card Action Link */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0B2345] group-hover:text-[#16A765] transition-colors pt-3 border-t border-slate-100 min-h-[44px]"
                  >
                    <span>Explore service</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#16A765]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Overview CTA */}
        <div className="text-center mt-12 sm:mt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-[#0B2345] hover:text-[#16A765] uppercase tracking-wider transition-colors border-b-2 border-[#16A765] pb-1"
          >
            <span>View All Services & Methodologies</span>
            <ArrowRight className="w-4 h-4 text-[#16A765]" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
