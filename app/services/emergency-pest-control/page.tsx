import React from "react";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = SERVICES.find((s) => s.slug === "emergency-pest-control");

export const metadata: Metadata = {
  title: "24-Hour Emergency Pest Control Singapore | Fidz Pest Management",
  description:
    "Fast 24/7 emergency pest control across Singapore. Immediate technician deployment for severe rodent, cockroach, bed bug, and termite infestations. Call 67146711.",
};

export default function EmergencyPestControlPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
