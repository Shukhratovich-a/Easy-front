export interface IProduct {
  id: number;
  uuid: string;
  totalAmount: number;
  availableAmount: number;
  fullPrice: number;
  purchasePrice: number;
  title: string;
  alias: string;
  description: string;
  volume: string;
  images: IProductImage[];
  createAt: Date;
  updateAt: Date;
}

export interface IProductImage {
  id: number;
  jpgPath: string;
  webpPath: string;
  type: "primary" | "secondary";
}
