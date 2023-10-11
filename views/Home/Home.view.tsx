import cn from "classnames";

import { HomeViewProps } from "./Home.props";

import { HomeCategories } from "@sections";

import styles from "./Home.module.scss";

export const HomeView = ({ className, categories }: HomeViewProps): JSX.Element => {
  return (
    <div className={cn(styles.view, className)}>
      <HomeCategories categories={categories} />
    </div>
  );
};
