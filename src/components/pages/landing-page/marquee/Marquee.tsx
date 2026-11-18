import { MARQUEE_ITEMS } from "@/constant/landingPage/marqueeData";

const Items = () =>
  MARQUEE_ITEMS.map((item, i) => (
    <span
      key={`${item.label}-${i}`}
      className="flex items-center gap-3.5 font-display text-marquee font-semibold whitespace-nowrap"
    >
      <i
        style={{ backgroundColor: item.color }}
        className="size-3.5 rotate-45 rounded-[4px]"
      />
      {item.label}
    </span>
  ));

/** Scrolling strip of product categories. Decorative, so hidden from assistive tech. */
const Marquee = () => (
  <div
    aria-hidden="true"
    className="group/mq overflow-hidden border-y border-line bg-paper py-5"
  >
    <div className="flex w-max animate-marquee gap-11 group-hover/mq:[animation-play-state:paused]">
      {/* The list is rendered twice so the loop (-50%) is seamless. */}
      <Items />
      <Items />
    </div>
  </div>
);

export default Marquee;
