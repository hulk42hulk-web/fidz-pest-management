import React from "react";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = SERVICES.find((s) => s.slug === "rodent-rat-control");

export const metadata: Metadata = {
  title: "Rodent & Rat Control Singapore | Proofing & Trapping | Fidz",
  description:
    "Integrated rodent management, ceiling void trapping, tamper-resistant bait stations, and structural proofing for Singapore properties.",
};

export default function RodentRatControlPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
