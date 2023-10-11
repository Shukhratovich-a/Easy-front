import Image from "next/image";
import cn from "classnames";

import { DOMAIN } from "@helpers/api.helper";

import { formatNumberWithSpaces } from "@utils/textFormatter.util";

import { ProductCardProps } from "./ProductCard.props";

import { Button, HTag } from "@components";

import styles from "./ProductCard.module.scss";

export const ProductCard = ({ className, product, ...props }: ProductCardProps): JSX.Element => {
  return (
    <div className={cn(styles.product, className)} {...props}>
      <div className={cn(styles.product__image)}>
        <Image
          src={
            DOMAIN + (product.images.find((image) => image.type === "primary")?.jpgPath || product.images[0].jpgPath)
          }
          alt={product.title}
          width={212}
          height={256}
          priority
        />
      </div>

      <div className={cn(styles.product__info)}>
        <mark className={cn(styles["product__full-price"])}>{formatNumberWithSpaces(product.fullPrice)} sum</mark>
        <mark className={cn(styles["product__purchase-price"])}>
          {formatNumberWithSpaces(product.purchasePrice)} sum
        </mark>

        <HTag className={cn(styles.product__title)} tag="h4">
          {product.title}
        </HTag>

        <span className={cn(styles.product__volume)}>{product.volume}</span>

        <Button className={cn(styles.product__button)} mode="primary" size="medium" appearance="contrast">
          В корзину
        </Button>
      </div>
    </div>
  );
};
