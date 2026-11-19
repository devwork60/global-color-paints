import {
  BrickWall,
  CloudSunRain,
  Droplet,
  Layers,
  Umbrella,
  Waves,
  TreeDeciduous,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const PRODUCT_RANGE_HEAD = {
  eyebrow: "Product range",
  title: "Every coat, from first layer to final finish.",
  description:
    "Ten product categories for interiors, exteriors, wood and metal. Choose a category to see which brand makes it.",
  note: "Which brand makes each product will be confirmed with the client.",
};

export interface ProductPhotoTile {
  id: string;
  title: string;
  description: string;
  tag?: string;
  href: string;
  image: string;
  imageAlt: string;
}

export const PRODUCT_PHOTO_TILES: ProductPhotoTile[] = [
  {
    id: "interior",
    title: "Interior emulsion",
    description: "Living rooms, bedrooms and kitchens",
    tag: "Most popular",
    href: "#brands",
    image: "/assets/images/products/interior-emulsion.jpg",
    imageAlt: "A sunlit reading corner with white shelves and a soft sofa",
  },
  {
    id: "exterior",
    title: "Exterior emulsion",
    description: "Facades and boundary walls",
    href: "#brands",
    image: "/assets/images/products/exterior-emulsion.jpg",
    imageAlt: "A sunny yellow exterior wall with a teal window shutter under a blue sky",
  },
];

export interface ProductChip {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Colour that floods the tile on hover. */
  tint: string;
  href: string;
}

export const PRODUCT_CHIPS: ProductChip[] = [
  { id: "weather", title: "Weather-resistant", description: "For outside walls", icon: CloudSunRain, tint: "#FBEDE8", href: "#brands" },
  { id: "primer", title: "Primer", description: "The first coat", icon: Layers, tint: "#FBF3E1", href: "#brands" },
  { id: "enamel", title: "Enamel", description: "Glossy finish", icon: Droplet, tint: "#E6F1F1", href: "#brands" },
  { id: "putty", title: "Putty", description: "Smooth walls", icon: BrickWall, tint: "#F5ECE3", href: "#brands" },
  { id: "waterproofing", title: "Waterproofing", description: "Stops damp", icon: Umbrella, tint: "#E8EFF5", href: "#brands" },
  { id: "texture", title: "Texture", description: "Feature walls", icon: Waves, tint: "#EEF2E6", href: "#brands" },
  { id: "wood", title: "Wood coatings", description: "Doors and furniture", icon: TreeDeciduous, tint: "#F7EEE6", href: "#brands" },
  { id: "metal", title: "Metal coatings", description: "Gates and grills", icon: Wrench, tint: "#EFEAF2", href: "#brands" },
];

export const PRODUCT_HELP_TILE = {
  title: "Not sure which product you need?",
  description:
    "Tell us the surface and the job. Our team will suggest the right product and pack size.",
  href: "#contact",
};
