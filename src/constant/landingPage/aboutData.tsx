import { Eye, Target, type LucideIcon } from "lucide-react";

export const ABOUT_INTRO = {
  eyebrow: "About Global Colors Company",
  titleFirst: "We make",
  titleSecondLead: "the ",
  titleEmphasis: "difference.",
  lead: "Global Colors Company is the home of HomeStyle Paints, BestWall, Tylac, Expresso and IBEX. Since 1992, we have been colouring homes, commercial landmarks and national institutions with paints built for outstanding coverage, a lasting finish and dependable performance.",
  body: "For more than three decades we have partnered with leading builders, developers and government organisations. From residential villas and shopping malls to universities and an international airport, our portfolio shows that when quality matters, clients choose us.",
};

export interface AboutStat {
  id: string;
  /** Number the counter ends on. */
  to: number;
  /** Number the counter starts from (defaults to 0). */
  from?: number;
  suffix?: string;
  label: string;
  code: string;
  /** Swatch colour token. */
  color: string;
  /** Reveal delay for the swatch wipe, in seconds. */
  delay: number;
  /** Use dark text on a light swatch. */
  darkText?: boolean;
}

export const ABOUT_STATS: AboutStat[] = [
  { id: "established", to: 1992, from: 1900, label: "Year established", code: "GC 01", color: "var(--hs)", delay: 0 },
  { id: "experience", to: 30, suffix: "+", label: "Years of experience", code: "GC 02", color: "var(--bw)", delay: 0.1 },
  { id: "projects", to: 22, suffix: "+", label: "Landmark projects", code: "GC 03", color: "var(--bw-2)", delay: 0.2, darkText: true },
  { id: "brands", to: 5, suffix: "+", label: "Paint brands", code: "GC 04", color: "var(--hs-2)", delay: 0.3 },
];

export const ABOUT_STORY = {
  badgeText: "Global Colors Company · Since 1992 · We make the difference ·",
  since: { label: "Since", year: "1992" },
  familyLabel: "Five brands, one standard",
};

export interface MissionVision {
  id: string;
  label: string;
  icon: LucideIcon;
  text: string;
}

export const MISSION_VISION: MissionVision[] = [
  {
    id: "mission",
    label: "Our mission",
    icon: Target,
    text: "To deliver premium quality paints with exceptional coverage and a flawless finish that protect and beautify every space we touch.",
  },
  {
    id: "vision",
    label: "Our vision",
    icon: Eye,
    text: "To be the most trusted paint brand in the country, known for quality, reliability and the difference we make in every project.",
  },
];
