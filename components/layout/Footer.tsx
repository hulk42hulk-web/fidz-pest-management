import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck, ArrowRight, Flame } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-slate-200 pt-16 sm:pt-20 pb-28 lg:pb-16 bg-[#09264A]">
      {/* Layer 1: Ambient Emerald & Cyan Glow Blobs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#0FA968]/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[550px] h-[550px] bg-[#38BDF8]/15 rounded-full blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Top Emergency Glass Banner inside Footer */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[28px] p-6 sm:p-8 mb-14 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#E5394F]/25 border border-[#E5394F]/40 flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6 text-[#E5394F] animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold !text-white font-heading tracking-tight">
                Facing an Urgent Pest Emergency in Singapore?
              </h3>
              <p className="text-emerald-100/90 text-xs sm:text-sm mt-1 font-medium">
                Our licensed vector control technicians are on active standby 24 hours, 7 days a week.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-center">
            <a
              href={COMPANY_INFO.phoneTel}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-100 !text-[#09264A] font-extrabold text-sm transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#0FA968]" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0FA968] hover:bg-[#087A4A] text-white font-extrabold text-sm transition-all shadow-md shadow-[#0FA968]/25"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Emergency</span>
            </a>
          </div>
        </div>

        {/* 5-Column Grid with High-Contrast Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/15">
          {/* Col 1: Brand & NEA */}
          <div className="lg:col-span-2 space-y-4">
            <Logo showTagline={true} />
            <p className="text-slate-200 text-sm leading-relaxed max-w-sm mt-3 font-normal">
              Fidz Pest Management is an officially registered Singapore Vector Control Operator dedicated to precision, non-toxic options, and rapid 24/7 pest eradication for residential and commercial premises.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-200">
              <span className="flex items-center gap-2 font-bold text-[#DDF7EA]">
                <ShieldCheck className="w-4 h-4 text-[#0FA968]" />
                NEA Reg. {COMPANY_INFO.neaReg}
              </span>
              <span className="flex items-center gap-2 font-medium text-slate-200">
                <MapPin className="w-4 h-4 text-[#0FA968]" />
                {COMPANY_INFO.address.fullAddress}
              </span>
              <span className="flex items-center gap-2 font-medium text-slate-200">
                <Clock className="w-4 h-4 text-[#0FA968]" />
                24/7 Emergency Dispatch • Daily Operations
              </span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3.5">
            <h4 className="!text-white text-xs font-extrabold uppercase tracking-widest font-heading flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0FA968]" />
              Specialized Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-200 hover:text-white transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Sectors & Coverage */}
          <div className="space-y-3.5">
            <h4 className="!text-white text-xs font-extrabold uppercase tracking-widest font-heading flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0FA968]" />
              Sectors & Areas
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/industries/food-beverage" className="text-slate-200 hover:text-white transition-colors">
                  F&B & Restaurants
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="text-slate-200 hover:text-white transition-colors">
                  Healthcare & Clinics
                </Link>
              </li>
              <li>
                <Link href="/industries/education" className="text-slate-200 hover:text-white transition-colors">
                  Education & Preschools
                </Link>
              </li>
              <li>
                <Link href="/industries/commercial" className="text-slate-200 hover:text-white transition-colors">
                  Commercial Offices
                </Link>
              </li>
              <li>
                <Link href="/areas-we-serve" className="text-slate-200 hover:text-white transition-colors">
                  All Singapore Districts
                </Link>
              </li>
              <li>
                <Link href="/why-fidz" className="text-slate-200 hover:text-white transition-colors">
                  Why Choose Fidz
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Contact */}
          <div className="space-y-3.5">
            <h4 className="!text-white text-xs font-extrabold uppercase tracking-widest font-heading flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0FA968]" />
              Contact & Booking
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={COMPANY_INFO.phoneTel}
                  className="text-white font-bold hover:text-[#0FA968] flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0FA968]" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold hover:text-[#0FA968] flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#0FA968]" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.emailMailto}
                  className="text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#0FA968]" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/book-inspection"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0FA968] hover:bg-[#087A4A] text-white text-xs font-extrabold transition-all"
                >
                  <span>Book Inspection</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            © {new Date().getFullYear()} Fidz Pest Management. All rights reserved. Registered Singapore Vector Control Operator.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/faq" className="text-slate-300 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
