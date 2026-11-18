export const ADVANTAGES_HEAD = {
  eyebrow: "Why clients choose us",
  title: "Six reasons the work keeps coming back.",
  sectorsLabel: "Sectors we serve",
  sectors: ["Residential", "Commercial", "Institutional"],
};

export interface Advantage {
  id: string;
  title: string;
  description: string;
  /** Colour token that floods the row on hover. */
  color: string;
}

export const ADVANTAGES: Advantage[] = [
  {
    id: "quality",
    title: "Premium quality",
    description: "High quality paints that deliver a rich, even and long lasting finish.",
    color: "var(--hs)",
  },
  {
    id: "coverage",
    title: "Exceptional coverage",
    description: "Excellent coverage for smooth, uniform results across every surface.",
    color: "var(--bw)",
  },
  {
    id: "experience",
    title: "30+ years of experience",
    description: "Serving the industry since 1992 with deep, hands-on paint expertise.",
    color: "var(--bw-2)",
  },
  {
    id: "track-record",
    title: "Proven track record",
    description: "Trusted by leading developers, government bodies and institutions.",
    color: "var(--hs-2)",
  },
  {
    id: "scale",
    title: "Built for every scale",
    description: "From private villas to malls, universities and an international airport.",
    color: "var(--b-ibex)",
  },
  {
    id: "service",
    title: "Committed service",
    description: "Responsive and dependable support for every client, on every project.",
    color: "var(--b-expresso)",
  },
];
