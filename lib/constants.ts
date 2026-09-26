export const COMPANY_INFO = {
  name: "Fidz Pest Management",
  tagline: "Professional Pest Control. Right When You Need It.",
  subTagline: "Fast, professional pest management for homes and businesses across Singapore.",
  neaReg: "NEA53397893M",
  neaType: "Registered Vector Control Operator",
  phone: "67146711",
  phoneFormatted: "+65 6714 6711",
  phoneTel: "tel:+6567146711",
  whatsapp: "97820482",
  whatsappFormatted: "+65 9782 0482",
  whatsappUrl: "https://wa.me/6597820482?text=Hi%20Fidz%20Pest%20Management%2C%20I%20would%20like%20to%20enquire%20about%20pest%20control%20services.",
  email: "enquiry@fidz.com.sg",
  emailMailto: "mailto:enquiry@fidz.com.sg",
  address: {
    street: "22 Sin Ming Lane #06-76",
    building: "Midview City",
    country: "Singapore",
    postalCode: "573969",
    fullAddress: "22 Sin Ming Lane #06-76, Midview City, Singapore 573969",
  },
  operatingHours: "24 Hours, Daily (365 Days)",
  emergencyResponseTime: "Fast Singapore-Wide Dispatch",
  websiteUrl: "https://fidz.com.sg",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Emergency Pest Control (24/7)", href: "/services/emergency-pest-control", badge: "24/7" },
      { label: "Termite Treatment", href: "/services/termite-treatment" },
      { label: "Bed Bug Treatment", href: "/services/bed-bug-treatment" },
      { label: "Cockroach Control", href: "/services/cockroach-control" },
      { label: "Ant Control", href: "/services/ant-control" },
      { label: "Rodent & Rat Control", href: "/services/rodent-rat-control" },
      { label: "Fly Control", href: "/services/fly-control" },
      { label: "Soil Treatment (Pre/Post Construction)", href: "/services/soil-treatment" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Residential (HDB / Condo / Landed)", href: "/industries/residential" },
      { label: "Commercial & Corporate", href: "/industries/commercial" },
      { label: "Food & Beverage (F&B)", href: "/industries/food-beverage" },
      { label: "Education & Childcare", href: "/industries/education" },
      { label: "Healthcare & Clinics", href: "/industries/healthcare" },
      { label: "Engineering & Industrial", href: "/industries/engineering" },
    ],
  },
  { label: "Why Fidz", href: "/about#why-fidz" },
  { label: "Areas We Serve", href: "/areas-we-serve" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const TRUST_METRICS = [
  { label: "NEA Registered", sublabel: "Vector Control Operator", value: "NEA53397893M" },
  { label: "24/7 Response", sublabel: "Islandwide Singapore", value: "Emergency Dispatch" },
  { label: "Zero-Compromise", sublabel: "Child & Pet Safe Formulations", value: "Safe Tech" },
  { label: "Coverage", sublabel: "Residential & Commercial", value: "100% Singapore" },
];
