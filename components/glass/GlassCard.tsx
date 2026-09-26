import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "medium" | "strong";
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function GlassCard({
  variant = "medium",
  interactive = false,
  className,
  children,
  ...props
}: GlassCardProps) {
  const variantStyles = {
    light: "glass-light",
    medium: "glass-medium",
    strong: "glass-strong",
  };

  return (
    <div
      className={cn(
        "rounded-3xl",
        variantStyles[variant],
        interactive && "glass-interactive cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
