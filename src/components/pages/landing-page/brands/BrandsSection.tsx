import {
  BRANDS_HEAD,
  BRAND_MINI_PANELS,
  BRAND_PANELS,
} from "@/constant/landingPage/brandsSectionData";
import Section from "@/components/layout/Section";
import SectionHead from "@/components/layout/SectionHead";
import Reveal from "@/components/ui/Reveal";
import BrandMiniPanel from "./BrandMiniPanel";
import BrandPanel from "./BrandPanel";

/** HOME-02: the flagship photo panel, then a row of four sister-brand panels. */
const BrandsSection = () => (
  <Section id="brands">
    <Reveal>
      <SectionHead
        eyebrow={BRANDS_HEAD.eyebrow}
        title={BRANDS_HEAD.title}
        description={BRANDS_HEAD.description}
      />
    </Reveal>
    <Reveal>
      <div className="flex h-[620px] gap-4 max-md:h-auto max-md:flex-col">
        {BRAND_PANELS.map((panel) => (
          <BrandPanel key={panel.id} panel={panel} />
        ))}
      </div>
    </Reveal>
    <Reveal className="mt-4">
      <div className="group/row flex h-[340px] gap-4 max-md:h-auto max-md:flex-col">
        {BRAND_MINI_PANELS.map((panel) => (
          <BrandMiniPanel key={panel.id} panel={panel} />
        ))}
      </div>
    </Reveal>
  </Section>
);

export default BrandsSection;
