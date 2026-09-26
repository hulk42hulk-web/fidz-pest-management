import React from "react";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = SERVICES.find((s) => s.slug === "termite-treatment");

export const metadata: Metadata = {
  title: "Termite Treatment & Control Singapore | Fidz Pest Management",
  description:
    "Scientific termite baiting, thermal acoustic detection, and structural barrier protection in Singapore. Eliminate termite colonies down to the queen.",
};

export default function TermiteTreatmentPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
