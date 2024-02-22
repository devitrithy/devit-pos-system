export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  searchTerm?: string;
}

export interface Cart {
  product: Product;
  qty: number;
}
