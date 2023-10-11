import cn from "classnames";

import { HTagProps } from "./HTag.props";

import styles from "./HTag.module.scss";

export const HTag = ({ className, children, tag, appearance, ...props }: HTagProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={cn(styles.heading, styles[`heading--${appearance}`], className)} {...props}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={cn(styles.heading, styles[`heading--${appearance}`], className)} {...props}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={cn(styles.heading, styles[`heading--${appearance}`], className)} {...props}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={cn(styles.heading, styles[`heading--${appearance}`], className)} {...props}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={cn(styles.heading, styles[`heading--${appearance}`], className)} {...props}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={cn(styles.heading, styles[`heading--${appearance}`], className)} {...props}>
          {children}
        </h6>
      );
    default:
      return (
        <span className={cn(styles.heading, styles[`heading--${appearance}`], className)} {...props}>
          {children}
        </span>
      );
  }
};
