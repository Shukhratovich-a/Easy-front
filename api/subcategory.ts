import axios from "./axios";

import { API_ROUTES } from "@helpers/api.helper";
import { LanguageEnum } from "@helpers/language.helper";

import { IResponse } from "@interfaces/response.interface";
import { ISubcategory } from "@interfaces/subcategory.interface";

export const getSubcategoryAlias = (language: LanguageEnum, credentials: { alias: string }) => {
  return axios.post<IResponse<{ alias: string }>>(API_ROUTES.subcategory.getAlias(language), credentials);
};

export const getSubcategoryByAlias = (language: LanguageEnum, credentials: { alias: string }) => {
  return axios.post<IResponse<ISubcategory>>(API_ROUTES.subcategory.getByAlias(language), credentials);
};
