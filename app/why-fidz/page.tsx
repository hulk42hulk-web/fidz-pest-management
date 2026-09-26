import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhyFidz } from "@/components/home/WhyFidz";
import { ProcessSection } from "@/components/home/ProcessSection";
import { EmergencyCTA } from "@/components/home/EmergencyCTA";
import { BookingSection } from "@/components/home/BookingSection";

export const metadata: Metadata = {
  title: "Why Choose Fidz | Licensed Singapore Pest Management",
  description:
    "Discover why homeowners and commercial businesses trust Fidz Pest Management. Licensed NEA operator, 24/7 emergency dispatch, inspection-led treatments.",
};

export default function WhyFidzPage() {
  return (
    <div className="pt-6 sm:pt-10">
      <section className="py-12 sm:py-16 relative overflow-hidden text-center">
        <div className="orb-emerald -top-20 left-1/4 opacity-15" />
        <div className="orb-blue top-10 right-1/4 opacity-15" />

        <Container className="relative z-10">
          <SectionHeading
            eyebrow="LICENSED & ACCOUNTABLE"
            eyebrowVariant="green"
            title="Why Fidz Pest Management?"
            subtitle="Singapore's trusted vector control operator combining forensic species identification, child/pet-safe formulations, and 24/7 rapid response."
            align="center"
            className="mb-8"
          />
        </Container>
      </section>

      <WhyFidz />
      <ProcessSection />
      <EmergencyCTA />
      <BookingSection />
    </div>
  );
}
