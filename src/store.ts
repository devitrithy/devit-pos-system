import { reactive } from "vue";
import type { Products } from "./type";

export const stores: Products = reactive({
  products: [],
});
