import clsx from "clsx";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

/** Smaller section title (h2) for secondary sections. */
const SubHeading: React.FC<HeadingProps> = ({ children, className }) => (
  <h2 className={clsx("font-display text-sub font-semibold", className)}>
    {children}
  </h2>
);

export default SubHeading;
