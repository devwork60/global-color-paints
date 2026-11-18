import { ArrowRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/constant/siteData";
import Button from "@/components/button/Button";
import SocialIcon from "@/components/icons/SocialIcons";
import SubHeading from "@/components/typography/SubHeading";

/** Footer call-to-action: headline, dealer button and social links. */
const FooterCta = () => (
  <div>
    <SubHeading className="max-w-[14ch] text-white">
      Have a project or a shop? Let&apos;s talk.
    </SubHeading>
    <Button href="#dealer" variant="gold" icon={<ArrowRight />} className="mt-[22px]">
      Become a Dealer
    </Button>
    <div className="mt-[22px] flex gap-2.5">
      {SOCIAL_LINKS.map((link) => {
        const external = link.href.startsWith("http");
        return (
          <a
            key={link.icon}
            href={link.href}
            aria-label={link.label}
            {...(external && { target: "_blank", rel: "noopener" })}
            className="grid size-[42px] place-items-center rounded-full border border-white/20 no-underline transition duration-200 hover:bg-white hover:text-charcoal"
          >
            <SocialIcon name={link.icon} className="size-[18px]" />
          </a>
        );
      })}
    </div>
  </div>
);

export default FooterCta;
