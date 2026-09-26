import React from "react";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = SERVICES.find((s) => s.slug === "bed-bug-treatment");

export const metadata: Metadata = {
  title: "Bed Bug Treatment Singapore | High-Heat Steam | Fidz Pest Management",
  description:
    "Superheated dry steam and targeted residual bed bug eradication in Singapore. Eliminates adult bed bugs, nymphs, and unhatched eggs with zero mattress damage.",
};

export default function BedBugTreatmentPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
