import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import cn from "classnames";

import { AppProvider, IAppContext } from "@contexts/app.context";
import { CatalogProvider } from "@contexts/catalog.context";

import { LayoutProps } from "./Layout.props";

import { HeaderLoading } from "@components";

// import { Catalog } from "./Catalog/Catalog.component";
// import { Map } from "./Map/Map.component";

import styles from "./Layout.module.scss";

const Header = dynamic(() => import("./Header/Header.component"), {
  ssr: false,
  loading: () => <HeaderLoading className={cn(styles.header)} />,
});
const Footer = dynamic(() => import("./Footer/Footer.component"), { ssr: false });

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={cn(styles.layout)}>
      {/* <Catalog /> */}
      {/* <Map /> */}

      <Header className={cn(styles.header)} />

      <div className={cn(styles.body)}>{children}</div>

      <Footer className={cn(styles.footer)} />
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
