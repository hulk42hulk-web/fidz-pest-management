import React from "react";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = SERVICES.find((s) => s.slug === "soil-treatment");

export const metadata: Metadata = {
  title: "Pre & Post Construction Soil Treatment Singapore | 5-Year Warranty | Fidz",
  description:
    "NEA-compliant anti-termite soil treatment for new landed developments, A&A works, and commercial construction projects across Singapore.",
};

export default function SoilTreatmentPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
