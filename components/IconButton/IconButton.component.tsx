import React from "react";
import cn from "classnames";

import { IconButtonProps } from "./IconButton.props";

import styles from "./IconButton.module.scss";

export const IconButton = ({ className, icon, appearance = "primary", ...props }: IconButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles["button--primary"]]: appearance === "primary",
        [styles["button--contrast"]]: appearance === "contrast",
      })}
      {...props}
    >
      {icon}
    </button>
  );
};
