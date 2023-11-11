import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CounterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  maxCount: number;
  count: number;
  setCount?: (count: number | "") => void;
}
