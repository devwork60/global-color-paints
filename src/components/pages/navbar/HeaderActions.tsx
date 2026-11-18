import clsx from "clsx";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/constant/siteData";
import Button from "@/components/button/Button";
import Logo from "./Logo";
import MobileMenuContent from "./MobileMenuContent";
import MobileNav from "./MobileNav";
import { iconButtonClass } from "./navStyles";

const callLabel = `Call us on ${SITE.phone}`;

/** Right side of the header: phone, dealer CTA and (on mobile) call + burger buttons. */
const HeaderActions = () => (
  <div className="flex items-center gap-[18px] max-md:ml-auto max-md:gap-2.5">
    <a
      href={SITE.phoneHref}
      aria-label={callLabel}
      title={`Call ${SITE.phone}`}
      className="group/ph flex items-center text-charcoal no-underline group-data-[surface=over]/hdr:text-white max-lg:hidden"
    >
      <span className="grid size-11 place-items-center rounded-full border border-line bg-white transition duration-200 group-hover/ph:scale-[1.06] group-data-[surface=over]/hdr:border-white/30 group-data-[surface=over]/hdr:bg-white/[.12]">
        <Phone aria-hidden="true" className="size-[17px]" />
      </span>
    </a>
    <Button
      href="#dealer"
      icon={<ArrowRight />}
      className="group-data-[surface=over]/hdr:bg-white group-data-[surface=over]/hdr:text-charcoal max-md:hidden"
    >
      Become a Dealer
    </Button>
    <a
      href={SITE.phoneHref}
      aria-label={callLabel}
      className={clsx(iconButtonClass, "hidden max-md:inline-flex")}
    >
      <Phone aria-hidden="true" className="size-5" />
    </a>
    <MobileNav logo={<Logo />}>
      <MobileMenuContent />
    </MobileNav>
  </div>
);

export default HeaderActions;
