import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export interface IconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: JSX.Element;
  appearance?: "primary" | "contrast";
}
