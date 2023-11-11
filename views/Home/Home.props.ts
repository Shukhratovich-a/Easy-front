import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ICategory } from "@interfaces/category.interface";

export interface HomeViewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  categories: ICategory[];
}
