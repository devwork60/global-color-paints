import Image from "next/image";
import type { CSSProperties } from "react";
import type { Client } from "@/constant/landingPage/clientsData";

interface ClientItemProps {
  client: Client;
  /** Repeated copies are hidden from assistive tech and given empty alt text. */
  decorative?: boolean;
}

/** One logo cell in the clients loop. A soft brand-coloured glow follows the pointer (--x / --y are set by the loop). */
const ClientItem = ({ client, decorative = false }: ClientItemProps) => (
  <li
    data-client-item=""
    aria-hidden={decorative || undefined}
    style={{ "--ac": client.accent } as CSSProperties}
    className="group/item relative isolate flex min-w-[clamp(220px,22vw,300px)] flex-none flex-col items-center justify-center gap-4 border-r border-line px-[clamp(32px,4vw,60px)] pt-8 pb-[26px] before:absolute before:inset-2.5 before:-z-10 before:rounded-[22px] before:bg-[radial-gradient(220px_circle_at_var(--x,50%)_var(--y,50%),color-mix(in_srgb,var(--ac)_16%,transparent),transparent_72%)] before:opacity-0 before:transition-opacity before:duration-[450ms] before:content-[''] hover:before:opacity-100 max-sm:min-w-[190px] max-sm:px-[26px] max-sm:pt-6 max-sm:pb-5"
  >
    <span className="flex h-[clamp(76px,7.5vw,100px)] items-center justify-center">
      <Image
        src={client.logo}
        alt={decorative ? "" : client.logoAlt}
        width={client.width}
        height={client.height}
        style={{ "--lh": `${client.logoHeight}px` } as CSSProperties}
        className="h-(--lh) max-h-full w-auto transition-transform duration-700 ease-brand group-hover/item:scale-[1.07] max-sm:h-[calc(var(--lh)*.8)]"
      />
    </span>
    <span className="grid gap-0.5 text-center font-body text-[13px] leading-[1.3] whitespace-nowrap text-stone-grey max-sm:text-xs">
      <b className="font-body text-[15px] leading-[1.2] font-semibold text-charcoal max-sm:text-[13.5px]">
        {client.name}
      </b>
      {client.place}
    </span>
  </li>
);

export default ClientItem;
