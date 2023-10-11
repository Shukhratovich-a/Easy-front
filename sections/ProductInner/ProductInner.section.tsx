import Image from "next/image";
import cn from "classnames";

import { DOMAIN } from "@helpers/api.helper";

import { formatNumberWithSpaces } from "@utils/textFormatter.util";

import { ProductInnerProps } from "./ProductInner.props";

import { Button, Counter, HTag } from "@components";

import styles from "./ProductInner.module.scss";

export const ProductInner = ({ className, product, ...props }: ProductInnerProps): JSX.Element => {
  return (
    <div className={cn(styles.product, className)} {...props}>
      <div className={cn(styles.product__images)}>
        <div className={cn(styles.product__image, styles["product__image--primary"])}>
          <Image
            src={DOMAIN + product.images.find((image) => image.type === "primary")!.jpgPath}
            alt={product.title}
            width={485}
            height={508}
            priority
          />
        </div>

        <div className={cn(styles.product__image, styles["product__image--secondary"])}>
          <Image src={DOMAIN + product.images[2].webpPath} alt={product.title} width={111} height={116} priority />
        </div>

        <div className={cn(styles.product__image, styles["product__image--tertiary"])}>
          <Image src={DOMAIN + product.images[3].webpPath} alt={product.title} width={111} height={116} priority />
        </div>

        <div className={cn(styles.product__image, styles["product__image--quaternary"])}>
          <Image src={DOMAIN + product.images[3].webpPath} alt={product.title} width={111} height={116} priority />
        </div>

        <div className={cn(styles.product__image, styles["product__image--quinary"])}>
          <Image src={DOMAIN + product.images[3].webpPath} alt={product.title} width={111} height={116} priority />
        </div>
      </div>

      <div className={cn(styles.product__info)}>
        <mark className={cn(styles["product__full-price"])}>{formatNumberWithSpaces(product.fullPrice)} sum</mark>
        <mark className={cn(styles["product__purchase-price"])}>
          {formatNumberWithSpaces(product.purchasePrice)} sum
        </mark>

        <HTag className={cn(styles.product__title)} tag="h2" appearance="h2">
          {product.title}
        </HTag>

        <span className={cn(styles.product__volume)}>{product.volume}</span>

        <p className={cn(styles.product__description)}>{product.description}</p>

        <Counter />

        <div className={cn(styles.product__info__bottom)}>
          <Button className={cn(styles.product__button)} mode="primary" size="large" appearance="regular">
            Добавить в корзину
          </Button>
          <Button className={cn(styles.product__button)} mode="outlined" size="large" appearance="regular">
            Добавить в корзину
          </Button>
        </div>
      </div>
    </div>
  );
};
