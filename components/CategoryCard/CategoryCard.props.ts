import { DetailedHTMLProps, HTMLAttributes } from "react";

import { SubcategoryInterface } from "@interfaces/subcategory.interface";

export interface CategoryCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  subcategory: SubcategoryInterface;
  categoryAlias: string;
}
