import clsx from "clsx";

interface PlaceholderTagProps {
  /** "footer" muted white on the dark footer (default); "onColour" brighter, for coloured cards. */
  tone?: "footer" | "onColour";
  children?: React.ReactNode;
  className?: string;
}

/** Marks client content that is still to be supplied (kept from the source design). */
const PlaceholderTag: React.FC<PlaceholderTagProps> = ({
  tone = "footer",
  children = "to be supplied",
  className,
}) => (
  <span
    className={clsx(
      "rounded-sm px-1.5 py-px font-body text-[.85em] font-medium whitespace-nowrap italic",
      tone === "footer" ? "bg-white/[.08] text-white/60" : "bg-white/[.18] text-inherit",
      className
    )}
  >
    {children}
  </span>
);

export default PlaceholderTag;
