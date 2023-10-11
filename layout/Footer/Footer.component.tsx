import cn from "classnames";

import { FooterProps } from "./Footer.props";

import Logo from "@icons/logo.svg";
import Phone from "@icons/phone.svg";

import styles from "./Footer.module.scss";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className={cn(styles.footer__inner)}>
        <Logo />

        <a className={cn(styles.footer__link)} href="tel:+998903384939">
          <Phone />

          <span>+998 90 338 49 39</span>
        </a>
      </div>
    </footer>
  );
};
