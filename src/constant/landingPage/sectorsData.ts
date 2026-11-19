export interface SectorProject {
  name: string;
  /** Optional second line (place, developer or note). */
  note?: string;
}

export interface Sector {
  id: string;
  title: string;
  /** CSS colour (a design token) used for the accent bar, dot and numbering. */
  color: string;
  description: string;
  image: string;
  projects: SectorProject[];
}

export const LEDGER_HEAD = {
  total: 22,
  text: "landmark projects delivered across three sectors. Choose a sector to see its projects.",
};

export const SECTORS: Sector[] = [
  {
    id: "residential",
    title: "Real Estate & Residential",
    color: "var(--hs)",
    description: "Villas, homes and housing communities built with leading developers.",
    image: "/assets/images/sectors/residential.jpg",
    projects: [
      { name: "Premier Choice", note: "Ongoing projects" },
      { name: "KPZ Builders & Developers", note: "Developer partner" },
      { name: "Earth Link Builders & Developers", note: "Developer partner" },
      { name: "AAA Associates Builders & Developers", note: "Developer partner" },
      { name: "IMARAT Builders", note: "Developer partner" },
      { name: "Bahria Town Safari Villas I" },
      { name: "Bahria Town Safari Villas II" },
      { name: "Bahria Homes" },
      { name: "Awami Villas" },
      { name: "Safari Homes" },
      { name: "KPK House", note: "Islamabad" },
      { name: "River Loft", note: "Bahria Town" },
      { name: "Askari 14", note: "A project of the Pak Army" },
      { name: "MES", note: "Many projects" },
    ],
  },
  {
    id: "commercial",
    title: "Commercial & Retail",
    color: "var(--bw)",
    description: "Malls, plazas, high streets and retail outlets that need a finish that lasts.",
    image: "/assets/images/sectors/commercial.jpg",
    projects: [
      { name: "68 High Street", note: "Bahria Town" },
      { name: "River Hills", note: "Bahria Town" },
      { name: "River Loft", note: "Bahria Town" },
      { name: "Amazon Mall", note: "A project of Imarat Builders" },
      { name: "Galaxy Riveria", note: "Commercial plaza" },
      { name: "Galaxy Heights" },
      { name: "Galaxy Arcade" },
      { name: "Box Park 2" },
      { name: "AAA Projects" },
      { name: "Pearl Arena", note: "B.17, Naks Icon Pvt Ltd & Zeb Capital Associates" },
      { name: "Savour Foods", note: "Rawalpindi, Islamabad and Lahore" },
    ],
  },
  {
    id: "institutional",
    title: "Government & Institutional",
    color: "var(--bw-2)",
    description: "National institutions, universities and an international airport.",
    image: "/assets/images/sectors/institutional.jpg",
    projects: [
      { name: "MES", note: "Many projects" },
      { name: "Askari 14", note: "Rawalpindi, a Pak Army project" },
      { name: "New Islamabad International Airport", note: "Islamabad" },
      { name: "Heavy Mechanical Complex", note: "Taxila" },
      { name: "NUST University", note: "Islamabad" },
      { name: "Islamic University", note: "Islamabad" },
      { name: "KPK House", note: "Islamabad" },
    ],
  },
];

export const ABOUT_CTA = {
  eyebrow: "Let's work together",
  title: "Let's colour your next project.",
  text: "Talk to us about your next home, building or development. We will be happy to discuss your requirements.",
  phone: { label: "0327-5001444", href: "tel:03275001444" },
  email: { label: "Email us", href: "mailto:contact@globalcolorscompany.com" },
};
