import clsx from "clsx";
import { ArrowRight } from "lucide-react";

interface ArrowCircleProps {
  /** Arrow colour: any CSS colour, normally a token like "var(--hs)". */
  color?: string;
  className?: string;
}

/** White circle with an arrow. Add a `group-hover/<name>:-rotate-45` class to turn it on hover. */
const ArrowCircle = ({ color, className }: ArrowCircleProps) => (
  <span
    style={color ? { color } : undefined}
    className={clsx(
      "grid size-[54px] shrink-0 place-items-center rounded-full bg-white transition-transform duration-[400ms] ease-brand",
      className
    )}
  >
    <ArrowRight aria-hidden="true" className="size-[22px]" />
  </span>
);

export default ArrowCircle;
