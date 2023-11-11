import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ISubcategory } from "@interfaces/subcategory.interface";

export interface ProductsListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  subcategory: ISubcategory;
}
