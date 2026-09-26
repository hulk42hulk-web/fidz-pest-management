import React from "react";
import { ShieldCheck, Clock, MapPin, Home, Building2, SearchCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function TrustBar() {
  const trustItems = [
    { label: "NEA REGISTERED", sub: "Vector Control Operator", icon: ShieldCheck },
    { label: "24/7 SERVICE", sub: "Round-the-Clock", icon: Clock },
    { label: "SINGAPORE-WIDE", sub: "All Postal Districts", icon: MapPin },
    { label: "RESIDENTIAL", sub: "HDB • Condo • Landed", icon: Home },
    { label: "COMMERCIAL", sub: "F&B • Industrial • Offices", icon: Building2 },
    { label: "INSPECTION-LED", sub: "Targeted Treatment", icon: SearchCheck },
  ];

  return (
    <section className="bg-white/70 backdrop-blur-md border-b border-slate-200/80 py-6 sm:py-8">
      <Container>
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="bg-white/85 border border-slate-200/80 rounded-2xl p-3 sm:p-3.5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 transition-all hover:border-[#16A765]/40 hover:shadow-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-[#E8F8EF] border border-[#16A765]/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#16A765]" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-extrabold text-[#0B2345] tracking-wider uppercase font-heading truncate">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-[#5A6E85] font-medium truncate mt-0.5">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
