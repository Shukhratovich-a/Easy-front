import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";

import { CategoryMenuProps } from "./CategoryMenu.props";

import { CatalogCard } from "@components";

import styles from "./CategoryMenu.module.scss";

export const CategoryMenu = ({ className, subcategories, ...props }: CategoryMenuProps): JSX.Element => {
  const { pathname, query } = useRouter();

  return (
    <ul className={cn(styles.menu, className)} {...props}>
      {subcategories.map((subcategory) => (
        <li className={cn(styles.menu__item)} key={subcategory.id}>
          <Link
            className={cn(styles.menu__link)}
            href={{ pathname, query: { ...query, subcategoryAlias: subcategory.alias } }}
          >
            <CatalogCard
              className={cn(styles.menu__card)}
              category={subcategory}
              isActive={query.subcategoryAlias === subcategory.alias}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
