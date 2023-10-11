import axios from "./axios";

import { API_ROUTES } from "@helpers/api.helper";

import { CategoryInterface } from "@interfaces/category.interface";

export const getCategories = (locale: string) => {
  return axios.get<CategoryInterface[]>(API_ROUTES.category.getAll(locale));
};

export const getCategoryAlias = (locale: "en" | "ru", credentials: { alias: string }) => {
  return axios.post<{ alias: string }>(`/category/get-alias/${locale}`, credentials);
};

export const getCategoryByAlias = (locale: string, credentials: { alias: string }) => {
  return axios.post<CategoryInterface>(`/category/get-by-alias/${locale}`, credentials);
};
