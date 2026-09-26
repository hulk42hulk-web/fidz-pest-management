import React from "react";
import type { Metadata } from "next";
import { INDUSTRIES } from "@/lib/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { notFound } from "next/navigation";

const industry = INDUSTRIES.find((i) => i.slug === "healthcare");

export const metadata: Metadata = {
  title: "Healthcare Pest Management Singapore | Hospitals & Clinics | Fidz",
  description:
    "Aseptic vector control and pest management for Singapore hospitals, specialist clinics, eldercare nursing homes, and laboratories.",
};

export default function HealthcareIndustryPage() {
  if (!industry) notFound();
  return <IndustryPageTemplate industry={industry} />;
}
