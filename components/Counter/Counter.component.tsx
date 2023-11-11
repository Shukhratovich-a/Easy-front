import React from "react";
import cn from "classnames";

import { CounterProps } from "./Counter.props";

import Minus from "@icons/counter-minus.svg";
import Plus from "@icons/counter-plus.svg";

import styles from "./Counter.module.scss";

export const Counter = React.forwardRef(
  (
    { className, maxCount, count, setCount, ...props }: CounterProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const handleDecrease = () => {
      if (count <= 1 || !setCount) return;

      setCount(count - 1);
    };

    const handleIncrease = () => {
      if (count >= maxCount || !setCount) return;

      setCount(count + 1);
    };

    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (!setCount) return;

      if (!evt.currentTarget.value) {
        setCount("");
        return;
      }

      if (Number(evt.currentTarget.value) > maxCount) {
        setCount(maxCount);
        return;
      }

      if (Number(evt.currentTarget.value) < 1) {
        setCount(1);
        return;
      }

      setCount(Number(evt.currentTarget.value));
    };

    return (
      <div className={cn(styles.counter)} {...props}>
        <button
          className={cn(styles.counter__button, styles["counter__button--minus"], {
            [styles["counter__button--disabled"]]: count <= 1,
          })}
          onClick={handleDecrease}
        >
          <Minus />
        </button>

        <input
          className={cn(styles.counter__input)}
          type="number"
          min={1}
          max={maxCount}
          onChange={onChange}
          value={count}
          ref={ref}
        />

        <button
          className={cn(styles.counter__button, styles["counter__button--plus"], {
            [styles["counter__button--disabled"]]: count >= maxCount,
          })}
          onClick={handleIncrease}
        >
          <Plus />
        </button>
      </div>
    );
  }
);

Counter.displayName = "Counter";
