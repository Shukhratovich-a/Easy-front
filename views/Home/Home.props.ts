import { DetailedHTMLProps, HTMLAttributes } from "react";

import { CategoryInterface } from "@interfaces/category.interface";

export interface HomeViewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  categories: CategoryInterface[];
}
