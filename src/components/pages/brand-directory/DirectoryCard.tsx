import Link from "next/link";
import clsx from "clsx";
import { ArrowRight, MessageCircleMore } from "lucide-react";
import type { Brand } from "@/constant/brands";
import BrandMono from "@/components/ui/BrandMono";

const cardBase =
  "relative isolate flex min-h-[190px] animate-fade-up flex-col gap-3.5 overflow-hidden rounded-card p-5 text-left no-underline max-sm:min-h-[150px] " +
  "after:absolute after:-top-[50px] after:-right-[50px] after:-z-10 after:size-40 after:rounded-full after:transition-transform after:duration-700 after:content-['']";

const arrowRow =
  "flex items-center gap-1.5 font-body text-sm leading-none font-semibold not-italic [&>svg]:size-4 [&>svg]:transition-transform [&>svg]:duration-300 group-hover/card:[&>svg]:translate-x-1";

interface DirectoryCardProps {
  brand: Brand;
  index: number;
  onSelect: () => void;
}

/** One brand tile. The flagship links to the brands section; family brands are static. */
export const DirectoryCard = ({ brand, index, onSelect }: DirectoryCardProps) => {
  const classes = clsx(
    cardBase,
    "group/card text-white after:bg-white/10 hover:after:scale-[1.6]"
  );
  const style = { backgroundColor: brand.color, animationDelay: `${index * 60}ms` };
  const body = (
    <>
      <span className="flex items-center justify-between gap-2.5">
        <BrandMono
          initials={brand.initials}
          color="rgb(255 255 255 / 0.16)"
          className="shadow-[inset_0_0_0_1px_rgba(255,255,255,.2)]"
        />
        <small className="rounded-full bg-white/[.18] px-2.5 py-[7px] font-body text-xs leading-none font-semibold">
          {brand.kind === "flag" ? "Flagship" : "Family brand"}
        </small>
      </span>
      <span className="mt-auto">
        <span className="block font-display text-[clamp(22px,2vw,28px)] leading-[1.1] font-semibold tracking-[-0.02em]">
          {brand.name}
        </span>
        <span className="mt-[5px] block text-[13.5px] opacity-80">
          {brand.directoryNote}
        </span>
      </span>
    </>
  );

  return brand.kind === "flag" ? (
    <Link href="#brands" onClick={onSelect} className={classes} style={style}>
      {body}
    </Link>
  ) : (
    <div className={classes} style={style}>
      {body}
    </div>
  );
};

/** Always-visible "ask our team" tile at the end of the grid. */
export const DirectoryAskCard = ({
  index,
  onSelect,
}: {
  index: number;
  onSelect: () => void;
}) => (
  <Link
    href="#dealer"
    onClick={onSelect}
    style={{ animationDelay: `${index * 60}ms` }}
    className={clsx(
      cardBase,
      "group/card border-[1.5px] border-dashed border-charcoal/30 bg-white text-charcoal after:bg-charcoal/[.04] hover:after:scale-[1.6]"
    )}
  >
    <span className="flex items-center justify-between gap-2.5">
      <BrandMono color="var(--canvas)" className="!text-hs">
        <MessageCircleMore />
      </BrandMono>
    </span>
    <span className="mt-auto">
      <span className="block font-display text-[clamp(22px,2vw,28px)] leading-[1.1] font-semibold tracking-[-0.02em]">
        Looking for something specific?
      </span>
      <span className="mt-[5px] block text-[13.5px] text-stone-grey">
        Ask our team about the full range across every brand.
      </span>
    </span>
    <em className={arrowRow}>
      Talk to us <ArrowRight />
    </em>
  </Link>
);
