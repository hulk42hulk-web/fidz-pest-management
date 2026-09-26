import React from "react";
import Link from "next/link";
import { ArrowRight, Utensils, HeartPulse, HardHat, Building, Truck, Hotel } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/glass/GlassCard";

export function IndustriesSection() {
  const featured = [
    {
      title: "Food & Beverage (F&B)",
      headline: "SFA-Compliant Kitchen, Dining & Pantry Defense",
      desc: "Zero-tolerance pest programs designed for restaurants, central kitchens, cafes, and food courts. Complete SFA audit service reports.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      href: "/industries/food-beverage",
      icon: Utensils,
      tag: "SFA Compliant",
    },
    {
      title: "Healthcare & Childcare",
      headline: "Sterile & Child-Safe Vector Control Protocols",
      desc: "Low-toxicity, odorless formulations and non-chemical heat applications for hospitals, clinics, preschools, and elderly care centers.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      href: "/industries/healthcare",
      icon: HeartPulse,
      tag: "Child & Pet Safe",
    },
  ];

  const others = [
    {
      title: "Corporate Offices",
      desc: "Discreet after-hours pantry & ceiling void protection without disruption.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      href: "/industries/commercial",
      icon: Building,
    },
    {
      title: "Engineering & Industrial",
      desc: "Perimeter defense for manufacturing facilities, Tuas & Jurong hubs.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      href: "/industries/engineering",
      icon: HardHat,
    },
    {
      title: "Logistics & Warehousing",
      desc: "Supply chain cargo protection & perimeter rodent exclusion barriers.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      href: "/industries/commercial",
      icon: Truck,
    },
    {
      title: "Hospitality & Hotels",
      desc: "Rapid guestroom bed bug eradication & exterior landscape vector control.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
      href: "/industries/hospitality",
      icon: Hotel,
    },
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" id="industries">
      {/* Ambient background glows */}
      <div className="orb-emerald -top-20 left-10 opacity-15" />
      <div className="orb-blue bottom-10 right-10 opacity-15" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="COMMERCIAL SECTOR SPECIALISMS"
          eyebrowVariant="green"
          title="Industry-Specific Vector Control"
          subtitle="Tailored programs compliant with Singapore Food Agency (SFA), Ministry of Health (MOH), and NEA regulatory standards."
          align="center"
          className="mb-14 sm:mb-18"
        />

        {/* 2 Large Featured Editorial Glass Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {featured.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={item.title}
                variant="medium"
                interactive
                className="overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09264A]/60 via-[#09264A]/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white text-xs font-bold text-[#087A4A] flex items-center gap-1.5 shadow-sm">
                    <Icon className="w-4 h-4 text-[#0FA968]" />
                    <span>{item.tag}</span>
                  </div>
                </div>

                <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-[#09264A] font-heading group-hover:text-[#0FA968] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#087A4A]">
                      {item.headline}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/60">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0FA968] group-hover:text-[#087A4A]"
                    >
                      <span>Explore Industry Protocol</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* 4 Supporting Industry Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {others.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={item.title}
                variant="medium"
                interactive
                className="p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#DDF7EA] border border-[#0FA968]/20 flex items-center justify-center text-[#0FA968] mb-4 shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h4 className="text-lg font-extrabold text-[#09264A] font-heading group-hover:text-[#0FA968] transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/60">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#09264A] group-hover:text-[#0FA968] transition-colors"
                  >
                    <span>View details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0FA968]" />
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
