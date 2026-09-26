import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "emergency" | "outline-green" | "outline-navy" | "outline-white" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none text-center cursor-pointer";

  const sizeClasses = {
    sm: "min-h-[40px] px-3.5 py-2 text-xs sm:text-sm rounded-[12px] gap-2",
    md: "min-h-[48px] px-5 py-2.5 text-sm sm:text-base font-bold rounded-[14px] gap-2.5",
    lg: "min-h-[52px] sm:min-h-[54px] px-7 py-3.5 text-base font-bold rounded-[16px] gap-3",
    xl: "min-h-[56px] sm:min-h-[60px] px-8 py-4 text-base sm:text-lg font-extrabold rounded-[16px] gap-3.5",
  };

  const variantClasses = {
    primary:
      "bg-[#16A765] hover:bg-[#087F4E] text-white shadow-md hover:shadow-lg shadow-[#16A765]/20 focus:ring-[#16A765] border border-[#16A765]/30",
    secondary:
      "bg-white/85 hover:bg-white text-[#0B2345] border border-[#0B2345]/10 shadow-sm hover:shadow-md focus:ring-[#0B2345] backdrop-blur-md",
    emergency:
      "bg-[#E5394F] hover:bg-[#C81E35] text-white font-bold shadow-md hover:shadow-red-500/20 focus:ring-[#E5394F] border border-red-400/30",
    "outline-green":
      "border-2 border-[#16A765] text-[#16A765] hover:bg-[#16A765] hover:text-white bg-transparent focus:ring-[#16A765]",
    "outline-navy":
      "border-2 border-[#0B2345]/20 text-[#0B2345] hover:bg-[#0B2345] hover:text-white bg-transparent focus:ring-[#0B2345]",
    "outline-white":
      "border-2 border-white/80 text-[#0B2345] bg-white/80 hover:bg-white focus:ring-white",
    ghost:
      "bg-transparent hover:bg-slate-100/80 text-[#102A43] hover:text-[#0B2345] focus:ring-slate-300",
  };

  const combinedClass = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    if (isExternal || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("https://wa.me")) {
      return (
        <a
          href={href}
          className={combinedClass}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClass}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
