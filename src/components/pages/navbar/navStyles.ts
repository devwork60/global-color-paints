/* Shared class strings for header controls. The "over" state is the transparent
   header shown on top of the hero (data-surface="over" on the header). */

export const navItemClass =
  "flex cursor-pointer items-center gap-[5px] rounded-full border-0 bg-transparent px-4 py-[11px] font-body text-[14.5px] leading-none font-semibold text-charcoal no-underline " +
  "not-aria-[current]:hover:bg-charcoal/[.06] aria-[current]:bg-charcoal aria-[current]:text-white " +
  "group-data-[surface=over]/hdr:text-white group-data-[surface=over]/hdr:not-aria-[current]:hover:bg-white/[.14] " +
  "group-data-[surface=over]/hdr:aria-[current]:bg-white group-data-[surface=over]/hdr:aria-[current]:text-charcoal";

export const iconButtonClass =
  "size-11 cursor-pointer items-center justify-center rounded-xl border border-line bg-white text-charcoal no-underline " +
  "group-data-[surface=over]/hdr:border-white/30 group-data-[surface=over]/hdr:bg-white/[.12] group-data-[surface=over]/hdr:text-white";
