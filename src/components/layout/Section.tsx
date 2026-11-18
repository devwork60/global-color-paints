import clsx from "clsx";
import Container from "./Container";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

/** Standard vertical section rhythm wrapping a Container. */
const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  containerClassName,
}) => (
  <section id={id} className={clsx("py-section", className)}>
    <Container className={containerClassName}>{children}</Container>
  </section>
);

export default Section;
