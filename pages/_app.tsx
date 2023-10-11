import React from "react";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";

// import { DOMAIN } from "../helpers";

// import ym, { YMInitializer } from "react-yandex-metrika";

import "@utils/i18n.util";

import "@styles/general.scss";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>EasyGet</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://mc.yandex.ru" />

        <meta property="og:local" content="ru_RU" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App);
