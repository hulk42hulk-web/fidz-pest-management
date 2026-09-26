import React from "react";
import { ShieldCheck, Clock, MapPin, ArrowRight, Award } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#F8FBFD] border-b border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with Glass Trust Pill */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[26px] sm:rounded-[30px] overflow-hidden p-2.5 sm:p-3 bg-white/70 backdrop-blur-md border border-white/90 shadow-[0_20px_50px_-10px_rgba(16,42,67,0.08)]">
              <div className="aspect-[4/3] w-full rounded-[20px] sm:rounded-[24px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                  alt="Fidz Pest Management professional technician on duty in Singapore"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Overlapping Glass Trust Pill */}
            <div className="absolute -bottom-5 right-4 sm:right-6 bg-white/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/95 shadow-[0_15px_35px_rgba(16,42,67,0.08)] max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8F8EF] border border-[#16A765]/20 flex items-center justify-center text-[#16A765] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#087F4E] uppercase tracking-wider">
                    NEA Licensed
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#0B2345]">
                    Operator: {COMPANY_INFO.neaReg}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F8EF] border border-[#16A765]/20 text-xs font-extrabold text-[#087F4E] uppercase tracking-wider">
              About Fidz Pest Management
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B2345] font-heading leading-tight">
              Local Pest Management. Professional Standards.
            </h2>

            <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
              Based at Midview City (Sin Ming), Fidz Pest Management was founded to provide transparent, scientifically grounded pest eradication across Singapore. We combine modern colony elimination techniques with responsive 24/7 client care.
            </p>

            {/* Three key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <ShieldCheck className="w-6 h-6 text-[#16A765] mb-2" />
                <div className="font-extrabold text-sm text-[#0B2345] font-heading">
                  NEA Registered
                </div>
                <div className="text-xs text-[#5A6E85] mt-0.5 font-medium">
                  100% compliant vector control
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <Clock className="w-6 h-6 text-[#16A765] mb-2" />
                <div className="font-extrabold text-sm text-[#0B2345] font-heading">
                  24/7 Availability
                </div>
                <div className="text-xs text-[#5A6E85] mt-0.5 font-medium">
                  Emergency team on standby
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <MapPin className="w-6 h-6 text-[#16A765] mb-2" />
                <div className="font-extrabold text-sm text-[#0B2345] font-heading">
                  Islandwide Reach
                </div>
                <div className="text-xs text-[#5A6E85] mt-0.5 font-medium">
                  All Singapore regions
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                href="/about"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="text-base font-extrabold uppercase tracking-wide shadow-md shadow-[#16A765]/20"
              >
                About Fidz →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
