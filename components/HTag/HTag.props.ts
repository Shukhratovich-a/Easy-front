import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  appearance?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
