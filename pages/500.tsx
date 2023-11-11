import { GetStaticProps, GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ParsedUrlQuery } from "querystring";

import { ICategory } from "@interfaces/category.interface";

import { LanguageEnum } from "@helpers/language.helper";

import { getCategories } from "@api/category";

import { withLayout } from "@layout/Layout";

import { ServerErrorView } from "@views";

const ServerError = () => {
  return <ServerErrorView />;
};

export const getStaticProps: GetStaticProps<ServerErrorProps> = async ({
  locale,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  try {
    const {
      data: { data: categories },
    } = await getCategories((locale as LanguageEnum) || LanguageEnum.RU);

    return {
      props: {
        ...(await serverSideTranslations(locale || LanguageEnum.RU)),
        categories,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default withLayout(ServerError);

export interface ServerErrorProps extends Record<string, unknown> {
  categories: ICategory[];
}
