"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useBrandDirectory } from "@/context/BrandDirectoryContext";
import { navItemClass } from "./navStyles";

/** "Our Brands" nav item. Opens on hover, keyboard focus or click; the menu itself is passed as children. */
const NavDropdown = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const { isOpen: directoryOpen } = useBrandDirectory();

  // Close this menu whenever the brand directory opens.
  const [prevDirectoryOpen, setPrevDirectoryOpen] = useState(directoryOpen);
  if (directoryOpen !== prevDirectoryOpen) {
    setPrevDirectoryOpen(directoryOpen);
    if (directoryOpen) setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <div ref={rootRef} className="group/dd relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        className={navItemClass}
      >
        Our Brands <ChevronDown aria-hidden="true" className="size-[1em] stroke-[1.75]" />
      </button>
      <div
        className={clsx(
          "invisible absolute top-[calc(100%+14px)] left-1/2 grid w-[660px] -translate-x-1/2 translate-y-1.5 grid-cols-2 gap-2.5 rounded-[20px] border border-line bg-white p-3 text-charcoal opacity-0 shadow-[0_30px_60px_-24px_rgba(38,35,34,.3)] transition duration-[220ms]",
          "group-focus-within/dd:visible group-focus-within/dd:translate-y-0 group-focus-within/dd:opacity-100 group-hover/dd:visible group-hover/dd:translate-y-0 group-hover/dd:opacity-100",
          open && "visible translate-y-0 opacity-100"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default NavDropdown;
