import type { BrandMiniPanelData } from "@/constant/landingPage/brandsSectionData";
import Badge from "@/components/ui/Badge";
import CardDesc from "@/components/typography/CardDesc";
import CardHeading from "@/components/typography/CardHeading";

/** Compact solid-colour panel for a sister brand. In a `group/row` container, the hovered panel
    grows and its siblings shrink, like the photo panel above. */
const BrandMiniPanel = ({ panel }: { panel: BrandMiniPanelData }) => (
  <div
    style={{ backgroundColor: panel.color }}
    className="group/panel relative isolate min-w-0 flex-1 overflow-hidden rounded-panel text-white no-underline transition-[flex] duration-700 ease-brand before:absolute before:-top-[70px] before:-right-[70px] before:-z-10 before:size-[230px] before:rounded-full before:bg-white/10 before:transition-transform before:duration-[800ms] before:ease-brand before:content-[''] hover:before:scale-[1.55] max-md:h-[230px] max-md:flex-none md:hover:flex-[1.35] md:group-hover/row:[&:not(:hover)]:flex-[.8]"
  >
    <div className="absolute top-6 right-[26px] left-[26px] flex items-center justify-between">
      <Badge>{panel.badge}</Badge>
    </div>
    <div className="absolute inset-x-0 bottom-0 grid gap-3 p-[26px]">
      <CardHeading size="mini">{panel.name}</CardHeading>
      <CardDesc size="tag" tone="default" className="text-white">
        {panel.tagline}
      </CardDesc>
    </div>
  </div>
);

export default BrandMiniPanel;
