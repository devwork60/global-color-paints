import clsx from "clsx";
import { ABOUT_STATS } from "@/constant/landingPage/aboutData";
import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";

/** Four stat tiles styled like paint-shade cards: a colour swatch that wipes in, then a caption row. */
const AboutStats = () => (
  <Reveal className="mt-[clamp(40px,5vw,64px)] grid grid-cols-4 gap-3.5 max-md:grid-cols-2 max-sm:gap-2.5">
    {ABOUT_STATS.map((stat) => (
      <div
        key={stat.id}
        className="group/chip rounded-[20px] border border-line bg-white px-2.5 pt-2.5 pb-4 transition duration-[550ms] ease-brand hover:-translate-y-2 hover:-rotate-[1.2deg] hover:shadow-[0_34px_50px_-30px_rgba(38,35,34,.45)]"
      >
        <div
          style={{ backgroundColor: stat.color, transitionDelay: `${stat.delay}s` }}
          className={clsx(
            "relative flex min-h-[clamp(150px,15vw,200px)] items-end overflow-hidden rounded-[13px] px-5 py-[18px] max-sm:min-h-[120px] max-sm:p-3.5",
            "[clip-path:inset(100%_0_0_0_round_13px)] [transition:clip-path_1.15s_cubic-bezier(.2,.7,.2,1)] group-data-[in=true]/rv:[clip-path:inset(0_0_0_0_round_13px)]",
            "after:absolute after:inset-0 after:-translate-x-full after:bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,.22)_50%,transparent_65%)] after:transition-transform after:duration-1000 after:ease-brand after:content-[''] group-hover/chip:after:translate-x-full",
            stat.darkText ? "text-charcoal" : "text-white"
          )}
        >
          <b className="font-display text-stat font-semibold">
            <CountUp to={stat.to} from={stat.from} />
            {stat.suffix && <em className="not-italic opacity-65">{stat.suffix}</em>}
          </b>
        </div>
        <div className="flex items-baseline justify-between gap-2.5 px-2 pt-3.5 font-body text-[14.5px] leading-[1.3] max-sm:flex-col max-sm:gap-1 max-sm:px-1">
          <b>{stat.label}</b>
          <span className="shrink-0 text-[12.5px] text-stone-grey tabular-nums">
            {stat.code}
          </span>
        </div>
      </div>
    ))}
  </Reveal>
);

export default AboutStats;
