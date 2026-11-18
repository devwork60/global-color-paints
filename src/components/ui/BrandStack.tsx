import clsx from "clsx";
import { Plus } from "lucide-react";
import { BRANDS } from "@/constant/brands";

interface BrandStackProps {
  /** Border colour class that matches the surface behind the stack. */
  ringClass?: string;
  /** Fan the circles out on hover. The parent must have the `group/all` class. */
  spread?: boolean;
}

/** Overlapping brand circles with a "+" chip, used on every "View All Brands" control. */
const BrandStack = ({ ringClass = "border-white", spread = false }: BrandStackProps) => {
  const circle = clsx(
    "-ml-[9px] grid size-[30px] place-items-center rounded-full border-2 text-white not-italic first:ml-0",
    spread &&
      "transition-transform duration-[350ms] group-hover/all:translate-x-(--spread)",
    ringClass
  );
  return (
    <span aria-hidden="true" className="flex shrink-0 items-center">
      {BRANDS.map((brand, i) => (
        <i
          key={brand.id}
          style={
            { backgroundColor: brand.color, "--spread": `${i * 3}px` } as React.CSSProperties
          }
          className={clsx(circle, "font-display text-[10px] leading-none font-bold")}
        >
          {brand.initials}
        </i>
      ))}
      <i
        style={{ "--spread": `${BRANDS.length * 3}px` } as React.CSSProperties}
        className={clsx(circle, "bg-charcoal")}
      >
        <Plus className="size-3 stroke-[3]" />
      </i>
    </span>
  );
};

export default BrandStack;
