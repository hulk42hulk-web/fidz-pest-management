import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "green" | "navy" | "emergency" | "white";
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  className,
  variant = "default",
  hoverEffect = true,
  ...props
}: GlassCardProps) {
  const variantClasses = {
    default: "bg-white/75 backdrop-blur-md border border-white/90 shadow-[0_15px_35px_-5px_rgba(16,42,67,0.05),0_5px_15px_rgba(0,0,0,0.02)]",
    green: "bg-gradient-to-br from-[#E8F8EF]/80 to-white/90 backdrop-blur-md border border-[#16A765]/20 shadow-[0_15px_35px_-5px_rgba(22,167,101,0.08)]",
    navy: "bg-gradient-to-br from-[#F1F7FA]/90 to-white/90 backdrop-blur-md border border-[#0B2345]/10 shadow-[0_15px_35px_-5px_rgba(11,35,69,0.06)]",
    emergency: "bg-gradient-to-br from-[#FEECEF]/85 to-white/95 backdrop-blur-md border border-[#E5394F]/20 shadow-[0_15px_35px_-5px_rgba(229,57,79,0.08)]",
    white: "bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-sm",
  };

  return (
    <div
      className={cn(
        "rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 transition-all duration-300",
        variantClasses[variant],
        hoverEffect && "hover:-translate-y-1 hover:shadow-[0_20px_45px_-10px_rgba(16,42,67,0.09)] hover:border-[#16A765]/35",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
