"use client";

import { useSyncExternalStore } from "react";

/* Header state is derived from scroll position:
   - surface "over": transparent, white text, while the hero (#vhero) is behind it
   - surface "scrolled" / "top": solid canvas, with a border once scrolled
   - data-scrolled: shrinks the bar and logo after 12px of scroll */
type Snapshot = `${"over" | "scrolled" | "top"}|${0 | 1}`;

const subscribe = (notify: () => void) => {
  window.addEventListener("scroll", notify, { passive: true });
  window.addEventListener("resize", notify);
  return () => {
    window.removeEventListener("scroll", notify);
    window.removeEventListener("resize", notify);
  };
};

const getSnapshot = (): Snapshot => {
  const y = window.scrollY;
  const hero = document.getElementById("vhero");
  const scrolled = y > 12;
  const over = !!hero && y < hero.offsetHeight - 90;
  return `${over ? "over" : scrolled ? "scrolled" : "top"}|${scrolled ? 1 : 0}`;
};

const getServerSnapshot = (): Snapshot => "over|0";

/** Sticky header wrapper. Only this shell is a Client Component; its children stay on the server. */
const HeaderShell = ({ children }: { children: React.ReactNode }) => {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [surface, scrolled] = state.split("|");

  return (
    <header
      data-surface={surface}
      data-scrolled={scrolled === "1"}
      className="group/hdr sticky top-[env(safe-area-inset-top,0px)] z-40 border-b border-transparent bg-[rgba(246,243,238,.82)] backdrop-blur-[14px] backdrop-saturate-[1.4] transition-[border-color,background-color] duration-[250ms] data-[surface=over]:bg-transparent data-[surface=over]:backdrop-blur-none data-[surface=over]:backdrop-saturate-100 data-[surface=scrolled]:border-line data-[surface=scrolled]:bg-[rgba(246,243,238,.95)]"
    >
      {children}
    </header>
  );
};

export default HeaderShell;
