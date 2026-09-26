import React from "react";
import type { Metadata } from "next";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { SINGAPORE_REGIONS } from "@/lib/areas";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/glass/GlassCard";
import { GlassButton } from "@/components/glass/GlassButton";
import { BookingSection } from "@/components/home/BookingSection";

export const metadata: Metadata = {
  title: "Areas We Serve Singapore | Fidz Pest Management (All Districts)",
  description:
    "Fidz Pest Management provides islandwide 24/7 pest control across all Singapore regions: Central, East, West, North, North-East, Tuas, and Sentosa.",
};

export default function AreasWeServePage() {
  return (
    <div className="pt-6 sm:pt-10">
      <section className="py-12 sm:py-16 relative overflow-hidden text-center">
        <div className="orb-emerald -top-20 left-1/4 opacity-15" />
        <div className="orb-blue top-10 right-1/4 opacity-15" />

        <Container className="relative z-10">
          <SectionHeading
            eyebrow="SINGAPORE ISLANDWIDE NETWORK"
            eyebrowVariant="green"
            title="Rapid Pest Control Response Across All Districts"
            subtitle="Mobile licensed vector control units strategically deployed across Singapore for rapid 30-45 minute emergency dispatch and scheduled preventive treatments."
            align="center"
            className="mb-8"
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SINGAPORE_REGIONS.map((region) => (
              <GlassCard
                key={region.name}
                variant="medium"
                interactive
                className="p-7 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EEF8FF] border border-blue-200/60 flex items-center justify-center text-blue-600">
                      <MapPin className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#087A4A] bg-[#DDF7EA] px-3 py-1 rounded-full border border-[#0FA968]/20 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#0FA968]" />
                      {region.responseTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#09264A] font-heading mb-3">
                    {region.name}
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                        Districts Covered:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {region.districts.map((d, i) => (
                          <span
                            key={i}
                            className="text-xs font-semibold px-2.5 py-0.5 rounded-lg bg-white/80 border border-slate-200/60 text-[#09264A]"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                        Key Towns & Estates:
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {region.keyTowns.join(" • ")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/60">
                  <GlassButton
                    href="/book-inspection"
                    variant="glass"
                    size="sm"
                    className="w-full"
                    rightIcon={<ArrowRight className="w-3.5 h-3.5 text-[#0FA968]" />}
                  >
                    Book In This Sector
                  </GlassButton>
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
