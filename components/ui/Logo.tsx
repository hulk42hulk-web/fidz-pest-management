import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  showTagline?: boolean;
  className?: string;
  isCompact?: boolean;
}

export function Logo({
  showTagline = true,
  className,
  isCompact = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-95 focus:outline-none",
        className
      )}
      aria-label="Fidz Pest Management - Home"
    >
      {/* Brand Icon / Shield Mark with Green Accent */}
      <div className="relative shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-white to-[#E8F8EF] border border-[#16A765]/30 flex items-center justify-center shadow-sm group-hover:border-[#16A765] group-hover:shadow-md transition-all">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 text-[#16A765] transition-transform group-hover:scale-105"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Shield base with F emblem */}
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="fill-[#16A765]/10" stroke="#16A765" />
          <path d="M9 8h6M9 12h4M9 8v8" stroke="#0B2345" strokeWidth="2.2" />
        </svg>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#16A765] rounded-full ring-2 ring-white shadow-xs" />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold tracking-tight text-xl sm:text-2xl uppercase font-heading text-[#0B2345]">
            FIDZ
          </span>
          <span className="text-xs sm:text-sm font-extrabold tracking-wider text-[#16A765] uppercase">
            Pest Mgt
          </span>
        </div>
        {showTagline && !isCompact && (
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase text-[#5A6E85]">
            Singapore • 24/7 Response
          </span>
        )}
      </div>
    </Link>
  );
}
