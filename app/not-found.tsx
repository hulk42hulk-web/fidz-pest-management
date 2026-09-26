import React from "react";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/glass/GlassCard";
import { GlassButton } from "@/components/glass/GlassButton";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-36 relative overflow-hidden flex items-center justify-center">
      <div className="orb-emerald -top-20 left-1/4 opacity-15" />
      <div className="orb-blue bottom-10 right-1/4 opacity-15" />

      <Container size="narrow" className="relative z-10 text-center">
        <GlassCard variant="strong" className="p-8 sm:p-14 max-w-xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#FEECEF] text-[#E5394F] flex items-center justify-center mx-auto shadow-2xs">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#09264A] font-heading">
            Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            The page you are looking for may have moved or no longer exists. Return to our homepage or contact our 24/7 team for assistance.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <GlassButton
              href="/"
              variant="primary"
              size="md"
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Return to Homepage
            </GlassButton>
            <GlassButton href="/contact" variant="glass" size="md">
              Contact 24/7 Hotline
            </GlassButton>
          </div>
        </GlassCard>
      </Container>
    </div>
  );
}
