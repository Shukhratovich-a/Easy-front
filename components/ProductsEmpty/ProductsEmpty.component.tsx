import { useTranslation } from "next-i18next";
import cn from "classnames";

import { ProductsEmptyProps } from "./ProductsEmpty.props";

import { HTag } from "@components";

import Empty from "@icons/category-empty.svg";

import styles from "./ProductsEmpty.module.scss";

export const ProductsEmpty = ({ className, ...props }: ProductsEmptyProps): JSX.Element => {
  const { t } = useTranslation("errors");

  return (
    <div className={cn(styles.info, className)} {...props}>
      <Empty className={cn(styles.info__icon)} />

      <HTag className={cn(styles.info__title)} tag="h4" appearance="h2">
        {t("product.empty.title")}
      </HTag>

      <p className={cn(styles.info__description)}>{t("product.empty.description")}</p>
    </div>
  );
};
