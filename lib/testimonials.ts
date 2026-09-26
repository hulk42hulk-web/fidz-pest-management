export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  propertyType: string;
  rating: number;
  location: string;
  serviceUsed: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    quote: "Fidz Pest Management came down within 45 minutes on a Sunday evening when we had an urgent termite swarm emerging near our living room skirting board. Their technician explained the baiting protocol clearly without pushy tactics. After 4 weeks, zero termite activity. Truly professional.",
    author: "Tan Wei Ming",
    role: "Homeowner",
    propertyType: "Bishan Landed Terrace",
    rating: 5,
    location: "Bishan, Singapore",
    serviceUsed: "Termite Treatment",
  },
  {
    id: "2",
    quote: "We run three central F&B production kitchens in Singapore. Cleanliness and SFA compliance are our lifeblood. Fidz handles our regular monthly vector control and grease trap monitoring. Their digital service reports and prompt NEA documentation are spotless.",
    author: "Chef Marcus Wong",
    role: "Operations Director",
    propertyType: "F&B Restaurant Group",
    rating: 5,
    location: "Tanjong Pagar & Tai Seng",
    serviceUsed: "Cockroach & Fly Management",
  },
  {
    id: "3",
    quote: "Had a stubborn bed bug issue after returning from an overseas holiday. Two other vendors sprayed twice with no success. Fidz used high-temperature dry steam and targeted residual barrier. Not a single bite since their second inspection. Lifesavers for our sleep.",
    author: "Rachel Goh",
    role: "Condo Resident",
    propertyType: "3-Bedroom Condominium",
    rating: 5,
    location: "East Coast Road",
    serviceUsed: "Bed Bug Treatment",
  },
  {
    id: "4",
    quote: "Our preschool has strict child-safety requirements. Fidz provided odorless, child-safe baiting for ghost ants and outdoor mosquito larviciding during weekends. Very polite, NEA-licensed technicians who respect school safety protocols.",
    author: "Priscilla Lim",
    role: "Centre Principal",
    propertyType: "Childcare & Preschool",
    rating: 5,
    location: "Thomson / Sin Ming",
    serviceUsed: "Ant & Vector Control",
  },
  {
    id: "5",
    quote: "Pre-construction soil treatment was completed on schedule with full NEA compliance certification and warranty documentation for our BCA building submission. Flawless coordination with our structural site engineers.",
    author: "Derrick Chan",
    role: "Senior Project Manager",
    propertyType: "Commercial & Industrial Development",
    rating: 5,
    location: "Tuas Industrial Basin",
    serviceUsed: "Soil Treatment (Pre-Construction)",
  },
];
