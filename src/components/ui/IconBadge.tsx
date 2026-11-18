import clsx from "clsx";

interface IconBadgeProps {
  children: React.ReactNode;
  shape?: "circle" | "square";
  /** "onDark" for placement on a dark or coloured card. */
  tone?: "light" | "onDark";
  className?: string;
}

const tones = {
  light: "border border-line bg-white",
  onDark: "border border-transparent bg-white/[.12]",
};

/** Rounded holder for a lucide icon. Pass the icon as children. */
const IconBadge: React.FC<IconBadgeProps> = ({
  children,
  shape = "circle",
  tone = "light",
  className,
}) => (
  <span
    className={clsx(
      "inline-grid size-12 shrink-0 place-items-center [&>svg]:size-[22px] [&>svg]:stroke-[1.75]",
      tones[tone],
      shape === "circle" ? "rounded-full" : "rounded-[14px]",
      className
    )}
  >
    {children}
  </span>
);

export default IconBadge;
