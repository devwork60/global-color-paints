import type { ReactNode } from "react";

interface FieldShellProps {
  id: string;
  label?: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}

export const fieldControlClass =
  "w-full rounded-field border-[1.5px] bg-paper px-3.5 font-body text-base font-medium text-charcoal transition-colors duration-200 outline-none focus:border-charcoal";

export const fieldBorder = (error?: string) =>
  error ? "border-hs" : "border-stone";

/** Shared label + control + error layout for every form field. */
const FieldShell = ({ id, label, required, error, children }: FieldShellProps) => (
  <div className="grid content-start gap-1.5">
    {label && (
      <label htmlFor={id} className="font-body text-[13.5px] leading-[1.2] font-semibold">
        {label}
        {required && <em className="text-hs not-italic"> *</em>}
      </label>
    )}
    {children}
    {error && (
      <span id={`${id}-error`} className="text-[13px] text-hs">
        {error}
      </span>
    )}
  </div>
);

export default FieldShell;
