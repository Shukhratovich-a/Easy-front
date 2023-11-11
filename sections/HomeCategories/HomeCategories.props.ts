import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ICategory } from "@interfaces/category.interface";

export interface HomeCategoriesProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  categories: ICategory[];
}
