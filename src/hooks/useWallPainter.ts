"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  buildWallData,
  renderWall,
  type WallConfig,
  type WallData,
} from "@/utils/wallPaint";

interface Engine {
  data: WallData | null;
  ctxA: CanvasRenderingContext2D | null;
  ctxB: CanvasRenderingContext2D | null;
  pending: string | null;
  fadeTimer: number | undefined;
}

/**
 * Drives two stacked canvases over a room photo. Canvas A holds the current colour;
 * canvas B receives the next colour and fades in over it (data-show="true"), then is
 * folded into A. Call `paint(hex)` to change colour; calls made before the photo has
 * loaded are applied instantly once it has.
 */
export function useWallPainter(src: string, config: WallConfig) {
  const canvasA = useRef<HTMLCanvasElement>(null);
  const canvasB = useRef<HTMLCanvasElement>(null);
  const engine = useRef<Engine>({
    data: null,
    ctxA: null,
    ctxB: null,
    pending: null,
    fadeTimer: undefined,
  });
  const [failed, setFailed] = useState(false);

  const paint = useCallback(
    (hex: string, instant = false) => {
      const e = engine.current;
      const a = canvasA.current;
      const b = canvasB.current;
      if (!e.data || !e.ctxA || !e.ctxB || !a || !b) {
        e.pending = hex;
        return;
      }
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (instant || reduced) {
        renderWall(e.ctxA, e.data, hex, config);
        b.dataset.show = "false";
        return;
      }
      if (b.dataset.show === "true") e.ctxA.drawImage(b, 0, 0);
      // Restart the fade: drop to hidden without a transition, then fade the new colour in.
      b.style.transition = "none";
      b.dataset.show = "false";
      void b.offsetWidth;
      b.style.transition = "";
      renderWall(e.ctxB, e.data, hex, config);
      requestAnimationFrame(() => {
        b.dataset.show = "true";
      });
      window.clearTimeout(e.fadeTimer);
      const ctxA = e.ctxA;
      e.fadeTimer = window.setTimeout(() => ctxA.drawImage(b, 0, 0), 950);
    },
    [config]
  );

  useEffect(() => {
    const e = engine.current;
    const img = new Image();
    let cancelled = false;

    img.onload = () => {
      const a = canvasA.current;
      const b = canvasB.current;
      if (cancelled || !a || !b) return;
      try {
        e.data = buildWallData(img, config);
        a.width = b.width = e.data.width;
        a.height = b.height = e.data.height;
        e.ctxA = a.getContext("2d");
        e.ctxB = b.getContext("2d");
        e.ctxA?.drawImage(img, 0, 0);
        if (e.pending) paint(e.pending, true);
      } catch {
        setFailed(true);
      }
    };
    img.onerror = () => setFailed(true);
    img.src = src;

    return () => {
      cancelled = true;
      window.clearTimeout(e.fadeTimer);
    };
  }, [src, config, paint]);

  return { canvasA, canvasB, paint, failed };
}
