import Section from "@/components/layout/Section";
import Reveal from "@/components/ui/Reveal";
import ColourHead from "./ColourHead";
import ColourStudio from "./ColourStudio";

/** HOME-06: try any of 54 shades on a living-room wall. */
const ColourSection = () => (
  <Section id="colour" className="relative overflow-hidden bg-charcoal text-white">
    <Reveal>
      <ColourHead />
    </Reveal>
    <Reveal>
      <ColourStudio />
    </Reveal>
  </Section>
);

export default ColourSection;
