<script setup lang="ts">
import { stores } from "@/store";
import type { Product } from "@/type";
import IconPlus from "@/components/icons/IconPlus.vue";
import IconMinus from "@/components/icons/IconMinus.vue";
import { useSound } from "@vueuse/sound";
import plus from "@/assets/plus.mp3";
import minus from "@/assets/minus.mp3";
const plusSound = useSound(plus);
const minusSound = useSound(minus);

const increseQty = (product: Product) => {
  stores.plusItemInCart(product);
  plusSound.play();
};
const decreseQty = (product: Product) => {
  stores.minusItemInCart(product);
  minusSound.play();
};
const props = defineProps<{
  product: Product;
}>();
</script>
<template>
  <div
    class="flex items-center gap-4 bg-blue-200 p-1 rounded-full px-1 w-36 justify-between"
  >
    <el-button @click="decreseQty(product)" circle type="primary"
      ><IconMinus
    /></el-button>
    <h4>{{ stores.getQty(product) }}</h4>
    <el-button @click="increseQty(product)" circle type="primary"
      ><IconPlus
    /></el-button>
  </div>
</template>
