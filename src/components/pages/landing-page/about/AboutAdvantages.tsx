import { ADVANTAGES, ADVANTAGES_HEAD } from "@/constant/landingPage/aboutAdvantagesData";
import CardDesc from "@/components/typography/CardDesc";
import CardHeading from "@/components/typography/CardHeading";
import Eyebrow from "@/components/typography/Eyebrow";
import SmallText from "@/components/typography/SmallText";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";

/* Left borders per breakpoint (written out in full so Tailwind can see them):
   phones: none; two columns: odd items; three columns: all but the first of each row. */
const BORDERS = [
  "md:border-l-0",
  "sm:border-l md:border-l",
  "md:border-l",
  "sm:border-l md:border-l-0",
  "md:border-l",
  "sm:border-l md:border-l",
];

/** "Why clients choose us": a heading with the sectors served, and six numbered reasons that flood with colour on hover. */
const AboutAdvantages = () => (
  <Reveal className="mt-[clamp(64px,8vw,112px)] grid grid-cols-[minmax(0,.8fr)_minmax(0,2fr)] gap-[clamp(28px,4vw,64px)] max-md:grid-cols-1">
    <div>
      <Eyebrow>{ADVANTAGES_HEAD.eyebrow}</Eyebrow>
      <CardHeading size="xl" className="mt-4">
        {ADVANTAGES_HEAD.title}
      </CardHeading>
      <div className="mt-[26px] flex flex-wrap items-center gap-2">
        <SmallText variant="note" className="w-full">
          {ADVANTAGES_HEAD.sectorsLabel}
        </SmallText>
        {ADVANTAGES_HEAD.sectors.map((sector) => (
          <Badge key={sector} variant="chip">
            {sector}
          </Badge>
        ))}
      </div>
    </div>
    <ol className="m-0 grid list-none grid-cols-3 border-t border-line p-0 max-md:grid-cols-2 max-sm:grid-cols-1">
      {ADVANTAGES.map((item, i) => (
        <li
          key={item.id}
          style={{ "--c": item.color } as React.CSSProperties}
          className={`group/adv relative isolate overflow-hidden border-b border-line px-1 pt-[26px] pb-[30px] transition-colors duration-[450ms] ease-brand before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-(--c) before:transition-transform before:duration-[550ms] before:ease-brand before:content-[''] hover:text-white hover:before:scale-y-100 sm:px-6 ${BORDERS[i]}`}
        >
          <span className="block font-body text-[13px] leading-none font-semibold text-(--c) transition-colors duration-[450ms] group-hover/adv:text-white/85">
            {String(i + 1).padStart(2, "0")}
          </span>
          <CardHeading size="adv" className="mt-[18px] sm:mt-[34px]">
            {item.title}
          </CardHeading>
          <CardDesc className="mt-2.5 transition-colors duration-[450ms] group-hover/adv:text-white/85">
            {item.description}
          </CardDesc>
        </li>
      ))}
    </ol>
  </Reveal>
);

export default AboutAdvantages;
