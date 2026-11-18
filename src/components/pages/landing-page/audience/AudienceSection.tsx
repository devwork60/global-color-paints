import { AUDIENCE_HEAD } from "@/constant/landingPage/audienceData";
import Section from "@/components/layout/Section";
import SectionHead from "@/components/layout/SectionHead";
import Reveal from "@/components/ui/Reveal";
import AudienceAccordion from "./AudienceAccordion";

/** "Find your way in": routes each kind of visitor to the right part of the site. */
const AudienceSection = () => (
  <Section id="for-you" className="border-y border-line bg-white">
    <Reveal>
      <SectionHead
        compact
        eyebrow={AUDIENCE_HEAD.eyebrow}
        title={AUDIENCE_HEAD.title}
        description={AUDIENCE_HEAD.description}
      />
    </Reveal>
    <Reveal>
      <AudienceAccordion />
    </Reveal>
  </Section>
);

export default AudienceSection;
