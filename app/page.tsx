import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { EmergencyBanner } from "@/components/home/EmergencyBanner";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Process } from "@/components/home/Process";
import { WhyFidz } from "@/components/home/WhyFidz";
import { ResidentialCommercial } from "@/components/home/ResidentialCommercial";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { Testimonials } from "@/components/home/Testimonials";
import { ClientLogos } from "@/components/home/ClientLogos";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FAQPreview } from "@/components/home/FAQPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "24/7 Pest Control Singapore | Fidz Pest Management",
  description:
    "Fidz Pest Management provides 24/7 pest control services across Singapore for homes and businesses, including termite, bed bug, cockroach, ant, fly and rodent control.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <EmergencyBanner />
      <TrustBar />
      <ServicesGrid />
      <Process />
      <WhyFidz />
      <ResidentialCommercial />
      <IndustriesSection />
      <Testimonials />
      <ClientLogos />
      <AboutPreview />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
