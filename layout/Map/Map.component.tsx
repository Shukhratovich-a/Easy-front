import cn from "classnames";

import { Button, Input, Modal } from "@components";

import Close from "@icons/catalog-close.svg";

import styles from "./Map.module.scss";

export const Map = (): JSX.Element => {
  // const;

  return (
    <Modal className={cn(styles.map)} isOpen={true}>
      <div className={cn(styles.map__top)}>
        <h3 className={cn(styles.map__top__header)}>Укажите адрес доставки</h3>

        <button className={cn(styles.map__top__button)}>
          <Close />
        </button>
      </div>

      <p className={cn(styles.map__description)}>
        Так как Dassyor возит всё очень быстро по определённым зонам доставки, ассортимент в вашем районе может
        отличаться.
      </p>

      <div className={cn(styles.map__form)}>
        <Input className={cn(styles.map__form__input)} placeholder="Укажите адрес доставки" placeholderType="visible" />

        <Button className={cn(styles.map__form__button)} size="large">
          Продолжить
        </Button>
      </div>
    </Modal>
  );
};
