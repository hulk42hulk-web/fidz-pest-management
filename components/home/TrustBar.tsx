import React from "react";
import { Users, MapPin, Clock, ShieldCheck } from "lucide-react";

export function TrustBar() {
  const items = [
    {
      icon: Users,
      title: "Homes & Businesses",
      subtitle: "Residential • Commercial",
      iconColor: "text-[#09264A]",
    },
    {
      icon: MapPin,
      title: "Islandwide Coverage",
      subtitle: "All Districts in Singapore",
      iconColor: "text-[#09264A]",
    },
    {
      icon: Clock,
      title: "Fast Response",
      subtitle: "24/7 Emergency Service",
      iconColor: "text-[#09264A]",
    },
    {
      icon: ShieldCheck,
      title: "NEA Compliant",
      subtitle: "Safe & Effective Solutions",
      iconColor: "text-[#0FA968]",
    },
  ];

  return (
    <div className="w-full relative z-20 -mt-6 sm:-mt-10 px-4 sm:px-6">
      <div className="max-w-[1240px] mx-auto glass-pill-bar rounded-[24px] sm:rounded-full py-4 sm:py-5 px-4 sm:px-8 xl:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-100">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-center gap-3.5 ${
                  idx > 0 ? "lg:pl-8" : ""
                } ${idx < items.length - 1 ? "lg:pr-4" : ""}`}
              >
                <div className="shrink-0 w-11 h-11 rounded-full bg-slate-50 border border-slate-100/80 flex items-center justify-center">
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.iconColor} stroke-[1.8]`} />
                </div>
                <div className="text-left">
                  <div className="text-sm sm:text-base font-extrabold text-[#09264A] leading-tight font-heading">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
