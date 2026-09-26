import React from "react";
import { Phone, MessageCircle, ShieldCheck, Clock, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative bg-mesh-hero pt-8 sm:pt-14 lg:pt-18 pb-16 sm:pb-24 overflow-hidden border-b border-slate-200/80">
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-[#16A765]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0B2345]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column - Copy & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Status & Trust Badge */}
            <div className="inline-flex items-center gap-2 flex-wrap">
              <Badge variant="green" size="md">
                24/7 PEST CONTROL • SINGAPORE
              </Badge>
              <span className="text-xs font-bold text-[#087F4E] bg-[#E8F8EF] px-3 py-1 rounded-full border border-[#16A765]/20 flex items-center gap-1.5 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#16A765]" />
                NEA Registered: {COMPANY_INFO.neaReg}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[36px] sm:text-[50px] lg:text-[62px] font-extrabold tracking-tight leading-[1.08] text-[#0B2345] font-heading">
              Professional Pest Control.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A765] via-[#087F4E] to-[#16A765]">
                Right When You Need It.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-[19px] text-[#5A6E85] leading-relaxed max-w-xl font-normal">
              Fast, professional pest management for homes and businesses across Singapore. Targeted inspection, colony eradication, and NEA-compliant safety standards.
            </p>

            {/* Key Value Proposition Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full pt-1 text-xs sm:text-sm text-[#102A43] font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A765] shrink-0" />
                <span>Zero-Smell & Child/Pet-Safe Options</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A765] shrink-0" />
                <span>Certified Vector Control Operators</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A765] shrink-0" />
                <span>Rapid Islandwide Emergency Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A765] shrink-0" />
                <span>SFA & NEA Inspection Documentation</span>
              </div>
            </div>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full pt-3">
              {/* Primary CTA */}
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="text-base font-extrabold uppercase tracking-wide shadow-lg shadow-[#16A765]/25"
              >
                Book An Inspection
              </Button>

              {/* WhatsApp CTA */}
              <Button
                href={COMPANY_INFO.whatsappUrl}
                isExternal
                variant="secondary"
                size="lg"
                leftIcon={<MessageCircle className="w-5 h-5 text-[#16A765]" />}
                className="text-base font-bold text-[#087F4E] border-[#16A765]/25 bg-white/90 hover:bg-[#E8F8EF]"
              >
                WhatsApp Us
              </Button>

              {/* Phone CTA */}
              <Button
                href={COMPANY_INFO.phoneTel}
                variant="ghost"
                size="lg"
                leftIcon={<Phone className="w-4 h-4 text-[#16A765]" />}
                className="text-base font-bold text-[#0B2345] hover:bg-white/80"
              >
                Call {COMPANY_INFO.phone}
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Visual & Floating Frosted Glass Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image Frame with Frosted Glass Border */}
              <div className="relative rounded-[26px] sm:rounded-[30px] overflow-hidden p-2.5 sm:p-3 bg-white/70 backdrop-blur-md border border-white/90 shadow-[0_20px_50px_-10px_rgba(16,42,67,0.1)] group">
                <div className="aspect-[4/3] sm:aspect-[16/13] w-full rounded-[20px] sm:rounded-[24px] overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
                    alt="Professional Singapore Pest Control Technician conducting on-site inspection"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2345]/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Glass Card 1: NEA REGISTERED */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white/90 backdrop-blur-xl border border-white/95 rounded-2xl p-3 sm:p-4 shadow-[0_15px_35px_rgba(16,42,67,0.08)] flex items-center gap-3 text-left animate-in fade-in">
                <div className="w-10 h-10 rounded-xl bg-[#E8F8EF] border border-[#16A765]/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#16A765]" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#087F4E]">
                    NEA REGISTERED
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#0B2345]">
                    Vector Control Operator
                  </div>
                </div>
              </div>

              {/* Floating Glass Card 2: 24/7 EMERGENCY */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/90 backdrop-blur-xl border border-white/95 rounded-2xl p-3 sm:p-4 shadow-[0_15px_35px_rgba(16,42,67,0.08)] flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#FEECEF] border border-[#E5394F]/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#E5394F]" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#E5394F]">
                    24/7 SUPPORT
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#0B2345]">
                    Emergency Dispatch
                  </div>
                </div>
              </div>

              {/* Floating Glass Card 3: SINGAPORE WIDE */}
              <div className="hidden sm:flex absolute bottom-20 -right-4 bg-white/90 backdrop-blur-xl border border-white/95 rounded-2xl p-3 shadow-[0_10px_25px_rgba(16,42,67,0.06)] items-center gap-2 text-left">
                <MapPin className="w-4 h-4 text-[#16A765]" />
                <span className="text-xs font-bold text-[#0B2345]">
                  Islandwide Singapore
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
