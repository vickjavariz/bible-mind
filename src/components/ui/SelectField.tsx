import type { ChangeEvent, ReactNode } from "react";

interface SelectFieldProps {
  label: string;
  placeholder: string;
  value: string;
  children: ReactNode;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

export default function SelectField({
  label,
  placeholder,
  value,
  children,
  onChange,
  className,
}: SelectFieldProps) {
  const mergedClassName = `label flex flex-col items-start ${className || ""}`;

  return (
    <label className={mergedClassName}>
      <span className="text-sm font-bold">{label.toUpperCase()}</span>
      <select
        className="select w-full bg-base-300 shadow-sm"
        value={value}
        onChange={onChange}
      >
        <option disabled={true} value="">
          {placeholder}
        </option>
        {children}
      </select>
    </label>
  );
}
