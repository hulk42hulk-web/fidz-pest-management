import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Flame, AlertCircle, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function EmergencyBanner() {
  return (
    <section className="bg-gradient-to-r from-[#FEECEF]/60 via-white to-[#FEECEF]/60 border-b border-[#E5394F]/20 py-8 sm:py-10 relative overflow-hidden">
      {/* Red ambient pulse glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-64 h-64 bg-[#E5394F]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="glass-card-emergency rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 shadow-[0_10px_30px_rgba(229,57,79,0.06)] flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 border border-[#E5394F]/20">
          {/* Left Text & Alert badge */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 max-w-2xl">
            <div className="w-14 h-14 rounded-2xl bg-white border border-[#E5394F]/30 flex items-center justify-center shrink-0 shadow-sm">
              <Flame className="w-7 h-7 text-[#E5394F] animate-pulse" />
            </div>

            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#FEECEF] border border-[#E5394F]/30 text-[#E5394F] text-xs font-extrabold uppercase tracking-wider">
                <AlertCircle className="w-3.5 h-3.5" />
                24/7 Emergency Pest Control
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2345] font-heading">
                Pest Problem Right Now?
              </h2>
              <p className="text-[#5A6E85] text-sm sm:text-base">
                Get in touch with Fidz for 24/7 emergency pest-control support across Singapore.
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <Button
              href={COMPANY_INFO.phoneTel}
              variant="emergency"
              size="lg"
              leftIcon={<Phone className="w-5 h-5 fill-white" />}
              className="w-full sm:w-auto text-base font-extrabold uppercase tracking-wider shadow-md shadow-red-500/20"
            >
              Call Now: {COMPANY_INFO.phone}
            </Button>

            <Button
              href={COMPANY_INFO.whatsappUrl}
              isExternal
              variant="primary"
              size="lg"
              leftIcon={<MessageCircle className="w-5 h-5 fill-white" />}
              className="w-full sm:w-auto text-base font-bold shadow-md shadow-[#16A765]/20"
            >
              WhatsApp Now
            </Button>

            <Link
              href="/services/emergency-pest-control"
              className="text-xs text-[#0B2345] hover:text-[#16A765] underline font-bold text-center mt-1 sm:mt-0 flex items-center justify-center gap-1"
            >
              Emergency Details <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
