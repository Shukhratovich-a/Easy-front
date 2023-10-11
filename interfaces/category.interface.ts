import { SubcategoryInterface } from "./subcategory.interface";

export interface CategoryInterface {
  getProducts: any;
  id: number;
  uuid: string;
  icon: string;
  poster: string;
  title: string;
  alias: string;
  productsTotal: number;
  subcategories: SubcategoryInterface[];
  createAt: Date;
  updateAt: Date;
}
