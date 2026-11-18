import Image from "next/image";
import clsx from "clsx";
import type { CSSProperties, KeyboardEvent } from "react";
import type { Sector } from "@/constant/landingPage/sectorsData";

interface SectorTabsProps {
  sectors: Sector[];
  active: number;
  onSelect: (index: number, focus?: boolean) => void;
}

/** Three photo tabs (a tablist). Arrow keys move between them; on phones the row scrolls sideways. */
const SectorTabs = ({ sectors, active, onSelect }: SectorTabsProps) => {
  const onKeyDown = (e: KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const step = e.key === "ArrowRight" ? 1 : -1;
    onSelect((i + step + sectors.length) % sectors.length, true);
  };

  return (
    <div
      role="tablist"
      aria-label="Project sectors"
      className="grid grid-cols-3 gap-3.5 max-sm:-mx-gutter max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:gap-2.5 max-sm:overflow-x-auto max-sm:px-gutter max-sm:pt-1.5 max-sm:pb-1 max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden"
    >
      {sectors.map((sector, i) => {
        const selected = i === active;
        return (
          <button
            key={sector.id}
            id={`sector-tab-${sector.id}`}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls="sector-panel"
            tabIndex={selected ? 0 : -1}
            style={{ "--c": sector.color } as CSSProperties}
            onClick={() => onSelect(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={clsx(
              "group/sec relative isolate flex min-h-[clamp(170px,17vw,220px)] cursor-pointer flex-col justify-end overflow-hidden rounded-[22px] border-0 bg-charcoal px-[22px] py-5 text-left text-white outline-offset-4 transition-transform duration-[450ms] ease-brand max-sm:min-h-[150px] max-sm:flex-[0_0_74%] max-sm:snap-start",
              "before:absolute before:inset-0 before:-z-[1] before:bg-[linear-gradient(180deg,rgba(38,35,34,.1)_20%,rgba(38,35,34,.85))] before:content-['']",
              "after:absolute after:inset-x-0 after:bottom-0 after:h-1.5 after:origin-left after:bg-(--c) after:transition-transform after:duration-[600ms] after:ease-brand after:content-['']",
              selected ? "-translate-y-1 after:scale-x-100" : "after:scale-x-0"
            )}
          >
            <Image
              src={sector.image}
              alt=""
              fill
              sizes="(min-width: 640px) 33vw, 74vw"
              className={clsx(
                "-z-[2] object-cover transition-[filter,transform] duration-[1200ms] ease-brand",
                selected
                  ? "scale-100 filter-none"
                  : "scale-[1.04] [filter:grayscale(.7)_brightness(.8)] group-hover/sec:scale-[1.08] group-hover/sec:[filter:grayscale(.2)_brightness(.9)]"
              )}
            />
            <span className="absolute top-4 right-4 grid h-[46px] min-w-[46px] place-items-center rounded-full bg-white px-2.5 font-display text-xl leading-none font-semibold text-charcoal">
              {sector.projects.length}
            </span>
            <small className="inline-flex items-center gap-2 font-body text-[13px] leading-none font-semibold text-white/85 before:size-2.5 before:rounded-full before:bg-(--c) before:content-['']">
              Sector {String(i + 1).padStart(2, "0")}
            </small>
            <b className="mt-2 block font-display text-[clamp(21px,2vw,28px)] leading-[1.1] font-semibold tracking-[-0.02em]">
              {sector.title}
            </b>
          </button>
        );
      })}
    </div>
  );
};

export default SectorTabs;
