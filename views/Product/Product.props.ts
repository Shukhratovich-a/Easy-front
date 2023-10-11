import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ProductInterface } from "@interfaces/product.interface";

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductInterface;
}
