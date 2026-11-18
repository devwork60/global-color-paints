import { PACKS_HEAD, PACK_SIZES } from "@/constant/landingPage/whyData";
import PaintCan from "@/components/icons/PaintCan";
import CardHeading from "@/components/typography/CardHeading";
import SmallText from "@/components/typography/SmallText";
import Reveal from "@/components/ui/Reveal";

/** Card comparing the three pack sizes with can illustrations on a shared baseline. */
const PackSizes = () => (
  <Reveal className="col-span-7 flex flex-col rounded-3xl border border-line bg-white p-[clamp(22px,3vw,36px)] max-lg:col-span-12">
    <div className="flex flex-wrap items-baseline justify-between gap-4">
      <CardHeading size="lg">{PACKS_HEAD.title}</CardHeading>
      <SmallText variant="note">{PACKS_HEAD.subtitle}</SmallText>
    </div>
    <div
      aria-hidden="true"
      className="mt-5 flex h-[230px] items-end justify-between gap-3.5 border-b-2 border-charcoal px-1 max-sm:h-40 max-sm:gap-2"
    >
      {PACK_SIZES.map((pack) => (
        <div
          key={pack.id}
          className="flex h-full flex-1 items-end justify-center hover:[&>svg]:-translate-y-2 hover:[&>svg]:-rotate-3"
        >
          <PaintCan color={pack.color} width={pack.width} />
        </div>
      ))}
    </div>
    <div className="flex justify-between gap-3.5 px-1 pt-3.5">
      {PACK_SIZES.map((pack) => (
        <div key={pack.id} className="flex-1 text-center">
          <b className="block font-display text-[17px] leading-[1.2] font-bold">
            {pack.label}
          </b>
          <SmallText variant="note">{pack.caption}</SmallText>
        </div>
      ))}
    </div>
  </Reveal>
);

export default PackSizes;
