export const HERO_CONTENT = {
  eyebrow: "Paint manufacturer in Pakistan since 1992",
  title: "Colour made for Pakistani homes.",
  description:
    "We make and distribute paint across Pakistan through five brands: HomeStyle Paints, BestWall, Tylac, Expresso and IBEX.",
  primaryCta: { label: "Explore Our Brands", href: "#brands" },
  secondaryCta: { label: "Become a Dealer", href: "#dealer" },
  note: "Colours on screen are indicative",
};

export interface HeroColour {
  name: string;
  hex: string;
}

export const HERO_COLOURS: HeroColour[] = [
  { name: "Ruby Red", hex: "#CB4F58" },
  { name: "Apricot", hex: "#F0BF7C" },
  { name: "Lemon Green", hex: "#9CC57A" },
  { name: "Ferozee", hex: "#4690A0" },
  { name: "Sunny Blue", hex: "#93B8DF" },
  { name: "Summer Pink", hex: "#FCDACC" },
  { name: "Canvas Mauve", hex: "#8A6FAE" },
  { name: "Zenita", hex: "#E9BC93" },
  { name: "Off White", hex: "#FFFFE6" },
  { name: "Shell Grey", hex: "#8B8F95" },
];
