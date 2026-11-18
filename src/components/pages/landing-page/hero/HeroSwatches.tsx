"use client";

import { HERO_COLOURS } from "@/constant/heroData";
import SmallText from "@/components/typography/SmallText";
import { useHeroWall } from "./HeroWall";

/** "Tap a colour to paint the walls" picker: label plus one dot per colour. */
const HeroSwatches = () => {
  const { selected, select, failed } = useHeroWall();

  return (
    <div role="group" aria-labelledby="hero-try-label" className="mt-11 flex flex-col items-center gap-3.5 max-sm:mt-[30px]">
      <p id="hero-try-label">
        <SmallText variant="note" tone="onDark">
          Tap a colour to paint the walls. Now showing{" "}
          <b aria-live="polite" className="font-bold text-white">
            {failed ? "preview unavailable" : HERO_COLOURS[selected].name}
          </b>
        </SmallText>
      </p>
      <div className="flex flex-wrap justify-center gap-3 max-sm:max-w-[260px] max-sm:gap-2.5">
        {HERO_COLOURS.map((colour, i) => (
          <button
            key={colour.name}
            type="button"
            style={{ backgroundColor: colour.hex }}
            aria-pressed={selected === i}
            aria-label={`Paint the walls ${colour.name}`}
            onClick={() => select(i)}
            className="group/dot relative size-[30px] cursor-pointer rounded-full border-2 border-white/90 p-0 shadow-[0_4px_14px_rgba(0,0,0,.25)] transition duration-300 hover:scale-[1.15] aria-pressed:scale-[1.18] aria-pressed:shadow-[0_0_0_3px_rgba(255,255,255,.25),0_0_0_5px_#fff,0_6px_18px_rgba(0,0,0,.35)] max-sm:size-8"
          >
            <span className="pointer-events-none absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 -translate-y-1 rounded-md bg-white px-2 py-1.5 font-body text-[11.5px] leading-none font-semibold whitespace-nowrap text-charcoal opacity-0 transition duration-200 group-hover/dot:translate-y-0 group-hover/dot:opacity-100 group-focus-visible/dot:translate-y-0 group-focus-visible/dot:opacity-100 max-sm:hidden">
              {colour.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSwatches;
