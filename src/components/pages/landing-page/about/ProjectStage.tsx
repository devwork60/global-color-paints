import Image from "next/image";
import clsx from "clsx";
import type { FeaturedProject } from "@/constant/landingPage/projectsData";

interface ProjectStageProps {
  projects: FeaturedProject[];
  current: number;
  previous: number;
  /** Changing this restarts the progress bar animation. */
  progressKey: string;
  running: boolean;
}

/** Photo stage: the incoming photo wipes in from the right over the outgoing one,
    with a counter and a progress bar for the 5 second auto-advance. */
const ProjectStage = ({ projects, current, previous, progressKey, running }: ProjectStageProps) => (
  <div className="relative min-h-[clamp(320px,38vw,540px)] overflow-hidden rounded-[26px] bg-stone after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-[3] after:h-2/5 after:bg-[linear-gradient(180deg,transparent,rgba(38,35,34,.55))] after:content-['']">
    {projects.map((project, i) => {
      const state = i === current ? "on" : i === previous ? "prev" : "off";
      return (
        <figure
          key={project.id}
          data-state={state}
          className="absolute inset-0 m-0 [clip-path:inset(0_0_0_100%)] [transition:clip-path_1.1s_cubic-bezier(.2,.7,.2,1)] data-[state=on]:z-[2] data-[state=on]:[clip-path:inset(0)] data-[state=prev]:z-[1] data-[state=prev]:[clip-path:inset(0)]"
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 960px) 60vw, 100vw"
            className={clsx(
              "object-cover transition-transform duration-[1600ms] ease-brand",
              state === "on" ? "scale-100" : "scale-[1.14]"
            )}
          />
        </figure>
      );
    })}
    <div
      aria-hidden="true"
      className="absolute bottom-[22px] left-[22px] z-[4] font-body text-[15px] leading-none font-semibold text-white/75"
    >
      <b className="font-display text-[38px] leading-none font-semibold tracking-[-0.03em] text-white">
        {String(current + 1).padStart(2, "0")}
      </b>{" "}
      / {String(projects.length).padStart(2, "0")}
    </div>
    <div
      aria-hidden="true"
      className="absolute right-[22px] bottom-3 left-[22px] z-[4] h-[3px] overflow-hidden rounded-full bg-white/25"
    >
      <i
        key={progressKey}
        className={clsx(
          "block h-full origin-left scale-x-0 [background-image:var(--rain)]",
          running && "animate-progress"
        )}
      />
    </div>
  </div>
);

export default ProjectStage;
