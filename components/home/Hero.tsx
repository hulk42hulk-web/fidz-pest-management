import React from "react";
import Link from "next/link";
import { Phone, ShieldCheck, Shield, ArrowRight, Leaf, Zap, FileText } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Hero() {
  return (
    <section className="relative pt-6 sm:pt-10 lg:pt-14 pb-14 sm:pb-20 overflow-hidden">
      {/* Layer 1: Atmospheric Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9FCFA] via-[#F4F9F8] to-[#EDF5F8] -z-30 pointer-events-none" />

      {/* Layer 2: Decorative Atmospheric Glow Blobs */}
      <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-[#0FA968]/10 rounded-full blur-[110px] -z-20 pointer-events-none" />
      <div className="absolute top-10 right-5 w-[550px] h-[550px] bg-[#38BDF8]/12 rounded-full blur-[120px] -z-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-[#0FA968]/8 rounded-full blur-[100px] -z-20 pointer-events-none" />

      {/* Left Marina Bay Sands Singapore Silhouette Faded Backdrop */}
      <div
        className="absolute bottom-0 left-0 w-80 sm:w-[480px] h-72 sm:h-96 opacity-15 pointer-events-none -z-10 bg-no-repeat bg-contain bg-bottom mix-blend-multiply"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80')",
          maskImage: "linear-gradient(to right, black 30%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(to right, black 30%, transparent 95%)",
        }}
      />

      {/* Floating Translucent Frosted Glass Prism Tile on Left Edge */}
      <div className="absolute top-28 left-4 lg:left-8 w-16 sm:w-20 h-28 sm:h-36 rounded-3xl bg-white/45 backdrop-blur-2xl border border-white/80 shadow-[0_15px_35px_rgba(9,38,74,0.06)] -rotate-6 pointer-events-none z-10 hidden md:block" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Typography, Value Proposition, Checkpoints & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Dual Trust Badges */}
            <div className="inline-flex items-center gap-2.5 flex-wrap">
              <span className="text-xs font-bold text-[#0FA968] bg-[#DDF7EA] px-3.5 py-1.5 rounded-full border border-[#0FA968]/30 flex items-center gap-1.5 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0FA968]" />
                24/7 PEST CONTROL • SINGAPORE
              </span>
              <span className="text-xs font-semibold text-[#09264A] bg-white/70 px-3 py-1.5 rounded-full border border-slate-200/80 flex items-center gap-1.5 shadow-2xs">
                <Shield className="w-3.5 h-3.5 text-slate-500" />
                NEA Reg. {COMPANY_INFO.neaReg}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-[1.08] sm:leading-[1.04] text-[#09264A] font-heading">
              Professional Pest Control.{" "}
              <span className="text-[#0FA968]">
                Right When You Need It.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              Fast, professional pest management for homes and businesses across Singapore. Targeted inspection, colony eradication, and NEA-compliant safety standards.
            </p>

            {/* 2x2 Feature Checkpoint Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full pt-1">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/80 border border-white/95 shadow-2xs flex items-center justify-center text-[#0FA968] shrink-0">
                  <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">
                  Zero-Smell & Child/Pet-Safe Options
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/80 border border-white/95 shadow-2xs flex items-center justify-center text-[#0FA968] shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">
                  Certified Vector Control Operators
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/80 border border-white/95 shadow-2xs flex items-center justify-center text-[#0FA968] shrink-0">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">
                  Rapid Islandwide Emergency Dispatch
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/80 border border-white/95 shadow-2xs flex items-center justify-center text-[#0FA968] shrink-0">
                  <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">
                  SFA & NEA Inspection Documentation
                </span>
              </div>
            </div>

            {/* 3 Call-To-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <Link
                href="/book-inspection"
                className="rounded-full bg-[#0FA968] hover:bg-[#087A4A] text-white font-bold px-6 sm:px-7 py-3 sm:py-3.5 shadow-[0_10px_25px_rgba(15,169,104,0.3)] transition-all flex items-center justify-center gap-2 text-sm sm:text-base group cursor-pointer shrink-0"
              >
                <span>Book an Inspection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
              </Link>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/85 hover:bg-white border border-slate-200/90 text-[#09264A] font-bold px-5 sm:px-6 py-3 sm:py-3.5 shadow-2xs transition-all flex items-center justify-center gap-2.5 text-sm sm:text-base cursor-pointer shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#0FA968] shrink-0 fill-current" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={COMPANY_INFO.phoneTel}
                className="rounded-full bg-white/85 hover:bg-white border border-slate-200/90 text-[#09264A] font-bold px-5 sm:px-6 py-3 sm:py-3.5 shadow-2xs transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer shrink-0"
              >
                <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Layered Visual Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[560px] mx-auto select-none transition-transform duration-500 hover:scale-[1.01]">
              <img
                src="/images/hero-technician-composition.png"
                alt="Fidz Pest Management Certified Technician conducting professional inspection in Singapore"
                className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(9,38,74,0.12)]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
