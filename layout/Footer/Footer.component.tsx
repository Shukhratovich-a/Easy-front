import cn from "classnames";
import Link from "next/link";

import { useMediaQuery } from "@hooks/useMediaQuery.hook";

import { FooterProps } from "./Footer.props";

import { Button } from "@components";

import Logo from "@icons/logo.svg";
import Phone from "@icons/phone.svg";
import Telegram from "@icons/telegram.svg";
import Instagram from "@icons/instagram.svg";

import styles from "./Footer.module.scss";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className={cn(styles.footer__inner)}>
        <Link className={cn(styles.footer__logo)} href={"/"} shallow>
          <Logo />
        </Link>

        <div className={cn(styles.footer__socials)}>
          <Button mode="secondary" size="large" icon={<Telegram />} />
          <Button mode="secondary" size="large" icon={<Instagram />} />
        </div>

        <div className={cn(styles.footer__phone)}>
          <Button
            className={cn(styles.footer__phone__button)}
            icon={<Phone />}
            mode={isMobile ? "secondary" : "tertiary"}
            size={isMobile ? "medium" : "large"}
          >
            +998 90 338 49 39
          </Button>
        </div>
      </div>
    </footer>
  );
};
