export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

export const API_ROUTES = {
  category: {
    getAll: (locale: string) => `/category/with-subcategories?language=${locale}`,
  },
};
