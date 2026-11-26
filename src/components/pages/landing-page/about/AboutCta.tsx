import { Mail, Phone } from "lucide-react";
import { whatsappUrl } from "@/constant/siteData";
import { ABOUT_CTA } from "@/constant/landingPage/sectorsData";
import Button from "@/components/button/Button";
import SocialIcon from "@/components/icons/SocialIcons";
import CardHeading from "@/components/typography/CardHeading";
import Paragraph from "@/components/typography/Paragraph";

/** Closing call to action: heading and copy on the left, phone, WhatsApp and email buttons on the right. */
const AboutCta = () => (
  <div className="relative isolate mt-[clamp(48px,6vw,80px)] flex flex-wrap items-end justify-between gap-x-10 gap-y-7 overflow-hidden rounded-[30px] bg-hs p-[clamp(32px,4.5vw,64px)] text-white after:absolute after:-top-[120px] after:-right-[90px] after:-z-10 after:size-[380px] after:rounded-full after:border-[44px] after:border-white/[.08] after:content-['']">
    <div>
      <span className="inline-flex items-center gap-2.5 font-body text-sm leading-none font-semibold text-white/80">
        {ABOUT_CTA.eyebrow}
      </span>
      <CardHeading size="banner" className="mt-3.5 mb-3 max-w-[14ch]">
        {ABOUT_CTA.title}
      </CardHeading>
      <Paragraph tone="onDark" className="max-w-[46ch]">
        {ABOUT_CTA.text}
      </Paragraph>
    </div>
    <div className="flex flex-wrap gap-3">
      <Button variant="light" href={ABOUT_CTA.phone.href} icon={<Phone aria-hidden="true" />}>
        {ABOUT_CTA.phone.label}
      </Button>
      <Button
        variant="line-light"
        href={whatsappUrl(ABOUT_CTA.whatsapp.message)}
        target="_blank"
        rel="noopener noreferrer"
        icon={<SocialIcon name="whatsapp" />}
      >
        {ABOUT_CTA.whatsapp.label}
      </Button>
      <Button variant="line-light" href={ABOUT_CTA.email.href} icon={<Mail aria-hidden="true" />}>
        {ABOUT_CTA.email.label}
      </Button>
    </div>
  </div>
);

export default AboutCta;
