import Image from "next/image";
import Link from "next/link";
import type { BrandPanelData } from "@/constant/landingPage/brandsSectionData";
import ArrowCircle from "@/components/ui/ArrowCircle";
import Badge from "@/components/ui/Badge";
import CardDesc from "@/components/typography/CardDesc";
import CardHeading from "@/components/typography/CardHeading";

/** Large photo panel for a brand. Sibling panels share the row and the hovered one grows. */
const BrandPanel = ({ panel }: { panel: BrandPanelData }) => {
  const tint = (alpha: number) =>
    `color-mix(in srgb, ${panel.color} ${alpha}%, transparent)`;

  return (
    <Link
      href={panel.href}
      className="group/panel relative isolate min-w-0 flex-1 overflow-hidden rounded-panel text-white no-underline transition-[flex] duration-700 ease-brand max-md:h-[520px] max-md:flex-none max-sm:h-[500px] md:hover:flex-[1.35]"
    >
      <Image
        src={panel.image}
        alt={panel.imageAlt}
        fill
        sizes="(min-width: 1280px) 1200px, 100vw"
        className="-z-20 object-cover transition-transform duration-[1200ms] ease-brand group-hover/panel:scale-[1.06]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(180deg, ${tint(0)} 38%, ${tint(92)} 66%, ${panel.color} 100%)`,
        }}
      />
      <div className="absolute top-6 right-[26px] left-[26px] flex items-center justify-between">
        <Badge>{panel.badge}</Badge>
      </div>
      <div className="absolute inset-x-0 bottom-0 grid gap-3 p-[34px] max-sm:p-6">
        <CardHeading size="panel">{panel.name}</CardHeading>
        <CardDesc size="lg" tone="default" className="text-white">
          {panel.tagline}
        </CardDesc>
        <CardDesc size="md" tone="onDarkStrong" className="max-w-[40ch]">
          {panel.description}
        </CardDesc>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {panel.categories.map((category) => (
            <Badge key={category} variant="outline">
              {category}
            </Badge>
          ))}
        </div>
        <div className="mt-1.5 flex items-center justify-between border-t border-white/25 pt-4 font-body text-[15.5px] leading-none font-semibold">
          <span>{panel.cta}</span>
          <ArrowCircle color={panel.color} className="group-hover/panel:-rotate-45" />
        </div>
      </div>
    </Link>
  );
};

export default BrandPanel;
