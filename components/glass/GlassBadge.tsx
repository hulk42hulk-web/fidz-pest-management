import React from "react";
import { cn } from "@/lib/utils";

interface GlassBadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "emerald" | "navy" | "white" | "red";
  className?: string;
}

export function GlassBadge({
  children,
  icon,
  variant = "emerald",
  className,
}: GlassBadgeProps) {
  const variantStyles = {
    emerald: "bg-[#DDF7EA]/80 border-[#0FA968]/30 text-[#087A4A]",
    navy: "bg-[#EEF8FF]/80 border-slate-200/80 text-[#09264A]",
    white: "bg-white/80 border-white/95 text-[#09264A]",
    red: "bg-[#FEECEF]/80 border-[#E5394F]/30 text-[#E5394F]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide backdrop-blur-md border shadow-2xs",
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
