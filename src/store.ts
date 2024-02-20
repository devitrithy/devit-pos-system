// store.js
import { reactive } from "vue";
interface Products {
  products: Product[];
}
interface Product {
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
}
export const stores: Products = reactive({
  products: [],
});
