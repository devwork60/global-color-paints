import clsx from "clsx";

interface TextProps {
  children: React.ReactNode;
  /** "caps" is the uppercase caption; "note" is a sentence-case 13px note. */
  variant?: "caps" | "note";
  tone?: "default" | "onDark" | "onDarkMuted" | "onDarkFaint";
  className?: string;
}

const variants = {
  caps: "text-caption font-medium uppercase",
  note: "text-[13px] leading-[1.5] font-medium",
};

const tones = {
  default: "text-stone-grey",
  onDark: "text-white/80",
  onDarkMuted: "text-white/60",
  onDarkFaint: "text-white/45",
};

/** Small supporting text: tags, pack labels, notes and captions. */
const SmallText: React.FC<TextProps> = ({
  children,
  variant = "caps",
  tone = "default",
  className,
}) => (
  <span className={clsx("font-body", variants[variant], tones[tone], className)}>
    {children}
  </span>
);

export default SmallText;
