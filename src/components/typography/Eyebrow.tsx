import clsx from "clsx";

type EyebrowTone = "brand" | "gold" | "light" | "hero" | "kicker";

interface EyebrowProps {
  children: React.ReactNode;
  tone?: EyebrowTone;
  className?: string;
}

const brush = "after:bg-current after:opacity-50";

const tones: Record<EyebrowTone, string> = {
  brand: `text-eyebrow text-hs ${brush}`,
  gold: `text-eyebrow text-bw-2 ${brush}`,
  light: `text-eyebrow text-white ${brush}`,
  /** Gold, slightly smaller: the "Recommended for you" label on dark photo cards. */
  kicker: `text-[14.5px] text-bw-2 ${brush}`,
  /** White text with a gold brush stroke, used over the hero photo. */
  hero: "text-[16.5px] text-white [text-shadow:0_1px_14px_rgba(0,0,0,.35)] after:bg-bw-2 after:opacity-90",
};

/** Section label with a hand-painted brush stroke underneath. */
const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  tone = "brand",
  className,
}) => (
  <p
    className={clsx(
      "relative inline-block w-max max-w-full pb-2.5 font-body leading-[1.3] font-semibold tracking-[.005em]",
      "after:absolute after:-right-1.5 after:-left-0.5 after:bottom-0 after:h-2 after:content-['']",
      "after:mask-[url(/assets/icons/brush-stroke.svg)] after:mask-size-[100%_100%] after:mask-center after:mask-no-repeat",
      tones[tone],
      className
    )}
  >
    {children}
  </p>
);

export default Eyebrow;
