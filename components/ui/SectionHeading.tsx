import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowVariant?: "green" | "blue" | "red";
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  eyebrowVariant = "green",
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const eyebrowStyles = {
    green: "bg-[#DDF7EA] border-[#0FA968]/30 text-[#087A4A]",
    blue: "bg-[#EEF8FF] border-blue-200/60 text-blue-700",
    red: "bg-[#FEECEF] border-[#E5394F]/30 text-[#E5394F]",
  };

  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-3xl", alignStyles[align], className)}>
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider border mb-3 shadow-2xs",
            eyebrowStyles[eyebrowVariant]
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#09264A] tracking-tight leading-[1.12] font-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
