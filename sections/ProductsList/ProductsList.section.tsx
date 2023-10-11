import Link from "next/link";
import cn from "classnames";

import { ProductsListProps } from "./ProductsList.props";

import { HTag, ProductCard } from "@components";

import styles from "./ProductsList.module.scss";

export const ProductsList = ({ subcategory }: ProductsListProps) => {
  return (
    <div className={cn(styles.products)}>
      <HTag className={cn(styles.products__top)} tag="h3" appearance="h3">
        {subcategory.title}
      </HTag>

      <ul className={cn(styles.products__list)}>
        {subcategory.products.map((product) => (
          <li className={cn(styles.product)} key={product.id}>
            <Link className={cn(styles.product__link)} href={`/product/${product.alias}`}>
              <ProductCard className={cn(styles.product__card)} product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
