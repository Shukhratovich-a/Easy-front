import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { useMediaQuery } from "@hooks/useMediaQuery.hook";

import { CatalogContext } from "@contexts/catalog.context";

import { HeaderProps } from "./Header.props";

import { Button, SearchBar, Language, IconButton } from "@components";

import Logo from "@icons/logo.svg";
import Catalog from "@icons/catalog.svg";
import Location from "@icons/location.svg";
import Cart from "@icons/cart.svg";
import Search from "@icons/search.svg";

import styles from "./Header.module.scss";

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const { t } = useTranslation("header");
  const isTablet = useMediaQuery("(max-width: 900px)");
  const isSmallDesktop = useMediaQuery("(max-width: 1200px)");

  const { setIsOpen } = React.useContext(CatalogContext);

  const handleOpenCatalog = () => {
    if (!setIsOpen) return;

    setIsOpen(true);
  };

  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={cn(styles.header__inner)}>
        {isTablet && <IconButton className={cn(styles.header__catalog)} icon={<Catalog />} />}

        <Link className={cn(styles.header__logo)} href={"/"} shallow>
          <Logo className={cn(styles.header__logo__icon)} />
        </Link>

        {isTablet && (
          <IconButton className={cn(styles.header__search, styles["header__search--mobile"])} icon={<Search />} />
        )}

        {!isTablet && (
          <Button
            className={cn(styles.header__catalog)}
            size={"large"}
            appearance="regular"
            mode="secondary"
            icon={<Catalog />}
            onClick={handleOpenCatalog}
          >
            {!isSmallDesktop ? t("catalog") : null}
          </Button>
        )}

        {!isTablet && <SearchBar className={cn(styles.header__search)} />}

        {!isTablet && (
          <Button
            className={cn(styles.header__location)}
            size={"large"}
            appearance="regular"
            mode="primary"
            icon={<Location />}
          >
            {!isSmallDesktop ? t("address") : null}
          </Button>
        )}

        {!isTablet && (
          <Button
            className={cn(styles.header__cart)}
            size={"large"}
            appearance="neutral"
            mode="primary"
            icon={<Cart />}
          >
            {!isSmallDesktop ? t("basket") : null}
          </Button>
        )}

        {!isTablet && <Language className={cn(styles.header__language)} size={"large"} />}
      </div>
    </header>
  );
};

export default Header;
