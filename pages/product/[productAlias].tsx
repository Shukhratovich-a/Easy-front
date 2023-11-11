import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ParsedUrlQuery } from "querystring";

import { ICategory } from "@interfaces/category.interface";
import { IProduct } from "@interfaces/product.interface";

import { LanguageEnum } from "@helpers/language.helper";

import { getCategories } from "@api/category";
import { getProductByAlias, getProducts } from "@api/products";

import { withLayout } from "@layout/Layout";

import { ProductView } from "@views";

const Product = ({ product }: ProductProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>

      <ProductView product={product} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async ({ locales }: GetStaticPathsContext) => {
  let paths: string[] = [];

  for (let locale of locales as string[]) {
    const {
      data: { data: products },
    } = await getProducts((locale as LanguageEnum) || LanguageEnum.RU);

    paths = paths.concat(products.flatMap((product) => `/${locale}/product/${product.alias}`));
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProductProps> = async ({
  params,
  locale,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { productAlias } = params;

  try {
    const {
      data: { data: product },
    } = await getProductByAlias((locale as LanguageEnum) || LanguageEnum.RU, { alias: productAlias as string });
    const {
      data: { data: categories },
    } = await getCategories((locale as LanguageEnum) || LanguageEnum.RU);

    return {
      props: {
        ...(await serverSideTranslations(locale || LanguageEnum.RU)),
        categories,
        product,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default withLayout(Product);

export interface ProductProps extends Record<string, unknown> {
  categories: ICategory[];
  product: IProduct;
}
