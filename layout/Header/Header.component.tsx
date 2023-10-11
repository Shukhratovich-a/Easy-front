import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { CatalogContext } from "@contexts/catalog.context";

import { HeaderProps } from "./Header.props";

import { Button, SearchBar, Language } from "@components";

import Logo from "@icons/logo.svg";
import Catalog from "@icons/catalog.svg";
import Location from "@icons/location.svg";
import Cart from "@icons/cart.svg";

import styles from "./Header.module.scss";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const { push, pathname, query } = useRouter();
  const { t, i18n } = useTranslation("header");

  const { isOpen, setIsOpen } = React.useContext(CatalogContext);

  const handleOpenCatalog = () => {
    if (!setIsOpen) return;

    setIsOpen(true);
  };

  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={cn(styles.header__inner)}>
        <Link className={cn(styles.header__logo)} href={"/"} shallow={true}>
          <Logo />
        </Link>

        <Button
          className={cn(styles.header__catalog)}
          size="large"
          appearance="regular"
          mode="secondary"
          icon={<Catalog />}
          onClick={handleOpenCatalog}
        >
          {t("catalog")}
        </Button>

        <SearchBar className={cn(styles.header__search)} />

        <Button
          className={cn(styles.header__location)}
          size="large"
          appearance="regular"
          mode="primary"
          icon={<Location />}
        >
          {t("address")}
        </Button>

        <Button className={cn(styles.header__cart)} size="large" appearance="neutral" mode="primary" icon={<Cart />}>
          {t("basket")}
        </Button>

        <Language className={cn(styles.header__language)} />
      </div>
    </header>
  );
};
