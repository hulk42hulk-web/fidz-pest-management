export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  headline: string;
  subheadline: string;
  iconName: string;
  heroImage: string;
  cardImage: string;
  metaDescription: string;
  isEmergency?: boolean;
  overview: string;
  theProblem: {
    description: string;
    risks: string[];
  };
  whatToLookFor: {
    title: string;
    signs: { name: string; description: string }[];
  };
  ourApproach: {
    description: string;
    methodologies: { title: string; description: string }[];
  };
  treatmentProcess: {
    step: string;
    title: string;
    description: string;
  }[];
  whoItsFor: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "emergency-pest-control",
    slug: "emergency-pest-control",
    title: "24-Hour Emergency Pest Control",
    shortTitle: "Emergency Pest Control",
    headline: "Pest Problem Right Now? 24/7 Rapid Emergency Response Singapore",
    subheadline: "Immediate technician deployment for severe infestations, commercial emergencies, and urgent safety threats across Singapore.",
    iconName: "Flame",
    isEmergency: true,
    heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80",
    cardImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    metaDescription: "24/7 Emergency pest control Singapore. Fast dispatch across Singapore for urgent termite, rodent, bed bug, cockroach or hornet emergencies. Call 67146711.",
    overview: "Pest infestations do not follow business hours. When sudden rodent sightings threaten health compliance, massive termite swarms emerge, or bed bugs disrupt guest stays, Fidz provides immediate 24/7 emergency dispatch anywhere in Singapore.",
    theProblem: {
      description: "Urgent pest crises can disrupt commercial operations, breach NEA hygiene regulations, compromise food safety ratings, and cause severe distress in residential properties.",
      risks: [
        "Immediate NEA demerit points or kitchen stop-work orders",
        "Property damage from chewing rodents or active termite swarms",
        "Severe allergic reactions or sleep deprivation from bed bug bites",
        "Reputational loss and negative online reviews for hospitality and F&B businesses",
      ],
    },
    whatToLookFor: {
      title: "Common Emergency Scenarios",
      signs: [
        { name: "Sudden Daytime Rodent Sighting", description: "Rats moving in dining areas, open kitchens, or living rooms indicating high population pressure." },
        { name: "Alates / Flying Termite Swarms", description: "Sudden emergence of hundreds of winged termites near interior lights, skirting boards, or doors." },
        { name: "Severe Cockroach Outbreak", description: "Massive nocturnal or diurnal activity around food prep counters, electrical ducts, and storage areas." },
        { name: "Severe Bed Bug Infestation", description: "Visible clusters along mattress seams, headboards, and luggage before high-stakes events or guest check-ins." },
      ],
    },
    ourApproach: {
      description: "Our emergency protocol focuses on rapid on-site assessment, containment, precision knockdown, and root-cause eradication using NEA-registered vector control chemicals.",
      methodologies: [
        { title: "Rapid Islandwide Dispatch", description: "Technicians equipped with targeted response kits positioned across Singapore's central, eastern, and western corridors." },
        { title: "Instant Knockdown & Containment", description: "Ultra-low volume misting, precision gel baiting, and tamper-resistant traps designed for immediate safety and minimal downtime." },
        { title: "Post-Crisis Audit & Remediation", description: "Follow-up perimeter inspection to seal entry vectors and prevent recurrence." },
      ],
    },
    treatmentProcess: [
      { step: "01", title: "Emergency Call / WhatsApp", description: "Contact our 24/7 hotline at 67146711 or WhatsApp 97820482. Provide your location and describe the urgent situation." },
      { step: "02", title: "Immediate Dispatch & Assessment", description: "Technicians arrive swiftly on-site to pinpoint harborages, entry vectors, and infestation severity." },
      { step: "03", title: "Targeted Emergency Treatment", description: "Application of safe, effective knockdown treatments suitable for residential or commercial environments." },
      { step: "04", title: "Certification & Prevention Plan", description: "Documentation for NEA compliance and recommendations to secure your premises permanently." },
    ],
    whoItsFor: [
      "F&B establishments facing urgent pest audits or customer-area sightings",
      "Hotels, serviced apartments, and hostels requiring immediate room recovery",
      "Homeowners discovering aggressive termite swarms or active rodent nests",
      "Offices and commercial facilities requiring discreet after-hours remediation",
    ],
    faqs: [
      { question: "How quickly can your emergency technician arrive?", answer: "Our mobile teams operate islandwide 24 hours daily. For urgent cases in Singapore, we prioritize immediate dispatch." },
      { question: "Are your emergency treatments safe for pets and children?", answer: "Yes. We use NEA-approved, low-toxicity formulations and targeted application methods to ensure safety for families and domestic animals." },
      { question: "Do you provide official NEA compliance documentation for commercial emergencies?", answer: "Yes. We issue professional service vouchers and treatment reports accepted by NEA and Singapore Food Agency (SFA) auditors." },
    ],
  },
  {
    id: "termite-treatment",
    slug: "termite-treatment",
    title: "Termite Treatment & Control",
    shortTitle: "Termite Treatment",
    headline: "Protect Your Property From Silent Structural Termite Damage",
    subheadline: "Comprehensive subterranean and drywood termite inspection, non-invasive baiting systems, and corrective barrier treatments in Singapore.",
    iconName: "ShieldAlert",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80",
    cardImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    metaDescription: "Professional termite control Singapore. Non-toxic termite baiting, thermal inspection, and structural protection for condos, landed homes, and commercial buildings.",
    overview: "In Singapore's warm, humid climate, subterranean termites (Coptotermes gestroi) work 24/7 eating timber fixtures, door frames, parquet flooring, and structural beams. Fidz uses inspection-led termite management to eliminate entire colonies down to the queen.",
    theProblem: {
      description: "Termites consume cellulose from the inside out, often remaining undetected until significant structural or cosmetic damage has already occurred.",
      risks: [
        "Extensive replacement costs for custom cabinetry, built-in wardrobes, and wooden flooring",
        "Compromised structural integrity in landed homes and commercial timber installations",
        "Rapid infestation spread between adjoining walls and neighboring units",
      ],
    },
    whatToLookFor: {
      title: "Signs of Termite Activity",
      signs: [
        { name: "Mud Tubes / Tunnels", description: "Earthen shelter tubes running along baseboards, walls, electrical conduits, or ceiling cornices." },
        { name: "Hollow or Spongy Wood", description: "Door frames, skirting, or cabinet backing that sounds hollow when tapped or yields under gentle pressure." },
        { name: "Discarded Swarmer Wings", description: "Piles of identical shed wings near windows, balcony doors, or lamps after evening rain." },
        { name: "Cracked or Bubbling Paint", description: "Moisture-like bubbling on plasterboard or wood veneer often mistaken for water damage." },
      ],
    },
    ourApproach: {
      description: "We deploy a scientific colony-elimination strategy rather than superficial surface spraying that merely scatters foraging workers.",
      methodologies: [
        { title: "Non-Invasive Baiting Systems", description: "High-attractant bait matrices containing insect growth regulators (IGRs) carried back by workers to eliminate the entire colony." },
        { title: "Corrective Chemical Barrier Injection", description: "Precision sub-slab drilling and termiticide injection forming a continuous protective envelope around structural foundations." },
        { title: "Direct Foaming & Dusting", description: "Pressurized acoustic foaming directly into active wall voids and infested carpentry." },
      ],
    },
    treatmentProcess: [
      { step: "01", title: "Comprehensive Acoustic & Visual Inspection", description: "Technicians map out moisture points, mud tubes, and internal wood hollows." },
      { step: "02", title: "Strategic Bait Station Installation", description: "Above-ground and in-ground stations installed directly over active termite highways." },
      { step: "03", title: "Colony Monitoring & Feed Replenishment", description: "Scheduled fortnightly checks to monitor bait consumption until complete colony collapse." },
      { step: "04", title: "Clearance Verification & Warranty", description: "Final structural check confirming total eradication and long-term preventive guidance." },
    ],
    whoItsFor: [
      "Landed property owners (Bungalows, Semi-Ds, Terraces)",
      "Condominium and HDB homeowners with built-in carpentry and parquet floors",
      "Commercial offices with extensive timber paneling and archival records",
      "Property managers and commercial landlords protecting structural assets",
    ],
    faqs: [
      { question: "Why is surface spray ineffective for termites?", answer: "Superficial spraying only kills the 1-2% of foraging workers outside the nest. The queen continues producing thousands of eggs daily, and the workers will simply detour to another part of your carpentry." },
      { question: "Is your termite baiting safe for indoor home environments?", answer: "Yes, our bait stations are tamper-resistant and contain chitin synthesis inhibitors that specifically target termite biology without toxic fumes." },
      { question: "How long does it take to eliminate a subterranean termite colony?", answer: "Colony elimination typically takes between 4 to 8 weeks depending on colony size and bait feeding rate." },
    ],
  },
  {
    id: "bed-bug-treatment",
    slug: "bed-bug-treatment",
    title: "Bed Bug Eradication & Treatment",
    shortTitle: "Bed Bug Treatment",
    headline: "Total Bed Bug Elimination With Zero Compromise on Sleep",
    subheadline: "Deep thermal steam remediation, precision harborage treatment, and residual defense to eliminate all life stages including eggs.",
    iconName: "BedDouble",
    heroImage: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1400&q=80",
    cardImage: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=800&q=80",
    metaDescription: "Professional bed bug treatment Singapore. High-temperature steam, residual eradication, and multi-stage lifecycle control for homes, hotels, and dormitories.",
    overview: "Bed bugs (Cimex lectularius) are expert hitchhikers that hide inside mattress tufts, headboard joints, electrical sockets, and baseboards. Because bed bug eggs resist standard insect sprays, Fidz uses a multi-faceted protocol targeting both nymphs, adults, and unhatched eggs.",
    theProblem: {
      description: "Bed bugs reproduce rapidly and cause intense itching, allergic welts, severe psychological stress, insomnia, and devastating reputation damage for hospitality operators.",
      risks: [
        "Painful linear bite clusters ('breakfast, lunch, and dinner') and skin infections",
        "Spreading across luggage, clothing, and adjoining rooms in residential and commercial settings",
        "High cost of replacing expensive mattresses and upholstery if treated incorrectly",
      ],
    },
    whatToLookFor: {
      title: "Signs of a Bed Bug Infestation",
      signs: [
        { name: "Itchy Bite Marks in Rows", description: "Red, swollen bumps appearing on arms, neck, shoulders, and legs after waking." },
        { name: "Dark Rusty Fecal Spots", description: "Pinhead-sized dark droppings bleeding like ink on bedsheets, mattress edges, and pillowcases." },
        { name: "Shed Exoskeletons & Egg Casings", description: "Translucent amber-colored skins shed by growing nymphs in mattress crevices." },
        { name: "Sweet Musty Odor", description: "An unpleasant sickly-sweet coriander-like scent in heavily infested bedrooms." },
      ],
    },
    ourApproach: {
      description: "We combine high-temperature thermal steam (>180°C) with targeted residual insect growth regulators to destroy bed bugs at every lifecycle stage.",
      methodologies: [
        { title: "Deep Superheated Dry Steam", description: "Penetrates mattress fabric, deep crevices, and seams to instantly destroy heat-sensitive bed bugs and unhatched eggs." },
        { title: "Precision Residual Micro-Capsule Treatment", description: "Application of NEA-registered formulations to baseboards, bed frames, and furniture joints that remain active against emerging nymphs." },
        { title: "Harborage Dusting & Encasement Strategy", description: "Desiccant dust applied inside switch plates, hollow wall voids, and behind skirting boards." },
      ],
    },
    treatmentProcess: [
      { step: "01", title: "Microscopic Harborage Inspection", description: "Detailed forensic check of mattresses, box springs, headboards, curtain hems, and luggage." },
      { step: "02", title: "Pre-Treatment Preparation Briefing", description: "Clear instructions for laundering bedding at high heat and decluttering the perimeter." },
      { step: "03", title: "Dual-Action Steam & Residual Application", description: "Systematic thermal eradication followed by long-lasting residual barrier application." },
      { step: "04", title: "Follow-Up Lifecycle Inspection", description: "Scheduled secondary inspection 10–14 days later to confirm zero egg hatching and total eradication." },
    ],
    whoItsFor: [
      "Homeowners, tenants, and landlords in Singapore condominiums and HDB flats",
      "Hotels, boutique resorts, and serviced residences",
      "Workers' dormitories and student hostels",
      "Frequent international business travelers returning home",
    ],
    faqs: [
      { question: "Do I have to throw away my expensive mattress?", answer: "In the vast majority of cases, no. Our superheated dry steam and precision extraction methods eliminate bugs directly from mattresses and frames without needing to discard them." },
      { question: "Why are two treatment sessions usually required for bed bugs?", answer: "Bed bug eggs take roughly 7 to 10 days to hatch. The second session ensures any newly emerged nymphs are eliminated before they reach reproductive maturity." },
      { question: "How safe are your chemicals for sleeping quarters?", answer: "We use strictly NEA-approved formulations with low mammalian toxicity. The room is safe for re-entry once ventilated following our technician's clear guidelines." },
    ],
  },
  {
    id: "cockroach-control",
    slug: "cockroach-control",
    title: "Cockroach Control & Eradication",
    shortTitle: "Cockroach Control",
    headline: "Eradicate German & American Cockroaches at the Source",
    subheadline: "Targeted gel baiting, crack-and-crevice residual treatments, and drainage vector control for food establishments and residences.",
    iconName: "Bug",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80",
    cardImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    metaDescription: "Professional cockroach control Singapore. Targeted gel baiting, drain sanitation, and German cockroach eradication for F&B kitchens, food factories, and homes.",
    overview: "Cockroaches in Singapore primarily belong to two problematic species: the large American Cockroach (Periplaneta americana) breeding in refuse chutes and sewers, and the small German Cockroach (Blattella germanica) infesting warm kitchen motor compartments, electrical sockets, and cabinets.",
    theProblem: {
      description: "Cockroaches spread harmful bacteria like Salmonella, E. coli, and allergens that trigger asthma, posing immediate threats to food safety ratings and hygiene standards.",
      risks: [
        "Fines, demerit points, or suspension of Singapore Food Agency (SFA) licenses",
        "Contamination of food ingredients, prep surfaces, and packaged goods",
        "Pungent odors and severe customer complaints in restaurants and retail spaces",
      ],
    },
    whatToLookFor: {
      title: "Signs of Cockroach Infestation",
      signs: [
        { name: "Small Droppings & Smears", description: "Black pepper-like specks in drawer corners, cabinet hinges, and underneath refrigerators." },
        { name: "Egg Capsules (Oothecae)", description: "Brown, pill-shaped egg capsules hidden in dark dry cracks, each holding up to 40 nymphs." },
        { name: "Unpleasant Oily Musky Odor", description: "Distinctive foul smell produced by pheromones when cockroach populations multiply." },
        { name: "Daytime Activity", description: "Seeing cockroaches during daylight indicates intense overcrowding in existing harborages." },
      ],
    },
    ourApproach: {
      description: "We avoid indiscriminate spraying that contaminates food areas and instead utilize the 'domino effect' through attractive micro-dosed insecticidal baits.",
      methodologies: [
        { title: "Secondary Kill Gel Baiting", description: "Cockroaches consume high-palatability gel, return to nests, and transfer the active ingredient to other colony members through grooming and cannibalism." },
        { title: "Drain & Chute Vector Barrier", description: "Targeted residual treatment of floor traps, gully traps, and refuse chute perimeters to block ingress." },
        { title: "Harborage Sealing & Exclusion Advice", description: "Identifying pipe penetration gaps and cabinet fissures to permanently deny nesting sites." },
      ],
    },
    treatmentProcess: [
      { step: "01", title: "Comprehensive Kitchen & Vector Audit", description: "Mapping grease traps, motor compressors, false ceilings, and dry storage zones." },
      { step: "02", title: "Precision Micro-Gel Placement", description: "Discreet application of bait droplets in electrical housings, hinges, and cracks where sprays cannot go." },
      { step: "03", title: "Drain & Sewer Perimeter Defense", description: "Residual insecticidal barrier around inspection chambers, waste pipes, and refuse chambers." },
      { step: "04", title: "Pest Trend Reporting & SFA Documentation", description: "Detailed service records documenting bait consumption and compliance metrics." },
    ],
    whoItsFor: [
      "F&B restaurants, central kitchens, cafes, and bakeries",
      "Supermarkets, food courts, and food manufacturing plants",
      "Condominiums, HDB apartments, and landed residences",
      "Corporate pantries and commercial offices",
    ],
    faqs: [
      { question: "Why do German cockroaches survive standard aerosol sprays?", answer: "German cockroaches reproduce rapidly and have developed widespread resistance to common over-the-counter pyrethroid sprays. Sprays also cause them to scatter into walls, making the problem worse." },
      { question: "Do I have to empty all my kitchen cabinets for treatment?", answer: "With our advanced gel baiting methodology, you generally do not need to empty all cabinets. Gel is placed precisely in hidden crevices without contaminating dishware." },
      { question: "How often should commercial food businesses conduct cockroach treatments?", answer: "Under Singapore hygiene best practices and NEA/SFA regulations, monthly or bi-weekly maintenance treatments are strongly recommended for high-volume kitchens." },
    ],
  },
  {
    id: "ant-control",
    slug: "ant-control",
    title: "Ant Control & Colony Elimination",
    shortTitle: "Ant Control",
    headline: "Targeted Colony Eradication for Pharaoh, Ghost & Carpenter Ants",
    subheadline: "Colony-transfer liquid and granule baiting designed to eliminate the queen and nest deep inside walls, ceilings, and garden perimeters.",
    iconName: "Sparkles",
    heroImage: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1400&q=80",
    cardImage: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80",
    metaDescription: "Professional ant control Singapore. Eliminate ghost ants, pharaoh ants, and carpenter ants with NEA-approved queen-elimination bait systems.",
    overview: "Ant infestations in Singapore homes and offices often involve Ghost Ants (Tapinoma melanocephalum), Pharaoh Ants (Monomorium pharaonis), and Black Crazy Ants. Spraying surface trails causes 'budding,' where colonies fragment into multiple smaller satellite nests throughout your property.",
    theProblem: {
      description: "Ants trail into food prep surfaces, contaminate sterile equipment in healthcare and laboratories, short-circuit sensitive electronics, and chew insulation.",
      risks: [
        "Rapid budding and exponential nest multiplication if treated with wrong chemical sprays",
        "Contamination of food containers, baby formula, sugar, and pantry supplies",
        "Electrical damage from nesting inside air-con units, power sockets, and computer servers",
      ],
    },
    whatToLookFor: {
      title: "Common Singapore Ant Issues",
      signs: [
        { name: "Continuous Foraging Trails", description: "High-density trails running along countertop splashbacks, window seals, and floor tiles." },
        { name: "Ghost Ants in Bathrooms & Kitchens", description: "Tiny, translucent-legged ants attracted to moisture and sweet residue." },
        { name: "Pharaoh Ants in Wall Voids", description: "Yellowish-brown ants nesting in warm wall cavities and electrical sockets." },
        { name: "Sawdust-Like Frass", description: "Wood shavings pushed out of timber fixtures by carpenter ants excavating nesting galleries." },
      ],
    },
    ourApproach: {
      description: "We deploy species-specific slow-acting liquid and granular bait matrices. Forager ants share the toxicant with larvae and reproductive queens via trophallaxis, collapsing the entire colony.",
      methodologies: [
        { title: "Species Identification & Trophallaxis Baiting", description: "Formulations matched precisely to sweet-seeking, protein-seeking, or oil-seeking ant species." },
        { title: "Perimeter Barrier Defense", description: "Non-repellent exterior residual barrier around window sills, door frames, and facade joints." },
        { title: "Moisture & Food Source Auditing", description: "Remediating hidden condensation points and entry pathways." },
      ],
    },
    treatmentProcess: [
      { step: "01", title: "Species & Nest Pathway Mapping", description: "Identifying trail origins, moisture sources, and entry portals." },
      { step: "02", title: "Strategic Colony-Bait Application", description: "Applying micro-droplets along natural foraging trails for rapid worker recruitment." },
      { step: "03", title: "Perimeter Sealing & Non-Repellent Spray", description: "Protecting boundary walls and building envelope against external re-entry." },
      { step: "04", title: "Post-Treatment Evaluation", description: "Verifying complete cessation of trails and queen mortality." },
    ],
    whoItsFor: [
      "HDB flats and private condominiums dealing with persistent kitchen ant trails",
      "Landed residences with extensive gardens, planters, and roof terraces",
      "Offices, pantries, and corporate breakrooms",
      "Healthcare clinics, childcare centers, and bakeries",
    ],
    faqs: [
      { question: "Why do ants return stronger after I spray them with supermarket insecticide?", answer: "Common aerosol sprays kill only foraging workers and trigger an alarm pheromone. The queen responds by laying more eggs or splitting the colony into 2 or 3 separate nests ('budding') inside your walls." },
      { question: "Is ant bait safe to use near kitchen preparation counters?", answer: "Yes. Our baits are applied in minute, discreet quantities in inaccessible crevices, away from direct contact with food or cooking utensils." },
      { question: "How long before we see results after ant baiting?", answer: "Within 24–48 hours you may see increased ant gathering at the bait stations. Total colony collapse usually occurs within 3 to 7 days." },
    ],
  },
  {
    id: "rodent-rat-control",
    slug: "rodent-rat-control",
    title: "Rodent & Rat Control Management",
    shortTitle: "Rodent & Rat Control",
    headline: "Comprehensive Rodent Eradication & Structural Proofing",
    subheadline: "Smart multi-catch trapping, tamper-resistant bait stations, thermal ceiling tracking, and permanent exclusion proofing for premises across Singapore.",
    iconName: "ShieldCheck",
    heroImage: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1400&q=80",
    cardImage: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
    metaDescription: "Professional rodent and rat control Singapore. Tamper-proof baiting, ceiling void eradication, and structural proofing for F&B, warehouses, and commercial buildings.",
    overview: "Rats (Rattus norvegicus / Rattus rattus) and house mice (Mus musculus) in Singapore exploit false ceiling voids, riser shafts, and drainage networks. Fidz provides an integrated rodent management program conforming to NEA Vector Control standards.",
    theProblem: {
      description: "Rodents gnaw continuously on electrical wiring creating fire hazards, transmit dangerous pathogens like Leptospirosis, and lead to instant regulatory shutdown for commercial operators.",
      risks: [
        "Electrical short-circuits and structural fire risks from gnawed data and power cables",
        "Severe NEA demerit points, mandatory closure orders, and public health penalties",
        "Contamination of food packaging, pantry stock, and warehouse inventory",
      ],
    },
    whatToLookFor: {
      title: "Signs of Rodent Infestation",
      signs: [
        { name: "Droppings in Ceiling & Corners", description: "Dark, spindle-shaped droppings (7–14mm) along skirting boards, false ceilings, or cable trays." },
        { name: "Grease Rub Marks", description: "Dark, greasy smudges left along pipes and walls from oily rodent fur rubbing against surfaces." },
        { name: "Nocturnal Scratching Sounds", description: "Scampering, clawing, or squeaking noises above false ceilings or inside partition drywall." },
        { name: "Gnaw Marks on Cables & Packaging", description: "Fresh tooth marks on plastic conduits, cardboard boxes, and door bottom sweeps." },
      ],
    },
    ourApproach: {
      description: "We deploy an Integrated Pest Management (IPM) methodology: rapid population knockdown, comprehensive harbor destruction, and structural exclusion proofing.",
      methodologies: [
        { title: "Tamper-Resistant Rodent Bait Stations (TRBS)", description: "Secure, lockable bait stations positioned along verified exterior and perimeter runways." },
        { title: "Ceiling Void & Riser Trapping", description: "High-impact mechanical traps and non-toxic monitoring lures in sensitive indoor ceiling voids." },
        { title: "Proofing & Exclusion Engineering", description: "Sealing pipe penetrations, door gap sweeps, wire mesh installation, and drain grates." },
      ],
    },
    treatmentProcess: [
      { step: "01", title: "Forensic Runway & Riser Inspection", description: "Mapping entry points, sewer connections, false ceilings, and gnawing evidence." },
      { step: "02", title: "Strategic Station Placement", description: "Installing lockable stations and multi-catch traps along active rodent transit corridors." },
      { step: "03", title: "Exclusion & Gap Proofing", description: "Closing all gaps >6mm using stainless steel mesh, expanding foam, and copper wool." },
      { step: "04", title: "Maintenance & SFA/NEA Audit Reporting", description: "Regular carcass recovery, station replenishing, and trend analysis logs." },
    ],
    whoItsFor: [
      "Commercial F&B, food processing plants, and food logistics centers",
      "Warehouses, distribution hubs, and industrial properties",
      "Shopping malls, hotels, and commercial office towers",
      "Landed properties and residential estates with garden perimeters",
    ],
    faqs: [
      { question: "How do you prevent dead rats from decomposing inside our ceiling voids?", answer: "For indoor spaces and false ceilings, we prioritize mechanical snap traps and capture boards over uncontained poisons, allowing us to immediately locate and remove carcasses without odor issues." },
      { question: "Are your outdoor bait boxes safe around pets and children?", answer: "Yes. All rodenticides are secured inside heavy-duty, lockable, tamper-resistant bait stations that require a specialized key to open." },
      { question: "What is rodent proofing and why is it necessary?", answer: "Proofing involves physically sealing external holes, pipe sleeves, and door thresholds. Without proofing, new rodents from neighboring drains will inevitably re-enter once the current population is removed." },
    ],
  },
  {
    id: "fly-control",
    slug: "fly-control",
    title: "Fly & Flying Insect Management",
    shortTitle: "Fly Control",
    headline: "Commercial Fly Control & Vector Reduction Solutions",
    subheadline: "Electronic light traps (ILT), biological drain larvicide treatments, and perimeter misting to protect hygiene and food safety standards.",
    iconName: "Eye",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    cardImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    metaDescription: "Professional fly control Singapore. Insect light traps (ILT), drain fly treatment, fruit fly eradication for F&B restaurants, catering, and supermarkets.",
    overview: "Houseflies, fruit flies, and drain flies (Phorid/Psychodid flies) carry more than 100 pathogens. In Singapore's competitive dining and food retail scene, even a single flying insect landing on a patron's plate damages credibility and invites NEA scrutiny.",
    theProblem: {
      description: "Flies breed in decaying organic matter, floor drains, and waste disposal units, transferring bacteria to clean dining tables and food prep areas in seconds.",
      risks: [
        "Violations of Singapore Food Agency food hygiene grading criteria",
        "Contamination of open buffet lines, bar counters, and dining tables",
        "Drain fly colonies establishing inside greasy kitchen pipework",
      ],
    },
    whatToLookFor: {
      title: "Common Flying Insect Problems",
      signs: [
        { name: "Fruit Flies Around Bars & Sinks", description: "Tiny brown flies swarming near draft beer taps, fruit garnishes, and trash bins." },
        { name: "Drain Flies Near Floor Traps", description: "Small moth-like fuzzy flies resting on bathroom tiles and kitchen drainage grates." },
        { name: "Houseflies in Dining Areas", description: "Persistent large flies entering via open shopfronts, auto-doors, or delivery docks." },
        { name: "Maggots in Bin Centres", description: "Larval activity in refuse disposal bins and outdoor grease interceptors." },
      ],
    },
    ourApproach: {
      description: "We eliminate fly breeding grounds at the root using bio-enzymatic drain cleaners, insect growth regulators, and discreet UV-A glueboard light traps.",
      methodologies: [
        { title: "Bio-Enzymatic Drain Sanitation", description: "Digestive bio-foam applied directly into floor traps to consume the organic slime where drain flies breed." },
        { title: "Discreet UV-A Glueboard Insect Traps", description: "Hygienic light traps (no noisy zapping or exploding insect fragments) catching flies silently behind customer view." },
        { title: "Air Curtain & Barrier Assessment", description: "Optimizing airflow barriers and door seals to block insect entry from loading bays." },
      ],
    },
    treatmentProcess: [
      { step: "01", title: "Breeding Site & Airflow Audit", description: "Inspecting floor gullies, beer tap lines, bin centers, and negative air pressure zones." },
      { step: "02", title: "Bio-Foaming & Larvicide Application", description: "Treating organic biofilms inside drains to halt larval pupation." },
      { step: "03", title: "Light Trap Calibration & Maintenance", description: "Installing optimized UV-A glueboard units and scheduling tube/board replacements." },
      { step: "04", title: "Hygiene & Catch Log Documentation", description: "Counting and categorizing insect catches for SFA audit compliance." },
    ],
    whoItsFor: [
      "Restaurants, cafes, bakeries, and bar counters",
      "Food caterers and central food production kitchens",
      "Supermarket fresh produce and seafood sections",
      "Hotels, convention centers, and food courts",
    ],
    faqs: [
      { question: "Why are traditional electric grid zappers not recommended in food prep areas?", answer: "High-voltage grid zappers cause insect bodies to explode, scattering microscopic germ-laden fragments across prep counters. Modern food safety standards require silent, hygienic glueboard light traps (ILTs)." },
      { question: "How do we get rid of persistent tiny drain flies in our kitchen?", answer: "Drain flies breed in the gelatinous organic film lining your pipes. Our bio-enzymatic foam digests this organic biofilm, starving and killing the larvae directly." },
      { question: "How often should glueboards and UV tubes in insect traps be replaced?", answer: "Glueboards should be changed monthly (or when 70% full), and UV lamps should be replaced annually as their insect-attracting UV output degrades over time." },
    ],
  },
  {
    id: "soil-treatment",
    slug: "soil-treatment",
    title: "Soil Treatment (Pre & Post Construction)",
    shortTitle: "Soil Treatment",
    headline: "NEA-Compliant Subterranean Anti-Termite Soil Protection",
    subheadline: "Standard-compliant pre-construction soil poisoning, sub-slab chemical barriers, and reticulation systems for Singapore developers and builders.",
    iconName: "Layers",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1400&q=80",
    cardImage: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
    metaDescription: "NEA-compliant pre & post construction soil treatment Singapore. Termiticide soil barrier, sub-slab injection, and warranty for developers, architects, and landed homeowners.",
    overview: "Subterranean termites originate in the soil and penetrate concrete expansion joints, conduits, and cracks as narrow as 0.8mm. Pre-construction soil treatment forms a continuous toxic or repellent zone beneath building foundations, meeting mandatory Singapore building standards.",
    theProblem: {
      description: "Failing to treat soil prior to concrete pouring leaves the entire building vulnerable to termite entry, which is significantly more difficult and costly to remediate once construction is finished.",
      risks: [
        "Non-compliance with BCA building codes and structural handover guidelines",
        "Costly retrofitting and invasive floor drilling after renovation completion",
        "Irreversible structural damage to ground floor timber structures and fixtures",
      ],
    },
    whatToLookFor: {
      title: "When Soil Treatment is Required",
      signs: [
        { name: "New Landed Property Construction", description: "Before pouring ground-level slab and blinding layer for new bungalows and terrace houses." },
        { name: "Addition & Alteration (A&A) Works", description: "Extension of building footprints, new patio slabs, and foundational remodeling." },
        { name: "Post-Construction Corrective Barrier", description: "Existing buildings lacking chemical barriers requiring sub-slab perimeter drilling." },
        { name: "Termite Reticulation System Setup", description: "Installing perforated underground piping for easy termiticide replenishment every 3–5 years." },
      ],
    },
    ourApproach: {
      description: "We strictly adhere to Singapore Standards (SS CP 69) and NEA regulations, using certified, long-residual termiticides with high soil-binding affinity.",
      methodologies: [
        { title: "Pre-Slab Horizontal & Vertical Flooding", description: "Calibrated chemical application over aggregate base and foundation column edges before damp-proof membrane installation." },
        { title: "Sub-Slab Pressure Injection (Post-Con)", description: "Precision diamond-core drilling through concrete slabs at 30–45cm intervals with pressure termiticide flooding." },
        { title: "Termite Reticulation Piping Installation", description: "Seamless underground perforated piping allowing future chemical recharging with zero floor drilling." },
      ],
    },
    treatmentProcess: [
      { step: "01", title: "Architectural Plan Review & Site Audit", description: "Calculating total square meterage, expansion joint positions, and construction milestones." },
      { step: "02", title: "Soil Moisture & Compaction Prep", description: "Coordinating with site engineers to treat soil immediately prior to slab pouring." },
      { step: "03", title: "Calibrated Termiticide Application", description: "Applying NEA-registered termiticide at exact regulatory dosage rates with computerized flow meters." },
      { step: "04", title: "Certificate of Warranty & BCA Handover", description: "Issuing formal 5-Year soil treatment warranty and compliance paperwork for authority submission." },
    ],
    whoItsFor: [
      "Main contractors and civil construction companies",
      "Architects, structural engineers, and project managers",
      "Landed property owners rebuilding or undertaking A&A works",
      "Commercial developers and industrial facility managers",
    ],
    faqs: [
      { question: "What is the warranty period for pre-construction soil treatment?", answer: "Our pre-construction soil treatments typically come with an official 5-Year warranty against subterranean termite infestation, fully compliant with Singapore construction standards." },
      { question: "What is the best timing to perform soil treatment during construction?", answer: "Treatment should be performed right after the soil is compacted and gravel/sand blinding is laid, immediately before laying the vapor barrier membrane and pouring the concrete slab." },
      { question: "Do you supply documentation required for BCA / NEA building handover?", answer: "Yes, we provide full technical documentation, chemical safety data sheets (SDS), dosage records, and formal warranty certificates required for building clearance." },
    ],
  },
];
