import { GetStaticProps, GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ParsedUrlQuery } from "querystring";

import { CategoryInterface } from "@interfaces/category.interface";

import { getCategories } from "@api/category";

import { withLayout } from "@layout/Layout";

import { NotFoundView } from "@views";

const NotFound = () => {
  return <NotFoundView />;
};

export const getStaticProps: GetStaticProps<NotFoundProps> = async ({
  locale,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  const { data: categories } = await getCategories(locale || "ru");

  return {
    props: {
      ...(await serverSideTranslations(locale || "ru")),
      categories,
    },
  };
};

export default withLayout(NotFound);

export interface NotFoundProps extends Record<string, unknown> {
  categories: CategoryInterface[];
}
