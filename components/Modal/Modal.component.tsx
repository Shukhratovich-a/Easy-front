import React from "react";
import cn from "classnames";
import { Variants, motion } from "framer-motion";

import { useOutsideClick } from "@hooks/useOutsideClick.hook";

import { ModalProps } from "./Modal.props";

import styles from "./Modal.module.scss";

export const Modal = ({
  className,
  children,
  isOpen,
  setIsOpen,
  curtain = "black",
  animation = "fade",
  align = "center",
  handleClose,
  ...props
}: ModalProps): JSX.Element => {
  const closeModal = () => {
    if (handleClose) {
      handleClose();
      return;
    }

    if (isOpen && setIsOpen) setIsOpen(false);
  };

  const ref = useOutsideClick(closeModal);

  const variants: Record<string, Variants> = {
    fade: {
      initial: {
        position: align === "current" ? "absolute" : "fixed",
        right: "50%",
        bottom: align === "current" ? -8 : "50%",
        translateX: "50%",
        translateY: align === "current" ? "100%" : "50%",
        scale: 0.5,
        opacity: 0,
      },
      visible: {
        scale: 1,
        opacity: 1,
      },
      hidden: {
        scale: 0.5,
        opacity: 0,
      },
    },
    swap: {
      initial: {
        position: "fixed",
        top: 0,
        left: "-100%",
        bottom: 0,
      },
      visible: {
        left: 0,
      },
      hidden: {
        left: "-100%",
      },
    },
  };

  return (
    <div
      className={cn(styles.modal, {
        [styles["modal--open"]]: isOpen,
      })}
      {...props}
    >
      {curtain === "black" && <div className={cn(styles.modal__curtain, styles[`modal__curtain--${curtain}`])} />}

      <motion.div
        className={cn(styles.modal__inner, className)}
        variants={animation === "fade" ? variants.fade : variants.swap}
        initial={"initial"}
        animate={isOpen ? "visible" : "hidden"}
        ref={ref}
      >
        {children}
      </motion.div>
    </div>
  );
};
