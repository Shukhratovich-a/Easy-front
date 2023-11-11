import { ISubcategory } from "./subcategory.interface";

export interface ICategory {
  getProducts: any;
  id: number;
  uuid: string;
  icon: string;
  poster: string;
  title: string;
  alias: string;
  productsTotal: number;
  subcategories: ISubcategory[];
  createAt: Date;
  updateAt: Date;
}
