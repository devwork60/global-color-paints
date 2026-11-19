import Link from "next/link";
import { PRODUCT_HELP_TILE } from "@/constant/landingPage/productRangeData";
import CardHeading from "@/components/typography/CardHeading";
import ArrowCircle from "@/components/ui/ArrowCircle";

/** Full-width call to action at the end of the bento: "Not sure which product you need?" */
const HelpTile = () => (
  <Link
    href={PRODUCT_HELP_TILE.href}
    className="group/help col-span-full grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_auto] items-center gap-6 overflow-hidden rounded-card bg-hs px-[30px] py-[26px] text-white no-underline transition duration-[350ms] ease-brand hover:-translate-y-1 hover:shadow-card max-md:grid-cols-[minmax(0,1fr)_auto] max-sm:rounded-[18px] max-sm:px-5 max-sm:py-[22px]"
  >
    <CardHeading size="cta" className="max-w-[18ch]">
      {PRODUCT_HELP_TILE.title}
    </CardHeading>
    <p className="max-w-[46ch] font-body text-[15.5px] leading-[1.65] opacity-[.88] max-md:col-span-full max-md:row-start-2">
      {PRODUCT_HELP_TILE.description}
    </p>
    <ArrowCircle color="var(--hs)" className="group-hover/help:-rotate-45" />
  </Link>
);

export default HelpTile;
