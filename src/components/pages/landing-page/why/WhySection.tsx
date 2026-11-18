import { WHY_INTRO, WHY_REASONS } from "@/constant/landingPage/whyData";
import Section from "@/components/layout/Section";
import Eyebrow from "@/components/typography/Eyebrow";
import MainHeading from "@/components/typography/MainHeading";
import Paragraph from "@/components/typography/Paragraph";
import Reveal from "@/components/ui/Reveal";
import PackSizes from "./PackSizes";
import ReasonCard from "./ReasonCard";

/** HOME-05: why dealers and painters choose the range. */
const WhySection = () => (
  <Section id="why">
    <div className="grid grid-cols-12 gap-3.5">
      <Reveal className="col-span-5 pr-[clamp(0px,2vw,30px)] max-lg:col-span-12">
        <Eyebrow>{WHY_INTRO.eyebrow}</Eyebrow>
        <MainHeading size="md" className="mt-4 mb-5">
          {WHY_INTRO.title}
        </MainHeading>
        <Paragraph>{WHY_INTRO.description}</Paragraph>
      </Reveal>
      <PackSizes />
      {WHY_REASONS.map((reason) => (
        <ReasonCard key={reason.id} reason={reason} />
      ))}
    </div>
  </Section>
);

export default WhySection;
