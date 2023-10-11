import cn from "classnames";

import { CategoryProps } from "./Category.props";

import { ProductsList } from "@sections";

import { CategoryMenu, HTag, ProductsEmpty } from "@components";

import styles from "./Category.module.scss";

export const CategoryView = ({ category, subcategory }: CategoryProps) => {
  return (
    <div className={cn(styles.view)}>
      <div className={cn(styles.view__top)}>
        <HTag tag="h2" appearance="h1">
          {category.title}
        </HTag>

        <span className={cn(styles.view__top__count)}>Продуктов: {category.productsTotal}</span>
      </div>

      <CategoryMenu className={cn(styles.view__menu)} subcategories={category.subcategories} />

      {!!subcategory.productsTotal ? (
        <ProductsList className={cn(styles.view__list)} subcategory={subcategory} />
      ) : (
        <ProductsEmpty />
      )}
    </div>
  );
};
