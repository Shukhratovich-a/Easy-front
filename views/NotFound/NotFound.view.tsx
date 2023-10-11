import cn from "classnames";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { NotFoundProps } from "./NotFound.props";

import { Button, HTag } from "@components";

import NotFound from "@icons/404.svg";

import styles from "./NotFound.module.scss";

export const NotFoundView = ({ className, ...props }: NotFoundProps): JSX.Element => {
  const { t } = useTranslation("errors");

  return (
    <div className={cn(styles.view, className)} {...props}>
      <NotFound className={cn(styles.view__icon)} />

      <HTag className={cn(styles.view__title)} tag="h4" appearance="h1">
        {t("site.notFound.title")}
      </HTag>

      <p className={cn(styles.view__description)}>{t("site.notFound.description")}</p>

      <Link href={"/"}>
        <Button className={cn(styles.view__button)} size="large">
          На главную
        </Button>
      </Link>
    </div>
  );
};
