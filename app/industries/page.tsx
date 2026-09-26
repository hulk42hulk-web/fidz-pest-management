import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/industries";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ClientLogos } from "@/components/home/ClientLogos";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Commercial & Residential Industries Served | Fidz Pest Management Singapore",
  description:
    "Specialized vector control and pest management solutions for Singapore industries: F&B restaurants, schools, childcare centers, healthcare facilities, and manufacturing plants.",
};

export default function IndustriesPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-mesh-hero pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-slate-200/80 text-center">
        <Container size="narrow">
          <div className="space-y-6">
            <Badge variant="green" size="md">
              SINGAPORE INDUSTRY SOLUTIONS
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0B2345] font-heading tracking-tight leading-[1.08]">
              Pest Management For{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A765] via-[#087F4E] to-[#16A765]">
                Singapore Businesses
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#5A6E85] max-w-2xl mx-auto leading-relaxed">
              Every facility faces distinct regulatory standards and biological vectors. Discover our customized pest management programs conforming to SFA, ECDA, MOH, and BCA requirements.
            </p>
          </div>
        </Container>
      </section>

      {/* Industry Cards Grid */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.slug}
                className="bg-white border border-slate-200/90 rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(16,42,67,0.04)] hover:shadow-[0_20px_50px_rgba(16,42,67,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:border-[#16A765]/40"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={ind.cardImage}
                      alt={ind.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2345]/30 via-transparent to-transparent" />
                  </div>

                  <div className="p-6 space-y-3">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2345] font-heading group-hover:text-[#16A765] transition-colors">
                      {ind.title}
                    </h2>
                    <p className="text-sm text-[#5A6E85] leading-relaxed line-clamp-3">
                      {ind.subheadline}
                    </p>

                    <div className="pt-2">
                      <div className="text-xs font-bold text-[#16A765] uppercase tracking-wider mb-2">
                        Key Targeted Pests:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {ind.commonPests.slice(0, 3).map((p, i) => (
                          <span key={i} className="text-[11px] bg-[#F8FBFD] border border-slate-200 px-2.5 py-1 rounded-md text-[#102A43] font-bold">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-[#16A765] hover:bg-[#087F4E] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md shadow-[#16A765]/15 transition-all"
                  >
                    <span>Sector Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
