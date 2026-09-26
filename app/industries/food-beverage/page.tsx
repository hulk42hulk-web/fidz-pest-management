import React from "react";
import type { Metadata } from "next";
import { INDUSTRIES } from "@/lib/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { notFound } from "next/navigation";

const industry = INDUSTRIES.find((i) => i.slug === "food-beverage");

export const metadata: Metadata = {
  title: "F&B Pest Control Singapore | SFA & HACCP Compliant | Fidz",
  description:
    "Zero-tolerance pest control for restaurants, cafes, cloud kitchens, and food manufacturing plants in Singapore. Full SFA audit documentation.",
};

export default function FoodBeverageIndustryPage() {
  if (!industry) notFound();
  return <IndustryPageTemplate industry={industry} />;
}
