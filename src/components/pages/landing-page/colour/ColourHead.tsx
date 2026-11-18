import { COLOUR_HEAD } from "@/constant/landingPage/colourData";
import Eyebrow from "@/components/typography/Eyebrow";
import MainHeading from "@/components/typography/MainHeading";
import Paragraph from "@/components/typography/Paragraph";

/** Colour section heading: "54 colours. See them on a wall." with the count in gold. */
const ColourHead = () => (
  <div className="mb-[clamp(36px,4vw,56px)] grid grid-cols-2 items-end gap-10 max-md:grid-cols-1">
    <div>
      <Eyebrow tone="gold">{COLOUR_HEAD.eyebrow}</Eyebrow>
      <MainHeading size="display" className="mt-[18px]">
        <span className="text-bw-2">{COLOUR_HEAD.count}</span>
        {COLOUR_HEAD.titleRest}
      </MainHeading>
    </div>
    <Paragraph tone="onDarkMuted" className="max-w-[42ch] justify-self-end max-md:justify-self-start">
      {COLOUR_HEAD.description}
    </Paragraph>
  </div>
);

export default ColourHead;
