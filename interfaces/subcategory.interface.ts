import { IProduct } from "./product.interface";

export interface ISubcategory {
  id: number;
  uuid: string;
  icon: string;
  poster: string;
  title: string;
  alias: string;
  productsTotal: number;
  products: IProduct[];
  createAt: Date;
  updateAt: Date;
}
