import type { ChangeEvent, ReactNode } from "react";

interface SelectFieldProps {
  label: string;
  placeholder: string;
  children: ReactNode;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectField({
  label,
  placeholder,
  children,
  onChange,
}: SelectFieldProps) {
  return (
    <label className="label flex flex-col items-start">
      <span className="text-sm font-bold">{label.toUpperCase()}</span>
      <select className="select w-full" defaultValue="" onChange={onChange}>
        <option disabled={true} value="">
          {placeholder}
        </option>
        {children}
      </select>
    </label>
  );
}
