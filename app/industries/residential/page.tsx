import React from "react";
import type { Metadata } from "next";
import { INDUSTRIES } from "@/lib/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { notFound } from "next/navigation";

const industry = INDUSTRIES.find((i) => i.slug === "residential");

export const metadata: Metadata = {
  title: "Residential Pest Control Singapore | HDB, Condos & Landed Homes | Fidz",
  description:
    "Safe, odorless residential pest control for Singapore homes. Child and pet-safe termite, bed bug, cockroach, and ant elimination.",
};

export default function ResidentialIndustryPage() {
  if (!industry) notFound();
  return <IndustryPageTemplate industry={industry} />;
}
