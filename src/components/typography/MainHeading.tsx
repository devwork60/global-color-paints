import clsx from "clsx";

interface HeadingProps {
  children: React.ReactNode;
  /** "md" is a slightly smaller title; "display" the larger one for feature sections. */
  size?: "md" | "section" | "display" | "banner" | "title";
  className?: string;
}

const sizes = {
  md: "text-heading-md",
  section: "text-heading",
  display: "text-display",
  banner: "text-[clamp(36px,4.8vw,66px)] leading-[1.02] tracking-[-0.025em]",
  title: "text-title",
};

/** Section title (h2). Never used for the page h1, which lives in the hero. */
const MainHeading: React.FC<HeadingProps> = ({
  children,
  size = "section",
  className,
}) => (
  <h2 className={clsx("font-display font-semibold", sizes[size], className)}>
    {children}
  </h2>
);

export default MainHeading;
