import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookingSection } from "@/components/home/BookingSection";
import { FAQSection } from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title: "Book Pest Inspection Singapore | Fidz Pest Management",
  description:
    "Schedule an on-site pest inspection across Singapore with NEA-licensed vector control specialists. Rapid dispatch, transparent pricing, child/pet-safe solutions.",
};

export default function BookInspectionPage() {
  return (
    <div className="pt-6 sm:pt-10">
      <Container className="text-center pt-8 sm:pt-12">
        <SectionHeading
          eyebrow="SCHEDULE ON-SITE AUDIT"
          eyebrowVariant="green"
          title="Book Your Professional Pest Inspection"
          subtitle="Experienced vector control operators available 24/7 across all Singapore postal sectors for residential, commercial, and industrial premises."
          align="center"
          className="mb-8"
        />
      </Container>
      <BookingSection />
      <FAQSection />
    </div>
  );
}
