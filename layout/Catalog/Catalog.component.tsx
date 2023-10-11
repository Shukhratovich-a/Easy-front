import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { CategoryInterface } from "@interfaces/category.interface";

import { AppContext } from "@contexts/app.context";
import { CatalogContext } from "@contexts/catalog.context";

import { Modal, CatalogCard } from "@components";

import Logo from "@icons/logo.svg";
import Close from "@icons/catalog-close.svg";

import styles from "./Catalog.module.scss";

export const Catalog = () => {
  const { isOpen, setIsOpen } = React.useContext(CatalogContext);
  const { categories } = React.useContext(AppContext);

  const [currentCategory, setCurrentCategory] = React.useState<CategoryInterface>(categories[0]);
  const { i18n } = useTranslation();
  const { query } = useRouter();

  const handleClose = () => {
    if (!setIsOpen) return;

    setIsOpen(false);
  };

  React.useEffect(() => {
    setCurrentCategory(categories.find((category) => category.alias === query.categoryAlias) || categories[0]);
  }, [isOpen, categories, query]);

  const handleClick = (category: CategoryInterface) => {
    setCurrentCategory(category);
  };

  return (
    <Modal className={cn(styles.catalog)} animation="swap" isOpen={isOpen} handleClose={handleClose}>
      <div className={cn(styles.catalog__header)}>
        <Logo className={cn(styles.catalog__link)} onClick={handleClose} />

        <button className={cn(styles.catalog__header__button)} onClick={handleClose}>
          <Close />
        </button>
      </div>

      <div className={cn(styles.catalog__inner)}>
        <ul className={cn(styles.catalog__list)}>
          {!!categories.length &&
            categories.map((category) =>
              !!category.subcategories.length ? (
                <li className={cn(styles.catalog__item)} key={category.id}>
                  <CatalogCard
                    className={cn(styles.catalog__item__card)}
                    category={category}
                    isActive={currentCategory.id === category.id}
                    onClick={() => handleClick(category)}
                  />
                </li>
              ) : null
            )}
        </ul>

        <ul className={cn(styles.catalog__list)}>
          {currentCategory.subcategories.map((subcategory) => (
            <li className={cn(styles.catalog__item)} key={subcategory.id}>
              <Link
                className={cn(styles.catalog__item__link)}
                href={{ pathname: `/category/${currentCategory.alias}/${subcategory.alias}` }}
                hrefLang={i18n.language}
              >
                <CatalogCard
                  className={cn(styles.catalog__item__card)}
                  category={subcategory}
                  isActive={query.subcategoryAlias === subcategory.alias}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};
