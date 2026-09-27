import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  showTagline?: boolean;
  className?: string;
  isCompact?: boolean;
}

export function Logo({
  className,
  isCompact = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2 transition-opacity hover:opacity-90 focus:outline-none shrink-0 select-none py-0.5",
        className
      )}
      aria-label="Fidz Pest Management - Home"
    >
      {isCompact ? (
        <img
          src="/images/fidz-emblem.png"
          alt="Fidz Pest Management"
          className="h-8 sm:h-9 w-auto object-contain shrink-0"
        />
      ) : (
        <img
          src="/images/fidz-logo.png"
          alt="Fidz Pest Management"
          className="h-7 sm:h-8.5 xl:h-9.5 w-auto object-contain shrink-0"
        />
      )}
    </Link>
  );
}
