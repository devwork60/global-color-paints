import clsx from "clsx";
import { ArrowRight } from "lucide-react";

interface ArrowCircleProps {
  /** Arrow colour: any CSS colour, normally a token like "var(--hs)". */
  color?: string;
  /** "md" 54px (default), "sm" 46px. */
  size?: "md" | "sm";
  className?: string;
}

const sizes = { md: "size-[54px]", sm: "size-[46px]" };

/** White circle with an arrow. Add a `group-hover/<name>:-rotate-45` class to turn it on hover. */
const ArrowCircle = ({ color, size = "md", className }: ArrowCircleProps) => (
  <span
    style={color ? { color } : undefined}
    className={clsx(
      "grid shrink-0 place-items-center rounded-full bg-white transition-transform duration-[400ms] ease-brand",
      sizes[size],
      className
    )}
  >
    <ArrowRight aria-hidden="true" className="size-[22px]" />
  </span>
);

export default ArrowCircle;
