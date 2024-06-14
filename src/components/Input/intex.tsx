import { InputHTMLAttributes } from "react";

import styles from "./input.module.css";

interface InInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className = "", ...props }: InInput) {
  return (
    <div className={`${styles.container} ${className}`}>
      <label htmlFor={props.id} className={props.value ? "active" : ""}>
        {label}
      </label>
      <input {...props} />
    </div>
  );
}
