import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { LanguageEnum } from "@helpers/language.helper";

import { getCategoryAlias } from "@api/category";
import { getSubcategoryAlias } from "@api/subcategory";
import { getProductAlias } from "@api/products";

import { LanguageProps } from "./Language.props";

import { Button } from "@components";

import Marker from "@icons/language-marker.svg";

import styles from "./Language.module.scss";

export const Language = ({ className, size = "large", ...props }: LanguageProps) => {
  const { i18n } = useTranslation();
  const { push, pathname, query } = useRouter();

  const changeLanguage = async (language: LanguageEnum) => {
    if (query.categoryAlias) {
      const {
        data: {
          data: { alias },
        },
      } = await getCategoryAlias(language, { alias: query.categoryAlias as string });

      query.categoryAlias = alias;
    }
    if (query.subcategoryAlias) {
      const {
        data: {
          data: { alias },
        },
      } = await getSubcategoryAlias(language, { alias: query.subcategoryAlias as string });

      query.subcategoryAlias = alias;
    }
    if (query.productAlias) {
      const {
        data: {
          data: { alias },
        },
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
        size={size}
        appearance="regular"
        mode="secondary"
        iconSide="right"
        icon={<Marker />}
        onClick={() => changeLanguage(i18n.language === LanguageEnum.EN ? LanguageEnum.RU : LanguageEnum.EN)}
      >
        {i18n.language}
      </Button>
    </div>
  );
};
