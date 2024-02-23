<script setup lang="ts">
import type { Cart, Product } from "@/type";
import IconTrash from "@/components/icons/IconTrash.vue";
import QtyButton from "./QtyButton.vue";
import { stores } from "@/store";
import { ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { useSound } from "@vueuse/sound";
import removeSfx from "@/assets/trash.mp3";
const soundRef = ref(stores.volume / 100);
const removeSound = useSound(removeSfx, { volume: soundRef });

const remove = (product: Product) => {
  stores.removeItemInCart(product);
  soundRef.value = stores.volume / 100;
  removeSound.play();
};

const props = defineProps<{
  cart: Cart;
}>();

const open = (product: Product) => {
  if (stores.getQty(product) > 1) {
    ElMessageBox.confirm(
      "Are you sure you want to remove this item?",
      "Confirmation",
      {
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        type: "warning",
      }
    )
      .then(() => {
        remove(product);
        ElMessage({
          type: "success",
          message: "Remove completed",
        });
      })
      .catch(() => {
        ElMessage({
          type: "info",
          message: "Remove canceled",
        });
      });
  } else {
    remove(product);
  }
};
</script>
<template>
  <!--  -->
  <div
    class="flex gap-4 bg-gray-200 rounded-lg p-4 items-center justify-between"
  >
    <div class="flex gap-4 items-center">
      <div class="w-14 h-14">
        <img
          :src="cart.product.image"
          class="rounded-md w-14 h-14 object-contain bg-white p-1"
          alt=""
        />
      </div>
      <div>
        <h1 class="truncate text-ellipsis overflow-hidden w-40">
          {{ cart.product.title }}
        </h1>
        <h1 class="text-sm text-gray-500">
          <span>${{ cart.product.price }}</span
          ><span> x </span>{{ cart.qty }}
        </h1>
      </div>
    </div>
    <QtyButton :product="cart.product" />
    <button @click="open(cart.product)" class="text-xl text-red-500">
      <IconTrash />
    </button>
  </div>
</template>
