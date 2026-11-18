import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/** Max-width content wrapper with the fluid page gutter. */
const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div className={clsx("mx-auto w-full max-w-wrap px-gutter", className)}>
    {children}
  </div>
);

export default Container;
