import clsx from "clsx";
import { useId, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import FieldShell, { fieldBorder, fieldControlClass } from "./FieldShell";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { label: string; value: string }[];
}

const SelectField = ({ label, error, options, required, className, id, ...rest }: SelectFieldProps) => {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <FieldShell id={fieldId} label={label} required={required} error={error}>
      <div className="relative">
        <select
          id={fieldId}
          aria-invalid={!!error}
          className={clsx(fieldControlClass, "h-[50px] appearance-none pr-10", fieldBorder(error), className)}
          {...rest}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-3.5 size-[18px] -translate-y-1/2 text-stone-grey"
        />
      </div>
    </FieldShell>
  );
};

export default SelectField;
