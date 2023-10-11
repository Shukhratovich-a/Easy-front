import { DetailedHTMLProps, HTMLAttributes } from "react";

import { SubcategoryInterface } from "@interfaces/subcategory.interface";

export interface CategoryMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  subcategories: SubcategoryInterface[];
}
