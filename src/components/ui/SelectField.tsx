import { type ComponentProps, type ReactNode, useId } from "react";

interface SelectFieldProps extends ComponentProps<"select"> {
  label: string;
  placeholder: string;
  children: ReactNode;
  labelClassName?: string;
}

export default function SelectField({
  id: externalId,
  label,
  placeholder,
  className,
  labelClassName,
  defaultValue,
  children,
  ...props
}: SelectFieldProps) {
  const internalId = useId();
  const id = externalId ?? internalId;
  const mergedLabelClassName = `label flex flex-col items-start ${labelClassName || ""}`;
  const mergedSelectClassName = `select w-full bg-base-300 shadow-sm ${className || ""}`;

  return (
    <label className={mergedLabelClassName} htmlFor={id}>
      <span className="text-sm font-bold">{label.toUpperCase()}</span>
      <select
        {...props}
        id={id}
        className={mergedSelectClassName}
        defaultValue={defaultValue ?? ""}
      >
        <option disabled={true} value="">
          {placeholder}
        </option>
        {children}
      </select>
    </label>
  );
}
