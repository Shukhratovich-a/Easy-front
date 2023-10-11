import { ProductInterface } from "./product.interface";

export interface SubcategoryInterface {
  id: number;
  uuid: string;
  icon: string;
  poster: string;
  title: string;
  alias: string;
  productsTotal: number;
  products: ProductInterface[];
  createAt: Date;
  updateAt: Date;
}
