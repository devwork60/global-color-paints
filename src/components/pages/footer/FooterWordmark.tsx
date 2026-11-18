import Image from "next/image";
import { SITE } from "@/constant/siteData";

/** Oversized logo + wordmark at the bottom of the footer. */
const FooterWordmark = () => (
  <div className="flex items-center gap-[clamp(14px,2.2vw,30px)] pt-[clamp(28px,4vw,48px)]">
    <Image
      src="/assets/logos/global-colors-logo.webp"
      alt={`${SITE.name} logo`}
      width={358}
      height={360}
      className="h-auto w-[clamp(68px,10vw,140px)] shrink-0 drop-shadow-[0_10px_24px_rgba(0,0,0,.35)]"
    />
    <span className="font-display text-[clamp(34px,7.2vw,108px)] leading-[.92] font-bold tracking-[-0.045em] text-white">
      Global Colors
      <small className="mt-[.3em] block font-body text-[clamp(11px,1.15vw,15px)] leading-none font-semibold tracking-[.3em] text-white/60 uppercase">
        Company · Since 1992
      </small>
    </span>
  </div>
);

export default FooterWordmark;
