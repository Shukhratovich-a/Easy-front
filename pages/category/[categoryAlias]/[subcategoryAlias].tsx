import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ParsedUrlQuery } from "querystring";

import { ICategory } from "@interfaces/category.interface";
import { ISubcategory } from "@interfaces/subcategory.interface";

import { LanguageEnum } from "@helpers/language.helper";

import { getCategories, getCategoryByAlias } from "@api/category";
import { getSubcategoryByAlias } from "@api/subcategory";

import { withLayout } from "@layout/Layout";

import { CategoryView } from "@views";

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
    const {
      data: { data: categories },
    } = await getCategories((locale as LanguageEnum) || LanguageEnum.RU);

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

  try {
    const {
      data: { data: categories },
    } = await getCategories((locale as LanguageEnum) || LanguageEnum.RU);
    const {
      data: { data: currentCategory },
    } = await getCategoryByAlias((locale as LanguageEnum) || LanguageEnum.RU, {
      alias: categoryAlias as string,
    });
    const {
      data: { data: currentSubcategory },
    } = await getSubcategoryByAlias((locale as LanguageEnum) || LanguageEnum.RU, {
      alias: subcategoryAlias as string,
    });

    return {
      props: {
        ...(await serverSideTranslations(locale || LanguageEnum.RU)),
        categories,
        currentCategory,
        currentSubcategory,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default withLayout(Category);

export interface CategoryProps extends Record<string, unknown> {
  categories: ICategory[];
  currentCategory: ICategory;
  currentSubcategory: ISubcategory;
}
