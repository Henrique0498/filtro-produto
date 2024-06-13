import { SelectHTMLAttributes } from "react";
import styles from "./select.module.css";

interface InSelect
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "value"> {
  label: string;
  value: string | null;
  options: TypeSelectOption[];
}

export type TypeSelectOption = {
  id: string | number;
  value: string | number;
  label: string | number;
};

export function Select({ label, onChange, options, ...props }: InSelect) {
  return (
    <div className={styles.container}>
      <label htmlFor={props.id}>{label}</label>
      <select {...props} value={props.value ?? "none"} onChange={onChange}>
        <option value="none">Nenhum valor</option>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
