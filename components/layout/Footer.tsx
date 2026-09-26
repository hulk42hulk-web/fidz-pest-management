import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck, ArrowRight, Flame } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-[#F1F7FA] border-t border-slate-200/90 text-[#5A6E85] pt-16 sm:pt-20 pb-28 lg:pb-16 relative overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#16A765]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#0B2345]/3 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Top Emergency CTA Strip inside Footer */}
        <div className="glass-card-navy rounded-[24px] p-6 sm:p-8 mb-14 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 border border-slate-200/80">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#FEECEF] border border-[#E5394F]/30 flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6 text-[#E5394F] animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B2345] font-heading">
                Facing an Urgent Pest Emergency in Singapore?
              </h3>
              <p className="text-[#5A6E85] text-sm mt-0.5">
                Our licensed vector control technicians are on standby 24 hours, 7 days a week.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-center">
            <a
              href={COMPANY_INFO.phoneTel}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#0B2345] font-extrabold text-sm transition-all shadow-xs border border-slate-200 active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#16A765]" />
              <span>Call 67146711</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#16A765] hover:bg-[#087F4E] text-white font-extrabold text-sm transition-all shadow-md shadow-[#16A765]/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* 4-Column Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-200">
          {/* Col 1: Brand & NEA */}
          <div className="lg:col-span-2 space-y-4">
            <Logo showTagline={true} />
            <p className="text-[#5A6E85] text-sm sm:text-base leading-relaxed max-w-sm mt-3">
              Fidz Pest Management is a premier Singapore vector control operator dedicated to precision, safety, and rapid 24/7 pest eradication for residential and commercial premises.
            </p>

            <div className="pt-2 space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#E8F8EF] border border-[#16A765]/20 text-xs text-[#087F4E] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#16A765]" />
                <span>NEA Registration: {COMPANY_INFO.neaReg}</span>
              </div>
              <p className="text-xs text-[#5A6E85]">
                Official NEA Registered Vector Control Operator
              </p>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-[#0B2345] text-sm font-extrabold uppercase tracking-wider mb-4 font-heading">
              Pest Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[#5A6E85] hover:text-[#16A765] transition-colors flex items-center gap-1.5 group font-medium"
                  >
                    <ArrowRight className="w-3 h-3 text-[#16A765] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{s.shortTitle}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-xs text-[#16A765] font-bold hover:underline inline-block pt-1"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries & Coverage */}
          <div>
            <h4 className="text-[#0B2345] text-sm font-extrabold uppercase tracking-wider mb-4 font-heading">
              Industries & Areas
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/industries/residential" className="text-[#5A6E85] hover:text-[#16A765] transition-colors font-medium">
                  Residential (HDB / Condo)
                </Link>
              </li>
              <li>
                <Link href="/industries/commercial" className="text-[#5A6E85] hover:text-[#16A765] transition-colors font-medium">
                  Commercial & Corporate
                </Link>
              </li>
              <li>
                <Link href="/industries/food-beverage" className="text-[#5A6E85] hover:text-[#16A765] transition-colors font-medium">
                  Food & Beverage (F&B)
                </Link>
              </li>
              <li>
                <Link href="/industries/education" className="text-[#5A6E85] hover:text-[#16A765] transition-colors font-medium">
                  Childcare & Education
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="text-[#5A6E85] hover:text-[#16A765] transition-colors font-medium">
                  Healthcare & Clinics
                </Link>
              </li>
              <li>
                <Link href="/industries/engineering" className="text-[#5A6E85] hover:text-[#16A765] transition-colors font-medium">
                  Engineering & Industrial
                </Link>
              </li>
              <li>
                <Link href="/areas-we-serve" className="text-xs text-[#16A765] font-bold hover:underline inline-block pt-1">
                  Singapore Coverage Map →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h4 className="text-[#0B2345] text-sm font-extrabold uppercase tracking-wider mb-4 font-heading">
              Fidz Headquarters
            </h4>
            <ul className="space-y-3.5 text-sm text-[#102A43]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#16A765] shrink-0 mt-0.5" />
                <span className="text-[#5A6E85]">
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.building}, {COMPANY_INFO.address.country} {COMPANY_INFO.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#16A765] shrink-0" />
                <a href={COMPANY_INFO.phoneTel} className="hover:text-[#16A765] font-bold transition-colors">
                  {COMPANY_INFO.phone} (24/7 Hotline)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#16A765] shrink-0" />
                <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#16A765] font-bold transition-colors">
                  {COMPANY_INFO.whatsapp} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#16A765] shrink-0" />
                <a href={COMPANY_INFO.emailMailto} className="hover:text-[#16A765] transition-colors text-[#5A6E85]">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-[#087F4E] font-semibold pt-1">
                <Clock className="w-4 h-4 text-[#16A765] shrink-0" />
                <span>{COMPANY_INFO.operatingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A6E85]">
          <p>© 2026 {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/faq" className="hover:text-[#0B2345] transition-colors">
              FAQ
            </Link>
            <Link href="/about" className="hover:text-[#0B2345] transition-colors">
              About Fidz
            </Link>
            <Link href="/contact" className="hover:text-[#0B2345] transition-colors">
              Book Inspection
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
