"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, Clock, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/glass/GlassCard";

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    postal: "",
    pestType: "Termites",
    propertyType: "HDB / Apartment",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" id="booking">
      {/* Ambient background glows */}
      <div className="orb-emerald -top-24 left-1/4 opacity-15" />
      <div className="orb-blue bottom-10 right-1/4 opacity-15" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT: Trust, 24/7 Hotline, Guarantee */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF7EA] border border-[#0FA968]/30 text-[#087A4A] text-xs font-extrabold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#0FA968]" />
              Singapore Licensed Vector Control
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#09264A] font-heading tracking-tight leading-[1.08]">
              Schedule Your Precision On-Site Inspection
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Book an appointment with a licensed vector control specialist. We evaluate the premises, identify species roots, and provide clear upfront pricing before any treatment starts.
            </p>

            {/* Quick Contact Glass Pill Card */}
            <GlassCard variant="medium" className="p-6 space-y-4 border-white/80">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#0FA968]">
                Direct Response Channels:
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={COMPANY_INFO.phoneTel}
                  className="flex-1 flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-slate-200/60 shadow-2xs hover:bg-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-500">24/7 Hotline</div>
                    <div className="text-sm font-extrabold text-[#09264A]">{COMPANY_INFO.phone}</div>
                  </div>
                </a>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-slate-200/60 shadow-2xs hover:bg-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#DDF7EA] text-[#0FA968] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-500">WhatsApp Us</div>
                    <div className="text-sm font-extrabold text-[#09264A]">{COMPANY_INFO.whatsappFormatted}</div>
                  </div>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#0FA968]" />
                <span>Average callback time under 15 minutes during daylight hours</span>
              </div>
            </GlassCard>

            {/* Checkpoints */}
            <div className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0FA968] shrink-0" />
                <span>Zero obligation, transparent quote before treatment begins</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0FA968] shrink-0" />
                <span>Child-safe, pet-safe, and odor-free options available</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0FA968] shrink-0" />
                <span>Officially licensed NEA Vector Control Operator ({COMPANY_INFO.neaReg})</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Glass Booking Form */}
          <div className="lg:col-span-7">
            <GlassCard variant="strong" className="p-7 sm:p-10 border-white/95 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#DDF7EA] text-[#0FA968] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#09264A] font-heading">
                    Inspection Request Received
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, {formData.name}. Our dispatch coordinator will contact you via WhatsApp/call shortly to confirm the appointment.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#0FA968] underline pt-2 cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#09264A] uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jason Tan"
                        className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-slate-200/80 focus:border-[#0FA968] focus:bg-white focus:ring-2 focus:ring-[#0FA968]/20 text-sm text-[#09264A] outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#09264A] uppercase tracking-wider">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9123 4567"
                        className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-slate-200/80 focus:border-[#0FA968] focus:bg-white focus:ring-2 focus:ring-[#0FA968]/20 text-sm text-[#09264A] outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#09264A] uppercase tracking-wider">
                        Singapore Postal Code
                      </label>
                      <input
                        type="text"
                        value={formData.postal}
                        onChange={(e) => setFormData({ ...formData, postal: e.target.value })}
                        placeholder="e.g. 520123"
                        className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-slate-200/80 focus:border-[#0FA968] focus:bg-white focus:ring-2 focus:ring-[#0FA968]/20 text-sm text-[#09264A] outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#09264A] uppercase tracking-wider">
                        Property Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-slate-200/80 focus:border-[#0FA968] focus:bg-white focus:ring-2 focus:ring-[#0FA968]/20 text-sm text-[#09264A] outline-none transition-all"
                      >
                        <option>HDB / Apartment</option>
                        <option>Private Condominium</option>
                        <option>Landed House / Villa</option>
                        <option>F&B / Restaurant / Kitchen</option>
                        <option>Corporate Office / Commercial</option>
                        <option>Industrial / Warehouse</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#09264A] uppercase tracking-wider">
                      Target Pest Issue
                    </label>
                    <select
                      value={formData.pestType}
                      onChange={(e) => setFormData({ ...formData, pestType: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-slate-200/80 focus:border-[#0FA968] focus:bg-white focus:ring-2 focus:ring-[#0FA968]/20 text-sm text-[#09264A] outline-none transition-all"
                    >
                      <option>Termites (Subterranean / Drywood)</option>
                      <option>Bed Bugs (Bites / Mattress)</option>
                      <option>Cockroaches (Kitchen / Chutes)</option>
                      <option>Rodents / Rats (Ceiling / Kitchen)</option>
                      <option>Ants (Pantry / Trails)</option>
                      <option>Flies / Flying Insects</option>
                      <option>General Preventive Pest Audit</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#09264A] uppercase tracking-wider">
                      Additional Details / Urgency
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Describe what you are seeing, room location, or preferred time..."
                      className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-slate-200/80 focus:border-[#0FA968] focus:bg-white focus:ring-2 focus:ring-[#0FA968]/20 text-sm text-[#09264A] outline-none transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#0FA968] hover:bg-[#087A4A] text-white font-extrabold text-base shadow-[0_12px_28px_rgba(15,169,104,0.32)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Inspection Booking</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    🔒 Your contact details are kept strictly private and used solely for inspection coordination.
                  </p>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
