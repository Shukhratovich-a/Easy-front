import cn from "classnames";

import Minus from "@icons/counter-minus.svg";
import Plus from "@icons/counter-plus.svg";

import styles from "./Counter.module.scss";

export const Counter = (): JSX.Element => {
  return (
    <div className={cn(styles.counter)}>
      <button className={cn(styles.counter__button, styles["counter__button--minus"])}>
        <Minus />
      </button>

      <input className={cn(styles.counter__input)} type="number" min={1} max={10} />

      <button className={cn(styles.counter__button, styles["counter__button--plus"])}>
        <Plus />
      </button>
    </div>
  );
};
