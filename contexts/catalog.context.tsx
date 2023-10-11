import React from "react";
import { useRouter } from "next/router";

export interface ICatalogContext {
  isOpen: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

export const CatalogContext = React.createContext<ICatalogContext>({ isOpen: false });

export const CatalogProvider = ({ children }: React.PropsWithChildren<ICatalogContext>) => {
  const [isOpenState, setIsOpenState] = React.useState<boolean>(false);
  const { asPath } = useRouter();

  const setIsOpen = (isOpen: boolean) => {
    setIsOpenState(isOpen);
  };

  React.useEffect(() => {
    setIsOpenState(false);
  }, [asPath]);

  return <CatalogContext.Provider value={{ isOpen: isOpenState, setIsOpen }}>{children}</CatalogContext.Provider>;
};
