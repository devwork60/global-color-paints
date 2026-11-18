import { BRANDS_HEAD, BRAND_PANELS } from "@/constant/landingPage/brandsSectionData";
import Section from "@/components/layout/Section";
import SectionHead from "@/components/layout/SectionHead";
import Reveal from "@/components/ui/Reveal";
import BrandFamily from "./BrandFamily";
import BrandPanel from "./BrandPanel";

/** HOME-02: flagship brand panel(s) followed by the family brand tiles. */
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
    <BrandFamily />
  </Section>
);

export default BrandsSection;
