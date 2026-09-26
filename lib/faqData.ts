export interface FAQCategoryItem {
  category: string;
  id: string;
  description: string;
  questions: {
    question: string;
    answer: string;
    tag?: string;
  }[];
}

export const FAQ_DATA: FAQCategoryItem[] = [
  {
    id: "general",
    category: "General",
    description: "About Fidz Pest Management, licensing, and standards in Singapore.",
    questions: [
      {
        question: "Is Fidz Pest Management registered with the National Environment Agency (NEA)?",
        answer: "Yes. Fidz Pest Management is an officially registered Vector Control Operator with the National Environment Agency (NEA Registration: NEA53397893M). All technicians are trained, licensed, and strictly follow Singapore vector control regulations.",
      },
      {
        question: "What areas of Singapore does Fidz cover?",
        answer: "We provide 100% islandwide coverage across Singapore, including Central, East, West, North, North-East, and industrial zones like Jurong Island and Tuas, as well as Sentosa.",
      },
      {
        question: "Are your treatments safe for young children, elderly individuals, and household pets?",
        answer: "Yes. We prioritize low-mammalian-toxicity, water-based, and targeted micro-encapsulated formulations. Our technicians explain specific safety protocols and minimal re-entry wait times depending on the exact service carried out.",
      },
      {
        question: "Do you offer warranties on your pest treatments?",
        answer: "Yes. We provide service warranties on specific treatments like termite colony elimination, pre-construction soil treatment (5-year warranty), and structured residential programs. Warranty terms are clearly detailed in your inspection report.",
      },
    ],
  },
  {
    id: "emergency",
    category: "Emergency",
    description: "24/7 immediate assistance for urgent infestations and safety concerns.",
    questions: [
      {
        question: "How does 24/7 Emergency Pest Control work?",
        answer: "Call our emergency hotline at 67146711 or WhatsApp 97820482 immediately. Our duty dispatch officer will assess the severity, advise immediate containment measures over the phone, and dispatch an on-call mobile technician to your premises.",
      },
      {
        question: "What constitutes a pest control emergency?",
        answer: "Emergency cases include sudden termite swarms threatening electrical/carpentry lines, visible rodent activity during business hours in F&B outlets, severe bed bug discoveries before guest arrival, or acute pest sightings triggering health audits.",
      },
      {
        question: "Are emergency pest control services available on weekends and public holidays?",
        answer: "Yes, our emergency response team operates 24 hours a day, 7 days a week, 365 days a year, including Chinese New Year, Christmas, and all Singapore public holidays.",
      },
    ],
  },
  {
    id: "residential",
    category: "Residential",
    description: "Home pest control for HDB flats, condominiums, and landed homes.",
    questions: [
      {
        question: "Do I need to leave my home during the treatment?",
        answer: "For common treatments like gel baiting for cockroaches and ants, or discreet termite bait installation, you do not need to leave the house. For extensive thermal steam or residual misting, we usually recommend vacating the treated room for 1 to 2 hours for proper ventilation.",
      },
      {
        question: "How do you treat pests coming from common high-rise refuse chutes in HDB/condos?",
        answer: "We establish a specialized micro-barrier around your internal refuse chute hopper, drainage gully traps, and main door thresholds, stopping migrating cockroaches and ants from penetrating into your living spaces.",
      },
      {
        question: "Can you inspect my landed home for subterranean termites before renovation?",
        answer: "Yes. We strongly encourage pre-renovation acoustic and visual termite inspections. Detecting active colonies before you install custom built-in carpentry saves tens of thousands in replacement costs.",
      },
    ],
  },
  {
    id: "commercial",
    category: "Commercial",
    description: "Business pest management, compliance, SFA audits, and maintenance contracts.",
    questions: [
      {
        question: "Do you provide documentation required for Singapore Food Agency (SFA) audits?",
        answer: "Yes. Every commercial service includes comprehensive service vouchers, treatment logs, chemical dosage documentation, and trap catch trend analyses that satisfy SFA hygiene audit requirements.",
      },
      {
        question: "Can treatments be scheduled during late night or early morning hours?",
        answer: "Absolutely. We specialize in discreet, after-hours servicing for restaurants, shopping malls, corporate offices, and central kitchens to ensure zero interference with your normal business operations.",
      },
      {
        question: "How frequently should a commercial F&B outlet conduct pest control?",
        answer: "Under Singapore hygiene standards, most F&B premises require monthly or bi-weekly maintenance visits to maintain zero-pest compliance and comply with SFA grading standards.",
      },
    ],
  },
  {
    id: "services",
    category: "Services & Treatment Methods",
    description: "Detailed information regarding our specific treatment techniques.",
    questions: [
      {
        question: "Why is termite baiting better than drilling and chemical spraying?",
        answer: "Spraying only kills the foraging worker termites on the surface, leaving the queen alive to produce thousands more eggs. Our bait stations use insect growth regulators that workers carry back to feed the queen, collapsing the entire colony at its source.",
      },
      {
        question: "How does superheated dry steam eliminate bed bugs?",
        answer: "Bed bugs and their unhatched eggs are sensitive to extreme heat. Our dry steam units operate at over 180°C, penetrating deep into mattress seams, sofa folds, and baseboards to instantly destroy all lifecycle stages without wetting fabric.",
      },
      {
        question: "What is pre-construction soil treatment?",
        answer: "It involves applying an NEA-registered termiticide barrier into the soil and sub-base before pouring concrete foundation slabs. This prevents subterranean termites from tunneling into the building from underground for years to come.",
      },
    ],
  },
  {
    id: "booking",
    category: "Booking & Inspection",
    description: "Scheduling an inspection, pricing transparency, and payment methods.",
    questions: [
      {
        question: "How do I book a pest inspection with Fidz?",
        answer: "You can book directly via our online inspection request form, call our hotline at 67146711, or message us on WhatsApp at 97820482. We will arrange a convenient time slot for an on-site evaluation.",
      },
      {
        question: "What happens during an on-site inspection?",
        answer: "Our licensed technician will inspect key harborages, check moisture levels, identify pest species, determine infestation entry points, and provide a clear, itemized treatment recommendation with no hidden costs.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept PayNow, Bank Transfer, Cheque (for corporate accounts), and major Credit/Debit Cards.",
      },
    ],
  },
];
