"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, Phone, ArrowRight, ShieldCheck, ChevronDown, ChevronRight } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Accordion state - default collapsed so user has plenty of space
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (label: string) => {
    setExpandedSection((prev) => (prev === label ? null : label));
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden flex justify-end transition-all duration-300",
        isOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      {/* Translucent Backdrop with Smooth Fade Animation */}
      <div
        className={cn(
          "fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ease-out",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      {/* Glass Sliding Drawer with Smooth Slide-in & Slide-out Animation */}
      <div
        className={cn(
          "relative w-[85vw] max-w-sm h-full bg-white/95 backdrop-blur-2xl border-l border-white/80 shadow-2xl flex flex-col justify-between z-10 transition-transform duration-300 ease-out transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* 1. Header (Fixed top, never shrinks) */}
        <div className="shrink-0 flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-white/80">
          <Logo isCompact={false} />
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-500 hover:text-[#09264A] hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2. Scrollable Navigation Body with Accordions */}
        <div className="flex-1 overflow-y-auto px-5 py-3 space-y-1">
          {NAV_LINKS.map((link) => {
            const hasChildren = Boolean(link.children && link.children.length > 0);
            const isExpanded = expandedSection === link.label;

            if (hasChildren) {
              return (
                <div key={link.label} className="border-b border-slate-100/80 py-1">
                  {/* Collapsible Accordion Header Button */}
                  <button
                    onClick={() => toggleSection(link.label)}
                    className="w-full flex items-center justify-between py-2.5 text-base font-extrabold text-[#09264A] hover:text-[#0FA968] transition-colors group cursor-pointer text-left"
                    aria-expanded={isExpanded}
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                    <div
                      className={cn(
                        "w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300",
                        isExpanded ? "bg-[#DDF7EA] text-[#087A4A] rotate-180" : "bg-slate-100 text-slate-500 rotate-0"
                      )}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Collapsed/Expanded Sub-Menu */}
                  {isExpanded && (
                    <div className="pl-2.5 pr-1 pb-2.5 pt-1 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                      {link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="flex items-center justify-between py-2 px-3 rounded-xl text-xs font-semibold text-slate-600 hover:text-[#0FA968] hover:bg-[#F3F8FC] transition-colors"
                        >
                          <span>{child.label}</span>
                          {"badge" in child && child.badge && (
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#DDF7EA] text-[#087A4A]">
                              {child.badge}
                            </span>
                          )}
                        </Link>
                      ))}

                      {/* Quick link to main overview page */}
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="flex items-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-[#0FA968] hover:bg-[#DDF7EA]/40 transition-colors mt-1"
                      >
                        <span>View All {link.label}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            // Direct link for items without submenus
            return (
              <div key={link.label} className="border-b border-slate-100/80 py-1">
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-2.5 text-base font-extrabold text-[#09264A] hover:text-[#0FA968] transition-colors group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#0FA968] group-hover:translate-x-0.5 transition-all" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* 3. Action CTAs (Pinned bottom, NEVER shrinks, clean single-line buttons) */}
        <div className="shrink-0 p-4 sm:p-5 border-t border-slate-100 bg-white/95 backdrop-blur-md space-y-2.5 shadow-[0_-10px_20px_rgba(0,0,0,0.03)]">
          {/* Call Hotline Button */}
          <a
            href={COMPANY_INFO.phoneTel}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#09264A] font-extrabold text-xs sm:text-sm transition-all whitespace-nowrap shrink-0 shadow-2xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#0FA968] shrink-0" />
            <span className="whitespace-nowrap">Call Hotline: {COMPANY_INFO.phone}</span>
          </a>

          {/* Official WhatsApp Button (Authentic Icon & Single-Line Text) */}
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-full bg-[#0FA968] hover:bg-[#087A4A] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-[#0FA968]/25 transition-all whitespace-nowrap shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />
            <span className="whitespace-nowrap">WhatsApp: {COMPANY_INFO.whatsappFormatted}</span>
          </a>

          {/* Book Inspection Button */}
          <Link
            href="/book-inspection"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#09264A] hover:bg-[#12345B] text-white font-extrabold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            <span className="whitespace-nowrap">Book On-Site Inspection</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </Link>

          {/* NEA License Indicator */}
          <div className="pt-1 text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-center gap-1.5 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0FA968] shrink-0" />
            <span className="whitespace-nowrap">NEA Licensed: {COMPANY_INFO.neaReg}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
