"use client";

import React from "react";
import Link from "next/link";
import { X, Phone, MessageCircle, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Translucent Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Glass Sliding Drawer */}
      <div className="fixed inset-y-0 right-0 w-[85vw] max-w-sm bg-white/95 backdrop-blur-2xl border-l border-white/90 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
        <div className="space-y-6">
          {/* Header row with Logo and Close */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <Logo isCompact={false} />
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-500 hover:text-[#09264A] hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation items */}
          <nav className="space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="border-b border-slate-50 py-1">
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-2 text-base font-extrabold text-[#09264A] hover:text-[#0FA968] transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
                {link.children && (
                  <div className="pl-3 pb-2 space-y-1">
                    {link.children.slice(0, 4).map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block py-1 text-xs font-semibold text-slate-500 hover:text-[#0FA968]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Action CTAs in drawer bottom */}
        <div className="pt-6 space-y-3 border-t border-slate-100">
          <a
            href={COMPANY_INFO.phoneTel}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#09264A] font-extrabold text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-[#0FA968]" />
            <span>Call: {COMPANY_INFO.phone}</span>
          </a>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#0FA968] hover:bg-[#087A4A] text-white font-extrabold text-sm shadow-md shadow-[#0FA968]/20 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          <Link
            href="/book-inspection"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#09264A] hover:bg-[#12345B] text-white font-extrabold text-sm shadow-sm transition-all"
          >
            <span>Book On-Site Inspection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="pt-2 text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0FA968]" />
            <span>NEA Reg: {COMPANY_INFO.neaReg}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
