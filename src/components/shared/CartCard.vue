<script setup lang="ts">
import type { Cart } from "@/type";
import IconTrash from "@/components/icons/IconTrash.vue";
import QtyButton from "./QtyButton.vue";
import { stores } from "@/store";

const props = defineProps<{
  cart: Cart;
}>();
</script>
<template>
  <!--  -->
  <div
    class="flex gap-4 bg-gray-200 rounded-lg p-4 items-center justify-between"
  >
    <div class="flex gap-4 items-center">
      <img
        :src="cart.product.image"
        class="rounded-md w-14 h-14 object-contain bg-white p-1"
        alt=""
      />
      <div>
        <h1 class="truncate text-ellipsis overflow-hidden w-40">
          {{ cart.product.title }}
        </h1>
        <h1 class="text-sm text-gray-500">
          <span>{{ cart.product.price }}</span
          ><span> x </span>{{ cart.qty }}
        </h1>
      </div>
    </div>
    <QtyButton :product="cart.product" />
    <button
      @click="stores.removeItemInCart(cart.product)"
      class="text-xl text-red-500"
    >
      <IconTrash />
    </button>
  </div>
</template>
