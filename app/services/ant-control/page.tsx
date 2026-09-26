import React from "react";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = SERVICES.find((s) => s.slug === "ant-control");

export const metadata: Metadata = {
  title: "Ant Control & Colony Elimination Singapore | Fidz Pest Management",
  description:
    "Targeted colony eradication for ghost ants, pharaoh ants, and carpenter ants in Singapore. Non-repellent queen elimination baiting.",
};

export default function AntControlPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
