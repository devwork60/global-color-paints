import clsx from "clsx";
import Button from "@/components/button/Button";
import CardDesc from "@/components/typography/CardDesc";
import CardHeading from "@/components/typography/CardHeading";
import Eyebrow from "@/components/typography/Eyebrow";
import { AUDIENCE_HEAD, type AudienceData } from "@/constant/landingPage/audienceData";

interface AudiencePanelBodyProps {
  audience: AudienceData;
  isOpen: boolean;
}

/** Details revealed when a panel is open: kicker, heading, points, CTA and the suggested path.
    While closed it is `inert` so its link is not reachable by keyboard or screen reader. */
const AudiencePanelBody = ({ audience, isOpen }: AudiencePanelBodyProps) => (
  <div
    id={`audience-${audience.id}`}
    inert={!isOpen}
    className={clsx(
      "flex w-[min(600px,100%)] flex-col gap-5 px-8 pb-8 max-md:w-full max-md:gap-4 max-md:px-5 max-md:pb-[22px]",
      "[transition:opacity_.45s_ease,transform_.6s_cubic-bezier(.2,.7,.2,1)]",
      isOpen
        ? "pointer-events-auto relative mt-auto translate-y-0 opacity-100 delay-300"
        : "pointer-events-none absolute bottom-0 left-0 translate-y-[18px] opacity-0"
    )}
  >
    <Eyebrow tone="kicker">{AUDIENCE_HEAD.kicker}</Eyebrow>
    <CardHeading size="sub" className="-mt-2 max-w-[15ch]">
      {audience.heading}
    </CardHeading>
    <ul className="m-0 grid max-w-[46ch] list-none p-0">
      {audience.points.map((point) => (
        <li
          key={point}
          className="border-t border-white/20 py-[11px] font-body text-[15.5px] text-white/90 last:border-b max-md:py-[9px] max-md:text-[14.5px]"
        >
          {point}
        </li>
      ))}
    </ul>
    <div className="flex flex-wrap items-center gap-x-[22px] gap-y-3.5">
      <Button href={audience.cta.href} variant="light">
        {audience.cta.label}
      </Button>
      <CardDesc size="xs" tone="onDark">
        <b className="mr-0.5 font-bold text-bw-2">{AUDIENCE_HEAD.pathLabel}</b>{" "}
        {audience.path}
      </CardDesc>
    </div>
  </div>
);

export default AudiencePanelBody;
