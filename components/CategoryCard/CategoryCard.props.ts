import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ISubcategory } from "@interfaces/subcategory.interface";

export interface CategoryCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  subcategory: ISubcategory;
  categoryAlias: string;
}
