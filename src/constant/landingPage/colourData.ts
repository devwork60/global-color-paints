export interface ColourShade {
  name: string;
  code: string;
  hex: string;
}

export interface ColourFamily {
  name: string;
  shades: ColourShade[];
}

export const COLOUR_HEAD = {
  eyebrow: "Colour range",
  count: "54",
  titleRest: " colours. See them on a wall.",
  description:
    "Tap a shade to try it in the room. When you find one you like, ask for the HomeStyle Eurolux Special Emulsion shade card and our team will help you choose.",
  productLine: "Eurolux Special Emulsion",
  cta: { label: "Ask for Shade Card", href: "#dealer" },
  note: "Swatches are indicative only. Screen colours differ from paint on a wall.",
  previewLabel: "Indicative preview",
};

/** The shade selected when the page loads. */
export const COLOUR_DEFAULT_HEX = "#CB4F58";

export const COLOUR_FAMILIES: ColourFamily[] = [
  {
    name: "Whites",
    shades: [
      { name: "White On White", code: "3000", hex: "#FFFFF9" },
      { name: "Off White", code: "3001", hex: "#FFFFE6" },
      { name: "Rose White", code: "3020", hex: "#FFF8CE" },
      { name: "Moon Flower", code: "3029", hex: "#FFFAE0" },
      { name: "Badami", code: "3026", hex: "#F4EEDC" },
      { name: "Ash White", code: "3051", hex: "#F1E6D5" },
      { name: "Cockleshell", code: "3004", hex: "#F4E4C4" },
      { name: "Peach Goddess", code: "3016", hex: "#F9DFBD" },
      { name: "Lavender White", code: "3025", hex: "#DBD7D0" },
      { name: "Captivate", code: "3006", hex: "#D1D6DB" },
    ],
  },
  {
    name: "Neutrals",
    shades: [
      { name: "Zephyr", code: "3015", hex: "#DEC9B0" },
      { name: "Sand Stone", code: "3056", hex: "#D8CAAC" },
      { name: "Mushroom", code: "3014", hex: "#D3BA99" },
      { name: "Tea Rose", code: "3055", hex: "#C0B5A4" },
      { name: "Silver Grey", code: "3032", hex: "#CACAC2" },
      { name: "Shell Grey", code: "3031", hex: "#8B8F95" },
      { name: "Zenita", code: "3010", hex: "#E9BC93" },
      { name: "Cameo", code: "3042", hex: "#DBB383" },
      { name: "Honey Dew", code: "3017", hex: "#E6C08B" },
      { name: "Spice", code: "3019", hex: "#705544" },
      { name: "Black", code: "3062", hex: "#161722" },
    ],
  },
  {
    name: "Yellows",
    shades: [
      { name: "Cream", code: "3002", hex: "#FFF1A0" },
      { name: "Lemon", code: "3003", hex: "#FFDD53" },
      { name: "Apricot", code: "3022", hex: "#F0BF7C" },
      { name: "Harvest Orange", code: "3023", hex: "#E0823D" },
      { name: "Peach", code: "3021", hex: "#FA9271" },
    ],
  },
  {
    name: "Reds",
    shades: [
      { name: "Summer Pink", code: "3028", hex: "#FCDACC" },
      { name: "Bright Pink", code: "3069", hex: "#FFBAD3" },
      { name: "Iris Pink", code: "3044", hex: "#F9ABA3" },
      { name: "Princess Bride", code: "3064", hex: "#D7AF98" },
      { name: "Swiss Miss", code: "3013", hex: "#CD90AB" },
      { name: "Canvas Pink", code: "3049", hex: "#BF5D83" },
      { name: "Ruby Red", code: "3060", hex: "#CB4F58" },
      { name: "Tile Red", code: "3027", hex: "#933541" },
    ],
  },
  {
    name: "Greens",
    shades: [
      { name: "Moon Light", code: "3030", hex: "#EEF9D8" },
      { name: "Melody Green", code: "3034", hex: "#C4E6C5" },
      { name: "Fresh Green", code: "3035", hex: "#C6D480" },
      { name: "Lemon Green", code: "3037", hex: "#9CC57A" },
      { name: "Apple Green", code: "3067", hex: "#83CC73" },
      { name: "Emerald", code: "3070", hex: "#6FC7B1" },
      { name: "Deep Green", code: "3057", hex: "#52B38B" },
      { name: "Gold Green", code: "3066", hex: "#42806D" },
      { name: "Palm Green", code: "3045", hex: "#777444" },
    ],
  },
  {
    name: "Blues",
    shades: [
      { name: "Star Dust", code: "3007", hex: "#B7D3CF" },
      { name: "Cool Blue", code: "3011", hex: "#B6D6E7" },
      { name: "Pastel Blue", code: "3047", hex: "#93D0D3" },
      { name: "Sunny Blue", code: "3008", hex: "#93B8DF" },
      { name: "Jewel Blue", code: "3054", hex: "#74B8D6" },
      { name: "Middle Blue", code: "3068", hex: "#409BD5" },
      { name: "Ferozee", code: "3053", hex: "#4690A0" },
      { name: "Royal Blue", code: "3052", hex: "#2A59AF" },
      { name: "Lilac", code: "3050", hex: "#E5D8E9" },
      { name: "Parasol", code: "3046", hex: "#CEC2E4" },
      { name: "Canvas Mauve", code: "3065", hex: "#8A6FAE" },
    ],
  },
];
