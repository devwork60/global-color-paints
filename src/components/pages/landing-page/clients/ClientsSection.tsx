import { CLIENTS_HEAD } from "@/constant/landingPage/clientsData";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/typography/Eyebrow";
import MainHeading from "@/components/typography/MainHeading";
import Paragraph from "@/components/typography/Paragraph";
import Reveal from "@/components/ui/Reveal";
import ClientLoop from "./ClientLoop";

/** HOME-08: "Our clients". A split heading with two headline figures, then an endless logo strip. */
const ClientsSection = () => (
  <section
    id="clients"
    className="relative isolate overflow-hidden border-y border-line bg-white py-[clamp(72px,9vw,124px)] before:absolute before:-top-[220px] before:-left-[180px] before:-z-10 before:size-[560px] before:rounded-full before:bg-[radial-gradient(closest-side,rgba(224,165,38,.12),transparent)] before:content-['']"
  >
    <Container>
      <Reveal className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] items-end gap-x-[clamp(32px,5vw,88px)] gap-y-6 max-md:grid-cols-1">
        <div>
          <Eyebrow>{CLIENTS_HEAD.eyebrow}</Eyebrow>
          <MainHeading size="split" className="mt-4 max-w-[14ch] max-md:max-w-none">
            {CLIENTS_HEAD.title} <span className="text-hs">{CLIENTS_HEAD.titleAccent}</span>
          </MainHeading>
        </div>
        <div>
          <Paragraph className="max-w-[42ch]">{CLIENTS_HEAD.text}</Paragraph>
          <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            {CLIENTS_HEAD.meta.map((item) => (
              <div key={item.label}>
                <b className="block font-display text-[clamp(28px,2.8vw,38px)] leading-none font-semibold tracking-[-0.04em]">
                  {item.value}
                </b>
                <span className="mt-1.5 block font-body text-sm leading-[1.65] text-stone-grey">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Container>
    <Reveal>
      <ClientLoop />
    </Reveal>
  </section>
);

export default ClientsSection;
