import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "green" | "navy" | "gold" | "red" | "glass" | "neutral";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "green",
  size = "md",
  className,
  icon,
  ...props
}: BadgeProps) {
  const variantClasses = {
    green: "bg-[#E8F8EF] text-[#087F4E] border border-[#16A765]/25 font-bold",
    navy: "bg-[#F1F7FA] text-[#0B2345] border border-[#0B2345]/15 font-bold",
    gold: "bg-[#FFF9EB] text-[#B89643] border border-[#D9B65D]/30 font-bold",
    red: "bg-[#FEECEF] text-[#E5394F] border border-[#E5394F]/25 font-bold",
    glass: "bg-white/80 backdrop-blur-md text-[#0B2345] border border-white shadow-sm font-bold",
    neutral: "bg-slate-100 text-slate-700 border border-slate-200/80 font-medium",
  };

  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs tracking-wider uppercase rounded-full gap-1.5",
    md: "px-3.5 py-1 text-xs sm:text-sm tracking-wider uppercase rounded-full gap-2",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center select-none shrink-0",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
