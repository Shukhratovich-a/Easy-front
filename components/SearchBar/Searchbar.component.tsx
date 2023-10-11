import React from "react";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { SearchBarProps } from "./SearchBar.props";

import { Input, Modal } from "@components";

import Search from "@icons/search.svg";

import styles from "./SearchBar.module.scss";

export const SearchBar = ({ className, ...props }: SearchBarProps): JSX.Element => {
  const [searchState, setSearchState] = React.useState({ modal: { isOpen: false }, input: { isFocus: false } });

  const { t } = useTranslation("inputs");

  const handleFocus = () => {
    setSearchState({ ...searchState, input: { isFocus: true }, modal: { isOpen: true } });
  };

  const handleBlur = () => {
    setSearchState({ ...searchState, input: { isFocus: false }, modal: { isOpen: false } });
  };

  return (
    <div className={cn(styles.search, className)} {...props}>
      <Input
        className={cn(styles.search__input)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        icon={<Search />}
        placeholder={`${t("search")}...`}
      />
      {/* 
      <Modal
        className={cn(styles.search__modal)}
        curtain="transparent"
        isOpen={searchState.modal.isOpen}
        align="current"
      >
        Modal
      </Modal> */}
    </div>
  );
};
