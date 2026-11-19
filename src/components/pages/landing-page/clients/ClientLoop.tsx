"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { CLIENTS } from "@/constant/landingPage/clientsData";
import ClientItem from "./ClientItem";

const PX_PER_SECOND = 50;

/** Endless logo strip. The client list is repeated until one half is wider than the strip, then that
    half is duplicated and the CSS slides everything left by 50%, so the loop is seamless on any screen
    and moves at the same speed however many clients there are. Pauses on hover. */
const ClientLoop = () => {
  const loopRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [reps, setReps] = useState(1);
  const [seconds, setSeconds] = useState(40);

  useEffect(() => {
    const loop = loopRef.current;
    const track = trackRef.current;
    if (!loop || !track) return;

    const measure = () => {
      const items = track.querySelectorAll<HTMLElement>("[data-client-item]");
      const last = items[CLIENTS.length - 1];
      if (!last) return;
      // One set of clients, measured from the first item to the end of its last item.
      const setWidth = last.getBoundingClientRect().right - items[0].getBoundingClientRect().left || 1;
      const nextReps = Math.max(1, Math.ceil(loop.clientWidth / setWidth));
      setReps(nextReps);
      setSeconds(Math.max(18, Math.round((nextReps * setWidth) / PX_PER_SECOND)));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(loop);
    document.fonts?.ready.then(measure);
    return () => observer.disconnect();
  }, []);

  const onPointerMove = (e: PointerEvent<HTMLUListElement>) => {
    const item = (e.target as HTMLElement).closest<HTMLElement>("[data-client-item]");
    if (!item) return;
    const box = item.getBoundingClientRect();
    item.style.setProperty("--x", `${e.clientX - box.left}px`);
    item.style.setProperty("--y", `${e.clientY - box.top}px`);
  };

  // `reps` sets for the first half, then the same again for the second half. Only the very first set is read aloud.
  const sets = Array.from({ length: reps * 2 }, (_, set) => set);

  return (
    <div
      ref={loopRef}
      className="group/loop relative mt-[clamp(44px,5.5vw,72px)] overflow-hidden border-y border-line [mask-image:linear-gradient(90deg,transparent,#000_9%,#000_91%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]"
    >
      <ul
        ref={trackRef}
        aria-label="Our clients"
        onPointerMove={onPointerMove}
        style={{ "--dur": `${seconds}s` } as CSSProperties}
        className="m-0 flex w-max list-none [animation:marquee_var(--dur,40s)_linear_infinite] p-0 group-hover/loop:[animation-play-state:paused] group-focus-within/loop:[animation-play-state:paused] motion-reduce:[animation:none]"
      >
        {sets.map((set) =>
          CLIENTS.map((client) => (
            <ClientItem key={`${set}-${client.id}`} client={client} decorative={set > 0} />
          ))
        )}
      </ul>
    </div>
  );
};

export default ClientLoop;
