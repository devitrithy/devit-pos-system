<script setup lang="ts">
import axios from "axios";
import { type Ref, ref } from "vue";
import ProductCard from "./shared/ProductCard.vue";
import { stores } from "../store";
import IconLoading from "./icons/IconLoading.vue";
import type { Product } from "@/type";

let loading: Ref<boolean> = ref(false);
async function getProduct() {
  loading.value = true;
  await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      let searchItem: Product[] = res.data.map((product: Product) => ({
        ...product,
        searchTerm: `${product.title} ${product.description} ${product.id} ${product.price}`,
      }));
      stores.products = searchItem;
      stores.productFilter = searchItem;

      loading.value = false;
    })
    .catch((err) => {
      loading.value = false;
    });
}
getProduct();
</script>
<template>
  <main
    v-if="loading === false"
    class="w-full grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4"
  >
    <ProductCard
      v-for="product in stores.productFilter"
      :key="product.id"
      :product="product"
    />
  </main>
  <!-- <main
    v-else
    class="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4"
  > -->
  <main v-else class="w-full flex items-center justify-center">
    <IconLoading class="text-9xl text-gray-600" />
  </main>
</template>
