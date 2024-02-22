<script setup lang="ts">
import { stores } from "@/store";
import type { Product } from "@/type";
import IconPlus from "@/components/icons/IconPlus.vue";
import IconMinus from "@/components/icons/IconMinus.vue";
import { useSound } from "@vueuse/sound";
import plus from "@/assets/plus.mp3";
import minus from "@/assets/minus.mp3";
import { ref } from "vue";
const volumeRef = ref(stores.volume / 100);
const plusSound = useSound(plus, { volume: volumeRef });
const minusSound = useSound(minus, { volume: volumeRef });

const increseQty = (product: Product) => {
  stores.plusItemInCart(product);
  volumeRef.value = stores.volume / 100;
  plusSound.play();
};
const decreseQty = (product: Product) => {
  stores.minusItemInCart(product);
  volumeRef.value = stores.volume / 100;
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
