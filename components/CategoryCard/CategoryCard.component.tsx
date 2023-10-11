import cn from "classnames";
import Link from "next/link";

import { DOMAIN } from "@helpers/api.helper";

import { CategoryCardProps } from "./CategoryCard.props";

import { HTag } from "@components";

import styles from "./CategoryCard.module.scss";

export const CategoryCard = ({ className, subcategory, categoryAlias, ...props }: CategoryCardProps): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className)}
      key={subcategory.id}
      style={{ backgroundImage: `url(${DOMAIN + subcategory.poster})` }}
      {...props}
    >
      <HTag className={cn(styles.card__title)} tag="h3" appearance="h4">
        <Link className={cn(styles.card__link)} href={`/category/${categoryAlias}/${subcategory.alias}`}>
          {subcategory.title}
        </Link>
      </HTag>
    </div>
  );
};
