import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ParsedUrlQuery } from "querystring";

import { withLayout } from "@layout/Layout";

import { getCategories, getCategoryByAlias } from "@api/category";
import { getSubcategoryByAlias } from "@api/subcategory";

import { CategoryInterface } from "@interfaces/category.interface";
import { SubcategoryInterface } from "@interfaces/subcategory.interface";

import { CategoryView } from "@views";
import { Suspense } from "react";

const Category = ({ currentCategory, currentSubcategory }: CategoryProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{currentCategory.title}</title>
      </Head>

      <CategoryView category={currentCategory} subcategory={currentSubcategory} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async ({ locales }: GetStaticPathsContext) => {
  let paths: string[] = [];

  for (let locale of locales as string[]) {
    const { data: categories } = await getCategories(locale);

    paths = paths.concat(
      categories.flatMap((category) =>
        category.subcategories.map((subcategory) => `/${locale}/category/${category.alias}/${subcategory.alias}`)
      )
    );
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CategoryProps> = async ({
  params,
  locale,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const { categoryAlias, subcategoryAlias } = params;

  const { data: categories } = await getCategories(locale as string);
  const { data: currentCategory } = await getCategoryByAlias(locale || "ru", { alias: categoryAlias as string });
  const { data: currentSubcategory } = await getSubcategoryByAlias(locale || "ru", {
    alias: subcategoryAlias as string,
  });

  return {
    props: {
      ...(await serverSideTranslations(locale || "ru")),
      categories,
      currentCategory,
      currentSubcategory,
    },
  };
};

export default withLayout(Category);

export interface CategoryProps extends Record<string, unknown> {
  categories: CategoryInterface[];
  currentCategory: CategoryInterface;
  currentSubcategory: SubcategoryInterface;
}
