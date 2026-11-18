"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { BRANDS } from "@/constant/brands";
import { useBrandDirectory } from "@/context/BrandDirectoryContext";
import Eyebrow from "@/components/typography/Eyebrow";
import SubHeading from "@/components/typography/SubHeading";
import { DirectoryAskCard, DirectoryCard } from "./DirectoryCard";
import DirectoryTools, { type DirectoryFilter } from "./DirectoryTools";

/** Modal listing the whole brand family, opened by every "View All Brands" control. */
const BrandDirectory = () => {
  const { isOpen, close } = useBrandDirectory();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<DirectoryFilter>("all");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!isOpen) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.matchMedia("(hover: hover)").matches
      ? window.setTimeout(() => inputRef.current?.focus(), 80)
      : undefined;
    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
    };
  }, [isOpen]);

  const handleClosed = () => {
    close();
    setQuery("");
    setFilter("all");
  };

  const q = query.trim().toLowerCase();
  const visible = BRANDS.filter(
    (b) =>
      (filter === "all" || b.kind === filter) &&
      (!q || ` ${b.name.toLowerCase()}`.includes(` ${q}`))
  );

  return (
    <dialog
      ref={dialogRef}
      aria-label="Brand directory"
      onClose={handleClosed}
      onClick={(e) => e.target === e.currentTarget && close()}
      className="m-auto max-h-[min(88vh,880px)] w-[min(1000px,calc(100%-32px))] max-w-none overflow-hidden rounded-panel border-0 bg-canvas p-0 text-charcoal shadow-[0_40px_90px_-30px_rgba(0,0,0,.55)] backdrop:bg-[rgba(24,21,20,.58)] backdrop:backdrop-blur-[6px] open:animate-dir-in max-sm:mt-auto max-sm:mb-0 max-sm:max-h-[92vh] max-sm:w-full max-sm:rounded-t-3xl max-sm:rounded-b-none"
    >
      <div className="flex max-h-[inherit] flex-col">
        <div className="flex items-start justify-between gap-5 px-8 pt-7 pb-3.5 max-sm:px-[18px] max-sm:pt-[22px] max-sm:pb-2.5">
          <div>
            <Eyebrow>Brand directory</Eyebrow>
            <SubHeading className="mt-3">The Global Colors brand family</SubHeading>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close brand directory"
            className="grid size-[46px] shrink-0 cursor-pointer place-items-center rounded-full border border-line bg-white text-charcoal transition-transform duration-300 hover:rotate-90"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>
        <DirectoryTools
          query={query}
          onQuery={setQuery}
          filter={filter}
          onFilter={setFilter}
          inputRef={inputRef}
        />
        <div className="overflow-auto overscroll-contain px-8 pt-[22px] pb-[30px] max-sm:px-[18px] max-sm:pt-4 max-sm:pb-6">
          <div className="grid grid-cols-3 gap-3.5 max-md:grid-cols-2 max-sm:grid-cols-1">
            {visible.map((brand, i) => (
              <DirectoryCard key={brand.id} brand={brand} index={i} onSelect={close} />
            ))}
            <DirectoryAskCard index={visible.length} onSelect={close} />
          </div>
          {visible.length === 0 && (
            <p className="mt-4 rounded-2xl border border-line bg-white p-[18px] text-body-2">
              No brand matches that search. Our team can help you find the right
              product.
            </p>
          )}
          <p className="mt-[18px] text-[13.5px] text-stone-grey">
            Our brand family keeps growing. Ask our team for the latest line-up.
          </p>
        </div>
      </div>
    </dialog>
  );
};

export default BrandDirectory;
