<script setup lang="ts">
import IconAddToCart from "../icons/IconAddToCart.vue";
import IconPlus from "../icons/IconPlus.vue";
import IconMinus from "../icons/IconMinus.vue";
import type { Product } from "@/type";
import { stores } from "@/store";

const props = defineProps<{
  product: Product;
}>();
function add() {
  stores.addToCart(props.product);
}
</script>
<template>
  <div
    class="h-96 w-full bg-container rounded-md shadow-md p-4 flex flex-col justify-between"
  >
    <img
      class="object-contain h-2/3 w-full rounded-md shadow-md bg-white"
      :src="product.image"
      :alt="product.title"
    />
    <div class="flex items-center justify-between">
      <h1 class="text-ellipsis overflow-hidden truncate">
        {{ product.title }}
      </h1>
      <h1 class="font-bold">${{ product.price }}</h1>
    </div>
    <h3 class="text-sm text-gray-500 capitalize">{{ product.category }}</h3>
    <el-button
      class="transition-all duration-1000"
      v-if="stores.getQty(product) === 0"
      @click="add"
      size="large"
      round
      type="primary"
    >
      <span class="mr-4"><IconAddToCart /></span>Add Item
    </el-button>
    <div v-else class="flex items-center justify-between gap-2">
      <el-button
        class="w-1/2"
        @click="stores.removeItemInCart(product)"
        round
        type="danger"
        size="large"
        plain
      >
        Remove
      </el-button>
      <div
        class="flex items-center gap-4 bg-blue-300 p-1 rounded-full px-2 w-1/2 justify-between"
      >
        <el-button
          @click="stores.minusItemInCart(product)"
          circle
          type="primary"
          ><IconMinus
        /></el-button>
        <h4>{{ stores.getQty(product) }}</h4>
        <el-button @click="stores.plusItemInCart(product)" circle type="primary"
          ><IconPlus
        /></el-button>
      </div>
    </div>
  </div>
</template>
