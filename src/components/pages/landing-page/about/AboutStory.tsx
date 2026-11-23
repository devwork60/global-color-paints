import { BRANDS } from "@/constant/brands";
import { ABOUT_STORY, MISSION_VISION } from "@/constant/landingPage/aboutData";
import Paragraph from "@/components/typography/Paragraph";
import Reveal from "@/components/ui/Reveal";

/** Rotating "Since 1992" badge: text runs around a circle, a rainbow ring spins around the year. */
const SinceBadge = () => (
  <div
    aria-hidden="true"
    className="relative aspect-square w-[min(100%,330px)] justify-self-center max-md:w-[min(70%,260px)]"
  >
    <svg viewBox="0 0 300 300" className="size-full animate-orbit">
      <defs>
        <path id="about-circle" d="M150 150m-118 0a118 118 0 1 1 236 0a118 118 0 1 1-236 0" />
      </defs>
      <text className="fill-white/80 font-body text-[15px] font-semibold tracking-[.24em] uppercase">
        <textPath href="#about-circle">{ABOUT_STORY.badgeText}</textPath>
      </text>
    </svg>
    <div className="absolute inset-[23%] animate-orbit-rev rounded-full bg-[conic-gradient(#E5352B,#F28C28,#F7D038,#6CBF4B,#1FA7E0,#1B5FC1,#E5352B)] p-[7px]">
      <span className="grid h-full animate-orbit-fwd place-content-center rounded-full bg-charcoal text-center">
        <small className="text-[13px] text-white/65">{ABOUT_STORY.since.label}</small>
        <b className="font-display text-[clamp(34px,3.6vw,48px)] leading-none font-semibold tracking-[-0.04em]">
          {ABOUT_STORY.since.year}
        </b>
      </span>
    </div>
  </div>
);

/** Mission, vision and the five brands, on a dark panel beside the badge. */
const AboutStory = () => (
  <Reveal className="relative isolate mt-[clamp(56px,7vw,100px)] grid grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)] items-center gap-[clamp(32px,5vw,84px)] overflow-hidden rounded-[30px] bg-charcoal p-[clamp(32px,5vw,76px)] text-white before:absolute before:-bottom-[220px] before:-left-40 before:-z-10 before:size-[520px] before:rounded-full before:bg-[radial-gradient(closest-side,rgba(181,67,42,.45),transparent)] before:content-[''] max-md:grid-cols-1">
    <SinceBadge />
    <div className="grid gap-[clamp(24px,3vw,36px)]">
      {MISSION_VISION.map((item) => {
        const Icon = item.icon;
        return (
          <article
            key={item.id}
            className="border-b border-line-d pb-[clamp(22px,2.6vw,32px)]"
          >
            <span className="inline-flex items-center gap-2.5 font-body text-sm leading-none font-semibold text-bw-2">
              <Icon aria-hidden="true" className="size-[18px] stroke-[1.75]" />
              {item.label}
            </span>
            <Paragraph size="statement" tone="inherit" className="mt-3.5">
              {item.text}
            </Paragraph>
          </article>
        );
      })}
      <div>
        <span className="font-body text-sm leading-[1.65] text-white/[.62]">{ABOUT_STORY.familyLabel}</span>
        <ul className="m-0 mt-3 flex list-none flex-wrap gap-2 p-0">
          {BRANDS.map((brand) => (
            <li
              key={brand.id}
              style={{ "--c": brand.color } as React.CSSProperties}
              className="inline-flex items-center gap-[9px] rounded-full border border-line-d py-[9px] pr-[15px] pl-[11px] font-body text-[14.5px] font-semibold transition duration-300 before:size-3 before:rounded-full before:bg-(--c) before:shadow-[0_0_0_2px_rgba(255,255,255,.18)] before:content-[''] hover:border-(--c) hover:bg-(--c)"
            >
              {brand.name}
            </li>
          ))}
          <li className="inline-flex items-center rounded-full border border-line-d px-[15px] py-[9px] font-body text-[14.5px] font-semibold text-white/70">
            {ABOUT_STORY.moreLabel}
          </li>
        </ul>
      </div>
    </div>
  </Reveal>
);

export default AboutStory;
