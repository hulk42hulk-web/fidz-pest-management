import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GlassButtonProps {
  href?: string;
  isExternal?: boolean;
  variant?: "primary" | "secondary" | "glass" | "danger";
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function GlassButton({
  href,
  isExternal,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  className,
  children,
  onClick,
  type = "button",
}: GlassButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0FA968]/50 active:scale-[0.98] select-none cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#0FA968] hover:bg-[#087A4A] text-white shadow-[0_12px_28px_rgba(15,169,104,0.32)] border border-[#0FA968]",
    secondary:
      "bg-[#09264A] hover:bg-[#12345B] text-white shadow-[0_12px_28px_rgba(9,38,74,0.22)] border border-[#09264A]",
    glass:
      "bg-white/80 hover:bg-white text-[#09264A] backdrop-blur-xl border border-white/95 shadow-sm hover:shadow-md hover:border-[#0FA968]/30",
    danger:
      "bg-[#E5394F] hover:bg-[#c92a3f] text-white shadow-[0_12px_28px_rgba(229,57,79,0.3)] border border-[#E5394F]",
  };

  const content = (
    <>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </>
  );

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {content}
    </button>
  );
}
