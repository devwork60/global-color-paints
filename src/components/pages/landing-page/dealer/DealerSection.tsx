import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import DealerForm from "./DealerForm";
import DealerIntro from "./DealerIntro";

/** HOME-07: dealer enquiry. A dark teal card with the pitch on the left and the form on the right. */
const DealerSection = () => (
  <section id="dealer" className="scroll-mt-24">
    <Container>
      <Reveal>
        <div className="relative isolate grid grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] gap-[clamp(24px,4vw,56px)] overflow-hidden rounded-[32px] bg-bw-deep p-[clamp(28px,5vw,64px)] text-white before:absolute before:-top-[120px] before:-right-[120px] before:-z-10 before:size-[420px] before:rounded-full before:bg-bw before:content-[''] after:absolute after:-bottom-40 after:left-[38%] after:-z-10 after:size-[300px] after:rounded-full after:border-[40px] after:border-[rgba(224,165,38,.18)] after:content-[''] max-md:grid-cols-1">
          <DealerIntro />
          <DealerForm />
        </div>
      </Reveal>
    </Container>
  </section>
);

export default DealerSection;
