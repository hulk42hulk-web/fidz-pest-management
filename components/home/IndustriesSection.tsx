import React from "react";
import Link from "next/link";
import { ArrowRight, Utensils, GraduationCap, HeartPulse, HardHat, Building, ShoppingBag, Truck, Ticket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IndustriesSection() {
  const industries = [
    {
      title: "Food & Beverage",
      desc: "SFA-compliant kitchens, restaurants & food catering.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      href: "/industries/food-beverage",
      icon: Utensils,
    },
    {
      title: "Education & Childcare",
      desc: "Child-safe protocols for preschools, schools & tuition centers.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80",
      href: "/industries/education",
      icon: GraduationCap,
    },
    {
      title: "Healthcare & Clinics",
      desc: "Sterile vector control for hospitals, dental & elderly care.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      href: "/industries/healthcare",
      icon: HeartPulse,
    },
    {
      title: "Engineering & Industrial",
      desc: "Perimeter defense for manufacturing, Tuas & Jurong hubs.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      href: "/industries/engineering",
      icon: HardHat,
    },
    {
      title: "Corporate Offices",
      desc: "Discreet after-hours pantry & ceiling void protection.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      href: "/industries/commercial",
      icon: Building,
    },
    {
      title: "Retail & Malls",
      desc: "Customer-facing space defense & loading bay exclusion.",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80",
      href: "/industries/commercial",
      icon: ShoppingBag,
    },
    {
      title: "Logistics & Transport",
      desc: "Warehouse cargo security & rodent prevention grids.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      href: "/industries/commercial",
      icon: Truck,
    },
    {
      title: "Entertainment & Leisure",
      desc: "Indoor playgrounds, theme parks & fitness centers.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
      href: "/industries",
      icon: Ticket,
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#FFFFFF] border-b border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow="SECTOR EXPERTISE"
          eyebrowVariant="green"
          title="Pest Management Tailored by Industry"
          subtitle="Different sectors face distinct vector risks and regulatory audits. Explore our specialized commercial protocols."
          align="center"
          className="mb-12 sm:mb-16"
        />

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_10px_25px_rgba(16,42,67,0.03)] hover:shadow-[0_20px_40px_rgba(16,42,67,0.08)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:border-[#16A765]/40"
              >
                {/* Photo with Overlay */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2345]/40 via-transparent to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md border border-white text-[#16A765] flex items-center justify-center shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#0B2345] font-heading group-hover:text-[#16A765] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A6E85] mt-1 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0B2345] group-hover:text-[#16A765] transition-colors pt-2 border-t border-slate-100">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#16A765]" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View Industries CTA */}
        <div className="text-center mt-12">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-[#0B2345] hover:text-[#16A765] uppercase tracking-wider transition-colors border-b-2 border-[#16A765] pb-1"
          >
            <span>View All Industries & Compliance →</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
