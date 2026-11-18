"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

/** Fades and lifts its children in the first time they scroll into view.
    Descendants can key off it with `group-data-[in=true]/rv:`. Content is always
    in the HTML; a 4s fallback and a <noscript> rule (root layout) cover failures. */
const Reveal = ({ children, className }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      const t = window.setTimeout(() => setShown(true), 0);
      return () => window.clearTimeout(t);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    const fallback = window.setTimeout(() => setShown(true), 4000);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      data-in={shown}
      className={clsx(
        "group/rv translate-y-7 opacity-0 transition duration-[900ms] ease-brand data-[in=true]:translate-y-0 data-[in=true]:opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Reveal;
