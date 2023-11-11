import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ICategory } from "@interfaces/category.interface";
import { ISubcategory } from "@interfaces/subcategory.interface";

export interface CategoryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  category: ICategory;
  subcategory: ISubcategory;
}
