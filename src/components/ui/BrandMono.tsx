import clsx from "clsx";

interface BrandMonoProps {
  initials?: string;
  /** Any CSS colour, normally a token such as "var(--b-tylac)". */
  color: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}

const sizes = {
  sm: "size-9 rounded-[10px] text-[13px]",
  md: "size-10 rounded-xl text-sm",
  lg: "size-[50px] rounded-[14px] text-[17px]",
};

/** Coloured square badge: two-letter brand initials (HS, BW...) or any child icon. */
const BrandMono: React.FC<BrandMonoProps> = ({
  initials,
  color,
  size = "md",
  className,
  children,
}) => (
  <span
    aria-hidden="true"
    style={{ backgroundColor: color }}
    className={clsx(
      "inline-grid shrink-0 place-items-center font-display leading-none font-bold tracking-[-0.01em] text-white [&>svg]:size-5 [&>svg]:stroke-[1.75]",
      sizes[size],
      className
    )}
  >
    {initials ?? children}
  </span>
);

export default BrandMono;
