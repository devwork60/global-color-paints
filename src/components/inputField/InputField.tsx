import clsx from "clsx";
import { useId, type InputHTMLAttributes } from "react";
import FieldShell, { fieldBorder, fieldControlClass } from "./FieldShell";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputField = ({ label, error, required, className, id, ...rest }: InputFieldProps) => {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <FieldShell id={fieldId} label={label} required={required} error={error}>
      <input
        id={fieldId}
        aria-invalid={!!error}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className={clsx(fieldControlClass, "h-[50px]", fieldBorder(error), className)}
        {...rest}
      />
    </FieldShell>
  );
};

export default InputField;
