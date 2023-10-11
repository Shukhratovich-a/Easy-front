import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { getCategoryAlias } from "@api/category";
import { getSubcategoryAlias } from "@api/subcategory";
import { getProductAlias } from "@api/products";

import { LanguageProps } from "./Language.props";

import { Button } from "@components";

import Marker from "@icons/language-marker.svg";

import styles from "./Language.module.scss";

export const Language = ({ className, ...props }: LanguageProps) => {
  const { i18n } = useTranslation();
  const { push, pathname, query } = useRouter();

  const changeLanguage = async (language: "en" | "ru") => {
    if (query.categoryAlias) {
      const {
        data: { alias },
      } = await getCategoryAlias(language, { alias: query.categoryAlias as string });

      query.categoryAlias = alias;
    }
    if (query.subcategoryAlias) {
      const {
        data: { alias },
      } = await getSubcategoryAlias(language, { alias: query.subcategoryAlias as string });

      query.subcategoryAlias = alias;
    }
    if (query.productAlias) {
      const {
        data: { alias },
      } = await getProductAlias(language, { alias: query.productAlias as string });

      query.productAlias = alias;
    }

    i18n.changeLanguage(language);

    push({ pathname, query }, "", { locale: language });
  };

  return (
    <div className={cn(styles.language, className)} {...props}>
      <Button
        className={cn(styles.language__button)}
        size="large"
        appearance="regular"
        mode="secondary"
        iconSide="right"
        icon={<Marker />}
        onClick={() => changeLanguage(i18n.language === "en" ? "ru" : "en")}
      >
        {i18n.language}
      </Button>
    </div>
  );
};
