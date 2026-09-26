import React from "react";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = SERVICES.find((s) => s.slug === "cockroach-control");

export const metadata: Metadata = {
  title: "Cockroach Control Singapore | German & American Cockroaches | Fidz",
  description:
    "Secondary-kill gel baiting and refuse chute vector control for German and American cockroaches in Singapore. SFA and NEA compliance assured.",
};

export default function CockroachControlPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
