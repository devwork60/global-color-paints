"use client";

import { useEffect, useRef, useState } from "react";
import { AUDIENCES } from "@/constant/landingPage/audienceData";
import AudiencePanel from "./AudiencePanel";

const HOVER_QUERY = "(hover: hover) and (min-width: 961px)";
const HOVER_DELAY_MS = 140;

/** Four-panel accordion: one panel open at a time. Click anywhere to open; on wide
    hover-capable screens, resting the pointer on a panel opens it too. */
const AudienceAccordion = () => {
  const [open, setOpen] = useState(0);
  const hoverTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(hoverTimer.current), []);

  const startHover = (index: number) => {
    if (!window.matchMedia(HOVER_QUERY).matches) return;
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpen(index), HOVER_DELAY_MS);
  };

  return (
    <div className="flex h-[clamp(600px,72vh,680px)] gap-3 max-md:h-auto max-md:flex-col max-md:gap-2.5">
      {AUDIENCES.map((audience, i) => (
        <AudiencePanel
          key={audience.id}
          audience={audience}
          index={i}
          isOpen={open === i}
          onSelect={() => setOpen(i)}
          onHoverStart={() => startHover(i)}
          onHoverEnd={() => window.clearTimeout(hoverTimer.current)}
        />
      ))}
    </div>
  );
};

export default AudienceAccordion;
