import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { DOMAIN } from "@helpers/api.helper";

import { formatNumberWithSpaces, firstLetterUppercase } from "@utils/textFormatter.util";

import { ProductInnerProps } from "./ProductInner.props";

import { Button, Counter, HTag } from "@components";

import styles from "./ProductInner.module.scss";

export const ProductInner = ({ className, product, ...props }: ProductInnerProps): JSX.Element => {
  const { t } = useTranslation("product");
  const { control } = useForm<{ count: number }>({ defaultValues: { count: 1 } });

  return (
    <div className={cn(styles.product, className)} {...props}>
      <div className={cn(styles.product__images)}>
        <div className={cn(styles.product__image, styles["product__image--primary"])}>
          <Image
            src={DOMAIN + product.images.find((image) => image.type === "primary")!.jpgPath}
            alt={product.title}
            width={485}
            height={504}
            priority
          />
        </div>

        {product.images[2] && (
          <div className={cn(styles.product__image, styles["product__image--secondary"])}>
            <Image src={DOMAIN + product.images[2].webpPath} alt={product.title} width={110} height={120} priority />
          </div>
        )}

        {product.images[3] && (
          <div className={cn(styles.product__image, styles["product__image--tertiary"])}>
            <Image src={DOMAIN + product.images[3].webpPath} alt={product.title} width={110} height={120} priority />
          </div>
        )}

        {product.images[4] && (
          <div className={cn(styles.product__image, styles["product__image--quaternary"])}>
            <Image src={DOMAIN + product.images[4].webpPath} alt={product.title} width={110} height={120} priority />
          </div>
        )}

        {product.images[5] && (
          <div className={cn(styles.product__image, styles["product__image--quinary"])}>
            <Image src={DOMAIN + product.images[5].webpPath} alt={product.title} width={110} height={120} priority />
          </div>
        )}
      </div>

      <div className={cn(styles.product__info)}>
        <mark className={cn(styles["product__full-price"])}>
          {!!product.purchasePrice && `${formatNumberWithSpaces(product.fullPrice)} sum`}
        </mark>
        <mark className={cn(styles["product__purchase-price"])}>
          {!!product.purchasePrice
            ? `${formatNumberWithSpaces(product.purchasePrice)} sum`
            : `${formatNumberWithSpaces(product.fullPrice)} sum`}
        </mark>

        <HTag className={cn(styles.product__title)} tag="h2" appearance="h2">
          {product.title}
        </HTag>

        <span className={cn(styles.product__volume)}>{product.volume}</span>

        <p className={cn(styles.product__description)}>{product.description}</p>

        <div className={cn(styles.product__amount)}>
          <span className={cn(styles.product__amount__text)}>{firstLetterUppercase(t("amount"))}</span>

          <div className={cn(styles.product__amount__inner)}>
            <Controller
              control={control}
              name="count"
              render={({ field }) => (
                <Counter
                  className={cn(styles.product__amount__button)}
                  maxCount={product.availableAmount}
                  count={field.value}
                  setCount={field.onChange}
                  ref={field.ref}
                />
              )}
            />

            <span>
              {firstLetterUppercase(t("in-stock"))} {product.availableAmount}
            </span>
          </div>
        </div>

        <div className={cn(styles.product__info__bottom)}>
          <Button className={cn(styles.product__button)} mode="primary" size="large" appearance="regular">
            {firstLetterUppercase(t("add-to-cart"))}
          </Button>
          <Button className={cn(styles.product__button)} mode="outlined" size="large" appearance="regular">
            {firstLetterUppercase(t("buy-now"))}
          </Button>
        </div>
      </div>
    </div>
  );
};
