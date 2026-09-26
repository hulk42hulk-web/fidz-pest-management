import React from "react";
import type { Metadata } from "next";
import { INDUSTRIES } from "@/lib/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { notFound } from "next/navigation";

const industry = INDUSTRIES.find((i) => i.slug === "engineering");

export const metadata: Metadata = {
  title: "Industrial & Engineering Pest Control Singapore | Tuas & Jurong | Fidz",
  description:
    "Heavy-duty rodent proofing, mosquito control, and termite barriers for chemical plants, shipyards, and logistics hubs in Singapore.",
};

export default function EngineeringIndustryPage() {
  if (!industry) notFound();
  return <IndustryPageTemplate industry={industry} />;
}
