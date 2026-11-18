import clsx from "clsx";

type CardVariant = "white" | "paper" | "dark" | "warm";

interface CardProps {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<CardVariant, string> = {
  white: "border-line bg-white",
  paper: "border-line bg-paper",
  dark: "border-bw bg-bw text-white",
  warm: "border-[#f1d9cf] bg-hs-tint",
};

/** Rounded content card. Compose headings and text inside. */
const Card: React.FC<CardProps> = ({ variant = "white", children, className }) => (
  <div
    className={clsx(
      "flex flex-col gap-3.5 rounded-card border p-6",
      variants[variant],
      className
    )}
  >
    {children}
  </div>
);

export default Card;
