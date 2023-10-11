import { DetailedHTMLProps, HTMLAttributes } from "react";

import { CategoryInterface } from "@interfaces/category.interface";
import { SubcategoryInterface } from "@interfaces/subcategory.interface";

export interface CatalogCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isActive?: boolean;
  category: CategoryInterface | SubcategoryInterface;
}
