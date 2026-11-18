"use client";

import Image from "next/image";
import clsx from "clsx";
import { HERO_COLOURS } from "@/constant/heroData";
import { HERO_ROOM_IMAGE } from "@/utils/heroWall";
import { hexToRgb, luminance } from "@/utils/wallPaint";
import { useHeroWall } from "./HeroWall";

const layer =
  "absolute inset-0 size-full animate-hero-zoom object-cover object-[50%_50%] origin-center max-sm:object-[22%_50%]";

/** Room photo with two recolouring canvases on top, plus the darkening veil. */
const HeroBackground = () => {
  const { selected, canvasA, canvasB } = useHeroWall();
  const isLight = luminance(hexToRgb(HERO_COLOURS[selected].hex)) > 0.6;

  return (
    <>
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <Image
          src={HERO_ROOM_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className={layer}
        />
        <canvas ref={canvasA} className={layer} />
        <canvas
          ref={canvasB}
          data-show="false"
          className={clsx(
            layer,
            "opacity-0 transition-opacity duration-1000 data-[show=true]:opacity-100"
          )}
        />
      </div>
      <div
        aria-hidden="true"
        data-light={isLight}
        className={clsx(
          "absolute inset-0 -z-10 bg-[radial-gradient(52%_46%_at_50%_52%,rgba(20,14,10,.5),rgba(20,14,10,.14)_70%,rgba(20,14,10,0)),linear-gradient(180deg,rgba(20,14,10,.5)_0,rgba(20,14,10,0)_20%,rgba(20,14,10,0)_74%,rgba(20,14,10,.5)_100%)]",
          "after:absolute after:inset-0 after:bg-[radial-gradient(62%_52%_at_50%_50%,rgba(16,14,30,.42),rgba(16,14,30,.12)_75%,rgba(16,14,30,0)),linear-gradient(180deg,rgba(16,14,30,.45)_0,rgba(16,14,30,0)_24%)] after:opacity-0 after:transition-opacity after:duration-[900ms] after:content-[''] data-[light=true]:after:opacity-100"
        )}
      />
    </>
  );
};

export default HeroBackground;
