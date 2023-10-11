export interface ProductInterface {
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
  images: ProductImageInterface[];
  createAt: Date;
  updateAt: Date;
}

export interface ProductImageInterface {
  id: number;
  jpgPath: string;
  webpPath: string;
  type: "primary" | "secondary";
}
