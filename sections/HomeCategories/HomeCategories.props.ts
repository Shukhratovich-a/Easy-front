import { DetailedHTMLProps, HTMLAttributes } from "react";

import { CategoryInterface } from "@interfaces/category.interface";

export interface HomeCategoriesProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  categories: CategoryInterface[];
}
