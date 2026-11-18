import Link from "next/link";
import type { ProductChip } from "@/constant/landingPage/productRangeData";
import CardDesc from "@/components/typography/CardDesc";
import CardHeading from "@/components/typography/CardHeading";

/** Compact product tile styled like a paint chip: a small swatch that floods the card with its tint on hover. */
const ChipTile = ({ chip }: { chip: ProductChip }) => {
  const Icon = chip.icon;
  return (
    <Link
      href={chip.href}
      style={{ "--tint": chip.tint } as React.CSSProperties}
      className={
        "group/chip relative flex items-center gap-3.5 overflow-hidden rounded-[18px] border border-line bg-white py-2.5 pr-4 pl-2.5 no-underline transition duration-[350ms] ease-brand " +
        "hover:-translate-y-1 hover:border-transparent hover:shadow-[0_18px_36px_-26px_rgba(38,35,34,.35)] " +
        "before:absolute before:top-2.5 before:left-2.5 before:size-[52px] before:rounded-xl before:bg-canvas before:content-[''] " +
        "before:transition-[left,top,width,height,border-radius] before:duration-[550ms] before:ease-brand " +
        "hover:before:top-0 hover:before:left-0 hover:before:size-full hover:before:rounded-[18px] hover:before:bg-(--tint) " +
        "max-sm:flex-col max-sm:items-start max-sm:gap-2.5 max-sm:pt-2.5 max-sm:pr-3 max-sm:pb-3.5 max-sm:pl-2.5"
      }
    >
      <span className="relative z-10 grid size-[52px] flex-none place-items-center text-charcoal">
        <Icon
          aria-hidden="true"
          className="size-[22px] stroke-[1.75] transition-transform duration-[400ms] ease-brand group-hover/chip:-rotate-10 group-hover/chip:scale-[1.08]"
        />
      </span>
      <span className="relative z-10 flex min-w-0 flex-col gap-0.5">
        <CardHeading size="chip">{chip.title}</CardHeading>
        <CardDesc
          size="xs"
          tone="muted"
          className="transition-colors duration-300 group-hover/chip:text-body-2"
        >
          {chip.description}
        </CardDesc>
      </span>
    </Link>
  );
};

export default ChipTile;
