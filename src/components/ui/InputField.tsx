import { type ChangeEvent, useId } from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function InputField({
  label,
  placeholder,
  value,
  onChange,
  className,
}: InputFieldProps) {
  const id = useId();
  const mergedClassName = `label flex flex-col w-full items-start ${className || ""}`;

  return (
    <label className={mergedClassName}>
      {label}
      <input
        id={id}
        type="text"
        className="input w-full bg-base-300 shadow-sm"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
