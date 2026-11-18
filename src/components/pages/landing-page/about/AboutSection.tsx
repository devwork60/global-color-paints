import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import AboutAdvantages from "./AboutAdvantages";
import AboutCta from "./AboutCta";
import AboutIntro from "./AboutIntro";
import AboutProjects from "./AboutProjects";
import AboutStats from "./AboutStats";
import AboutStory from "./AboutStory";
import AboutTrust from "./AboutTrust";
import SectorLedger from "./SectorLedger";

/** HOME-03: the company story: intro, stats, story, advantages, featured projects, sector
    portfolio, trusted-by strip and the closing call to action. */
const AboutSection = () => (
  <section
    id="about"
    className="relative isolate overflow-hidden bg-paper py-[clamp(80px,10vw,140px)] before:absolute before:inset-x-0 before:top-0 before:h-1.5 before:[background-image:var(--rain)] before:content-[''] after:absolute after:-top-40 after:-right-[220px] after:-z-10 after:size-[620px] after:rounded-full after:bg-[radial-gradient(closest-side,rgba(224,165,38,.16),transparent)] after:content-['']"
  >
    <Container>
      <AboutIntro />
      <AboutStats />
      <AboutStory />
      <AboutAdvantages />
      <AboutProjects />
      <Reveal className="mt-[clamp(64px,8vw,108px)]">
        <SectorLedger />
      </Reveal>
      <Reveal>
        <AboutTrust />
      </Reveal>
      <Reveal>
        <AboutCta />
      </Reveal>
    </Container>
  </section>
);

export default AboutSection;
