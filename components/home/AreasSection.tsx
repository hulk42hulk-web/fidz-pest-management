import React from "react";
import Link from "next/link";
import { MapPin, Navigation, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/glass/GlassCard";

export function AreasSection() {
  const regions = [
    {
      region: "Central Singapore",
      areas: "CBD, Orchard, Novena, Bukit Timah, Queenstown, Marina Bay",
      postal: "Districts 01–11, 21",
      tag: "Residential & Commercial",
    },
    {
      region: "East Singapore",
      areas: "Tampines, Bedok, Pasir Ris, Katong, Marine Parade, Changi",
      postal: "Districts 15–18",
      tag: "F&B & Coastal Residences",
    },
    {
      region: "West Singapore",
      areas: "Jurong East/West, Clementi, Bukit Batok, Boon Lay, Pioneer",
      postal: "Districts 22, 23",
      tag: "Industrial & High-Density",
    },
    {
      region: "North Singapore",
      areas: "Woodlands, Sembawang, Yishun, Admiralty, Mandai",
      postal: "Districts 25–28",
      tag: "Landed & Residential Hubs",
    },
    {
      region: "North-East Singapore",
      areas: "Ang Mo Kio, Hougang, Punggol, Sengkang, Serangoon",
      postal: "Districts 19, 20",
      tag: "New Towns & Condos",
    },
    {
      region: "Jurong & Tuas Industrial",
      areas: "Tuas Mega Port, Jurong Island checkpoints, Logistics hubs",
      postal: "Districts 22, 62, 63",
      tag: "Heavy Industry & Warehousing",
    },
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" id="areas">
      {/* Background Atmosphere */}
      <div className="orb-blue top-10 left-10 opacity-15" />
      <div className="orb-emerald bottom-10 right-10 opacity-15" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="ISLANDWIDE DISPATCH NETWORK"
          eyebrowVariant="green"
          title="Fast Coverage Across Singapore Postal Sectors"
          subtitle="Mobile pest control units stationed islandwide for rapid response to both emergency calls and scheduled preventive maintenance."
          align="center"
          className="mb-14 sm:mb-18"
        />

        {/* 6 Region Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((item) => (
            <GlassCard
              key={item.region}
              variant="medium"
              interactive
              className="p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF8FF] border border-blue-200/60 flex items-center justify-center text-blue-600">
                    <MapPin className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#087A4A] bg-[#DDF7EA] px-3 py-1 rounded-full border border-[#0FA968]/20">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#09264A] font-heading mb-1.5">
                  {item.region}
                </h3>
                <p className="text-xs font-bold text-[#0FA968] mb-3">
                  {item.postal}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.areas}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-white/60 flex items-center justify-between text-xs font-bold text-[#09264A]">
                <span className="flex items-center gap-1.5 text-slate-500">
                  <Navigation className="w-3.5 h-3.5 text-[#0FA968]" />
                  Active Mobile Units
                </span>
                <Link
                  href="/areas-we-serve"
                  className="text-[#0FA968] hover:text-[#087A4A] flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Bottom Coverage Link */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            href="/areas-we-serve"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[#09264A] hover:text-[#0FA968] uppercase tracking-wider transition-colors pb-1 border-b-2 border-[#0FA968]"
          >
            <span>View Complete Singapore Coverage Map</span>
            <ArrowRight className="w-4 h-4 text-[#0FA968]" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
