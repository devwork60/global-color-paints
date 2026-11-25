import { Clock, Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";
import { SITE, whatsappUrl } from "@/constant/siteData";
import PlaceholderTag from "@/components/ui/PlaceholderTag";
import FooterColumn, { footerLinkClass } from "./FooterColumn";

const Item = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <li className="flex items-start gap-3 text-[15px]">
    <span className="mt-1 shrink-0 text-bw-2 [&>svg]:size-[18px] [&>svg]:stroke-[1.75]">
      {icon}
    </span>
    <span>{children}</span>
  </li>
);

/** "Get in touch" column. Working hours is still marked to-be-supplied, as in the source design. */
const FooterContact = () => (
  <FooterColumn title="Get in touch">
    <Item icon={<MapPin aria-hidden="true" />}>{SITE.address}</Item>
    <Item icon={<Phone aria-hidden="true" />}>
      <a href={SITE.phoneHref} className={footerLinkClass}>
        {SITE.phone}
      </a>
    </Item>
    <Item icon={<MessageCircleMore aria-hidden="true" />}>
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
        Chat on WhatsApp
      </a>
    </Item>
    <Item icon={<Mail aria-hidden="true" />}>
      <a href={SITE.emailHref} className={`${footerLinkClass} [overflow-wrap:anywhere]`}>
        {SITE.email}
      </a>
    </Item>
    <Item icon={<Clock aria-hidden="true" />}>
      Working hours <PlaceholderTag />
    </Item>
  </FooterColumn>
);

export default FooterContact;
