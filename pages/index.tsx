import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ParsedUrlQuery } from "querystring";

import { ICategory } from "@interfaces/category.interface";

import { LanguageEnum } from "@helpers/language.helper";

import { getCategories } from "@api/category";

import { withLayout } from "@layout/Layout";

import { HomeView } from "@views";

const Home = ({ categories }: HomeProps): JSX.Element => {
  return <HomeView categories={categories} />;
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
  locale,
}: GetServerSidePropsContext<ParsedUrlQuery>) => {
  try {
    const {
      data: { data: categories },
    } = await getCategories((locale as LanguageEnum) || LanguageEnum.RU);

    return {
      props: {
        ...(await serverSideTranslations(locale || LanguageEnum.RU)),
        categories: categories,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default withLayout(Home);

export interface HomeProps extends Record<string, unknown> {
  categories: ICategory[];
}
