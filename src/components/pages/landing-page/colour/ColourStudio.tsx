"use client";

import { useEffect, useState } from "react";
import {
  COLOUR_DEFAULT_HEX,
  COLOUR_FAMILIES,
} from "@/constant/landingPage/colourData";
import { useWallPainter } from "@/hooks/useWallPainter";
import { STUDIO_ROOM_IMAGE, STUDIO_WALL_CONFIG } from "@/utils/studioWall";
import ColourPicker, { type PickerShade } from "./ColourPicker";
import ColourRoom from "./ColourRoom";

const ALL = "All";

const SHADES: PickerShade[] = COLOUR_FAMILIES.flatMap((family) =>
  family.shades.map((shade) => ({ ...shade, family: family.name }))
);
const DEFAULT_INDEX = Math.max(
  0,
  SHADES.findIndex((s) => s.hex === COLOUR_DEFAULT_HEX)
);

/** Interactive colour studio: choosing a shade repaints the room's walls. */
const ColourStudio = () => {
  const [selected, setSelected] = useState(DEFAULT_INDEX);
  const [activeFamily, setActiveFamily] = useState(ALL);
  const { canvasA, canvasB, paint } = useWallPainter(STUDIO_ROOM_IMAGE, STUDIO_WALL_CONFIG);

  // First paint is instant (queued until the photo has loaded); later changes fade via choose().
  useEffect(() => {
    paint(SHADES[DEFAULT_INDEX].hex, true);
  }, [paint]);

  const choose = (index: number) => {
    setSelected(index);
    paint(SHADES[index].hex);
  };

  const chooseFamily = (name: string) => {
    setActiveFamily(name);
    if (name === ALL) return;
    // Jump to the middle shade of the family so the room visibly changes.
    const first = SHADES.findIndex((s) => s.family === name);
    const size = SHADES.filter((s) => s.family === name).length;
    choose(first + Math.floor(size / 2));
  };

  return (
    <div className="grid grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] items-start gap-[clamp(20px,3vw,40px)] max-md:grid-cols-1">
      <ColourRoom canvasA={canvasA} canvasB={canvasB} />
      <ColourPicker
        families={COLOUR_FAMILIES}
        shades={SHADES}
        selected={selected}
        activeFamily={activeFamily}
        onFamily={chooseFamily}
        onShade={choose}
      />
    </div>
  );
};

export default ColourStudio;
