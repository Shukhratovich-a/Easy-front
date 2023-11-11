import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IProduct } from "@interfaces/product.interface";

export interface ProductInnerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct;
}
