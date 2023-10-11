import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ProductInterface } from "@interfaces/product.interface";

export interface ProductInnerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductInterface;
}
