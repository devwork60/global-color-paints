import { ABOUT_INTRO } from "@/constant/landingPage/aboutData";
import RainbowStroke from "@/components/icons/RainbowStroke";
import Eyebrow from "@/components/typography/Eyebrow";
import MainHeading from "@/components/typography/MainHeading";
import Paragraph from "@/components/typography/Paragraph";
import Reveal from "@/components/ui/Reveal";

/* Each title line is masked (overflow hidden) and slides up when the intro scrolls into view. */
const line =
  "block overflow-hidden pb-[.07em] -mb-[.07em] [&>span]:block [&>span]:translate-y-[108%] [&>span]:[transition:transform_1.15s_cubic-bezier(.2,.7,.2,1)] group-data-[in=true]/rv:[&>span]:translate-y-0";

/** Big "We make the difference." title with the company introduction beside it. */
const AboutIntro = () => (
  <Reveal className="relative grid grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] items-end gap-[clamp(28px,5vw,80px)] pb-[clamp(44px,5vw,68px)] max-md:grid-cols-1">
    <div>
      <Eyebrow>{ABOUT_INTRO.eyebrow}</Eyebrow>
      <MainHeading size="title" className="mt-[18px]">
        <span className={line}>
          <span>{ABOUT_INTRO.titleFirst}</span>
        </span>
        <span className={`${line} group-data-[in=true]/rv:[&>span]:delay-[120ms]`}>
          <span>
            {ABOUT_INTRO.titleSecondLead}
            <em className="text-hs not-italic">{ABOUT_INTRO.titleEmphasis}</em>
          </span>
        </span>
      </MainHeading>
    </div>
    <div className="[&>p]:max-w-[56ch]">
      <Paragraph size="lead" tone="strong">
        {ABOUT_INTRO.lead}
      </Paragraph>
      <Paragraph className="mt-3.5">{ABOUT_INTRO.body}</Paragraph>
    </div>
    <RainbowStroke />
  </Reveal>
);

export default AboutIntro;
