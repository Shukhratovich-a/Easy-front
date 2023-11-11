import React from "react";
import cn from "classnames";

import { ICategory } from "@interfaces/category.interface";
import { ISubcategory } from "@interfaces/subcategory.interface";

import { HomeCategoriesProps } from "./HomeCategories.props";

import { Button, CategoryCard, HTag } from "@components";

import styles from "./HomeCategories.module.scss";

export const HomeCategories = ({ className, categories }: HomeCategoriesProps): JSX.Element => {
  const renderCategories = (categories: ICategory[]) => {
    return (
      <ul className={cn(styles.categories, className)}>
        {categories.map((category) => {
          const subcategories = [...category.subcategories].slice(0, 5);

          return category.subcategories.length ? (
            <li className={cn(styles.category)} key={category.id}>
              <div className={cn(styles.category__top)}>
                <HTag className={cn(styles.category__title)} tag="h2" appearance="h3">
                  {category.title}
                </HTag>
              </div>

              {renderSubcategories(subcategories, category.alias)}
            </li>
          ) : null;
        })}
      </ul>
    );
  };

  const renderSubcategories = (subcategories: ISubcategory[], categoryAlias: string) => {
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

  return (
    <>
      {renderCategories(categories)}

      <div className={cn(styles.categories__bottom)}>
        <Button className={cn(styles.categories__bottom__button)} size="large" appearance="neutral">
          Нет того, что ищу
        </Button>
      </div>
    </>
  );
};
