import cn from "classnames";

import { HeaderLoadingProps } from "./HeaderLoading.props";

import Logo from "@icons/logo.svg";

import styles from "./HeaderLoading.module.scss";

export const HeaderLoading = ({ className }: HeaderLoadingProps) => {
  return (
    <header className={cn(styles.header, className)}>
      <div className={cn(styles.header__inner)}>
        <div className={cn(styles.header__logo)}>
          <Logo className={cn(styles.header__logo__icon)} />
        </div>
      </div>
    </header>
  );
};
