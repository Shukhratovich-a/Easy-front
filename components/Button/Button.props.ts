import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  appearance?: "regular" | "positive" | "negative" | "neutral" | "contrast";
  mode?: "primary" | "secondary" | "tertiary" | "outlined";

  icon?: JSX.Element;
  iconSide?: "left" | "right";
}
