import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ICategory } from "@interfaces/category.interface";
import { ISubcategory } from "@interfaces/subcategory.interface";

export interface CatalogCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isActive?: boolean;
  category: ICategory | ISubcategory;
}
