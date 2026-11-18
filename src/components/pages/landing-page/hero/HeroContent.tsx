import { ArrowRight } from "lucide-react";
import { HERO_CONTENT } from "@/constant/heroData";
import Button from "@/components/button/Button";
import Eyebrow from "@/components/typography/Eyebrow";
import Paragraph from "@/components/typography/Paragraph";

/** Hero copy and calls to action. The page's only <h1> lives here. */
const HeroContent = () => (
  <>
    <Eyebrow tone="hero">{HERO_CONTENT.eyebrow}</Eyebrow>
    <h1 className="my-[22px] font-display text-hero font-semibold [text-shadow:0_4px_40px_rgba(0,0,0,.25)]">
      {HERO_CONTENT.title}
    </h1>
    <Paragraph
      size="lede"
      tone="onDark"
      className="max-w-[50ch] [text-shadow:0_1px_18px_rgba(0,0,0,.3)]"
    >
      {HERO_CONTENT.description}
    </Paragraph>
    <div className="mt-[34px] flex flex-wrap justify-center gap-3.5 max-sm:mt-[26px] max-sm:w-full max-sm:flex-col max-sm:items-stretch max-sm:gap-2.5">
      <Button
        href={HERO_CONTENT.primaryCta.href}
        variant="light"
        size="lg"
        icon={<ArrowRight />}
        className="hover:bg-bw-2 max-sm:justify-center"
      >
        {HERO_CONTENT.primaryCta.label}
      </Button>
      <Button
        href={HERO_CONTENT.secondaryCta.href}
        variant="glass"
        size="lg"
        className="max-sm:justify-center"
      >
        {HERO_CONTENT.secondaryCta.label}
      </Button>
    </div>
  </>
);

export default HeroContent;
