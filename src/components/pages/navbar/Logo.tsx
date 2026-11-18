import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/constant/siteData";

const content = (
  <>
    <Image
      src="/assets/logos/global-colors-logo.webp"
      alt=""
      width={358}
      height={360}
      priority
      className="h-[58px] w-auto shrink-0 drop-shadow-[0_4px_10px_rgba(0,0,0,.16)] transition-[height,transform] duration-300 group-hover/logo:-rotate-[10deg] group-hover/logo:scale-105 group-data-[scrolled=true]/hdr:h-[50px] max-[420px]:h-[42px] max-[420px]:group-data-[scrolled=true]/hdr:h-[42px]"
    />
    <span
      aria-hidden="true"
      className="font-display text-xl leading-none font-bold tracking-[-0.02em] whitespace-nowrap transition-colors duration-300 group-data-[surface=over]/hdr:text-white max-[420px]:text-[17px]"
    >
      Global Colors
      <small className="mt-1 block font-body text-[11.5px] leading-[1.4] font-medium tracking-[0.32em] text-stone-grey transition-colors duration-300 group-data-[surface=over]/hdr:text-white/70">
        Company
      </small>
    </span>
  </>
);

const classes = "group/logo flex shrink-0 items-center gap-[11px] no-underline";

/** Logo + wordmark. Pass `href` for the header link; omit it for the static copy in the mobile menu. */
const Logo = ({ href }: { href?: string }) =>
  href ? (
    <Link href={href} aria-label={`${SITE.name}, home`} className={classes}>
      {content}
    </Link>
  ) : (
    <span role="img" aria-label={SITE.name} className={classes}>
      {content}
    </span>
  );

export default Logo;
