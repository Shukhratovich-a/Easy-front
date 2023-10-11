import axios from "./axios";

import { SubcategoryInterface } from "@interfaces/subcategory.interface";

export const getSubcategoryAlias = (locale: "en" | "ru", credentials: { alias: string }) => {
  return axios.post<{ alias: string }>(`/subcategory/get-alias/${locale}`, credentials);
};

export const getSubcategoryByAlias = (locale: string, credentials: { alias: string }) => {
  return axios.post<SubcategoryInterface>(`/subcategory/get-by-alias/${locale}`, credentials);
};
