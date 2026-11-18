export const BRANDS_HEAD = {
  eyebrow: "Our Brands",
  title: "A family of brands. One standard of paint.",
  description:
    "Every brand in the Global Colors family has its own range and its own look. Start with our flagship, HomeStyle, or browse the full family.",
};

export interface BrandPanelData {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  description: string;
  categories: string[];
  cta: string;
  href: string;
  /** CSS colour token that tints the panel overlay and arrow. */
  color: string;
  image: string;
  imageAlt: string;
}

/** Add another entry and it will share the row (the panels flex to fit). */
export const BRAND_PANELS: BrandPanelData[] = [
  {
    id: "homestyle",
    badge: "Decorative range",
    name: "HomeStyle Paints",
    tagline: "“We Make the Difference”",
    description:
      "Our flagship paint brand, made for people who want color that looks beautiful and performs. High quality and excellent coverage give every wall a smooth, rich and consistent result, from family homes to landmark buildings.",
    categories: ["Emulsions", "Colours", "Quarter to bucket"],
    cta: "View HomeStyle",
    href: "#brands",
    color: "var(--hs)",
    image: "/assets/images/brands/homestyle-living-room.jpg",
    imageAlt: "A calm living room with light walls and natural wood furniture",
  },
];

export const FAMILY_HEAD = {
  title: "From the Global Colors family",
  subtitle: "Sister brands, made to the same standard",
  linkLabel: "View All Brands",
  tileNote: "Global Colors family brand",
  allTile: {
    title: "View All Brands",
    description: "Explore the complete brand family",
  },
};
