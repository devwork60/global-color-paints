import {
  PRODUCT_CHIPS,
  PRODUCT_PHOTO_TILES,
  PRODUCT_RANGE_HEAD,
} from "@/constant/landingPage/productRangeData";
import Section from "@/components/layout/Section";
import SectionHead from "@/components/layout/SectionHead";
import Reveal from "@/components/ui/Reveal";
import ChipTile from "./ChipTile";
import HelpTile from "./HelpTile";
import PhotoTile from "./PhotoTile";

/** HOME-04: bento grid of the ten product categories. */
const ProductRangeSection = () => (
  <Section id="range">
    <Reveal>
      <SectionHead
        eyebrow={PRODUCT_RANGE_HEAD.eyebrow}
        title={PRODUCT_RANGE_HEAD.title}
        description={PRODUCT_RANGE_HEAD.description}
      />
    </Reveal>
    <Reveal>
      <div className="grid grid-cols-4 gap-3.5 max-md:grid-cols-2 max-sm:gap-2.5">
        {PRODUCT_PHOTO_TILES.map((tile) => (
          <PhotoTile key={tile.id} tile={tile} />
        ))}
        {PRODUCT_CHIPS.map((chip) => (
          <ChipTile key={chip.id} chip={chip} />
        ))}
        <HelpTile />
      </div>
    </Reveal>
    <p className="mt-3.5 font-body text-[13.5px] leading-[1.65] text-stone-grey">
      {PRODUCT_RANGE_HEAD.note}
    </p>
  </Section>
);

export default ProductRangeSection;
