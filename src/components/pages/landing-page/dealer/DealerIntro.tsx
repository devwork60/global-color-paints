import { DEALER_INTRO, DEALER_STEPS } from "@/constant/landingPage/dealerData";
import Eyebrow from "@/components/typography/Eyebrow";
import MainHeading from "@/components/typography/MainHeading";
import Paragraph from "@/components/typography/Paragraph";

/** Left column of the dealer card: pitch plus the three-step "how it works" list. */
const DealerIntro = () => (
  <div>
    <Eyebrow tone="gold">{DEALER_INTRO.eyebrow}</Eyebrow>
    <MainHeading size="banner" className="my-[18px]">
      {DEALER_INTRO.title}
    </MainHeading>
    <Paragraph size="lead" tone="onDarkMuted" className="max-w-[44ch]">
      {DEALER_INTRO.lead}
    </Paragraph>
    <ol className="m-0 mt-[34px] grid list-none p-0">
      {DEALER_STEPS.map((step) => (
        <li
          key={step.number}
          className="grid grid-cols-[64px_minmax(0,1fr)] items-center gap-4 border-t border-line-d py-4"
        >
          <span className="font-display text-[34px] leading-none font-semibold tracking-[-0.02em] text-bw-2">
            {step.number}
          </span>
          <div>
            <b className="block font-body text-lg leading-[1.3] font-semibold">{step.title}</b>
            <small className="font-body text-sm text-white/60">{step.note}</small>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

export default DealerIntro;
