import { Award, BadgeCheck, Layers, Palette, type LucideIcon } from "lucide-react";

export const WHY_INTRO = {
  eyebrow: "Why choose us",
  title: "Paint that dealers can sell and painters can trust.",
  description:
    "Made in Pakistan, sold through a dealer network, and packed in the sizes people actually buy.",
};

export const PACKS_HEAD = {
  title: "Three pack sizes, one range",
  subtitle: "From a touch-up to a full building",
};

export interface PackSize {
  id: string;
  label: string;
  caption: string;
  /** Can illustration width as a % of its column. */
  width: number;
  /** Label band colour. */
  color: string;
}

export const PACK_SIZES: PackSize[] = [
  { id: "quarter", label: "Quarter", caption: "quarter gallon", width: 37.5, color: "#E0A526" },
  { id: "gallon", label: "Gallon", caption: "gallon", width: 54, color: "#145C63" },
  { id: "bucket", label: "Bucket", caption: "large pack", width: 75, color: "#3D2A3F" },
];

export interface Reason {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  variant: "paper" | "dark" | "warm";
}

export const WHY_REASONS: Reason[] = [
  {
    id: "colour",
    title: "A wide colour range",
    description: "54 colours in Eurolux Special Emulsion alone.",
    icon: Palette,
    variant: "paper",
  },
  {
    id: "experience",
    title: "30+ years of experience",
    description: "Serving the industry since 1992 with deep, hands-on paint expertise.",
    icon: Award,
    variant: "dark",
  },
  {
    id: "categories",
    title: "Ten categories",
    description: "Primer to topcoat, wall to wood to metal, from one company.",
    icon: Layers,
    variant: "warm",
  },
  {
    id: "track-record",
    title: "Proven track record",
    description: "Trusted by leading developers, government bodies and institutions.",
    icon: BadgeCheck,
    variant: "paper",
  },
];
