import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { PestPills } from "@/components/home/PestPills";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyFidz } from "@/components/home/WhyFidz";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { AreasSection } from "@/components/home/AreasSection";
import { EmergencyCTA } from "@/components/home/EmergencyCTA";
import { FAQSection } from "@/components/home/FAQSection";
import { BookingSection } from "@/components/home/BookingSection";

export const metadata: Metadata = {
  title: "24/7 Pest Control Singapore | Fidz Pest Management (NEA Registered)",
  description:
    "Fidz Pest Management provides 24/7 professional pest control across Singapore for homes and businesses. Officially registered NEA vector control operator for termites, bed bugs, cockroaches, ants, rodents, and flying pests.",
  openGraph: {
    title: "24/7 Pest Control Singapore | Fidz Pest Management",
    description:
      "Precision pest eradication for residential and commercial premises across Singapore. Officially licensed NEA Vector Control Operator.",
    type: "website",
    locale: "en_SG",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PestPills />
      <ServicesSection />
      <WhyFidz />
      <IndustriesSection />
      <ProcessSection />
      <AreasSection />
      <EmergencyCTA />
      <FAQSection />
      <BookingSection />
    </>
  );
}
