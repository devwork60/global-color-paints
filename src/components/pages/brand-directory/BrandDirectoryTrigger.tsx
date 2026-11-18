"use client";

import { useBrandDirectory } from "@/context/BrandDirectoryContext";

interface BrandDirectoryTriggerProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

/** Button that opens the brand directory. Use for every "View All Brands" control. */
const BrandDirectoryTrigger: React.FC<BrandDirectoryTriggerProps> = ({
  className,
  style,
  children,
}) => {
  const { open } = useBrandDirectory();
  return (
    <button type="button" className={className} style={style} onClick={open}>
      {children}
    </button>
  );
};

export default BrandDirectoryTrigger;
