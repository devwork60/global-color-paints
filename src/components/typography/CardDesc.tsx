import clsx from "clsx";

interface TextProps {
  children: React.ReactNode;
  /** xs 13.5px, sm 15px (default), md 16px, lg 19px semibold (taglines). */
  size?: "xs" | "sm" | "md" | "lg";
  tone?: "default" | "muted" | "onDark" | "onDarkStrong";
  className?: string;
}

const sizes = {
  xs: "text-[13.5px] leading-[1.65]",
  sm: "text-card-desc",
  md: "text-base leading-[1.65]",
  lg: "text-[19px] leading-[1.3] font-semibold",
};

const tones = {
  default: "text-body-2",
  muted: "text-stone-grey",
  onDark: "text-white/80",
  onDarkStrong: "text-white/90",
};

/** Smaller body text for card descriptions and taglines. */
const CardDesc: React.FC<TextProps> = ({
  children,
  size = "sm",
  tone = "default",
  className,
}) => (
  <p className={clsx("font-body", sizes[size], tones[tone], className)}>
    {children}
  </p>
);

export default CardDesc;
