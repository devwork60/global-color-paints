import type { Reason } from "@/constant/landingPage/whyData";
import CardDesc from "@/components/typography/CardDesc";
import CardHeading from "@/components/typography/CardHeading";
import Card from "@/components/ui/Card";
import IconBadge from "@/components/ui/IconBadge";
import Reveal from "@/components/ui/Reveal";

/** One of the four short reasons: icon, title (pushed to the bottom) and a line of detail. */
const ReasonCard = ({ reason }: { reason: Reason }) => {
  const Icon = reason.icon;
  const dark = reason.variant === "dark";
  return (
    <Reveal className="col-span-3 max-lg:col-span-6 max-sm:col-span-12">
      <Card variant={reason.variant} className="h-full min-h-60 max-sm:min-h-0">
        <IconBadge tone={dark ? "onDark" : "light"}>
          <Icon aria-hidden="true" />
        </IconBadge>
        <CardHeading className="mt-auto">{reason.title}</CardHeading>
        <CardDesc tone={dark ? "onDark" : "default"}>{reason.description}</CardDesc>
      </Card>
    </Reveal>
  );
};

export default ReasonCard;
