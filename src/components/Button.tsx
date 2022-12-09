import { ButtonHTMLAttributes, ReactNode, useMemo } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  variant?: "primary" | "secondary" | "success" | "alert" | "info" | "dark";
  size?: "small" | "medium";
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant = "primary",
  size = "medium",
  children,
  ...props
}: ButtonProps) => {
  const stylesClassnames = useMemo(() => {
    return `${styles[variant]} ${styles[size]}`;
  }, [variant, size]);

  return (
    <button className={stylesClassnames} {...props}>
      {children}
    </button>
  );
};

export default Button;
