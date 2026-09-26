import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowVariant?: "green" | "navy" | "gold" | "red" | "glass" | "neutral";
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
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
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:gap-4 max-w-3xl",
        align === "center" && "mx-auto text-center items-center",
        align === "left" && "text-left items-start",
        align === "right" && "ml-auto text-right items-end",
        className
      )}
    >
      {eyebrow && (
        <Badge variant={eyebrowVariant} size="md">
          {eyebrow}
        </Badge>
      )}

      <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-tight leading-[1.12] text-[#0B2345] font-heading">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
