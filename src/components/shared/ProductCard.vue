<script setup lang="ts">
import IconAddToCart from "../icons/IconAddToCart.vue";
import type { Product } from "@/type";
import { stores } from "@/store";
import QtyButton from "./QtyButton.vue";
import { useSound } from "@vueuse/sound";
import addSfx from "@/assets/add.mp3";
import removeSfx from "@/assets/trash.mp3";
const addSound = useSound(addSfx);
const removeSound = useSound(removeSfx);
const props = defineProps<{
  product: Product;
}>();
function add() {
  stores.addToCart(props.product);
  addSound.play();
}
function remove() {
  stores.removeItemInCart(props.product);
  removeSound.play();
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

    <div class="flex items-center justify-between gap-2" v-else>
      <el-button
        class="w-1/2"
        @click="remove"
        round
        type="danger"
        size="large"
        plain
      >
        Remove
      </el-button>
      <QtyButton :product="product" />
    </div>
  </div>
</template>
