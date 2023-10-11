import cn from "classnames";

import { ProductProps } from "./Product.props";

import { ProductInner } from "@sections";

import styles from "./Product.module.scss";

export const ProductView = ({ className, product, ...props }: ProductProps): JSX.Element => {
  return (
    <div className={cn(styles.view)}>
      <ProductInner product={product} />
    </div>
  );
};
