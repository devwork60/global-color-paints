import clsx from "clsx";

interface HeadingProps {
  children: React.ReactNode;
  /** "card" for ordinary cards; the others suit specific feature cards and tiles. */
  size?: "card" | "lg" | "adv" | "sector" | "form" | "banner" | "chip" | "feature" | "cta" | "sub" | "xl" | "tile" | "panel" | "mini";
  className?: string;
}

const sizes = {
  card: "text-card",
  lg: "text-[22px] leading-[1.2]",
  adv: "text-adv",
  sector: "text-[clamp(26px,2.6vw,36px)] leading-[1.02] tracking-[-0.025em]",
  form: "text-[26px] leading-[1.02] tracking-[-0.025em]",
  banner: "text-[clamp(32px,4vw,56px)] leading-[1.02] tracking-[-0.03em]",
  chip: "text-chip max-sm:text-[15.5px]",
  feature: "text-feature",
  cta: "text-cta",
  sub: "text-sub",
  xl: "text-xl-card",
  tile: "text-tile",
  panel: "text-panel",
  mini: "text-[clamp(28px,2.7vw,40px)] leading-[1.02] tracking-[-0.03em]",
};

/** Title inside any repeating card (h3). */
const CardHeading: React.FC<HeadingProps> = ({
  children,
  size = "card",
  className,
}) => (
  <h3 className={clsx("font-display font-semibold", sizes[size], className)}>
    {children}
  </h3>
);

export default CardHeading;
