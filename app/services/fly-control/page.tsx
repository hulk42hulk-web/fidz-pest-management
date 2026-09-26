import React from "react";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = SERVICES.find((s) => s.slug === "fly-control");

export const metadata: Metadata = {
  title: "Commercial Fly Control & Drain Sanitation Singapore | Fidz",
  description:
    "Discreet UV-A glueboard light traps (ILTs) and bio-enzymatic drain biofilm elimination for F&B kitchens, restaurants, and supermarkets in Singapore.",
};

export default function FlyControlPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
