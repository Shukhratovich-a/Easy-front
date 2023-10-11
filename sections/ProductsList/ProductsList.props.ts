import { DetailedHTMLProps, HTMLAttributes } from "react";

import { SubcategoryInterface } from "@interfaces/subcategory.interface";

export interface ProductsListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  subcategory: SubcategoryInterface;
}
