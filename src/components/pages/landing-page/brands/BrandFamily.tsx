import { ArrowUpRight } from "lucide-react";
import { FAMILY_BRANDS } from "@/constant/brands";
import { FAMILY_HEAD } from "@/constant/landingPage/brandsSectionData";
import BrandDirectoryTrigger from "@/components/pages/brand-directory/BrandDirectoryTrigger";
import Reveal from "@/components/ui/Reveal";
import { AllBrandsTile, BrandTile } from "./BrandTiles";

/** "From the Global Colors family": a header row and one tile per sister brand. */
const BrandFamily = () => (
  <Reveal className="mt-4">
    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-1 pt-1.5 pb-4">
      <p>
        <b className="block font-display text-[clamp(20px,1.9vw,24px)] leading-[1.2] font-semibold tracking-[-0.015em]">
          {FAMILY_HEAD.title}
        </b>
        <span className="font-body text-[14.5px] text-stone-grey">
          {FAMILY_HEAD.subtitle}
        </span>
      </p>
      <BrandDirectoryTrigger className="group/link inline-flex cursor-pointer items-center gap-2 border-0 border-b-2 border-hs bg-transparent p-0 pb-[3px] font-body text-[15.5px] leading-[1.2] font-bold text-charcoal">
        {FAMILY_HEAD.linkLabel}
        <ArrowUpRight
          aria-hidden="true"
          className="size-[18px] transition-transform duration-[250ms] ease-brand group-hover/link:translate-x-[3px] group-hover/link:-translate-y-[3px]"
        />
      </BrandDirectoryTrigger>
    </div>
    <div className="grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-sm:-mx-gutter max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:overflow-x-auto max-sm:px-gutter max-sm:pb-1 max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden">
      {FAMILY_BRANDS.map((brand, i) => (
        <BrandTile key={brand.id} brand={brand} position={i} />
      ))}
      <AllBrandsTile position={FAMILY_BRANDS.length} />
    </div>
  </Reveal>
);

export default BrandFamily;
