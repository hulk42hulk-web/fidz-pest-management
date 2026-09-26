import React from "react";
import type { Metadata } from "next";
import { INDUSTRIES } from "@/lib/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { notFound } from "next/navigation";

const industry = INDUSTRIES.find((i) => i.slug === "education");

export const metadata: Metadata = {
  title: "School & Preschool Pest Control Singapore | Child-Safe | Fidz",
  description:
    "Low-toxicity, child-safe pest management for childcare centers, preschools, international schools, and tuition campuses across Singapore.",
};

export default function EducationIndustryPage() {
  if (!industry) notFound();
  return <IndustryPageTemplate industry={industry} />;
}
