import React from "react";
import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Book Inspection | Fidz Pest Management Singapore",
  description:
    "Get in touch with Fidz Pest Management for prompt pest inspections across Singapore. 24/7 Hotline: 67146711, WhatsApp: 97820482. Midview City, Sin Ming Lane.",
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-mesh-hero pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-slate-200/80 text-center">
        <Container size="narrow">
          <div className="space-y-6">
            <Badge variant="green" size="md">
              SINGAPORE PEST INSPECTION & SUPPORT
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0B2345] font-heading tracking-tight leading-[1.08]">
              Let&apos;s Solve Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A765] via-[#087F4E] to-[#16A765]">
                Pest Problem.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#5A6E85] max-w-xl mx-auto leading-relaxed">
              Reach out today to book a comprehensive on-site assessment or request emergency 24/7 vector control assistance across Singapore.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 5 Columns: Company Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Card */}
              <div className="bg-[#F8FBFD] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
                <div>
                  <Badge variant="green" size="sm" className="mb-2">
                    HEADQUARTERS
                  </Badge>
                  <h2 className="text-2xl font-extrabold text-[#0B2345] font-heading">
                    {COMPANY_INFO.name}
                  </h2>
                  <p className="text-xs text-[#5A6E85] mt-1 font-medium">
                    NEA Registered Vector Control Operator ({COMPANY_INFO.neaReg})
                  </p>
                </div>

                <div className="space-y-4 text-sm text-[#102A43] pt-2 border-t border-slate-200">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#16A765] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0B2345]">Office Address</div>
                      <div className="text-[#5A6E85]">{COMPANY_INFO.address.fullAddress}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#16A765] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0B2345]">24/7 Hotline</div>
                      <a href={COMPANY_INFO.phoneTel} className="text-[#16A765] font-extrabold hover:underline">
                        {COMPANY_INFO.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-[#16A765] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0B2345]">WhatsApp Line</div>
                      <a
                        href={COMPANY_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#087F4E] font-extrabold hover:underline"
                      >
                        {COMPANY_INFO.whatsappFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#16A765] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0B2345]">Email Enquiries</div>
                      <a href={COMPANY_INFO.emailMailto} className="text-[#5A6E85] hover:text-[#16A765] underline">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#16A765] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0B2345]">Operating Hours</div>
                      <div className="text-[#5A6E85] font-medium">{COMPANY_INFO.operatingHours}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Guarantees Card */}
              <div className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-7 shadow-2xs space-y-3">
                <h3 className="font-extrabold text-sm uppercase tracking-wider text-[#0B2345] font-heading">
                  What You Can Expect:
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-[#5A6E85]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A765] shrink-0" />
                    <span className="font-medium text-[#102A43]">Prompt response within 15–30 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A765] shrink-0" />
                    <span className="font-medium text-[#102A43]">Licensed vector control specialists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A765] shrink-0" />
                    <span className="font-medium text-[#102A43]">Zero obligation transparent recommendations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A765] shrink-0" />
                    <span className="font-medium text-[#102A43]">Full NEA / SFA compliance documentation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
