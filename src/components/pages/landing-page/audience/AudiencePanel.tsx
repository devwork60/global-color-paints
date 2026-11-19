import Image from "next/image";
import clsx from "clsx";
import type { AudienceData } from "@/constant/landingPage/audienceData";
import AudiencePanelBody from "./AudiencePanelBody";

interface AudiencePanelProps {
  audience: AudienceData;
  index: number;
  isOpen: boolean;
  onSelect: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

/** One accordion card: photo, scrims, the always-visible tab and the details body. */
const AudiencePanel = ({
  audience,
  index,
  isOpen,
  onSelect,
  onHoverStart,
  onHoverEnd,
}: AudiencePanelProps) => (
  <article
    data-open={isOpen}
    onMouseEnter={onHoverStart}
    onMouseLeave={onHoverEnd}
    className={clsx(
      "group/ap relative isolate flex min-w-0 flex-col overflow-hidden rounded-[26px] bg-[#2a2522] text-white",
      "transition-[flex] duration-[850ms] ease-brand max-md:flex-none max-md:rounded-[20px] max-md:transition-[height] max-md:duration-700",
      isOpen ? "flex-[3.4] max-md:h-[600px]" : "flex-1 max-md:h-28"
    )}
  >
    <Image
      src={audience.image}
      alt={audience.imageAlt}
      fill
      sizes="(min-width: 960px) 60vw, 100vw"
      className="-z-20 scale-[1.06] object-cover transition-[transform,filter] duration-[1400ms,800ms] ease-brand group-data-[open=false]/ap:brightness-90 group-data-[open=false]/ap:saturate-[.75] group-data-[open=true]/ap:scale-100"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(20,16,14,.1)_0,rgba(20,16,14,.2)_40%,rgba(20,16,14,.82)_100%)]"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(20,16,14,.88)_0,rgba(20,16,14,.62)_42%,rgba(20,16,14,.08)_78%)] opacity-0 transition-opacity duration-[800ms] group-data-[open=true]/ap:opacity-100 max-md:bg-[linear-gradient(180deg,rgba(20,16,14,.55)_0,rgba(20,16,14,.35)_30%,rgba(20,16,14,.9)_62%)]"
    />
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls={`audience-${audience.id}`}
      onClick={onSelect}
      className="group/tab absolute inset-0 flex w-full cursor-pointer flex-col justify-end gap-1.5 border-0 bg-transparent p-6 text-left font-body text-inherit group-data-[open=true]/ap:relative group-data-[open=true]/ap:inset-auto group-data-[open=true]/ap:flex-none group-data-[open=true]/ap:cursor-default group-data-[open=true]/ap:justify-start group-data-[open=true]/ap:px-8 group-data-[open=true]/ap:pt-7 group-data-[open=true]/ap:pb-0 max-md:px-5 max-md:py-[18px] max-md:group-data-[open=true]/ap:pt-[22px]"
    >
      <span className="absolute top-[22px] left-6 font-body text-[13px] leading-none font-semibold text-white/85 group-data-[open=true]/ap:static group-data-[open=true]/ap:mb-3.5 max-md:top-[18px] max-md:right-5 max-md:left-auto">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="font-display text-tab font-semibold decoration-2 underline-offset-[5px] group-hover/tab:group-data-[open=false]/ap:underline">
        {audience.title}
      </span>
      <span className="font-body text-[13.5px] leading-[1.4] font-medium text-white/75">
        {audience.sub}
      </span>
    </button>
    <AudiencePanelBody audience={audience} isOpen={isOpen} />
  </article>
);

export default AudiencePanel;
