"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, X, ShieldCheck, Flame, ChevronRight } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Prevent background body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white/95 backdrop-blur-2xl text-[#102A43] animate-in fade-in duration-200">
      {/* Drawer Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200/80 bg-white/80">
        <Logo showTagline={false} />
        <button
          onClick={onClose}
          aria-label="Close Menu"
          className="w-10 h-10 rounded-xl bg-[#F1F7FA] border border-slate-200 text-[#0B2345] flex items-center justify-center active:scale-90 transition-transform"
        >
          <X className="w-5 h-5 text-[#0B2345]" />
        </button>
      </div>

      {/* Emergency Notice Banner */}
      <div className="bg-[#FEECEF] border-b border-[#E5394F]/20 px-5 py-2.5 flex items-center justify-between">
        <span className="text-xs font-bold text-[#E5394F] flex items-center gap-1.5 uppercase tracking-wide">
          <Flame className="w-4 h-4" />
          24/7 Emergency Dispatch
        </span>
        <a
          href={COMPANY_INFO.phoneTel}
          className="text-xs font-extrabold text-red-700 underline"
        >
          Call 67146711
        </a>
      </div>

      {/* Scrollable Navigation Body */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
        {/* Main Links List */}
        <div className="space-y-2">
          {NAV_LINKS.map((link) => {
            const hasChildren = link.children && link.children.length > 0;
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            if (hasChildren) {
              return (
                <div key={link.label} className="border-b border-slate-100 pb-3 mb-2">
                  <div className="flex items-center justify-between py-2 text-[#16A765] text-xs font-extrabold uppercase tracking-wider">
                    <span>{link.label}</span>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="text-xs text-[#5A6E85] hover:text-[#0B2345] underline font-medium"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 gap-1 pl-2">
                    {link.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className={cn(
                          "flex items-center justify-between py-2.5 px-3 rounded-xl text-base font-medium transition-colors",
                          pathname === child.href
                            ? "bg-[#E8F8EF] text-[#087F4E] font-bold"
                            : "text-[#102A43] hover:bg-[#F1F7FA]"
                        )}
                      >
                        <span className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-[#16A765] shrink-0" />
                          {child.label}
                        </span>
                        {child.badge && (
                          <span className="bg-[#E5394F] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full uppercase">
                            {child.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-between py-3 px-4 rounded-xl text-lg font-bold transition-all border border-transparent",
                  isActive
                    ? "bg-[#E8F8EF] text-[#087F4E] border-[#16A765]/20"
                    : "text-[#0B2345] hover:bg-[#F1F7FA]"
                )}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </Link>
            );
          })}
        </div>

        {/* NEA Verification Card */}
        <div className="bg-[#F1F7FA] border border-slate-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-[#5A6E85]">
          <ShieldCheck className="w-5 h-5 text-[#16A765] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-[#0B2345] uppercase tracking-wider">
              NEA Registered Vector Control
            </p>
            <p className="text-slate-600 mt-0.5">License: {COMPANY_INFO.neaReg}</p>
            <p className="text-slate-500 mt-0.5">22 Sin Ming Lane #06-76, Midview City, S573969</p>
          </div>
        </div>
      </div>

      {/* Fixed Drawer Footer CTAs */}
      <div className="p-4 border-t border-slate-200 bg-white space-y-2.5 shadow-lg">
        <Button
          href="/contact"
          variant="primary"
          size="lg"
          className="w-full text-base font-extrabold uppercase tracking-wide"
          onClick={onClose}
        >
          Book Inspection
        </Button>

        <div className="grid grid-cols-2 gap-2">
          <Button
            href={COMPANY_INFO.phoneTel}
            variant="secondary"
            size="md"
            leftIcon={<Phone className="w-4 h-4 text-[#16A765]" />}
            className="w-full text-xs font-bold"
          >
            Call 67146711
          </Button>
          <Button
            href={COMPANY_INFO.whatsappUrl}
            isExternal
            variant="primary"
            leftIcon={<MessageCircle className="w-4 h-4 fill-white" />}
            className="w-full text-xs font-bold"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
