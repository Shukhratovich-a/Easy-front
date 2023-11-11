import axios from "./axios";

import { API_ROUTES } from "@helpers/api.helper";
import { LanguageEnum } from "@helpers/language.helper";

import { IResponse } from "@interfaces/response.interface";
import { IProduct } from "@interfaces/product.interface";

export const getProducts = (language: LanguageEnum) => {
  return axios.get<IResponse<IProduct[]>>(API_ROUTES.product.getAll(language));
};

export const getProductAlias = (language: LanguageEnum, credentials: { alias: string }) => {
  return axios.post<IResponse<{ alias: string }>>(API_ROUTES.product.getAlias(language), { ...credentials });
};

export const getProductByAlias = (language: LanguageEnum, credentials: { alias: string }) => {
  return axios.post<IResponse<IProduct>>(API_ROUTES.product.getByAlias(language), { ...credentials });
};

export const searchProducts = (credentials: { search: string }, language?: LanguageEnum) => {
  return axios.post<IResponse<IProduct[]>>(API_ROUTES.product.search(language), { ...credentials });
};
