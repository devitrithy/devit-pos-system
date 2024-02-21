import { reactive } from "vue";
import type { Cart, Product } from "./type";

export const stores = reactive({
  products: [] as Product[],
  carts: [] as Cart[],
  subtotal: 0.0 as number,
  addToCart(product: Product): void {
    this.carts.push({ product: product, qty: 1 });
    this.getSubTotal();
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
    this.getSubTotal();
  },
  removeItemInCart(product: Product): void {
    this.carts.splice(this.findIndex(product), 1);
    this.getSubTotal();
  },
  getSubTotal() {
    this.subtotal = 0;
    this.carts.forEach((cart: Cart) => {
      this.subtotal += cart.product.price * cart.qty;
    });
  },
  plusItemInCart(product: Product): void {
    let index = this.findIndex(product);
    this.carts.splice(index, 1, {
      product: product,
      qty: this.carts[index].qty + 1,
    });
    this.getSubTotal();
  },
  findIndex(product: Product): number {
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
