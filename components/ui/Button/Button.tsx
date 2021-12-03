import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => <button className={styles.button} {...props} />;
