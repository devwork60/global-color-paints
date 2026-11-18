import type { CSSProperties } from "react";
import CardHeading from "@/components/typography/CardHeading";
import type { Sector } from "@/constant/landingPage/sectorsData";

/** The tabpanel under the tabs: sector summary on the left, its project list on the right.
    Remounted per sector (keyed by the parent) so the rows stagger in again. */
const SectorPanel = ({ sector }: { sector: Sector }) => (
  <div
    id="sector-panel"
    role="tabpanel"
    aria-labelledby={`sector-tab-${sector.id}`}
    style={{ "--c": sector.color } as CSSProperties}
    className="relative mt-3.5 grid grid-cols-[minmax(0,.7fr)_minmax(0,2fr)] gap-[clamp(20px,4vw,56px)] overflow-hidden rounded-3xl border border-line bg-white p-[clamp(24px,3.5vw,44px)] before:absolute before:inset-y-0 before:left-0 before:w-1.5 before:bg-(--c) before:content-[''] max-md:grid-cols-1"
  >
    <div>
      <CardHeading size="sector">
        {sector.title}
      </CardHeading>
      <p className="mt-3 font-body text-[15.5px] text-body-2">{sector.description}</p>
      <div className="mt-5 inline-flex items-baseline gap-2 font-body text-sm text-stone-grey">
        <b className="font-display text-[44px] leading-none font-semibold tracking-[-0.04em] text-(--c)">
          {sector.projects.length}
        </b>
        projects
      </div>
    </div>
    <ul className="m-0 grid list-none content-start grid-cols-2 gap-x-[clamp(20px,3vw,40px)] p-0 max-sm:grid-cols-1">
      {sector.projects.map((project, i) => (
        <li
          key={project.name}
          style={{ animationDelay: `${i * 40}ms` }}
          className="grid animate-row-in grid-cols-[34px_minmax(0,1fr)] content-start items-baseline gap-x-3 gap-y-0.5 border-b border-line py-[15px]"
        >
          <i className="row-span-2 font-body text-[13px] leading-normal font-semibold text-(--c) not-italic">
            {String(i + 1).padStart(2, "0")}
          </i>
          <b className="font-display text-[17.5px] leading-[1.25] font-semibold tracking-[-0.01em]">
            {project.name}
          </b>
          {project.note && (
            <span className="font-body text-sm leading-[1.35] text-stone-grey">{project.note}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default SectorPanel;
