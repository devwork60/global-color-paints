export const BRANDS_HEAD = {
  eyebrow: "Our Brands",
  title: "Five brands. One standard of paint.",
  description:
    "Each brand has its own range and its own look. Hover a brand to step inside, then open it to see products, colours and pack sizes.",
};

export interface BrandPanelData {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  description: string;
  categories: string[];
  /** CSS colour token that tints the panel overlay. */
  color: string;
  image: string;
  imageAlt: string;
}

/** The flagship photo panel. */
export const BRAND_PANELS: BrandPanelData[] = [
  {
    id: "homestyle",
    badge: "Decorative range",
    name: "HomeStyle Paints",
    tagline: "We Make the Difference.",
    description:
      "Our flagship brand, made for people who want colour that looks beautiful and performs. Eurolux Special Emulsion comes in 54 colours.",
    categories: ["Emulsions", "Colours", "Quarter to bucket"],
    color: "var(--hs)",
    image: "/assets/images/brands/homestyle-living-room.jpg",
    imageAlt: "A calm living room with light walls and natural wood furniture",
  },
];

export interface BrandMiniPanelData {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  color: string;
}

/** The four sister brands with their brand lines. Their product ranges are still to be confirmed by the client. */
export const BRAND_MINI_PANELS: BrandMiniPanelData[] = [
  { id: "bestwall", name: "BestWall", tagline: "Better Walls. Better Living.", color: "var(--b-bestwall)" },
  { id: "tylac", name: "Tylac", tagline: "Built for Lasting Beauty.", color: "var(--b-tylac)" },
  { id: "expresso", name: "Expresso", tagline: "Bring Colour to Life.", color: "var(--b-expresso)" },
  { id: "ibex", name: "IBEX", tagline: "Strength in Every Coat.", color: "var(--b-ibex)" },
].map((brand) => ({
  ...brand,
  badge: "Range to be confirmed",
}));
