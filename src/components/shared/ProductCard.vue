<script setup lang="ts">
import { ref } from "vue";
import IconAddToCart from "../icons/IconAddToCart.vue";
const props = defineProps({
  qty: String,
  name: String,
  category: String,
  price: Number,
  img: String,
});
let qty = ref(parseInt(props.qty!) || 0);
</script>
<template>
  <div
    class="h-96 w-full bg-container rounded-md shadow-md p-4 flex flex-col justify-between"
  >
    <img
      class="object-contain h-2/3 w-full rounded-md shadow-md bg-white"
      :src="img"
      :alt="name"
    />
    <div class="flex items-center justify-between">
      <h1 class="text-ellipsis overflow-hidden truncate">{{ name }}</h1>
      <h1 class="font-bold">${{ price }}</h1>
    </div>
    <h3 class="text-sm text-gray-500 capitalize">{{ category }}</h3>
    <button
      v-if="qty == 0"
      class="bg-blue-500 hover:bg-blue-600 p-2 text-white rounded-full flex items-center justify-center gap-4"
    >
      <span><IconAddToCart /></span>Add Item
    </button>
  </div>
</template>
