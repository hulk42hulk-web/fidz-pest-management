import React from "react";
import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/glass/GlassCard";
import { BookingSection } from "@/components/home/BookingSection";

export const metadata: Metadata = {
  title: "Contact Fidz Pest Management Singapore | 24/7 Hotline",
  description:
    "Contact Fidz Pest Management Singapore. 24/7 emergency dispatch hotline: 6714 6711. WhatsApp: 9782 0482. Fast scheduling across all Singapore postal districts.",
};

export default function ContactPage() {
  return (
    <div className="pt-6 sm:pt-10">
      <section className="py-12 sm:py-16 relative overflow-hidden text-center">
        <div className="orb-emerald -top-20 left-1/4 opacity-15" />
        <div className="orb-blue top-10 right-1/4 opacity-15" />

        <Container className="relative z-10">
          <SectionHeading
            eyebrow="24/7 DIRECT RESPONSE"
            eyebrowVariant="green"
            title="Contact Our Singapore Pest Control Dispatch"
            subtitle="Immediate assistance for acute pest emergencies, residential inspections, and commercial facility pest management contracts."
            align="center"
            className="mb-8"
          />
        </Container>
      </section>

      {/* 4 Contact Cards */}
      <section className="pb-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard variant="medium" className="p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-extrabold text-[#09264A] font-heading">
                24/7 Phone Hotline
              </h3>
              <p className="text-xs text-slate-500">
                Direct emergency dispatch line
              </p>
              <a
                href={COMPANY_INFO.phoneTel}
                className="block text-base font-extrabold text-[#09264A] hover:text-[#0FA968] transition-colors"
              >
                {COMPANY_INFO.phone}
              </a>
            </GlassCard>

            <GlassCard variant="medium" className="p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#DDF7EA] text-[#0FA968] flex items-center justify-center mx-auto">
                <MessageCircle className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-extrabold text-[#09264A] font-heading">
                WhatsApp Live
              </h3>
              <p className="text-xs text-slate-500">
                Send pest photos for quick assessment
              </p>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base font-extrabold text-[#0FA968] hover:text-[#087A4A] transition-colors"
              >
                {COMPANY_INFO.whatsappFormatted}
              </a>
            </GlassCard>

            <GlassCard variant="medium" className="p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 text-[#09264A] flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-extrabold text-[#09264A] font-heading">
                Email Inquiry
              </h3>
              <p className="text-xs text-slate-500">
                Commercial proposals & tenders
              </p>
              <a
                href={COMPANY_INFO.emailMailto}
                className="block text-sm font-extrabold text-[#09264A] hover:text-[#0FA968] transition-colors truncate"
              >
                {COMPANY_INFO.email}
              </a>
            </GlassCard>

            <GlassCard variant="medium" className="p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#087A4A] flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-extrabold text-[#09264A] font-heading">
                Singapore Office
              </h3>
              <p className="text-xs text-slate-500">
                NEA Licensed Operator
              </p>
              <div className="text-xs font-semibold text-[#09264A] leading-tight">
                {COMPANY_INFO.address.fullAddress}
              </div>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* Integrated Booking Form */}
      <BookingSection />
    </div>
  );
}
