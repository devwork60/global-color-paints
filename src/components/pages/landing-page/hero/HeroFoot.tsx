import Link from "next/link";
import { BRANDS } from "@/constant/brands";
import { HERO_CONTENT } from "@/constant/heroData";
import Container from "@/components/layout/Container";
import SmallText from "@/components/typography/SmallText";

const brandItem =
  "flex items-center gap-2 font-body text-sm font-bold text-white no-underline";

/** Bottom strip of the hero: brand names and the "colours are indicative" note. */
const HeroFoot = () => (
  <Container className="absolute inset-x-0 bottom-[22px] flex items-center justify-between gap-4 max-sm:bottom-4 max-sm:justify-center">
    <div className="flex flex-wrap items-center gap-[18px] max-sm:justify-center max-sm:gap-3.5">
      <SmallText variant="note" tone="onDarkMuted" className="max-sm:hidden">
        Our Brands
      </SmallText>
      {BRANDS.map((brand) => {
        const dot = (
          <i
            aria-hidden="true"
            style={{ backgroundColor: brand.color }}
            className="size-3 rounded-full shadow-[0_0_0_2px_rgba(255,255,255,.8)]"
          />
        );
        return brand.kind === "flag" ? (
          <Link key={brand.id} href="#brands" className={brandItem}>
            {dot}
            {brand.name}
          </Link>
        ) : (
          <span key={brand.id} className={brandItem}>
            {dot}
            {brand.name}
          </span>
        );
      })}
    </div>
    <SmallText variant="note" tone="onDarkMuted" className="max-sm:hidden">
      {HERO_CONTENT.note}
    </SmallText>
  </Container>
);

export default HeroFoot;
