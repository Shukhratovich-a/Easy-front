import React from "react";

import { ICategory } from "@interfaces/category.interface";

export interface IAppContext {
  categories: ICategory[];
  setCategories?: (newCategories: ICategory[]) => void;
}

export const AppContext = React.createContext<IAppContext>({ categories: [] });

export const AppProvider = ({ categories, children }: React.PropsWithChildren<IAppContext>) => {
  const [categoriesState, setCategoriesState] = React.useState<ICategory[]>(categories);

  React.useEffect(() => {
    setCategoriesState(categories);
  }, [categories]);

  const setCategories = (categories: ICategory[]) => {
    setCategoriesState(categories);
  };

  return <AppContext.Provider value={{ categories: categoriesState, setCategories }}>{children}</AppContext.Provider>;
};
