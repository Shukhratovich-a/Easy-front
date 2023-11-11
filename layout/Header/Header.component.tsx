import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { CatalogContext } from "@contexts/catalog.context";

import { useMediaQuery } from "@hooks/useMediaQuery.hook";

import { HeaderProps } from "./Header.props";

import { Button, IconButton, SearchBar, Language } from "@components";

import Logo from "@icons/logo.svg";
import Catalog from "@icons/catalog.svg";
import Location from "@icons/location.svg";
import Cart from "@icons/cart.svg";
import Search from "@icons/search.svg";

import styles from "./Header.module.scss";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const { t } = useTranslation("header");
  const isTablet = useMediaQuery("(max-width: 768px)");

  console.log(isTablet);

  const { setIsOpen } = React.useContext(CatalogContext);

  const handleOpenCatalog = () => {
    if (!setIsOpen) return;

    setIsOpen(true);
  };

  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={cn(styles.header__inner)}>
        {/* {isTablet && <IconButton className={cn(styles.header__catalog)} icon={<Catalog />} />} */}

        <Link className={cn(styles.header__logo)} href={"/"} shallow>
          <Logo />
        </Link>

        {/* {!isTablet && ( */}
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
        {/* )} */}

        {/* {!isTablet &&  */}
        <SearchBar className={cn(styles.header__search)} />
        {/* } */}

        {/* {isTablet && <IconButton className={cn(styles.header__search)} icon={<Search />} />} */}

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
