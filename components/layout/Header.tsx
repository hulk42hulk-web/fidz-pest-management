"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, ChevronDown, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
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
        <div className="max-w-[1320px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#0FA968] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0FA968]" />
              NEA Registered Operator ({COMPANY_INFO.neaReg})
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-slate-600 font-medium">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Singapore-Wide Service (All Districts)
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={COMPANY_INFO.phoneTel}
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#0FA968] font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0FA968]" />
              <span>24/7 Emergency Hotline:</span>
              <span className="font-bold text-[#09264A]">{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#0FA968] font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#0FA968]" />
              <span>WhatsApp:</span>
              <span className="font-bold text-[#09264A]">{COMPANY_INFO.whatsappFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Glass Pill Navigation Bar */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 px-3 sm:px-6",
          isScrolled ? "py-2 bg-white/40 backdrop-blur-md" : "py-3 bg-transparent"
        )}
      >
        <div className="max-w-[1320px] mx-auto glass-pill-bar rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo showTagline={true} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {NAV_LINKS.map((link) => {
              const hasChildren = link.children && link.children.length > 0;
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (hasChildren) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={cn(
                        "px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-all flex items-center gap-1 cursor-pointer",
                        isActive
                          ? "bg-[#EEF8FF] text-[#09264A] font-bold"
                          : "text-slate-700 hover:text-[#09264A] hover:bg-slate-100/60"
                      )}
                      aria-expanded={activeDropdown === link.label}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200 text-slate-400",
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
                            className="block px-3 py-1.5 text-[11px] uppercase tracking-wider font-extrabold text-[#0FA968] hover:text-[#087A4A] border-b border-slate-100 mb-1"
                          >
                            All {link.label} Overview →
                          </Link>
                          {link.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#09264A] hover:bg-[#F3F8FC] rounded-xl transition-colors"
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
                    "px-3.5 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-all",
                    isActive
                      ? "bg-[#EEF8FF] text-[#09264A] font-bold shadow-2xs"
                      : "text-slate-700 hover:text-[#09264A] hover:bg-slate-100/60"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button Pill Group */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Phone Button */}
            <a
              href={COMPANY_INFO.phoneTel}
              className="hidden xl:flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#09264A] bg-white border border-slate-200/90 rounded-full shadow-2xs hover:bg-slate-50 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#0FA968] hover:bg-[#087A4A] rounded-full shadow-xs transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Book Inspection Button */}
            <Link
              href="/book-inspection"
              className="flex items-center gap-1 px-4 py-2 text-xs font-bold text-white bg-[#09264A] hover:bg-[#12345B] rounded-full shadow-xs transition-all"
            >
              <span>Book Inspection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#0FA968] text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-full text-[#09264A] bg-slate-100/80 hover:bg-slate-200/80 focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
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
