import React from "react";
import Link from "next/link";
import { ArrowRight, Home, Building2, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function ResidentialCommercial() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FBFD] border-b border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* LEFT: HOME PEST CONTROL */}
          <div className="group relative rounded-[24px] sm:rounded-[28px] overflow-hidden border border-slate-200/90 bg-white/80 backdrop-blur-md flex flex-col justify-between shadow-[0_10px_30px_rgba(16,42,67,0.05)] hover:shadow-[0_20px_45px_rgba(16,42,67,0.09)] hover:border-[#16A765]/40 transition-all duration-300">
            {/* Top Image Banner */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Singapore Residential Pest Management for Condominiums and Landed Homes"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-xs font-extrabold uppercase text-[#087F4E] flex items-center gap-2 shadow-sm">
                <Home className="w-3.5 h-3.5 text-[#16A765]" />
                <span>Residential Specialist</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-6">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2345] font-heading">
                  Home Pest Control
                </h3>
                <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
                  Protect your home and family with odorless, child and pet-safe pest eradication. Customized treatment for high-rise apartments and landed estates.
                </p>

                <div className="space-y-2 pt-2 text-sm text-[#102A43]">
                  <div className="text-xs font-extrabold text-[#16A765] uppercase tracking-wider">
                    Ideal For:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#16A765] shrink-0" />
                      <span>Apartments & HDB</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#16A765] shrink-0" />
                      <span>Private Condos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#16A765] shrink-0" />
                      <span>Landed Properties</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#16A765] shrink-0" />
                      <span>Rental Units</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <Link
                href="/industries/residential"
                className="inline-flex items-center justify-between w-full px-6 py-4 rounded-xl bg-[#16A765] hover:bg-[#087F4E] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-md shadow-[#16A765]/20 transition-all"
              >
                <span>Home Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* RIGHT: COMMERCIAL PEST CONTROL */}
          <div className="group relative rounded-[24px] sm:rounded-[28px] overflow-hidden border border-slate-200/90 bg-white/80 backdrop-blur-md flex flex-col justify-between shadow-[0_10px_30px_rgba(16,42,67,0.05)] hover:shadow-[0_20px_45px_rgba(16,42,67,0.09)] hover:border-[#16A765]/40 transition-all duration-300">
            {/* Top Image Banner */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="Singapore Commercial & Corporate Pest Management"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-xs font-extrabold uppercase text-[#0B2345] flex items-center gap-2 shadow-sm">
                <Building2 className="w-3.5 h-3.5 text-[#16A765]" />
                <span>Commercial & Enterprise</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-6">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2345] font-heading">
                  Commercial Pest Control
                </h3>
                <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
                  Rigorous vector control contracts, SFA-compliant documentation, and after-hours servicing for businesses requiring zero operational disruption.
                </p>

                <div className="space-y-2 pt-2 text-sm text-[#102A43]">
                  <div className="text-xs font-extrabold text-[#16A765] uppercase tracking-wider">
                    Ideal For:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#16A765] shrink-0" />
                      <span>Restaurants & Cafes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#16A765] shrink-0" />
                      <span>Offices & Towers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#16A765] shrink-0" />
                      <span>Warehouses & Logistics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#16A765] shrink-0" />
                      <span>Childcare & Healthcare</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <Link
                href="/industries/commercial"
                className="inline-flex items-center justify-between w-full px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#0B2345] border-2 border-slate-200/90 hover:border-[#16A765] font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-xs transition-all"
              >
                <span>Commercial Services</span>
                <ArrowRight className="w-5 h-5 text-[#16A765]" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
