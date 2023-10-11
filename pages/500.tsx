import { GetStaticProps, GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ParsedUrlQuery } from "querystring";

import { CategoryInterface } from "@interfaces/category.interface";

import { getCategories } from "@api/category";

import { withLayout } from "@layout/Layout";

import { ServerErrorView } from "@views";

const ServerError = () => {
  return <ServerErrorView />;
};

export const getStaticProps: GetStaticProps<ServerErrorProps> = async ({
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

export default withLayout(ServerError);

export interface ServerErrorProps extends Record<string, unknown> {
  categories: CategoryInterface[];
}
