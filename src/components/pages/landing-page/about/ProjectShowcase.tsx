"use client";

import { useEffect, useRef, useState } from "react";
import { FEATURED_PROJECTS } from "@/constant/landingPage/projectsData";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import ProjectList from "./ProjectList";
import ProjectStage from "./ProjectStage";

const ADVANCE_MS = 5000;
const HOVER_QUERY = "(hover: hover) and (min-width: 961px)";

/** Featured-project slideshow. Advances every 5s while it is on screen, and pauses while
    the pointer is over it. Reduced-motion visitors get no auto-advance. */
const ProjectShowcase = () => {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(-1);
  const [visible, setVisible] = useState(false);
  const [hold, setHold] = useState(false);
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const count = FEATURED_PROJECTS.length;
  const running = visible && !hold && !reduced;

  const go = (index: number) => {
    if (index === current) return;
    setPrevious(current);
    setCurrent(index);
  };

  useEffect(() => {
    const el = rootRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => setVisible(entries[0].isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => {
      setPrevious(current);
      setCurrent((current + 1) % count);
    }, ADVANCE_MS);
    return () => window.clearTimeout(timer);
  }, [running, current, count]);

  return (
    <div
      ref={rootRef}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      className="grid grid-cols-[minmax(0,1.25fr)_minmax(0,.75fr)] items-stretch gap-[clamp(20px,3vw,40px)] max-md:grid-cols-1"
    >
      <ProjectStage
        projects={FEATURED_PROJECTS}
        current={current}
        previous={previous}
        progressKey={`${current}-${running}`}
        running={running}
      />
      <ProjectList
        projects={FEATURED_PROJECTS}
        current={current}
        onSelect={go}
        onHover={(i) => window.matchMedia(HOVER_QUERY).matches && go(i)}
      />
    </div>
  );
};

export default ProjectShowcase;
