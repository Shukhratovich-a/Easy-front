import Image from "next/image";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { DOMAIN } from "@helpers/api.helper";

import { CatalogCardProps } from "./CatalogCard.props";

import styles from "./CatalogCard.module.scss";

export const CatalogCard = ({ className, category, isActive, ...props }: CatalogCardProps): JSX.Element => {
  const { t } = useTranslation("catalog");

  return (
    <div
      className={cn(styles.card, className, {
        [styles["card--active"]]: isActive,
      })}
      {...props}
    >
      <Image
        className={cn(styles.card__image)}
        src={DOMAIN + category.icon}
        alt={category.title}
        width={48}
        height={48}
        priority
      />

      <h3 className={cn(styles.card__title)} title={category.title}>
        {category.title}
      </h3>

      <span className={cn(styles.card__count)}>
        {t("products")}: {category.productsTotal}
      </span>
    </div>
  );
};
