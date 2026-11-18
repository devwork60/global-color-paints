export type BrandKind = "flag" | "family";

export interface Brand {
  id: string;
  name: string;
  initials: string;
  /** CSS colour token for the brand. */
  color: string;
  kind: BrandKind;
  /** Short line shown inside the brand directory card. */
  directoryNote: string;
}

export const BRANDS: Brand[] = [
  {
    id: "homestyle",
    name: "HomeStyle Paints",
    initials: "HS",
    color: "var(--hs)",
    kind: "flag",
    directoryNote: "We Make the Difference · 54 colours",
  },
  {
    id: "bestwall",
    name: "BestWall",
    initials: "BW",
    color: "var(--b-bestwall)",
    kind: "family",
    directoryNote: "Global Colors family",
  },
  {
    id: "tylac",
    name: "Tylac",
    initials: "TY",
    color: "var(--b-tylac)",
    kind: "family",
    directoryNote: "Global Colors family",
  },
  {
    id: "expresso",
    name: "Expresso",
    initials: "EX",
    color: "var(--b-expresso)",
    kind: "family",
    directoryNote: "Global Colors family",
  },
  {
    id: "ibex",
    name: "IBEX",
    initials: "IB",
    color: "var(--b-ibex)",
    kind: "family",
    directoryNote: "Global Colors family",
  },
];

export const FLAGSHIP_BRAND = BRANDS[0];
export const FAMILY_BRANDS = BRANDS.filter((b) => b.kind === "family");
