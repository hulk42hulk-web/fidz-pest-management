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
      {/* Brand Icon / Shield Mark with Leaf */}
      <div className="relative shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-2xs group-hover:border-[#0FA968] transition-all">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5 sm:w-6 sm:h-6 text-[#0FA968] transition-transform group-hover:scale-105"
        >
          {/* Shield outline */}
          <path
            d="M12 21.5s7.5-3.5 7.5-9.5V5.5l-7.5-3-7.5 3V12c0 6 7.5 9.5 7.5 9.5z"
            stroke="#0FA968"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#DDF7EA"
          />
          {/* Inner leaf badge */}
          <path
            d="M12 7.5c-2.2 0-3.5 1.5-3.5 3.8 0 2.8 3.5 5.2 3.5 5.2s3.5-2.4 3.5-5.2c0-2.3-1.3-3.8-3.5-3.8z"
            fill="#0FA968"
          />
          <path
            d="M12 9v4.5"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-extrabold tracking-tight text-lg sm:text-xl uppercase font-heading text-[#09264A]">
            FIDZ
          </span>
          <span className="text-xs sm:text-sm font-extrabold tracking-wider text-[#0FA968] uppercase">
            PEST MGT
          </span>
        </div>
        {showTagline && !isCompact && (
          <span className="text-[9px] sm:text-[10px] font-semibold tracking-wide uppercase text-slate-500 mt-1">
            SINGAPORE • 24/7 RESPONSE
          </span>
        )}
      </div>
    </Link>
  );
}
