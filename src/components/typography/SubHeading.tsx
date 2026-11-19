import clsx from "clsx";

interface HeadingProps {
  children: React.ReactNode;
  /** "footer" is the slightly smaller footer call-to-action size. */
  size?: "default" | "footer";
  className?: string;
}

const sizes = {
  default: "text-sub",
  footer: "text-[clamp(28px,2.8vw,38px)] leading-[1.02] tracking-[-0.025em]",
};

/** Smaller section title (h2) for secondary sections. */
const SubHeading: React.FC<HeadingProps> = ({ children, size = "default", className }) => (
  <h2 className={clsx("font-display font-semibold", sizes[size], className)}>
    {children}
  </h2>
);

export default SubHeading;
