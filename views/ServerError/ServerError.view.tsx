import cn from "classnames";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { ServerErrorProps } from "./ServerError.props";

import { Button, HTag } from "@components";

import ServerError from "@icons/500.svg";

import styles from "./ServerError.module.scss";

export const ServerErrorView = ({ className, ...props }: ServerErrorProps): JSX.Element => {
  const { t } = useTranslation("errors");

  return (
    <div className={cn(styles.view, className)} {...props}>
      <ServerError className={cn(styles.view__icon)} />

      <HTag className={cn(styles.view__title)} tag="h4" appearance="h1">
        {t("site.serverError.title")}
      </HTag>

      <p className={cn(styles.view__description)}>
        {t("site.serverError.description")}: <a href="tel:+998977009911">+998977009911</a>
      </p>

      <Link href={"/"}>
        <Button className={cn(styles.view__button)} size="large">
          На главную
        </Button>
      </Link>
    </div>
  );
};
