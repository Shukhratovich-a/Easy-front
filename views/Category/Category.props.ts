import { DetailedHTMLProps, HTMLAttributes } from "react";

import { CategoryInterface } from "@interfaces/category.interface";
import { SubcategoryInterface } from "@interfaces/subcategory.interface";

export interface CategoryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  category: CategoryInterface;
  subcategory: SubcategoryInterface;
}
