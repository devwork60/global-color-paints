import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FAMILY_BRANDS, FLAGSHIP_BRAND } from "@/constant/brands";
import BrandMono from "@/components/ui/BrandMono";
import BrandStack from "@/components/ui/BrandStack";
import BrandDirectoryTrigger from "@/components/pages/brand-directory/BrandDirectoryTrigger";

/** Contents of the "Our Brands" dropdown: flagship card, family list and the directory button. */
const BrandsMenu = () => (
  <>
    <Link
      href="#brands"
      style={{ backgroundColor: FLAGSHIP_BRAND.color }}
      className="group/flag relative flex flex-col justify-end gap-1.5 overflow-hidden rounded-[14px] p-5 text-white no-underline after:absolute after:-top-[30px] after:-right-[30px] after:size-[120px] after:rounded-full after:bg-white/[.12] after:transition-transform after:duration-[400ms] after:content-[''] hover:after:scale-[1.4]"
    >
      <small className="mb-auto self-start rounded-full bg-white/20 px-2.5 py-[7px] font-body text-xs leading-none font-semibold">
        Flagship brand
      </small>
      <span className="font-display text-2xl leading-[1.1] font-bold tracking-[-0.01em]">
        {FLAGSHIP_BRAND.name}
      </span>
      <span className="text-[13.5px] opacity-90">We Make the Difference</span>
      <em className="mt-3 flex items-center gap-1.5 font-body text-sm leading-none font-semibold not-italic">
        Explore HomeStyle
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover/flag:translate-x-1"
        />
      </em>
    </Link>
    <div className="flex flex-col gap-0.5 px-1 py-0.5">
      <p className="px-2 pt-2 pb-1.5 font-body text-[12.5px] leading-tight font-semibold text-stone-grey">
        From the Global Colors family
      </p>
      {FAMILY_BRANDS.map((brand) => (
        <div key={brand.id} className="flex items-center gap-3 p-2">
          <BrandMono initials={brand.initials} color={brand.color} />
          <span>
            <span className="block font-display text-[16.5px] leading-[1.15] font-bold">
              {brand.name}
            </span>
            <span className="block text-[12.5px] text-stone-grey">Paint brand</span>
          </span>
        </div>
      ))}
    </div>
    <BrandDirectoryTrigger className="group/all col-span-full flex w-full cursor-pointer items-center gap-3.5 rounded-[14px] border border-line bg-canvas py-3 pr-3 pl-3.5 text-left text-charcoal transition-colors duration-[250ms] hover:border-charcoal hover:bg-white">
      <BrandStack />
      <span className="min-w-0 flex-1">
        <span className="block font-display text-base leading-tight font-bold">
          View All Brands
        </span>
        <span className="block text-[12.5px] text-stone-grey">
          Browse the complete brand family
        </span>
      </span>
      <span className="grid size-10 place-items-center rounded-full bg-charcoal text-white transition-transform duration-[350ms] group-hover/all:-rotate-45">
        <ArrowRight aria-hidden="true" className="size-[18px]" />
      </span>
    </BrandDirectoryTrigger>
  </>
);

export default BrandsMenu;
