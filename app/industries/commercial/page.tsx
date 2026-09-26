import React from "react";
import type { Metadata } from "next";
import { INDUSTRIES } from "@/lib/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { notFound } from "next/navigation";

const industry = INDUSTRIES.find((i) => i.slug === "commercial");

export const metadata: Metadata = {
  title: "Commercial Pest Management Singapore | Offices & Facilities | Fidz",
  description:
    "Discreet after-hours commercial pest control contracts for corporate offices, retail spaces, shopping malls, and warehouses in Singapore.",
};

export default function CommercialIndustryPage() {
  if (!industry) notFound();
  return <IndustryPageTemplate industry={industry} />;
}
