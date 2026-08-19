import { type ComponentProps, useId } from "react";

interface InputFieldProps extends ComponentProps<"input"> {
  label: string;
  placeholder: string;
  labelClassName?: string;
}

export default function InputField({
  id: externalId,
  label,
  placeholder,
  className,
  labelClassName,
  ...props
}: InputFieldProps) {
  const internalId = useId();
  const id = externalId ?? internalId;
  const mergedLabelClassName = `label flex flex-col w-full items-start ${labelClassName || ""}`;
  const mergedInputClassName = `input w-full bg-base-300 shadow-sm ${className || ""}`;

  return (
    <label className={mergedLabelClassName} htmlFor={id}>
      {label}
      <input
        {...props}
        id={id}
        type="text"
        className={mergedInputClassName}
        placeholder={placeholder}
      />
    </label>
  );
}
