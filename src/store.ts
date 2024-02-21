import { reactive } from "vue";
import type { Cart, Product } from "./type";

export const stores = reactive({
  products: [] as Product[],
  carts: [] as Cart[],
  addToCart(product: Product): void {
    this.carts.push({ product: product, qty: 1 });
  },
  minusItemInCart(product: Product): void {
    let index = this.findIndex(product);
    if (this.carts[index].qty > 1) {
      this.carts.splice(index, 1, {
        product: product,
        qty: this.carts[index].qty - 1,
      });
    } else {
      this.removeItemInCart(product);
    }
  },
  removeItemInCart(product: Product): void {
    this.carts.splice(this.findIndex(product), 1);
  },
  plusItemInCart(product: Product): void {
    let index = this.findIndex(product);
    this.carts.splice(index, 1, {
      product: product,
      qty: this.carts[index].qty + 1,
    });
  },
  findIndex(product: Product): Number {
    for (let i = 0; i < this.carts.length; i++) {
      if (this.carts[i].product.id === product.id) {
        return i;
      }
    }
    return -1;
  },
  getQty(product: Product): number {
    let index = this.findIndex(product);
    if (index !== -1) {
      return this.carts[index].qty;
    } else {
      return 0;
    }
  },
});
