import React from "react";

import { CategoryInterface } from "@interfaces/category.interface";

export interface IAppContext {
  categories: CategoryInterface[];
  setCategories?: (newCategories: CategoryInterface[]) => void;
}

export const AppContext = React.createContext<IAppContext>({ categories: [] });

export const AppProvider = ({ categories, children }: React.PropsWithChildren<IAppContext>) => {
  const [categoriesState, setCategoriesState] = React.useState<CategoryInterface[]>(categories);

  React.useEffect(() => {
    setCategoriesState(categories);
  }, [categories]);

  const setCategories = (categories: CategoryInterface[]) => {
    setCategoriesState(categories);
  };

  return <AppContext.Provider value={{ categories: categoriesState, setCategories }}>{children}</AppContext.Provider>;
};
