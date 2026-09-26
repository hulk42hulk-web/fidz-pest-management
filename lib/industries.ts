export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  headline: string;
  subheadline: string;
  heroImage: string;
  cardImage: string;
  metaDescription: string;
  overview: string;
  commonPests: string[];
  keyChallenges: { title: string; description: string }[];
  ourSolutions: { title: string; description: string }[];
  complianceStandards: string[];
  suitableFor: string[];
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "residential",
    slug: "residential",
    title: "Residential Pest Control",
    headline: "Protect Your Home, Family & Pets From Unwanted Pests",
    subheadline: "Tailored pest management programs for HDB flats, private condominiums, and landed homes across Singapore.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    cardImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    metaDescription: "Residential pest control Singapore. Safe, effective solutions for HDB, condos, and landed properties. Termite, bed bug, cockroach, and ant eradication.",
    overview: "Your home is your sanctuary. From high-rise HDB and condominium units dealing with refuse chute cockroaches and ghost ants, to landed properties with garden termite colonies and mosquitoes, Fidz delivers child and pet-friendly treatments with zero disruptions to family life.",
    commonPests: ["Subterranean Termites", "German Cockroaches", "Bed Bugs", "Ghost & Pharaoh Ants", "Rodents & Rats", "Mosquitoes"],
    keyChallenges: [
      { title: "Shared Refuse Chutes in High-Rise", description: "Cockroaches and ants easily travel between floors through common rubbish chutes and utility pipes." },
      { title: "Timber Fixtures & Parquet Vulnerability", description: "Built-in wardrobes and flooring are prime targets for silent subterranean termite colonies." },
      { title: "Family & Pet Safety", description: "Home treatments must eliminate pests without exposing young children, elderly family members, or pets to toxic aerosols." },
    ],
    ourSolutions: [
      { title: "Low-Toxicity Odorless Treatments", description: "Targeted gel baiting and micro-encapsulated formulations safe for indoor domestic environments." },
      { title: "Non-Invasive Termite Colony Elimination", description: "Above-ground termite baiting that eliminates nests without tearing down walls or damaging carpentry." },
      { title: "Refuse Chute & Window Exclusion", description: "Perimeter residual defense at all ingress vectors to block pest migration from neighbors." },
    ],
    complianceStandards: ["NEA Vector Control Operator Standards", "Safe Chemical Handling Guidelines", "Child & Pet Safe Application Standards"],
    suitableFor: ["HDB 3/4/5-Room & Executive Apartments", "Private Condominiums & Penthouses", "Landed Properties (Terrace, Semi-D, Good Class Bungalows)", "Rental & Tenanted Properties"],
  },
  {
    id: "commercial",
    slug: "commercial",
    title: "Commercial Pest Management",
    headline: "Professional Pest Management For Corporate & Commercial Facilities",
    subheadline: "Discrete, schedule-flexible pest management tailored to protect commercial premises, employee well-being, and brand reputation.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    cardImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    metaDescription: "Commercial pest management Singapore. Reliable pest control contracts for corporate offices, shopping malls, retail facilities, and warehouses.",
    overview: "Commercial buildings face unique pest pressures due to high footfall, extensive ducting networks, and multiple tenant tenancies. Fidz provides customized commercial pest management contracts with detailed service audit logs and after-hours servicing.",
    commonPests: ["Rodents & Rats", "German Cockroaches", "Pantry Ants", "Drain Flies", "Fleas & Stored Product Pests"],
    keyChallenges: [
      { title: "Zero Workplace Interruption", description: "Treatments must be conducted outside business hours or with completely odorless, discreet methods." },
      { title: "Extensive Ceiling & Riser Networks", description: "Pests traverse inter-floor risers, server rooms, and suspended ceilings unnoticed." },
      { title: "Multi-Tenant Complexity", description: "Shared waste collection areas and pantries require disciplined perimeter barrier defense." },
    ],
    ourSolutions: [
      { title: "After-Hours & Weekend Servicing", description: "Flexible scheduling to ensure pest maintenance never interferes with tenant operations." },
      { title: "Barcoded Trap Monitoring & Trend Logs", description: "Electronic service reports documenting catch data, bait consumption, and corrective actions." },
      { title: "Comprehensive Server & Cable Void Defense", description: "Non-corrosive, non-toxic mechanical trapping in delicate electrical and server rooms." },
    ],
    complianceStandards: ["BCA Building Maintenance Best Practices", "NEA Commercial Premises Compliance", "Workplace Safety and Health (WSH) Standards"],
    suitableFor: ["Corporate Headquarters & Grade A Offices", "Shopping Centers & Department Stores", "Commercial Warehouses & Logistics Hubs", "Co-Working Spaces & Business Parks"],
  },
  {
    id: "food-beverage",
    slug: "food-beverage",
    title: "Food & Beverage (F&B)",
    headline: "HACCP & SFA-Compliant Pest Defense for Food Establishments",
    subheadline: "Zero-tolerance pest management for restaurants, central kitchens, cafes, and food manufacturing facilities in Singapore.",
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
    cardImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    metaDescription: "F&B pest control Singapore. SFA and HACCP compliant pest management for restaurants, cloud kitchens, bakeries, and food processing plants.",
    overview: "In Singapore's stringent food safety landscape, pest presence can lead to immediate demerit points, license suspension, or viral social media backlash. Fidz provides intensive IPM programs designed specifically for food hygiene audits.",
    commonPests: ["German Cockroaches", "Rodents (Rats & Mice)", "Fruit Flies & Drain Flies", "Pantry Beetles & Weevils"],
    keyChallenges: [
      { title: "Zero Tolerance SFA Grading", description: "Even minor pest activity during SFA inspections can result in demerit points and grade downgrades." },
      { title: "High Organic Load & Heat in Kitchens", description: "Heavy grease traps, warm motor housings, and food residue create ideal breeding environments." },
      { title: "Chemical Safety Restrictions", description: "Strict limitations on where and how insecticides can be applied around food prep surfaces." },
    ],
    ourSolutions: [
      { title: "Secondary-Kill Gel Baiting", description: "Food-safe targeted micro-gels placed in motor compartments without surface contamination." },
      { title: "Bio-Enzymatic Drain Degradation", description: "Digestive bio-foam eliminating the organic biofilm where drain flies lay eggs." },
      { title: "Discreet UV-A Glueboard Traps", description: "Hygienic flying insect monitoring compliant with food manufacturing audit standards." },
    ],
    complianceStandards: ["Singapore Food Agency (SFA) Hygiene Regulations", "HACCP Food Safety Guidelines", "NEA Vector Control Codes"],
    suitableFor: ["Fine Dining & Casual Restaurants", "Central Production Kitchens & Cloud Kitchens", "Cafes, Bakeries & Bubble Tea Outlets", "Food Manufacturing & Processing Facilities"],
  },
  {
    id: "education",
    slug: "education",
    title: "Education & Childcare Facilities",
    headline: "Ultra-Safe, Low-Toxicity Pest Solutions for Schools & Childcare",
    subheadline: "Protecting students, teachers, and young children in preschools, international schools, and enrichment centers.",
    heroImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=80",
    cardImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    metaDescription: "School and childcare pest control Singapore. Child-safe, low-toxicity pest management for preschools, kindergartens, tuition centers, and universities.",
    overview: "Educational environments demand the highest standard of chemical safety. Our protocols prioritize non-chemical exclusion, physical trapping, and targeted baits formulated to be completely non-hazardous to curious young children.",
    commonPests: ["Mosquitoes (Aedes)", "Ants", "Cockroaches", "Bed Bugs in Nap Areas", "Rodents around Canteens"],
    keyChallenges: [
      { title: "Child Health & Chemical Sensitivity", description: "Young children crawl on floors and put objects in mouths, requiring zero residual toxic surface sprays." },
      { title: "Strict ECDA & NEA Guidelines", description: "Preschools face frequent regulatory inspections regarding vector breeding and hygiene." },
      { title: "Canteen & Play Area Vulnerability", description: "Sand pits, outdoor play areas, and school canteens attract diverse pest vectors." },
    ],
    ourSolutions: [
      { title: "Child-Safe Non-Aerosol Baiting", description: "Tamper-resistant station placements in high locked cabinets and out-of-reach crevices." },
      { title: "Eco-Friendly Mosquito Source Reduction", description: "Biological BTI larvicide in outdoor drains and regular potential breeding site audits." },
      { title: "Weekend & Holiday Servicing", description: "Complete building sanitization conducted while school premises are vacant." },
    ],
    complianceStandards: ["ECDA Childcare Center Environmental Standards", "NEA Vector Control Mosquito Guidelines", "WSH School Safety Codes"],
    suitableFor: ["Preschools, Kindergartens & Infant Care Centers", "International Schools & Junior Colleges", "Tuition & Enrichment Centers", "University Campuses & Student Dormitories"],
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare & Medical Facilities",
    headline: "Sterile & Compliant Pest Control for Hospitals, Clinics & Care Homes",
    subheadline: "Rigorous pest management tailored to maintain aseptic clinical conditions and protect vulnerable patients.",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
    cardImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    metaDescription: "Healthcare pest management Singapore. Rigorous, low-emission pest control for hospitals, medical clinics, nursing homes, and dental practices.",
    overview: "In healthcare settings, pests are not merely an annoyance—they are biological vectors capable of transmitting nosocomial infections to immunocompromised patients. Fidz follows medical-grade protocols with zero airborne irritants.",
    commonPests: ["Pharaoh Ants in Sterile Zones", "Bed Bugs in Wards", "German Cockroaches", "Fruit Flies & Drain Flies", "Rodents"],
    keyChallenges: [
      { title: "Aseptic Environment Preservation", description: "Pest control methods must never introduce airborne particulates or volatile chemicals into patient rooms." },
      { title: "High-Bed Turnover & Cross-Contamination", description: "Nursing homes and inpatient wards require rapid bed bug detection and containment." },
      { title: "Sterile Supply Protection", description: "Ants attracted to intravenous sugar solutions or wound dressings must be eliminated immediately." },
    ],
    ourSolutions: [
      { title: "Medical-Grade Micro-Bait Placement", description: "Odorless, zero-VOC gel formulations placed inside electrical raceways and utility shafts." },
      { title: "Forensic Ward Steam Remediation", description: "Dry superheated steam bed bug treatment leaving zero chemical residues in recovery rooms." },
      { title: "MOH Compliance Auditing", description: "Comprehensive reporting aligning with Ministry of Health (MOH) healthcare facility guidelines." },
    ],
    complianceStandards: ["MOH Private Hospitals and Medical Clinics Act", "NEA Vector Control Operator Standards", "Infection Control Environmental Guidelines"],
    suitableFor: ["Hospitals & Medical Centers", "Private Specialist Clinics & Dental Surgeries", "Nursing Homes & Senior Day Care Centers", "Laboratories & Dialysis Centers"],
  },
  {
    id: "engineering",
    slug: "engineering",
    title: "Engineering & Industrial Facilities",
    headline: "Heavy-Duty Pest & Vector Management for Industrial Estates",
    subheadline: "Robust perimeter defense, rodent exclusion, and vector control for manufacturing plants, shipyards, and logistics hubs.",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
    cardImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    metaDescription: "Industrial and engineering pest control Singapore. Heavy-duty rodent proofing, mosquito control, and termite defense for Tuas, Jurong, and Changi industrial hubs.",
    overview: "Industrial plants, chemical warehouses, and engineering facilities have vast footprints with open loading bays, heavy drainage infrastructure, and dense cable conduits. Fidz provides heavy-duty vector control programs built to withstand industrial conditions.",
    commonPests: ["Rodents (Norwegian Rats & Roof Rats)", "Mosquito Vectors (Aedes & Culex)", "Subterranean Termites", "Feral Pigeons & Birds", "Snakes & Reptile Ingress"],
    keyChallenges: [
      { title: "Massive Footprints & Ingress Portals", description: "Continuous truck traffic and open roll-up doors create endless pathways for pest entry." },
      { title: "Critical Wiring & Sensor Integrity", description: "Rodents chewing fiber cables and machinery conduits cause costly plant downtime." },
      { title: "High NEA Dengue Vigilance", description: "Industrial yards face stringent NEA penalties for any stagnant water holding mosquito larvae." },
    ],
    ourSolutions: [
      { title: "High-Security Heavy-Duty TRBS Grid", description: "Lockable, anchored rodent bait stations mapped across perimeter fences and loading bays." },
      { title: "Drone & Thermal Void Inspection", description: "Rapid surveying of vast roof gutters and drainage culverts for mosquito and rodent activity." },
      { title: "Structural Proofing & Brush Seals", description: "Industrial-grade door bottom sweeps and stainless wire mesh installation on intake louvers." },
    ],
    complianceStandards: ["NEA Vector Control Code of Practice", "WSH Workplace Safety Guidelines", "ISO 14001 Environmental Standards"],
    suitableFor: ["Manufacturing Plants & Chemical Refineries", "Shipyards & Marine Engineering Yards", "Cold Storage & Distribution Warehouses", "High-Tech Data Centers & Cleanrooms"],
  },
];
