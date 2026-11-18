interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

/** Footer heading + list. Every footer link group uses this. */
const FooterColumn: React.FC<FooterColumnProps> = ({ title, children, className }) => (
  <div className={className}>
    <h4 className="mb-[18px] font-body text-sm leading-[1.3] font-medium tracking-[0.14em] text-white uppercase">
      {title}
    </h4>
    <ul className="m-0 grid list-none gap-2.5 p-0">{children}</ul>
  </div>
);

export const footerLinkClass = "no-underline hover:text-white";

export default FooterColumn;
