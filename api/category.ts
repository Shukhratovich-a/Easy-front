import axios from "./axios";

import { API_ROUTES } from "@helpers/api.helper";
import { LanguageEnum } from "@helpers/language.helper";

import { IResponse } from "@interfaces/response.interface";
import { ICategory } from "@interfaces/category.interface";

export const getCategories = (language: LanguageEnum) => {
  return axios.get<IResponse<ICategory[]>>(API_ROUTES.category.getAll(language));
};

export const getCategoryAlias = (language: LanguageEnum, credentials: { alias: string }) => {
  return axios.post<IResponse<{ alias: string }>>(API_ROUTES.category.getAlias(language), credentials);
};

export const getCategoryByAlias = (language: LanguageEnum, credentials: { alias: string }) => {
  return axios.post<IResponse<ICategory>>(API_ROUTES.category.getByAlias(language), credentials);
};
