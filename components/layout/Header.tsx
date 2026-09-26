"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, ChevronDown, Flame, ShieldCheck } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top micro-bar for NEA status and 24/7 Hotline */}
      <div className="bg-[#F1F7FA] border-b border-slate-200/80 text-xs py-1.5 px-4 hidden md:block">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#087F4E] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16A765]" />
              NEA Registered Operator ({COMPANY_INFO.neaReg})
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-[#5A6E85] font-medium">Singapore-Wide Service (All Postal Districts)</span>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/services/emergency-pest-control"
              className="flex items-center gap-1.5 text-[#E5394F] hover:text-red-700 font-bold transition-colors"
            >
              <Flame className="w-3.5 h-3.5 animate-pulse" />
              24/7 Emergency: {COMPANY_INFO.phoneFormatted}
            </Link>
            <span className="text-slate-300">•</span>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#16A765] hover:text-[#087F4E] font-bold transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp: {COMPANY_INFO.whatsappFormatted}
            </a>
          </div>
        </Container>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300 w-full",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(16,42,67,0.07)] border-b border-slate-200/80 py-2.5 sm:py-3"
            : "bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-3 sm:py-4"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Logo showTagline={!isScrolled} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
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
                        "px-3 py-2 text-sm font-bold rounded-xl transition-all flex items-center gap-1 cursor-pointer",
                        isActive
                          ? "text-[#087F4E] bg-[#E8F8EF]"
                          : "text-[#102A43] hover:text-[#16A765] hover:bg-slate-100/70"
                      )}
                      aria-expanded={activeDropdown === link.label}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeDropdown === link.label && "rotate-180 text-[#16A765]"
                        )}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-[0_20px_50px_rgba(16,42,67,0.12)] p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="py-1">
                          <Link
                            href={link.href}
                            className="block px-3 py-2 text-xs uppercase tracking-wider font-extrabold text-[#16A765] hover:text-[#087F4E] border-b border-slate-100 mb-1.5"
                          >
                            All {link.label} Overview →
                          </Link>
                          {link.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-[#102A43] hover:text-[#16A765] hover:bg-[#E8F8EF]/60 rounded-xl transition-all"
                            >
                              <span>{child.label}</span>
                              {child.badge && (
                                <span className="bg-[#E5394F] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full uppercase">
                                  {child.badge}
                                </span>
                              )}
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
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-bold rounded-xl transition-all",
                    isActive
                      ? "text-[#087F4E] bg-[#E8F8EF]"
                      : "text-[#102A43] hover:text-[#16A765] hover:bg-slate-100/70"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3">
            <a
              href={COMPANY_INFO.phoneTel}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs xl:text-sm font-bold text-[#0B2345] bg-white border border-slate-200/90 hover:border-[#16A765] hover:bg-white rounded-xl shadow-xs transition-all"
              title="Call Fidz 24/7"
            >
              <Phone className="w-3.5 h-3.5 text-[#16A765]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs xl:text-sm font-bold text-[#087F4E] bg-[#E8F8EF] hover:bg-[#d5f3e2] border border-[#16A765]/25 rounded-xl transition-all shadow-xs"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#16A765]" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="px-4 py-2.5 text-xs xl:text-sm font-extrabold text-white bg-[#16A765] hover:bg-[#087F4E] rounded-xl shadow-md shadow-[#16A765]/20 transition-all active:scale-95"
            >
              Book Inspection
            </Link>
          </div>

          {/* Mobile Right Quick Action Icons & Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={COMPANY_INFO.phoneTel}
              aria-label="Call 24/7 Hotline"
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#0B2345] flex items-center justify-center shadow-xs active:scale-90 transition-transform"
            >
              <Phone className="w-4 h-4 text-[#16A765]" />
            </a>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-10 h-10 rounded-xl bg-[#16A765] text-white flex items-center justify-center shadow-xs active:scale-90 transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#0B2345] flex items-center justify-center shadow-xs active:scale-90 transition-transform ml-1"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Full-Screen / Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
