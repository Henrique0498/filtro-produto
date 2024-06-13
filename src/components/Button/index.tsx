import { ButtonHTMLAttributes } from "react";

import styles from "./button.module.css";

interface InButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
}

export function Button({ children, size = "medium", ...props }: InButton) {
  return (
    <button
      {...props}
      className={`${styles.container} ${styles[size]} ${props.className ?? ""}`}
    >
      {children}
    </button>
  );
}
