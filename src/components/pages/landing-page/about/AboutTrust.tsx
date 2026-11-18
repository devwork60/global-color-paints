import { TRUST } from "@/constant/landingPage/sectorsData";

const Names = () =>
  TRUST.names.map((name, i) => (
    <span
      key={name}
      className="flex items-center gap-[26px] pr-[26px] font-display text-[clamp(24px,3vw,40px)] leading-[1.2] font-semibold tracking-[-0.02em] whitespace-nowrap"
    >
      {name}
      <i
        style={{ backgroundColor: TRUST.colors[i % TRUST.colors.length] }}
        className="size-3 rotate-45 rounded-[3px]"
      />
    </span>
  ));

/** "Trusted by" strip: a label beside a slow marquee of client names. The marquee is decorative;
    the full list is in the region's aria-label. */
const AboutTrust = () => (
  <div className="mt-[clamp(48px,6vw,80px)] grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-9 gap-y-5 border-y border-line py-6 max-md:grid-cols-1">
    <p className="max-w-[17ch] font-body text-[14.5px] leading-[1.35] font-semibold text-stone-grey max-md:max-w-none">
      {TRUST.label}
    </p>
    <div
      role="img"
      aria-label={TRUST.ariaLabel}
      className="group/trust overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
    >
      <div
        aria-hidden="true"
        className="flex w-max animate-marquee-slow group-hover/trust:[animation-play-state:paused]"
      >
        {/* Four copies; the loop shifts by half, so it stays seamless on wide screens. */}
        <Names />
        <Names />
        <Names />
        <Names />
      </div>
    </div>
  </div>
);

export default AboutTrust;
