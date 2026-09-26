export interface ClientCategory {
  category: string;
  clients: {
    name: string;
    type: string;
    logoText?: string;
  }[];
}

export const CLIENT_CATEGORIES: ClientCategory[] = [
  {
    category: "Children & Education",
    clients: [
      { name: "Kinderland Preschool", type: "Childcare & Early Learning" },
      { name: "MindChamps Preschool", type: "Early Childhood Education" },
      { name: "MapleBear Singapore", type: "Preschool & Infant Care" },
      { name: "EtonHouse International", type: "International Pre-School" },
      { name: "The Little Skool-House", type: "Early Learning Campus" },
      { name: "My First Skool", type: "Child Development Center" },
    ],
  },
  {
    category: "Chemical & Engineering",
    clients: [
      { name: "Sembcorp Marine", type: "Engineering & Offshore" },
      { name: "Keppel Offshore & Marine", type: "Marine & Infrastructure" },
      { name: "Evonik Oil Additives", type: "Specialty Chemicals" },
      { name: "Mitsui Chemicals Asia", type: "Chemical Manufacturing" },
      { name: "Rotary Engineering", type: "Industrial EPC Solutions" },
      { name: "Chiyoda Singapore", type: "Process Engineering" },
    ],
  },
  {
    category: "Food & Beverage",
    clients: [
      { name: "TungLok Group", type: "Fine Dining Restaurant Group" },
      { name: "Jumbo Seafood Group", type: "Seafood & Restaurant Chain" },
      { name: "Crystal Jade Culinary", type: "Chinese Dining Concepts" },
      { name: "BreadTalk Group", type: "Bakery & Central Kitchens" },
      { name: "Old Chang Kee", type: "F&B Production & Outlets" },
      { name: "Ya Kun Kaya Toast", type: "Heritage F&B Chain" },
    ],
  },
  {
    category: "Family & Entertainment",
    clients: [
      { name: "Pororo Park Singapore", type: "Theme Park & Playground" },
      { name: "Tayo Station", type: "Family Indoor Activity Center" },
      { name: "SuperPark Singapore", type: "Activity Park & Recreation" },
      { name: "Kiztopia Singapore", type: "Edutainment Playground" },
      { name: "Bounce Singapore", type: "Indoor Trampoline Park" },
      { name: "Timezone Singapore", type: "Entertainment Centers" },
    ],
  },
  {
    category: "Healthcare & Care Facilities",
    clients: [
      { name: "Raffles Medical Clinics", type: "Primary & Specialist Care" },
      { name: "Thomson Medical Center", type: "Hospitality & Maternity" },
      { name: "St. Luke's ElderCare", type: "Senior Nursing & Day Care" },
      { name: "Ren Ci Hospital", type: "Community Care Hospital" },
      { name: "Q&M Dental Group", type: "Dental Clinics Network" },
      { name: "Econ Healthcare Group", type: "Nursing Homes & Medicare" },
    ],
  },
  {
    category: "Commercial Property & Logistics",
    clients: [
      { name: "Midview City Property Mgt", type: "Commercial Business Park" },
      { name: "CapitaLand Commercial", type: "Office & Retail Management" },
      { name: "Mapletree Logistics", type: "Logistics & Industrial Parks" },
      { name: "Ascendas REIT", type: "Business Spaces Management" },
      { name: "Far East Organization", type: "Property Management" },
      { name: "City Developments Limited", type: "Residential & Commercial Assets" },
    ],
  },
];
