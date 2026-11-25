import { BRANDS } from "@/constant/brands";
import { HERO_CONTENT } from "@/constant/heroData";
import Container from "@/components/layout/Container";

const brandItem =
  "flex items-center gap-2 font-body text-sm leading-[1.2] font-bold text-white";

/** Bottom strip of the hero: the brand names (plain text, not links) and the "colours are indicative" note. */
const HeroFoot = () => (
  <Container className="absolute inset-x-0 bottom-[22px] flex items-center justify-between gap-4 max-sm:bottom-4 max-sm:justify-center">
    <div className="flex flex-wrap items-center gap-[18px] max-sm:justify-center max-sm:gap-3.5">
      <span className="font-body text-[13px] leading-none font-medium text-white/60 max-sm:hidden">
        Our Brands
      </span>
      {BRANDS.map((brand) => (
        <span key={brand.id} className={brandItem}>
          <i
            aria-hidden="true"
            style={{ backgroundColor: brand.color }}
            className="size-3 rounded-full shadow-[0_0_0_2px_rgba(255,255,255,.8)]"
          />
          {brand.name}
        </span>
      ))}
    </div>
    <span className="font-body text-[12.5px] leading-none font-medium text-white/60 max-sm:hidden">
      {HERO_CONTENT.note}
    </span>
  </Container>
);

export default HeroFoot;
