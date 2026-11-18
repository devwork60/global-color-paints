import Image from "next/image";
import clsx from "clsx";
import type { RefObject } from "react";
import { COLOUR_HEAD } from "@/constant/landingPage/colourData";
import Badge from "@/components/ui/Badge";
import { STUDIO_ROOM_IMAGE } from "@/utils/studioWall";

interface ColourRoomProps {
  canvasA: RefObject<HTMLCanvasElement | null>;
  canvasB: RefObject<HTMLCanvasElement | null>;
}

const layer = "absolute inset-0 size-full object-cover object-[50%_60%]";

/** The living-room photo with two stacked canvases that repaint its walls. */
const ColourRoom = ({ canvasA, canvasB }: ColourRoomProps) => (
  <div className="relative aspect-video w-full max-w-full overflow-hidden rounded-3xl bg-[#1d1a19]">
    <Badge className="absolute top-4 left-4 z-20">{COLOUR_HEAD.previewLabel}</Badge>
    <Image
      src={STUDIO_ROOM_IMAGE}
      alt="A living room with blue walls, wooden bookshelves, a sideboard and a framed painting"
      fill
      sizes="(min-width: 1280px) 660px, (min-width: 960px) 55vw, 100vw"
      className={layer}
    />
    <canvas ref={canvasA} aria-hidden="true" className={layer} />
    <canvas
      ref={canvasB}
      data-show="false"
      aria-hidden="true"
      className={clsx(
        layer,
        "opacity-0 transition-opacity duration-1000 ease-brand data-[show=true]:opacity-100"
      )}
    />
  </div>
);

export default ColourRoom;
