"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useBrandDirectory } from "@/context/BrandDirectoryContext";
import { iconButtonClass } from "./navStyles";

interface MobileNavProps {
  /** Logo shown at the top of the open menu. */
  logo: React.ReactNode;
  /** Menu links and actions (server-rendered). */
  children: React.ReactNode;
}

/** Burger button plus full-screen menu. The menu is portalled to <body> because the
    header's backdrop-filter would otherwise trap its fixed positioning. */
const MobileNav = ({ logo, children }: MobileNavProps) => {
  const [open, setOpen] = useState(false);
  const { isOpen: directoryOpen } = useBrandDirectory();

  // Close the menu whenever the brand directory opens.
  const [prevDirectoryOpen, setPrevDirectoryOpen] = useState(directoryOpen);
  if (directoryOpen !== prevDirectoryOpen) {
    setPrevDirectoryOpen(directoryOpen);
    if (directoryOpen) setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={clsx(iconButtonClass, "hidden max-md:inline-flex")}
      >
        <Menu aria-hidden="true" className="size-5" />
      </button>
      {open &&
        createPortal(
          <div
            onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}
            className="fixed inset-0 z-[60] flex flex-col gap-1.5 overflow-auto bg-canvas px-gutter pt-[calc(env(safe-area-inset-top,0px)+18px)] pb-6"
          >
            <div className="mb-[18px] flex items-center justify-between">
              {logo}
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex size-11 cursor-pointer items-center justify-center rounded-xl border border-line bg-white text-charcoal"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>
            {children}
          </div>,
          document.body
        )}
    </>
  );
};

export default MobileNav;
