import axios from "./axios";

import { ProductInterface } from "@interfaces/product.interface";

// import { API_ROUTES } from "@helpers/api.helper";

export const getProducts = (locale: string) => {
  return axios.get<ProductInterface[]>(`/product/get-all?language=${locale}`);
};

export const getProductAlias = (locale: "en" | "ru", credentials: { alias: string }) => {
  return axios.post<{ alias: string }>(`/product/get-alias/${locale}`, credentials);
};

export const getProductByAlias = (locale: string, credentials: { alias: string }) => {
  return axios.post<ProductInterface>(`/product/get-by-alias/${locale}`, credentials);
};
