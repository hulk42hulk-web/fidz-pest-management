"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, ChevronDown, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top micro-bar for NEA status and 24/7 Hotline */}
      <div className="bg-[#F8FCFB]/90 border-b border-slate-200/60 text-xs py-2 px-4 hidden lg:block relative z-50">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-4 whitespace-nowrap">
          <div className="flex items-center gap-3 shrink-0">
            <span className="flex items-center gap-1.5 text-[#0FA968] font-bold whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0FA968] shrink-0" />
              NEA Registered Operator ({COMPANY_INFO.neaReg})
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-slate-600 font-medium whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              Singapore-Wide Service (All Districts)
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs shrink-0 whitespace-nowrap">
            <a
              href={COMPANY_INFO.phoneTel}
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#0FA968] font-semibold transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#0FA968] shrink-0" />
              <span>24/7 Emergency Hotline:</span>
              <span className="font-bold text-[#09264A]">{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#0FA968] font-semibold transition-colors whitespace-nowrap"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#0FA968] shrink-0 fill-current" />
              <span>WhatsApp:</span>
              <span className="font-bold text-[#09264A]">{COMPANY_INFO.whatsappFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Glass Pill Navigation Bar */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 px-3 sm:px-5 lg:px-6",
          isScrolled ? "py-2 bg-white/40 backdrop-blur-md" : "py-3 bg-transparent"
        )}
      >
        <div className="max-w-[1360px] mx-auto glass-pill-bar rounded-full px-3.5 sm:px-5 xl:px-6 py-2 xl:py-2.5 flex items-center justify-between gap-2 sm:gap-3 xl:gap-5">
          {/* Brand Logo with official transparent logo */}
          <Logo />

          {/* Desktop Navigation Links - NO SHRINK, NO WRAP */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink min-w-0">
            {NAV_LINKS.map((link) => {
              const hasChildren = link.children && link.children.length > 0;
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (hasChildren) {
                return (
                  <div
                    key={link.label}
                    className="relative shrink-0"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={cn(
                        "px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] font-semibold rounded-full transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0",
                        isActive
                          ? "bg-[#EEF8FF] text-[#09264A] font-bold"
                          : "text-slate-700 hover:text-[#09264A] hover:bg-slate-100/70"
                      )}
                      aria-expanded={activeDropdown === link.label}
                    >
                      <span className="whitespace-nowrap">{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 transition-transform duration-200 text-slate-400 shrink-0",
                          activeDropdown === link.label && "rotate-180 text-[#0FA968]"
                        )}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-2xl border border-white/90 rounded-2xl shadow-[0_20px_50px_rgba(9,38,74,0.12)] p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="py-1">
                          <Link
                            href={link.href}
                            className="block px-3 py-1.5 text-[11px] uppercase tracking-wider font-extrabold text-[#0FA968] hover:text-[#087A4A] border-b border-slate-100 mb-1 whitespace-nowrap"
                          >
                            All {link.label} Overview →
                          </Link>
                          {link.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#09264A] hover:bg-[#F3F8FC] rounded-xl transition-colors whitespace-nowrap"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] font-semibold rounded-full transition-all whitespace-nowrap shrink-0",
                    isActive
                      ? "bg-[#EEF8FF] text-[#09264A] font-bold shadow-2xs"
                      : "text-slate-700 hover:text-[#09264A] hover:bg-slate-100/70"
                  )}
                >
                  <span className="whitespace-nowrap">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button Pill Group */}
          <div className="flex items-center gap-1.5 xl:gap-2 shrink-0">
            {/* Phone Button (Full text on 2xl, icon on xl) */}
            <a
              href={COMPANY_INFO.phoneTel}
              className="hidden 2xl:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-[#09264A] bg-white border border-slate-200/90 rounded-full shadow-2xs hover:bg-slate-50 transition-all whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span className="whitespace-nowrap">{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={COMPANY_INFO.phoneTel}
              className="hidden xl:flex 2xl:hidden p-2 rounded-full bg-white border border-slate-200/90 text-[#09264A] shadow-2xs hover:bg-slate-50 shrink-0"
              title={`Call ${COMPANY_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            </a>

            {/* WhatsApp Button for tablet/desktop */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3.5 xl:px-4 py-1.5 xl:py-2 text-xs font-bold text-white bg-[#0FA968] hover:bg-[#087A4A] rounded-full shadow-xs transition-all whitespace-nowrap shrink-0"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 shrink-0 fill-current" />
              <span className="whitespace-nowrap">WhatsApp</span>
            </a>

            {/* Book Inspection Button - hidden on mobile (<sm) to prevent overflow */}
            <Link
              href="/book-inspection"
              className="hidden sm:flex items-center gap-1 px-3.5 xl:px-4 py-1.5 xl:py-2 text-xs font-bold text-white bg-[#09264A] hover:bg-[#12345B] rounded-full shadow-xs transition-all whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Book Inspection</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>

            {/* Mobile Actions (< lg) */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex sm:hidden items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0FA968] hover:bg-[#087A4A] text-white text-xs font-bold shadow-xs transition-all shrink-0"
                aria-label="WhatsApp Us"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 shrink-0 fill-current" />
                <span className="text-[11px] font-bold">Chat</span>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-1.5 sm:p-2 rounded-full text-[#09264A] bg-slate-100/90 hover:bg-slate-200/90 focus:outline-none shrink-0"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
