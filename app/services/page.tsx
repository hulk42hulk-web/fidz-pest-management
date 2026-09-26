import React from "react";
import type { Metadata } from "next";
import { ArrowRight, Flame, Layers, Bug, Sparkles, BedDouble, ShieldAlert, ShieldCheck, Eye } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Process } from "@/components/home/Process";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Complete Pest Control Services Singapore | Fidz Pest Management",
  description:
    "Explore our complete range of targeted pest control services across Singapore: Termite baiting, bed bug steam treatment, cockroach gel baiting, rodent control, and pre-construction soil treatment.",
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
    <div className="w-full">
      {/* Hero */}
      <section className="bg-mesh-hero pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-slate-200/80 text-center">
        <Container size="narrow">
          <div className="space-y-5">
            <Badge variant="green" size="md">
              SINGAPORE VECTOR CONTROL SERVICES
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0B2345] font-heading tracking-tight leading-[1.08]">
              Targeted Pest Control.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A765] via-[#087F4E] to-[#16A765]">
                Professional Treatment.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#5A6E85] max-w-2xl mx-auto leading-relaxed">
              Every pest problem requires species-specific eradication. Explore our NEA-compliant residential and commercial treatment programs.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List Section (Editorial Glass Cards) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-slate-200/80">
        <Container>
          <div className="space-y-10 sm:space-y-14">
            {SERVICES.map((service, idx) => {
              const Icon = iconMap[service.iconName] || Bug;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={service.slug}
                  className="bg-white/85 backdrop-blur-md border border-slate-200/90 rounded-[26px] overflow-hidden p-6 sm:p-8 lg:p-10 shadow-[0_10px_35px_rgba(16,42,67,0.04)] hover:shadow-[0_20px_50px_rgba(16,42,67,0.08)] transition-all duration-300 hover:border-[#16A765]/40"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    {/* Image Column */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="relative rounded-2xl overflow-hidden aspect-[16/11] border border-slate-200/80 shadow-xs bg-slate-100">
                        <img
                          src={service.cardImage}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {service.isEmergency && (
                          <div className="absolute top-3 left-3 bg-[#E5394F] text-white text-xs font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                            24/7 Rapid Dispatch
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-7 space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-[#E8F8EF] text-[#16A765] flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#087F4E] bg-[#E8F8EF] px-2.5 py-1 rounded-full">
                          Service 0{idx + 1}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2345] font-heading">
                        {service.title}
                      </h2>

                      <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
                        {service.overview}
                      </p>

                      <div className="pt-2">
                        <div className="text-xs font-bold text-[#0B2345] uppercase tracking-wider mb-2">
                          Common Target Signs:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5A6E85]">
                          {service.whatToLookFor.signs.slice(0, 4).map((sign, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-1.5 bg-[#F8FBFD] p-2 rounded-xl border border-slate-200/80 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#16A765]" />
                              <span className="font-bold text-[#102A43]">{sign.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 flex flex-wrap items-center gap-3">
                        <Button
                          href={`/services/${service.slug}`}
                          variant="primary"
                          size="md"
                          rightIcon={<ArrowRight className="w-4 h-4" />}
                          className="text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md shadow-[#16A765]/20"
                        >
                          Explore Service & Protocol
                        </Button>
                        <Button
                          href="/contact"
                          variant="secondary"
                          size="md"
                          className="text-xs sm:text-sm font-bold"
                        >
                          Book Inspection
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <Process />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
