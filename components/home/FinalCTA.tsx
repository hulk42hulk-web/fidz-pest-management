import React from "react";
import { Phone, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-mesh-cta relative overflow-hidden border-t border-slate-200/80">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#16A765]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#0B2345]/4 rounded-full blur-3xl pointer-events-none" />

      <Container size="narrow" className="relative z-10 text-center">
        <div className="space-y-6 max-w-2xl mx-auto glass-surface rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 border border-white/95 shadow-[0_20px_50px_rgba(16,42,67,0.06)]">
          {/* Eyebrow */}
          <Badge variant="green" size="md">
            <ShieldCheck className="w-4 h-4" />
            <span>Singapore Islandwide Support</span>
          </Badge>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-[#0B2345] font-heading tracking-tight leading-[1.1]">
            Need Pest Control Help?
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-[19px] text-[#5A6E85] leading-relaxed font-normal">
            Tell us what you&apos;re dealing with and we&apos;ll help you determine the next step. Fast scheduling, licensed technicians, and zero pushy sales tactics.
          </p>

          {/* 3 Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="text-base font-extrabold uppercase tracking-wide shadow-lg shadow-[#16A765]/25"
            >
              Book An Inspection
            </Button>

            <Button
              href={COMPANY_INFO.whatsappUrl}
              isExternal
              variant="secondary"
              size="lg"
              leftIcon={<MessageCircle className="w-5 h-5 text-[#16A765]" />}
              className="text-base font-bold text-[#087F4E] border-[#16A765]/25 bg-white hover:bg-[#E8F8EF]"
            >
              WhatsApp Us
            </Button>

            <Button
              href={COMPANY_INFO.phoneTel}
              variant="ghost"
              size="lg"
              leftIcon={<Phone className="w-4 h-4 text-[#16A765]" />}
              className="text-base font-bold text-[#0B2345] hover:bg-slate-100"
            >
              Call {COMPANY_INFO.phone}
            </Button>
          </div>

          {/* Subtext info */}
          <div className="pt-6 text-xs text-[#5A6E85] font-semibold flex items-center justify-center gap-4 flex-wrap border-t border-slate-100">
            <span>✓ NEA Reg: {COMPANY_INFO.neaReg}</span>
            <span>•</span>
            <span>✓ 24/7 Islandwide Emergency</span>
            <span>•</span>
            <span>✓ Child & Pet Safe Methods</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
