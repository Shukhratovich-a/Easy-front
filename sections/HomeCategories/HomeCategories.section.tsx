import cn from "classnames";

import { CategoryInterface } from "@interfaces/category.interface";
import { SubcategoryInterface } from "@interfaces/subcategory.interface";

import { HomeCategoriesProps } from "./HomeCategories.props";

import { CategoryCard, HTag } from "@components";

import styles from "./HomeCategories.module.scss";

export const HomeCategories = ({ className, categories }: HomeCategoriesProps): JSX.Element => {
  const renderCategories = (categories: CategoryInterface[]) => {
    return (
      <ul className={cn(styles.categories, className)}>
        {categories.map((category) =>
          category.subcategories.length ? (
            <li className={cn(styles.category)} key={category.id}>
              <HTag className={cn(styles.category__title)} tag="h2" appearance="h3">
                {category.title}
              </HTag>

              {renderSubcategories(category.subcategories, category.alias)}
            </li>
          ) : null
        )}
      </ul>
    );
  };

  const renderSubcategories = (subcategories: SubcategoryInterface[], categoryAlias: string) => {
    return (
      <ul className={cn(styles.subcategories, styles[`subcategories--${subcategories.length}`])}>
        {subcategories.map((subcategory) => (
          <li className={cn(styles.subcategory)} key={subcategory.id}>
            <CategoryCard categoryAlias={categoryAlias} subcategory={subcategory} />
          </li>
        ))}
      </ul>
    );
  };

  return renderCategories(categories);
};
