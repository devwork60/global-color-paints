export const CLIENTS_HEAD = {
  eyebrow: "Our clients",
  /** The last words are shown in the brand colour. */
  title: "Trusted by leading developers",
  titleAccent: "& brands.",
  text: "From national restaurant chains to the developers behind landmark towers, these clients choose our paint for their projects.",
  meta: [
    { value: "22+", label: "Landmark projects" },
    { value: "30+", label: "Years of experience" },
  ],
};

export interface Client {
  id: string;
  name: string;
  place: string;
  logo: string;
  logoAlt: string;
  /** Logo file size in pixels (keeps the layout steady while it loads). */
  width: number;
  height: number;
  /** How tall the logo shows, in px: about 30-40 for wide wordmarks, 60-90 for stacked logos. */
  logoHeight: number;
  /** The client's brand colour, used for the hover glow. */
  accent: string;
}

/** To add a client: drop the logo into public/assets/images/clients and add one entry here.
    The loop repeats itself to fill any screen and keeps the same speed. */
export const CLIENTS: Client[] = [
  {
    id: "savour-foods",
    name: "Savour Foods",
    place: "Rawalpindi, Islamabad and Lahore",
    logo: "/assets/images/clients/savour-foods.webp",
    logoAlt: "Savour Foods logo",
    width: 455,
    height: 260,
    logoHeight: 70,
    accent: "#E8156B",
  },
  {
    id: "imarat-builders",
    name: "IMARAT Builders",
    place: "Amazon Mall",
    logo: "/assets/images/clients/imarat-builders.webp",
    logoAlt: "IMARAT logo",
    width: 812,
    height: 160,
    logoHeight: 36,
    accent: "#5a5a60",
  },
  {
    id: "premier-choice",
    name: "Premier Choice",
    place: "Ongoing projects",
    logo: "/assets/images/clients/premier-choice.webp",
    logoAlt: "Premier Choice, international real estate developers, logo",
    width: 373,
    height: 300,
    logoHeight: 88,
    accent: "#2F7FC1",
  },
  {
    id: "kpz-builders",
    name: "KPZ Builders & Developers",
    place: "Developer partner",
    logo: "/assets/images/clients/kpz-builders.webp",
    logoAlt: "KPZ Developers logo",
    width: 603,
    height: 261,
    logoHeight: 66,
    accent: "#C9A24A",
  },
];
