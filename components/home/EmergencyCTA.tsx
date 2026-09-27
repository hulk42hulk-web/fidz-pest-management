import React from "react";
import { Phone, Flame, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Container } from "@/components/ui/Container";

export function EmergencyCTA() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden" id="emergency">
      {/* Rich Emerald Atmospheric Gradient with Layered Lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#09264A] via-[#0B3A2C] to-[#09264A] -z-20" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#0FA968]/30 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#0FA968]/25 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[24px] sm:rounded-[32px] p-5 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.25)] flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Text & Alert badge */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 max-w-2xl">
            <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center shrink-0 shadow-inner">
              <Flame className="w-8 h-8 text-[#E5394F] animate-pulse" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-[#DDF7EA] text-xs font-extrabold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-[#0FA968]" />
                24/7 Islandwide Emergency Dispatch
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold !text-white font-heading tracking-tight leading-tight">
                Acute Pest Infestation Right Now?
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Call our direct Singapore hotline or send photos via WhatsApp for immediate on-site dispatch. Active 24 hours, 7 days a week including public holidays.
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full lg:w-auto shrink-0">
            <a
              href={COMPANY_INFO.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#E5394F] hover:bg-[#c92a3f] text-white font-extrabold text-base shadow-[0_10px_25px_rgba(229,57,79,0.4)] transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0FA968] hover:bg-[#087A4A] text-white font-bold text-base shadow-[0_10px_25px_rgba(15,169,104,0.35)] transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
              <span>WhatsApp Emergency Team</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
