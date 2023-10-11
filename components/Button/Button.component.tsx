import cn from "classnames";

import { ButtonProps } from "./Button.props";

import styles from "./Button.module.scss";

export const Button = ({
  className,
  children,
  size = "medium",
  mode = "primary",
  appearance = "regular",
  iconSide = "left",
  icon,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, styles[`button--${size}`], styles[`button--${appearance}--${mode}`], className)}
      {...props}
    >
      {iconSide === "left" && icon}

      <span className={cn(styles[`button__inner`], styles[`button--${size}__inner`])}>{children}</span>

      {iconSide === "right" && icon}
    </button>
  );
};
