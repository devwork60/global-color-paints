import clsx from "clsx";
import { useId, type TextareaHTMLAttributes } from "react";
import FieldShell, { fieldBorder, fieldControlClass } from "./FieldShell";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextArea = ({ label, error, required, rows = 4, className, id, ...rest }: TextAreaProps) => {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <FieldShell id={fieldId} label={label} required={required} error={error}>
      <textarea
        id={fieldId}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className={clsx(fieldControlClass, "resize-none py-3", fieldBorder(error), className)}
        {...rest}
      />
    </FieldShell>
  );
};

export default TextArea;
