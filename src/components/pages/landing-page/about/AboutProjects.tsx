import { PROJECTS_HEAD } from "@/constant/landingPage/projectsData";
import SectionHead from "@/components/layout/SectionHead";
import Reveal from "@/components/ui/Reveal";
import ProjectShowcase from "./ProjectShowcase";

/** "Featured work": heading plus the auto-advancing project slideshow. Its id (#projects) is a link target. */
const AboutProjects = () => (
  <div id="projects" className="mt-[clamp(72px,9vw,124px)] scroll-mt-24">
    <Reveal>
      <SectionHead
        eyebrow={PROJECTS_HEAD.eyebrow}
        title={PROJECTS_HEAD.title}
        description={PROJECTS_HEAD.description}
      />
    </Reveal>
    <Reveal>
      <ProjectShowcase />
    </Reveal>
  </div>
);

export default AboutProjects;
