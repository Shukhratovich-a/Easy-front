import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ProductInterface } from "@interfaces/product.interface";

export interface ProductCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductInterface;
}
