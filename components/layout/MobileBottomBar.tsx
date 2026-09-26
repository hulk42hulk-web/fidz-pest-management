"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function MobileBottomBar() {
  return (
    <div
      aria-label="Quick Mobile Actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/90 backdrop-blur-xl border-t border-slate-200/90 px-3 py-2.5 pb-[calc(0.6rem+env(safe-area-inset-bottom,0px))] shadow-[0_-10px_30px_rgba(16,42,67,0.08)]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Call Now Button */}
        <a
          href={COMPANY_INFO.phoneTel}
          className="flex items-center justify-center gap-2 h-12 rounded-xl bg-white hover:bg-slate-50 text-[#0B2345] font-extrabold text-sm uppercase tracking-wide shadow-xs active:scale-95 transition-all border border-slate-200/90"
        >
          <Phone className="w-4 h-4 text-[#16A765]" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 h-12 rounded-xl bg-[#16A765] hover:bg-[#087F4E] text-white font-extrabold text-sm uppercase tracking-wide shadow-md shadow-[#16A765]/20 active:scale-95 transition-all border border-[#16A765]/30"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
