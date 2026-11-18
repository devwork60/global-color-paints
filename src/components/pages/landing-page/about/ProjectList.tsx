import { ArrowUpRight } from "lucide-react";
import type { FeaturedProject } from "@/constant/landingPage/projectsData";

interface ProjectListProps {
  projects: FeaturedProject[];
  current: number;
  onSelect: (index: number) => void;
  /** Called on pointer enter (only wired up for hover-capable wide screens by the parent). */
  onHover: (index: number) => void;
}

/** Numbered project list beside the stage. Selecting a row (click, focus or hover) shows its photo. */
const ProjectList = ({ projects, current, onSelect, onHover }: ProjectListProps) => (
  <ol className="m-0 flex list-none flex-col border-t border-line p-0">
    {projects.map((project, i) => (
      <li key={project.id} className="flex flex-1 border-b border-line">
        <button
          type="button"
          aria-pressed={current === i}
          onClick={() => onSelect(i)}
          onFocus={() => onSelect(i)}
          onMouseEnter={() => onHover(i)}
          className="group/row relative flex w-full flex-1 cursor-pointer items-center gap-4 border-0 bg-transparent px-1.5 py-4 text-left text-charcoal before:absolute before:-top-px before:left-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-hs before:transition-transform before:duration-[600ms] before:ease-brand before:content-[''] aria-pressed:before:scale-x-100"
        >
          <span className="font-body text-[13px] leading-none font-semibold text-stone-grey transition-colors duration-300 group-aria-pressed/row:text-hs">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="grid flex-1 gap-[3px]">
            <span className="font-display text-[clamp(18px,1.6vw,22px)] leading-[1.15] font-semibold tracking-[-0.015em] transition-transform duration-500 ease-brand group-hover/row:translate-x-1.5 group-aria-pressed/row:translate-x-1.5 max-sm:text-[17px]">
              {project.name}
            </span>
            <small className="font-body text-[13.5px] text-stone-grey">{project.place}</small>
          </span>
          <ArrowUpRight
            aria-hidden="true"
            className="size-[22px] -translate-x-2 translate-y-2 text-hs opacity-0 transition duration-500 ease-brand group-aria-pressed/row:translate-x-0 group-aria-pressed/row:translate-y-0 group-aria-pressed/row:opacity-100"
          />
        </button>
      </li>
    ))}
  </ol>
);

export default ProjectList;
