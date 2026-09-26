import React from "react";
import type { Metadata } from "next";
import { MapPin, Clock } from "lucide-react";
import { SINGAPORE_REGIONS } from "@/lib/areas";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Areas We Serve Singapore | 24/7 Islandwide Coverage | Fidz Pest Management",
  description:
    "Fidz Pest Management provides fast, islandwide pest control coverage across all 28 Singapore postal districts: Central, East, West, North, North-East, Sentosa, and Jurong Island.",
};

export default function AreasWeServePage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-mesh-hero pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-slate-200/80 text-center">
        <Container size="narrow">
          <div className="space-y-6">
            <Badge variant="green" size="md">
              100% NATIONWIDE SINGAPORE COVERAGE
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0B2345] font-heading tracking-tight leading-[1.08]">
              Pest Control Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A765] via-[#087F4E] to-[#16A765]">
                All Singapore Districts
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#5A6E85] max-w-2xl mx-auto leading-relaxed">
              With dedicated mobile vector control units positioned across Singapore&apos;s key transit corridors, Fidz ensures fast response times for residential appointments and urgent 24/7 commercial emergencies.
            </p>
          </div>
        </Container>
      </section>

      {/* Regions Grid */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-slate-200/80">
        <Container>
          <SectionHeading
            eyebrow="REGIONAL DISPATCH HUBS"
            eyebrowVariant="green"
            title="Comprehensive Islandwide Reach"
            subtitle="From high-density residential towns to heavy industrial hubs and offshore destinations."
            align="center"
            className="mb-12 sm:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SINGAPORE_REGIONS.map((region) => (
              <div
                key={region.name}
                className="bg-[#F8FBFD] border border-slate-200/90 rounded-[24px] p-7 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-[0_15px_35px_rgba(16,42,67,0.06)] transition-all duration-300 hover:border-[#16A765]/40 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#E8F8EF] text-[#16A765] flex items-center justify-center shadow-2xs">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#087F4E] bg-[#E8F8EF] px-3 py-1 rounded-full border border-[#16A765]/20 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {region.responseTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-[#0B2345] font-heading group-hover:text-[#16A765] transition-colors">
                    {region.name}
                  </h2>

                  {/* Postal Districts */}
                  <div>
                    <div className="text-xs font-extrabold text-[#16A765] uppercase tracking-wider mb-1.5">
                      Postal Districts Covered:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {region.districts.map((d, i) => (
                        <span key={i} className="text-xs bg-white border border-slate-200 px-2.5 py-0.5 rounded-md text-[#102A43] font-medium">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Towns */}
                  <div>
                    <div className="text-xs font-extrabold text-[#0B2345] uppercase tracking-wider mb-1.5">
                      Key Towns & Areas:
                    </div>
                    <p className="text-sm text-[#5A6E85] leading-relaxed">
                      {region.keyTowns.join(", ")}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-full text-xs font-bold uppercase tracking-wider shadow-sm"
                  >
                    Schedule In {region.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
