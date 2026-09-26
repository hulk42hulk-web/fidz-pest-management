"use client";

import React, { useState } from "react";
import { CLIENT_CATEGORIES } from "@/lib/clients";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Building2 } from "lucide-react";

export function ClientLogos() {
  const [activeCategory, setActiveCategory] = useState<string>("All Sectors");

  const categories = ["All Sectors", ...CLIENT_CATEGORIES.map((c) => c.category)];

  const filteredClients =
    activeCategory === "All Sectors"
      ? CLIENT_CATEGORIES.flatMap((c) => c.clients)
      : CLIENT_CATEGORIES.find((c) => c.category === activeCategory)?.clients || [];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow="ENTERPRISE CLIENTELE"
          eyebrowVariant="green"
          title="Singapore Brands & Institutions Trusting Fidz"
          subtitle="Partnering with preschools, marine engineering conglomerates, restaurant chains, healthcare facilities, and commercial properties."
          align="center"
          className="mb-10 sm:mb-14"
        />

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#16A765] text-white shadow-md shadow-[#16A765]/20 border border-[#16A765]"
                  : "bg-[#F8FBFD] text-[#5A6E85] hover:bg-slate-100 hover:text-[#0B2345] border border-slate-200/90"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Logo Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {filteredClients.slice(0, 18).map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="bg-white border border-slate-200/90 hover:border-[#16A765] rounded-2xl p-4 flex flex-col items-center justify-center text-center h-28 sm:h-32 transition-all duration-300 hover:shadow-[0_10px_25px_rgba(16,42,67,0.06)] group"
            >
              {/* Logo Emblem Symbol */}
              <div className="w-8 h-8 rounded-lg bg-[#E8F8EF] border border-[#16A765]/20 flex items-center justify-center mb-2 group-hover:bg-[#16A765] group-hover:text-white transition-colors">
                <Building2 className="w-4 h-4 text-[#16A765] group-hover:text-white" />
              </div>

              {/* Company Name */}
              <div className="font-extrabold text-xs sm:text-sm text-[#0B2345] leading-tight font-heading line-clamp-2">
                {client.name}
              </div>

              {/* Sub-label */}
              <div className="text-[10px] text-[#5A6E85] mt-1 truncate max-w-full font-medium">
                {client.type}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
