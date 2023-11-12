import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface LanguageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "small" | "medium" | "large";
}
