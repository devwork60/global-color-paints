"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type RefObject,
} from "react";
import { HERO_COLOURS } from "@/constant/heroData";
import { useWallPainter } from "@/hooks/useWallPainter";
import { HERO_WALL_CONFIG } from "@/utils/heroWall";

interface HeroWallValue {
  selected: number;
  select: (index: number) => void;
  /** True when the room photo could not be recoloured. */
  failed: boolean;
  canvasA: RefObject<HTMLCanvasElement | null>;
  canvasB: RefObject<HTMLCanvasElement | null>;
}

const HeroWallContext = createContext<HeroWallValue | null>(null);

/** Holds the hero's chosen wall colour and the painter. The background and the swatch
    picker are separate children of the hero, so they share this through context. */
export const HeroWallProvider = ({
  src,
  children,
}: {
  src: string;
  children: React.ReactNode;
}) => {
  const [selected, setSelected] = useState(0);
  const { canvasA, canvasB, paint, failed } = useWallPainter(src, HERO_WALL_CONFIG);

  useEffect(() => {
    paint(HERO_COLOURS[0].hex, true);
  }, [paint]);

  const select = useCallback(
    (index: number) => {
      setSelected(index);
      paint(HERO_COLOURS[index].hex);
    },
    [paint]
  );

  const value = useMemo(
    () => ({ selected, select, failed, canvasA, canvasB }),
    [selected, select, failed, canvasA, canvasB]
  );

  return <HeroWallContext.Provider value={value}>{children}</HeroWallContext.Provider>;
};

export const useHeroWall = () => {
  const ctx = useContext(HeroWallContext);
  if (!ctx) throw new Error("useHeroWall must be used inside HeroWallProvider");
  return ctx;
};
