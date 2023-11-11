import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useForm, Controller } from "react-hook-form";
import cn from "classnames";

import { IProduct } from "@interfaces/product.interface";
import { ISearchBarForm } from "./SearchBar.interface";

import { DOMAIN } from "@/helpers/api.helper";
import { LanguageEnum } from "@helpers/language.helper";

import { searchProducts } from "@api/products";

import { SearchBarProps } from "./SearchBar.props";

import { Input, Modal } from "@components";

import Search from "@icons/search.svg";

import styles from "./SearchBar.module.scss";

export const SearchBar = ({ className, ...props }: SearchBarProps): JSX.Element => {
  const [searchState, setSearchState] = React.useState({ modal: { isOpen: false }, input: { isFocus: false } });
  const [products, setProducts] = React.useState<IProduct[]>([]);

  const { t, i18n } = useTranslation("inputs");
  const { control, watch } = useForm<ISearchBarForm>();

  const handleChange = async () => {
    if (!watch().search) {
      setProducts([]);
      return;
    }

    const { data } = await searchProducts(watch(), i18n.language as LanguageEnum);

    if (data.statusCode === 200) {
      setProducts(data.data);
    }
  };

  const handleFocus = async () => {
    setSearchState({ ...searchState, input: { isFocus: true }, modal: { isOpen: true } });

    const { data } = await searchProducts(watch(), i18n.language as LanguageEnum);

    if (data.statusCode === 200) {
      setProducts(data.data);
    }
  };

  const handleBlur = () => {
    setSearchState({ ...searchState, input: { isFocus: false }, modal: { isOpen: false } });
  };

  return (
    <div className={cn(styles.search, className)} {...props}>
      <Controller
        name="search"
        control={control}
        render={({ field }) => (
          <Input
            className={cn(styles.search__input)}
            onChange={(evt) => {
              field.onChange(evt);
              handleChange();
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            icon={<Search />}
            placeholder={`${t("search")}...`}
          />
        )}
      />

      <Modal
        className={cn(styles.search__modal)}
        curtain="transparent"
        isOpen={searchState.modal.isOpen}
        align="current"
      >
        <ul className={cn(styles.products__list)}>
          {products.map((product) => (
            <li className={cn(styles.product)} key={product.id}>
              <div className={cn(styles.product__image)}>
                <Image
                  src={DOMAIN + product.images.find((image) => image.type === "primary")?.webpPath}
                  alt={product.title}
                  width={48}
                  height={48}
                />
              </div>

              <h4 className={cn(styles.product__title)}>{product.title}</h4>
              <mark className={cn(styles.product__price)}>{product.purchasePrice || product.fullPrice}</mark>
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};
