import clsx from "clsx";

interface PlaceholderTagProps {
  children?: React.ReactNode;
  className?: string;
}

/** Marks client content that is still to be supplied (kept from the source design). */
const PlaceholderTag: React.FC<PlaceholderTagProps> = ({
  children = "to be supplied",
  className,
}) => (
  <span
    className={clsx(
      "rounded-sm bg-white/[.08] px-1.5 py-px font-body text-[.78em] whitespace-nowrap text-white/60",
      className
    )}
  >
    {children}
  </span>
);

export default PlaceholderTag;
