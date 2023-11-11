import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ISubcategory } from "@interfaces/subcategory.interface";

export interface CategoryMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  subcategories: ISubcategory[];
}
