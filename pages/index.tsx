import { Suspense } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ParsedUrlQuery } from "querystring";

import { CategoryInterface } from "@interfaces/category.interface";

import { getCategories } from "@api/category";

import { withLayout } from "@layout/Layout";

import { HomeView } from "@views";

const Home = ({ categories }: HomeProps): JSX.Element => {
  return <HomeView categories={categories} />;
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
  locale,
}: GetServerSidePropsContext<ParsedUrlQuery>) => {
  const { data: categories } = await getCategories(locale || "ru");

  return {
    props: {
      ...(await serverSideTranslations(locale || "ru")),
      categories,
    },
  };
};

export default withLayout(Home);

export interface HomeProps extends Record<string, unknown> {
  categories: CategoryInterface[];
}
