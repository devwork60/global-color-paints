"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

const subscribe = (notify: () => void) => {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", notify);
  return () => mql.removeEventListener("change", notify);
};

/** True when the visitor has asked the OS for reduced motion. Server render assumes false. */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false
  );
}
