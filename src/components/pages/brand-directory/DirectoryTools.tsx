import type { RefObject } from "react";
import { Search } from "lucide-react";

export type DirectoryFilter = "all" | "flag" | "family";

const FILTERS: { value: DirectoryFilter; label: string }[] = [
  { value: "all", label: "All brands" },
  { value: "flag", label: "Flagship" },
  { value: "family", label: "Family brands" },
];

interface DirectoryToolsProps {
  query: string;
  onQuery: (value: string) => void;
  filter: DirectoryFilter;
  onFilter: (value: DirectoryFilter) => void;
  inputRef: RefObject<HTMLInputElement | null>;
}

/** Search box and filter chips for the brand directory. */
const DirectoryTools = ({
  query,
  onQuery,
  filter,
  onFilter,
  inputRef,
}: DirectoryToolsProps) => (
  <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-8 pt-2 pb-[18px] max-sm:px-[18px] max-sm:pb-3.5">
    <label className="flex h-[50px] flex-[1_1_260px] items-center gap-2.5 rounded-full border border-line bg-white px-[18px] text-stone-grey transition-colors focus-within:border-charcoal">
      <Search aria-hidden="true" className="size-[18px] shrink-0" />
      <input
        ref={inputRef}
        type="search"
        value={query}
        onChange={(e) => onQuery(e.target.value)}
        placeholder="Search brands"
        autoComplete="off"
        aria-label="Search brands"
        className="min-w-0 flex-1 border-0 bg-transparent font-body text-base leading-none font-medium text-charcoal outline-none"
      />
    </label>
    <div
      role="group"
      aria-label="Filter brands"
      className="flex flex-wrap gap-1.5 max-sm:w-full max-sm:flex-nowrap max-sm:overflow-x-auto max-sm:[scrollbar-width:none]"
    >
      {FILTERS.map((f) => (
        <button
          key={f.value}
          type="button"
          aria-pressed={filter === f.value}
          onClick={() => onFilter(f.value)}
          className="cursor-pointer rounded-full border border-line bg-transparent px-4 py-3 font-body text-sm leading-none font-semibold text-charcoal transition-colors duration-200 aria-pressed:border-charcoal aria-pressed:bg-charcoal aria-pressed:text-white max-sm:shrink-0"
        >
          {f.label}
        </button>
      ))}
    </div>
  </div>
);

export default DirectoryTools;
