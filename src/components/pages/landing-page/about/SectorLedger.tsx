"use client";

import { useState } from "react";
import { LEDGER_HEAD, SECTORS } from "@/constant/landingPage/sectorsData";
import CountUp from "@/components/ui/CountUp";
import SectorPanel from "./SectorPanel";
import SectorTabs from "./SectorTabs";

/** "22+ landmark projects": the big counter, three sector tabs and the selected sector's projects. */
const SectorLedger = () => {
  const [active, setActive] = useState(0);

  const select = (index: number, focus = false) => {
    setActive(index);
    if (focus) document.getElementById(`sector-tab-${SECTORS[index].id}`)?.focus();
  };

  return (
    <div id="sectors">
      <div className="mb-[clamp(28px,3.5vw,44px)] flex flex-wrap items-end gap-x-7 gap-y-3">
        <b className="font-display text-[clamp(80px,11vw,160px)] leading-[.85] font-semibold tracking-[-0.06em] text-transparent [background-clip:text] [background-image:var(--rain)]">
          <CountUp to={LEDGER_HEAD.total} />
          <em className="not-italic">+</em>
        </b>
        <p className="max-w-[30ch] pb-2.5 font-display text-[clamp(19px,1.8vw,24px)] leading-[1.3] font-semibold text-body-2">
          {LEDGER_HEAD.text}
        </p>
      </div>
      <SectorTabs sectors={SECTORS} active={active} onSelect={select} />
      <SectorPanel key={SECTORS[active].id} sector={SECTORS[active]} />
    </div>
  );
};

export default SectorLedger;
