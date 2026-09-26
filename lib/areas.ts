export interface AreaRegion {
  name: string;
  districts: string[];
  keyTowns: string[];
  responseTime: string;
}

export const SINGAPORE_REGIONS: AreaRegion[] = [
  {
    name: "Central Region",
    districts: ["D01 - D08", "D09 - D11 (Orchard/Bukit Timah)", "D12 (Balestier/Toa Payoh)", "D20 (Bishan/Ang Mo Kio)"],
    keyTowns: ["Bishan", "Toa Payoh", "Novena", "Orchard", "Marina Bay", "Tanjong Pagar", "Sin Ming (HQ)"],
    responseTime: "Rapid 30-45 Mins Dispatch",
  },
  {
    name: "East Region",
    districts: ["D13 - D16 (Bedok/Marine Parade/East Coast)", "D17 - D18 (Changi/Tampines/Pasir Ris)"],
    keyTowns: ["Tampines", "Pasir Ris", "Bedok", "Marine Parade", "Changi Business Park", "Geylang"],
    responseTime: "Rapid 30-45 Mins Dispatch",
  },
  {
    name: "North Region",
    districts: ["D25 - D28 (Woodlands/Admiralty/Yishun/Sembawang)"],
    keyTowns: ["Woodlands", "Yishun", "Sembawang", "Admiralty", "Mandai", "Kranji Industrial"],
    responseTime: "Rapid 30-45 Mins Dispatch",
  },
  {
    name: "North-East Region",
    districts: ["D19 - D28 (Serangoon/Hougang/Punggol/Sengkang)"],
    keyTowns: ["Punggol", "Sengkang", "Hougang", "Serangoon Gardens", "Seletar Aerospace Park"],
    responseTime: "Rapid 30-45 Mins Dispatch",
  },
  {
    name: "West Region",
    districts: ["D21 - D24 (Clementi/Bukit Batok/Jurong/Choa Chu Kang)", "D22 (Tuas/Jurong Industrial)"],
    keyTowns: ["Jurong East", "Jurong West", "Clementi", "Bukit Batok", "Choa Chu Kang", "Tuas & Jurong Island"],
    responseTime: "Rapid 30-45 Mins Dispatch",
  },
  {
    name: "Offshore & Special Zones",
    districts: ["D04 (Sentosa / Harbourfront)", "Jurong Island Chemical Hub"],
    keyTowns: ["Sentosa Cove", "Sentosa Resorts", "Jurong Island Refineries", "PSA Port Terminals"],
    responseTime: "Scheduled & Emergency Priority",
  },
];
