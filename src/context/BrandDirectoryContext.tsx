"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface BrandDirectoryContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const BrandDirectoryContext = createContext<BrandDirectoryContextValue | null>(
  null
);

/** Shares the open state of the brand directory dialog with every "View All Brands" trigger. */
export const BrandDirectoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);
  return (
    <BrandDirectoryContext.Provider value={value}>
      {children}
    </BrandDirectoryContext.Provider>
  );
};

export const useBrandDirectory = () => {
  const ctx = useContext(BrandDirectoryContext);
  if (!ctx) {
    throw new Error("useBrandDirectory must be used inside BrandDirectoryProvider");
  }
  return ctx;
};
