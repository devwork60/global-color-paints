import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { FAMILY_BRANDS } from "@/constant/brands";
import { FAMILY_HEAD } from "@/constant/landingPage/brandsSectionData";
import BrandDirectoryTrigger from "@/components/pages/brand-directory/BrandDirectoryTrigger";
import CardDesc from "@/components/typography/CardDesc";
import CardHeading from "@/components/typography/CardHeading";
import BrandMono from "@/components/ui/BrandMono";
import BrandStack from "@/components/ui/BrandStack";

/* Shared shape for the tiles. Each tile enters with a stagger once its Reveal parent is in view,
   and a soft circle drifts in the corner. */
const tileBase =
  "relative isolate flex min-h-[260px] flex-col justify-between gap-[18px] overflow-hidden rounded-3xl p-[22px] max-sm:min-h-[220px] max-sm:flex-[0_0_72%] max-sm:snap-start " +
  "after:absolute after:-top-[60px] after:-right-[60px] after:-z-10 after:size-[200px] after:animate-drift after:rounded-full after:[animation-delay:calc(var(--i)*-2.4s)] after:content-[''] " +
  "group-data-[in=true]/rv:animate-fade-up-slow [animation-delay:calc(var(--i)*90ms)]";

const index = (i: number) => ({ "--i": i }) as React.CSSProperties;

/** One tile per family brand (static: the family brands have no page of their own yet). */
export const BrandTile = ({
  brand,
  position,
}: {
  brand: (typeof FAMILY_BRANDS)[number];
  position: number;
}) => (
  <div
    style={{ ...index(position), backgroundColor: brand.color }}
    className={clsx(tileBase, "text-white after:bg-white/[.09]")}
  >
    <BrandMono
      initials={brand.initials}
      color="rgb(255 255 255 / 0.16)"
      size="lg"
      className="shadow-[inset_0_0_0_1px_rgba(255,255,255,.18)]"
    />
    <div>
      <CardHeading size="tile">{brand.name}</CardHeading>
      <CardDesc size="xs" tone="onDark" className="mt-1.5">
        {FAMILY_HEAD.tileNote}
      </CardDesc>
    </div>
  </div>
);

/** Dashed final tile that opens the brand directory. */
export const AllBrandsTile = ({ position }: { position: number }) => (
  <BrandDirectoryTrigger
    style={index(position)}
    className={clsx(
      tileBase,
      "group/all cursor-pointer border-[1.5px] border-dashed border-charcoal/30 bg-paper text-left text-charcoal transition duration-[400ms] ease-brand after:bg-charcoal/[.045] hover:-translate-y-[5px] hover:border-charcoal hover:shadow-[0_26px_44px_-30px_rgba(38,35,34,.5)] max-lg:col-span-2"
    )}
  >
    <BrandStack ringClass="border-paper" spread />
    <div className="pr-14">
      <CardHeading size="tile">{FAMILY_HEAD.allTile.title}</CardHeading>
      <CardDesc size="xs" tone="muted" className="mt-1.5">
        {FAMILY_HEAD.allTile.description}
      </CardDesc>
    </div>
    <span className="absolute right-5 bottom-5 grid size-11 place-items-center rounded-full bg-charcoal text-white transition-transform duration-[400ms] ease-brand group-hover/all:-rotate-45">
      <ArrowRight aria-hidden="true" className="size-[18px]" />
    </span>
  </BrandDirectoryTrigger>
);
