<script setup lang="ts">
import { stores } from "@/store";
import type { Product } from "@/type";
import IconPlus from "@/components/icons/IconPlus.vue";
import IconMinus from "@/components/icons/IconMinus.vue";

const props = defineProps<{
  product: Product;
}>();
</script>
<template>
  <div
    class="flex items-center gap-4 bg-blue-200 p-1 rounded-full px-1 w-36 justify-between"
  >
    <el-button @click="stores.minusItemInCart(product)" circle type="primary"
      ><IconMinus
    /></el-button>
    <h4>{{ stores.getQty(product) }}</h4>
    <el-button @click="stores.plusItemInCart(product)" circle type="primary"
      ><IconPlus
    /></el-button>
  </div>
</template>
