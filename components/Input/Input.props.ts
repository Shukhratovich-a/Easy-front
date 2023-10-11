import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  placeholderType?: "visible" | "hidden";

  icon?: JSX.Element;

  error?: FieldError;
}
