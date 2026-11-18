import clsx from "clsx";

interface TextProps {
  children: React.ReactNode;
  /** "lede" hero intro; "lead" larger opening paragraph; "statement" display-font pull statement. */
  size?: "body" | "lede" | "lead" | "statement";
  /** "onDark" over photos; "onDarkMuted" secondary on dark; "strong" full-contrast; "inherit" keeps the parent colour. */
  tone?: "default" | "strong" | "onDark" | "onDarkMuted" | "inherit";
  className?: string;
}

const sizes = {
  body: "font-body font-normal text-body",
  lede: "font-body font-normal text-lede",
  lead: "font-body font-normal text-lead",
  statement: "font-display font-medium text-statement",
};

const tones = {
  default: "text-body-2",
  strong: "text-charcoal",
  onDark: "text-white/90",
  onDarkMuted: "text-white/70",
  inherit: "",
};

/** Body text for section descriptions and hero subtitles. */
const Paragraph: React.FC<TextProps> = ({
  children,
  size = "body",
  tone = "default",
  className,
}) => <p className={clsx(sizes[size], tones[tone], className)}>{children}</p>;

export default Paragraph;
