import { FunctionComponent } from "react";
import cn from "classnames";

import { AppProvider, IAppContext } from "@contexts/app.context";
import { CatalogProvider } from "@contexts/catalog.context";

import { LayoutProps } from "./Layout.props";

import { Header } from "./Header/Header.component";
import { Footer } from "./Footer/Footer.component";
import { Catalog } from "./Catalog/Catalog.component";
// import { Map } from "./Map/Map.component";

import styles from "./Layout.module.scss";

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={cn(styles.layout)}>
      <Catalog />
      {/* <Map /> */}

      <Header className={styles.header} />

      <div className={styles.body}>{children}</div>

      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppProvider categories={props.categories}>
        <CatalogProvider isOpen={false}>
          <Layout>
            <Component {...props} />
          </Layout>
        </CatalogProvider>
      </AppProvider>
    );
  };
};
