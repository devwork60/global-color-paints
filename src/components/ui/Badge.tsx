import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  /** "solid" white pill (default), "outline" on photos or colour, "chip" bordered label on light backgrounds. */
  variant?: "solid" | "outline" | "chip";
  className?: string;
}

const variants = {
  solid: "bg-white/90 px-3 py-[9px] text-[12.5px] leading-none font-semibold text-charcoal",
  outline: "border border-white/40 px-2.5 py-2 text-[12.5px] leading-none font-semibold text-white",
  chip: "border border-line bg-white px-3.5 py-2 text-sm leading-[1.65] font-bold text-charcoal",
};

/** Small pill label (e.g. "Decorative range", "Emulsions", "Residential"). */
const Badge: React.FC<BadgeProps> = ({ children, variant = "solid", className }) => (
  <span className={clsx("inline-block rounded-full font-body", variants[variant], className)}>
    {children}
  </span>
);

export default Badge;
