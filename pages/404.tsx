import { GetStaticProps, GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ParsedUrlQuery } from "querystring";

import { ICategory } from "@interfaces/category.interface";

import { LanguageEnum } from "@helpers/language.helper";

import { getCategories } from "@api/category";

import { withLayout } from "@layout/Layout";

import { NotFoundView } from "@views";

const NotFound = () => {
  return <NotFoundView />;
};

export const getStaticProps: GetStaticProps<NotFoundProps> = async ({
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

export default withLayout(NotFound);

export interface NotFoundProps extends Record<string, unknown> {
  categories: ICategory[];
}
