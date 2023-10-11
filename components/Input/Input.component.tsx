import React from "react";
import cn from "classnames";

import { firstLetterUppercase } from "@utils/textFormatter.util";

import { InputProps } from "./Input.props";

import Error from "@icons/input-error.svg";

import styles from "./Input.module.scss";

interface IInput {
  isFocus: boolean;
  value?: string | number | readonly string[];
}

export const Input = React.forwardRef(
  (
    {
      className,
      children,
      icon,
      error,
      placeholder,
      placeholderType = "hidden",
      value,
      onFocus,
      onBlur,
      onChange,
      required,
      ...props
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const [inputState, setInputState] = React.useState<IInput>({ isFocus: false, value: value });

    const handleFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
      setInputState({ ...inputState, isFocus: true });

      if (onFocus) return onFocus(evt);
    };

    const handleBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
      setInputState({ ...inputState, isFocus: false });

      if (onBlur) return onBlur(evt);
    };

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      setInputState({ ...inputState, value: evt.target.value });

      if (onChange) return onChange(evt);
    };

    return (
      <label
        className={cn(styles.label, className, {
          [styles["label--focus"]]: inputState.isFocus,
          [styles["label--value"]]: !!inputState.value,
          [styles["label--visible"]]: placeholderType === "visible",
          [styles["label--icon"]]: !!icon,
          [styles["label--required"]]: required,
        })}
      >
        {!!icon && <span className={cn(styles.label__icon)}>{icon}</span>}

        <span className={cn(styles.label__inner)}>
          {placeholder && (
            <span className={cn(styles.input__placeholder)}>
              <span className={cn(styles.input__placeholder__text)}>{firstLetterUppercase(placeholder)}</span>
              {required && <span className={cn(styles.input__placeholder__icon)}>*</span>}
            </span>
          )}

          <input
            className={cn(styles.input)}
            onFocus={(evt) => handleFocus(evt)}
            onBlur={(evt) => handleBlur(evt)}
            onChange={(evt) => handleChange(evt)}
            value={value}
            required={required}
            ref={ref}
            {...props}
          />
        </span>

        {!placeholder && required && <span className={cn(styles.input__required)}>*</span>}

        {error?.message && (
          <span className={cn(styles.error)}>
            <Error />
            {firstLetterUppercase(error.message)}
          </span>
        )}
      </label>
    );
  }
);

Input.displayName = "Input";
