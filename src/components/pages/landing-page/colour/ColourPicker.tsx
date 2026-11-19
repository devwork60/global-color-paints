import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { COLOUR_HEAD, type ColourFamily, type ColourShade } from "@/constant/landingPage/colourData";
import Button from "@/components/button/Button";
import SmallText from "@/components/typography/SmallText";

export interface PickerShade extends ColourShade {
  family: string;
}

interface ColourPickerProps {
  families: ColourFamily[];
  shades: PickerShade[];
  selected: number;
  activeFamily: string;
  onFamily: (family: string) => void;
  onShade: (index: number) => void;
}

const ALL = "All";

/** Family filter, the grid of 54 swatches, the selected-shade readout and the shade-card CTA. */
const ColourPicker = ({
  families,
  shades,
  selected,
  activeFamily,
  onFamily,
  onShade,
}: ColourPickerProps) => {
  const current = shades[selected];
  return (
    <div className="flex flex-col gap-[18px]">
      <div role="group" aria-label="Colour families" className="flex flex-wrap gap-1.5">
        {[ALL, ...families.map((f) => f.name)].map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={activeFamily === name}
            onClick={() => onFamily(name)}
            className="cursor-pointer rounded-full border border-line-d bg-transparent px-3.5 py-[9px] font-body text-[13px] leading-none font-semibold text-white/80 transition duration-200 aria-pressed:border-white aria-pressed:bg-white aria-pressed:text-charcoal"
          >
            {name}
          </button>
        ))}
      </div>
      <div role="group" aria-label="Indicative colour swatches" className="grid grid-cols-10 gap-1.5 max-sm:grid-cols-8">
        {shades.map((shade, i) => {
          const dimmed = activeFamily !== ALL && shade.family !== activeFamily;
          return (
            <button
              key={shade.code}
              type="button"
              style={{ backgroundColor: shade.hex }}
              title={`${shade.name} ${shade.code}`}
              aria-label={`${shade.name}, code ${shade.code}, ${shade.family}`}
              aria-pressed={selected === i}
              onClick={() => onShade(i)}
              className={clsx(
                "relative aspect-[3/4] cursor-pointer rounded-md border-0 p-0 max-sm:nth-[n+41]:hidden max-sm:nth-[n+41]:hidden transition duration-[250ms] ease-brand hover:-translate-y-1 aria-pressed:-translate-y-1 aria-pressed:outline-2 aria-pressed:outline-offset-[3px] aria-pressed:outline-white",
                dimmed && "opacity-[.18]"
              )}
            />
          );
        })}
      </div>
      <div
        aria-live="polite"
        className="flex items-center gap-4 rounded-2xl border border-line-d bg-white/[.06] p-4"
      >
        <span
          aria-hidden="true"
          style={{ backgroundColor: current.hex }}
          className="size-[60px] shrink-0 rounded-xl transition-[background-color] duration-500"
        />
        <div>
          <b className="block font-display text-[17px] leading-[1.3] font-semibold">
            {current.name}
          </b>
          <SmallText variant="note" tone="onDarkMuted">
            Code {current.code} · {COLOUR_HEAD.productLine}
          </SmallText>
        </div>
      </div>
      <Button
        href={COLOUR_HEAD.cta.href}
        variant="gold"
        icon={<ArrowRight />}
        className="mt-auto self-start"
      >
        {COLOUR_HEAD.cta.label}
      </Button>
      <p className="font-body text-[13px] leading-normal font-medium text-white/45">{COLOUR_HEAD.note}</p>
    </div>
  );
};

export default ColourPicker;
