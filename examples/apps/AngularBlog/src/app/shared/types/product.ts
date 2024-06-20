export type NewProduct = {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
};

export interface ProductResponse {
  total: number;
  skip: number;
  limit: number;
  products: NewProduct[];
}
