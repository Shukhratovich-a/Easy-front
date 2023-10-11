import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ParsedUrlQuery } from "querystring";

import { withLayout } from "@layout/Layout";

import { getCategories } from "@api/category";
import { getProductByAlias, getProducts } from "@api/products";

import { CategoryInterface } from "@interfaces/category.interface";
import { ProductInterface } from "@interfaces/product.interface";

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
    const { data: products } = await getProducts(locale);

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

  const { data: product } = await getProductByAlias(locale as string, { alias: productAlias as string });
  const { data: categories } = await getCategories(locale as string);

  return {
    props: {
      ...(await serverSideTranslations(locale || "ru")),
      categories,
      product,
    },
  };
};

export default withLayout(Product);

export interface ProductProps extends Record<string, unknown> {
  categories: CategoryInterface[];
  product: ProductInterface;
}
