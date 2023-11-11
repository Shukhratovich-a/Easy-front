import { LanguageEnum } from "@helpers/language.helper";

export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN as string;

export const API_ROUTES = {
  category: {
    getAll: (language?: LanguageEnum) => `/category/with-subcategories?language=${language || LanguageEnum.RU}`,
    getAlias: (language?: LanguageEnum) => `/category/get-alias/${language || LanguageEnum.RU}`,
    getByAlias: (language?: LanguageEnum) => `/category/get-by-alias/${language || LanguageEnum.RU}`,
  },

  subcategory: {
    getAlias: (language?: LanguageEnum) => `/subcategory/get-alias/${language || LanguageEnum.RU}`,
    getByAlias: (language?: LanguageEnum) => `/subcategory/get-by-alias/${language || LanguageEnum.RU}`,
  },

  product: {
    getAll: (language?: LanguageEnum) => `/product/get-all?language=${language || LanguageEnum.RU}`,
    getAlias: (language?: LanguageEnum) => `/product/get-alias/${language || LanguageEnum.RU}`,
    getByAlias: (language?: LanguageEnum) => `/product/get-by-alias/${language || LanguageEnum.RU}`,
    search: (language?: LanguageEnum) => `/product/search/${language || LanguageEnum.RU}`,
  },
};
